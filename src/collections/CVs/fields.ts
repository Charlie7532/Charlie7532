import type { Field } from 'payload'

import { slugField } from '@/fields/slug'

export const cvsFields: Field[] = [
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Content',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
            label: 'CV Name / Title',
            admin: {
              description: 'e.g. "Main CV — Full Stack Developer"',
            },
          },
          {
            name: 'summary',
            type: 'textarea',
            label: 'Professional Summary',
            admin: {
              description: 'Short headline or professional summary that appears at the top of the CV',
            },
          },
        ],
      },
      {
        label: 'Experience',
        fields: [
          {
            name: 'experiences',
            type: 'array',
            label: 'Work Experiences',
            admin: {
              description: 'Each position / role you want on this CV',
            },
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'title',
                    type: 'text',
                    required: true,
                    label: 'Role Title',
                    admin: { width: '50%' },
                  },
                  {
                    name: 'company',
                    type: 'text',
                    required: true,
                    label: 'Company',
                    admin: { width: '50%' },
                  },
                ],
              },
              {
                name: 'location',
                type: 'text',
                label: 'Location',
                admin: {
                  placeholder: 'e.g. Remote / Medellín',
                },
              },
              {
                type: 'row',
                fields: [
                  {
                    name: 'startDate',
                    type: 'date',
                    required: true,
                    label: 'Start Date',
                    admin: {
                      width: '50%',
                      date: { pickerAppearance: 'dayOnly' },
                    },
                  },
                  {
                    name: 'endDate',
                    type: 'date',
                    label: 'End Date',
                    admin: {
                      width: '50%',
                      date: { pickerAppearance: 'dayOnly' },
                      description: 'Leave empty if this is your current role',
                    },
                  },
                ],
              },
              {
                name: 'employmentType',
                type: 'select',
                label: 'Employment Type',
                defaultValue: 'full-time',
                options: [
                  { label: 'Full-Time', value: 'full-time' },
                  { label: 'Contract', value: 'contract' },
                  { label: 'Freelance / Project', value: 'freelance' },
                  { label: 'Internship', value: 'internship' },
                ],
              },
              {
                name: 'description',
                type: 'textarea',
                label: 'Your Description',
                admin: {
                  description: 'Your own description of this role — the source of truth used when tailoring CVs',
                },
              },
              {
                name: 'highlights',
                type: 'array',
                label: 'Key Achievements / Highlights',
                fields: [
                  {
                    name: 'highlight',
                    type: 'text',
                    label: 'Highlight',
                  },
                ],
              },
              {
                name: 'technologies',
                type: 'relationship',
                label: 'Technologies Used',
                relationTo: 'technologies',
                hasMany: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'isDefault',
    type: 'checkbox',
    label: 'Use as Default CV',
    defaultValue: false,
    admin: {
      position: 'sidebar',
      description: 'Mark this CV as the source of truth for new job applications',
    },
  },
  ...slugField('title', {
    slugOverrides: {
      admin: {
        description: 'Used for QR tracking URLs — e.g. /cv/{slug}',
      },
    },
  }),
]