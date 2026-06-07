import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { createLivePreview, createPreviewURL } from '../../utilities/createPreview'
import { postsFields } from './fields'
import { postsLifecycle } from './lifecycle'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
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
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    group: 'Website',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: createLivePreview('posts'),
    preview: createPreviewURL('posts'),
    useAsTitle: 'title',
  },
  fields: postsFields,
  hooks: postsLifecycle,
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
