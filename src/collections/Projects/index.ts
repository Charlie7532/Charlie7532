import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { createLivePreview, createPreviewURL } from '../../utilities/createPreview'
import { projectsFields } from './fields'
import { projectsLifecycle } from './lifecycle'

export const Projects: CollectionConfig<'projects'> = {
    slug: 'projects',
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticatedOrPublished,
        update: authenticated,
    },
    defaultPopulate: {
        title: true,
        slug: true,
        categories: true,
        heroImage: true,
        summary: true,
        featured: true,
        clients: true,
        technologies: true,
        meta: {
            image: true,
            description: true,
        },
    },
    admin: {
        group: 'Portfolio',
        defaultColumns: ['title', 'clients', 'featured', 'completedAt', 'slug'],
        livePreview: createLivePreview('projects'),
        preview: createPreviewURL('projects'),
        useAsTitle: 'title',
    },
    fields: projectsFields,
    hooks: projectsLifecycle,
    versions: {
        drafts: {
            autosave: { interval: 100 },
            schedulePublish: true,
        },
        maxPerDoc: 50,
    },
}
