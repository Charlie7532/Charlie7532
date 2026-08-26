import type { Field } from 'payload'

export const testimonialsFields: Field[] = [
  {
    name: 'quote',
    label: 'Quote',
    type: 'textarea',
    required: true,
    localized: true,
    admin: {
      description: 'The testimonial quote text',
    },
  },
  {
    name: 'authorName',
    label: 'Name',
    type: 'text',
    required: true,
    localized: true,
    admin: {
      description: 'Author full name',
    },
  },
  {
    name: 'authorRole',
    label: 'Role / Title',
    type: 'text',
    localized: true,
    admin: {
      description: 'Job title or role (optional)',
    },
  },
  {
    name: 'authorCompany',
    label: 'Company',
    type: 'text',
    localized: true,
    admin: {
      description: 'Company or organization name (optional)',
    },
  },
  {
    name: 'authorImage',
    label: 'Avatar',
    type: 'upload',
    relationTo: 'media',
    admin: {
      description: 'Author profile picture (optional)',
    },
  },
  {
    name: 'rating',
    label: 'Star Rating',
    type: 'select',
    defaultValue: '5',
    admin: {
      description: 'Star rating for the testimonial (used by Testimonial4 block)',
    },
    options: [
      { label: '5 Stars', value: '5' },
      { label: '4.5 Stars', value: '4.5' },
      { label: '4 Stars', value: '4' },
      { label: '3.5 Stars', value: '3.5' },
      { label: '3 Stars', value: '3' },
    ],
  },
]