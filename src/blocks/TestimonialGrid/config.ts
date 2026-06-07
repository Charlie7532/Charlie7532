import type { Block } from 'payload'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const TestimonialGrid: Block = {
    slug: 'testimonialGrid',
    interfaceName: 'TestimonialGridBlock',
    imageURL: '/assets/blocks/testimonial-grid-block.svg',
    imageAltText: 'A grid of testimonial cards with quotes and author information',
    labels: {
        singular: 'Testimonial Grid',
        plural: 'Testimonial Grids',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Header',
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    localized: true,
                    admin: {
                        description: 'Section title (optional)',
                    },
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                    localized: true,
                    admin: {
                        description: 'Section description (optional)',
                    },
                },
            ],
        },
        {
            name: 'testimonials',
            type: 'array',
            label: 'Testimonials',
            minRows: 1,
            maxRows: 6,
            required: true,
            admin: {
                description: 'Add 3-6 testimonials for optimal grid layout',
            },
            fields: [
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
            ],
        },
        {
            type: 'collapsible',
            label: 'Design',
            admin: { initCollapsed: true },
            fields: [
                {
                    type: 'row',
                    fields: [spacingPreset(), backgroundTheme(), contentAlignment()],
                },
            ],
        },
    ],
}
