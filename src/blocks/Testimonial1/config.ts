import type { Block } from 'payload'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const Testimonial1: Block = {
    slug: 'testimonial1',
    interfaceName: 'Testimonial1Block',
    imageURL: '/assets/blocks/testimonial1-block.svg',
    imageAltText: 'A testimonial card with quote, author info and avatar',
    labels: {
        singular: 'Testimonial Card',
        plural: 'Testimonial Cards',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Quote',
            admin: {
                initCollapsed: false,
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
            ],
        },
        {
            type: 'collapsible',
            label: 'Author Information',
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'authorName',
                    label: 'Name',
                    type: 'text',
                    required: true,
                    localized: true,
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
