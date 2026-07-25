import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { createLivePreview, createPreviewURL } from '@/shared/infrastructure/payload/preview/createPreview'
import { pagesFields } from './fields'
import { pagesLifecycle } from './lifecycle'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    group: 'Website',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: createLivePreview('pages'),
    preview: createPreviewURL('pages'),
    useAsTitle: 'title',
  },
  fields: pagesFields,
  hooks: pagesLifecycle,
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}