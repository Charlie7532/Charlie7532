import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { jobApplicationsFields } from './fields'
import { jobApplicationsLifecycle } from './lifecycle'

export const JobApplications: CollectionConfig = {
  slug: 'job-applications',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'CV Builder',
    defaultColumns: ['jobTitle', 'company', 'status', 'parentCv', 'updatedAt'],
    useAsTitle: 'jobTitle',
  },
  fields: jobApplicationsFields,
  hooks: jobApplicationsLifecycle,
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