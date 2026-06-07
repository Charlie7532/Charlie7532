import type { Block } from 'payload'
import { link } from '@/fields/link'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const Testimonial3: Block = {
    slug: 'testimonial3',
    interfaceName: 'Testimonial3Type',
    imageURL: '/assets/blocks/testimonial3-block.svg',
    imageAltText: 'A testimonial carousel with header, quote cards and navigation',
    labels: {
        singular: 'Testimonial Carousel',
        plural: 'Testimonial Carousels',
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
                    name: 'eyebrow',
                    label: 'Eyebrow',
                    type: 'text',
                    localized: true,
                    admin: {
                        description: 'Small text above the title (optional)',
                    },
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    localized: true,
                    admin: {
                        description: 'Main heading for the testimonial section',
                    },
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                    localized: true,
                    admin: {
                        description: 'Descriptive text below the title (optional)',
                    },
                },
            ],
        },
        {
            type: 'collapsible',
            label: 'CTA (Optional)',
            admin: {
                initCollapsed: true,
            },
            fields: [
                link({
                    overrides: {
                        name: 'cta',
                        label: 'Call to Action',
                        admin: {
                            description: 'Optional button or link in the header section',
                        },
                    },
                }),
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
                description: 'Add testimonials that users can navigate through',
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
