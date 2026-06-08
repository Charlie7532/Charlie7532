import { handleAfterChangeHook, handleAfterDeleteHook } from '@/shared/handlers'
import { NextCacheRevalidator } from '@/shared/infrastructure/next/NextCacheRevalidator'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const revalidateProjectAdapter = handleAfterChangeHook({
    name: 'Projects',
    operation: 'all',
    handler: async ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
            const cache = new NextCacheRevalidator()
            cache.revalidateTag('projects')
            if (doc?.slug) {
                cache.revalidatePath(`/projects/${doc.slug}`)
            }
            payload.logger.info(`[Projects] Revalidated: ${doc?.slug}`)
        }
        return doc
    },
})

const revalidateDeleteAdapter = handleAfterDeleteHook({
    name: 'Projects',
    handler: async ({ doc, req: { context } }) => {
        if (!context.disableRevalidate) {
            const cache = new NextCacheRevalidator()
            cache.revalidateTag('projects')
            if (doc?.slug) {
                cache.revalidatePath(`/projects/${doc.slug}`)
            }
        }
        return doc
    },
})

export const projectsLifecycle = {
    afterChange: [revalidateProjectAdapter],
    afterDelete: [revalidateDeleteAdapter],
}
