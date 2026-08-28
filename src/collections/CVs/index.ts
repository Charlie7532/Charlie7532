import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { cvsFields } from './fields'
import { cvsLifecycle } from './lifecycle'

export const CVs: CollectionConfig = {
  slug: 'cvs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'CV Builder',
    defaultColumns: ['title', 'slug', 'isDefault', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: cvsFields,
  hooks: cvsLifecycle,
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