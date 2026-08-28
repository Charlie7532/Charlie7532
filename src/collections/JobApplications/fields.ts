import type { Field } from 'payload'

import { slugField } from '@/fields/slug'

export const jobApplicationsFields: Field[] = [
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Job Details',
        fields: [
          {
            type: 'row',
            fields: [
              {
                name: 'jobTitle',
                type: 'text',
                required: true,
                label: 'Job Title',
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
            name: 'jobUrl',
            type: 'text',
            label: 'Job Posting URL',
            admin: {
              placeholder: 'https://linkedin.com/jobs/view/...',
            },
          },
          {
            name: 'source',
            type: 'select',
            label: 'How was this job added?',
            defaultValue: 'manual',
            options: [
              { label: 'Manual — Paste Description', value: 'manual' },
              { label: 'LinkedIn — URL Import', value: 'linkedin_url' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            name: 'rawJobDescription',
            type: 'textarea',
            label: 'Raw Job Description',
            admin: {
              description: 'Full job posting text (pasted or auto-extracted)',
            },
          },
        ],
      },
      {
        label: 'CV Tailoring',
        fields: [
          {
            name: 'parentCv',
            type: 'relationship',
            label: 'Base CV Used',
            relationTo: 'cvs',
            admin: {
              description: 'Which CV was used as the source of truth for this tailored version',
            },
          },
          {
            name: 'extractedRequirements',
            type: 'array',
            label: 'Extracted Requirements',
            fields: [
              {
                name: 'requirement',
                type: 'text',
                label: 'Requirement',
              },
            ],
            admin: {
              description: 'Key requirements extracted from the job posting',
            },
          },
          {
            name: 'extractedResponsibilities',
            type: 'array',
            label: 'Extracted Responsibilities',
            fields: [
              {
                name: 'responsibility',
                type: 'text',
                label: 'Responsibility',
              },
            ],
            admin: {
              description: 'Key responsibilities extracted from the job posting',
            },
          },
          {
            name: 'extractedNiceToHave',
            type: 'array',
            label: 'Nice-to-Have Skills',
            fields: [
              {
                name: 'skill',
                type: 'text',
                label: 'Skill',
              },
            ],
          },
          {
            name: 'selectedExperiences',
            type: 'array',
            label: 'Selected Experiences',
            admin: {
              description: 'Which experiences from the base CV were selected for this tailored version (store the experience array IDs)',
            },
            fields: [
              {
                name: 'experienceId',
                type: 'text',
                label: 'Experience ID',
              },
            ],
          },
          {
            name: 'tailoredSummary',
            type: 'textarea',
            label: 'Tailored Professional Summary',
            admin: {
              description: 'Professional summary rewritten for this specific job',
            },
          },
          {
            name: 'tailoredDescription',
            type: 'json',
            label: 'Tailored CV Content (JSON)',
            admin: {
              description:
                'Structured CV content tailored to this job — can hold sections, rewritten descriptions, etc. Easier to export to PDF than rich text.',
            },
          },
          {
            name: 'tailoredHighlights',
            type: 'array',
            label: 'Tailored Highlights',
            fields: [
              {
                name: 'highlight',
                type: 'text',
                label: 'Highlight',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'status',
    type: 'select',
    label: 'Application Status',
    defaultValue: 'draft',
    options: [
      { label: 'Draft', value: 'draft' },
      { label: 'Ready to Submit', value: 'ready' },
      { label: 'Submitted', value: 'submitted' },
    ],
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'notes',
    type: 'textarea',
    label: 'Private Notes',
    admin: {
      position: 'sidebar',
      description: 'Your personal notes about this application',
    },
  },
  ...slugField('jobTitle', {
    slugOverrides: {
      admin: {
        description:
          'Auto-generated from job title — used for tracking (e.g. /apply/{slug})',
      },
    },
  }),
]