import { handleAfterChangeHook, handleAfterDeleteHook, handleAfterReadHook } from '@/shared/handlers'
import { NextCacheRevalidator } from '@/shared/infrastructure/next/NextCacheRevalidator'
import { PayloadClientRepository } from './infrastructure/payload/PayloadClientRepository'
import { PayloadTechnologyRepository } from './infrastructure/payload/PayloadTechnologyRepository'
import { populatePublicClients } from './application/useCases/populatePublicClients'
import { populatePublicTechnologies } from './application/useCases/populatePublicTechnologies'
import {
    revalidateProjectStateOnUpdate,
    revalidateProjectStateOnDelete
} from './application/useCases/revalidateProjectState'

const populateClientsAdapter = handleAfterReadHook({
    name: 'Projects',
    handler: async ({ doc, req: { payload } }) => {
        if (doc?.clients && doc?.clients?.length > 0) {
            const clientRepository = new PayloadClientRepository(payload)
            const populatedClients = await populatePublicClients(doc.clients, clientRepository)

            if (populatedClients.length > 0) {
                doc.populatedClients = populatedClients
            }
        }
        return doc
    },
})

const populateTechnologiesAdapter = handleAfterReadHook({
    name: 'Projects',
    handler: async ({ doc, req: { payload } }) => {
        if (doc?.technologies && doc?.technologies?.length > 0) {
            const technologyRepository = new PayloadTechnologyRepository(payload)
            const populatedTechnologies = await populatePublicTechnologies(doc.technologies, technologyRepository)

            if (populatedTechnologies.length > 0) {
                doc.populatedTechnologies = populatedTechnologies
            }
        }
        return doc
    },
})

const revalidateProjectAdapter = handleAfterChangeHook({
    name: 'Projects',
    operation: 'all',
    handler: async ({ doc, previousDoc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
            const cacheRevalidator = new NextCacheRevalidator()
            revalidateProjectStateOnUpdate(
                doc,
                previousDoc,
                cacheRevalidator,
                payload.logger
            )
        }
        return doc
    },
})

const revalidateDeleteAdapter = handleAfterDeleteHook({
    name: 'Projects',
    handler: async ({ doc, req: { context } }) => {
        if (!context.disableRevalidate) {
            const cacheRevalidator = new NextCacheRevalidator()
            revalidateProjectStateOnDelete(doc, cacheRevalidator)
        }
        return doc
    },
})

export const projectsLifecycle = {
    afterChange: [revalidateProjectAdapter],
    afterRead: [populateClientsAdapter, populateTechnologiesAdapter],
    afterDelete: [revalidateDeleteAdapter],
}
