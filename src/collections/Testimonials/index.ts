import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { testimonialsFields } from './fields'
import { testimonialsLifecycle } from './lifecycle'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Website',
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'authorRole', 'authorCompany', 'createdAt'],
  },
  fields: testimonialsFields,
  hooks: testimonialsLifecycle,
}