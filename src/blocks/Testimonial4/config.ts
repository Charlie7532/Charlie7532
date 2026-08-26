import type { Block } from 'payload'
import { link } from '@/fields/link'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const Testimonial4: Block = {
    slug: 'testimonial4',
    interfaceName: 'Testimonial4Type',
    imageURL: '/assets/blocks/testimonial4-block.svg',
    imageAltText: 'A scrollable grid of testimonial cards with ratings and author images',
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
            type: 'relationship',
            relationTo: 'testimonials',
            hasMany: true,
            label: 'Testimonials',
            minRows: 1,
            maxRows: 8,
            required: true,
            admin: {
                description: 'Select testimonial cards with ratings and author information',
            },
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
