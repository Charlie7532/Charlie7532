import type { Block } from 'payload'
import { link } from '@/fields/link'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const Pricing1: Block = {
    slug: 'pricing1',
    interfaceName: 'Pricing1Block',
    imageURL: '/assets/blocks/pricing1-block.svg',
    imageAltText: 'Pricing cards with features list and CTA buttons',
    labels: {
        singular: 'Pricing 1',
        plural: 'Pricing 1',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Header',
            admin: { initCollapsed: true },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    localized: true,
                    admin: {
                        description: 'Optional description below the title',
                    },
                },
            ],
        },
        {
            name: 'plans',
            label: 'Pricing Plans',
            type: 'array',
            minRows: 1,
            maxRows: 4,
            required: true,
            admin: {
                description: 'Add 1–4 pricing plans',
            },
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                    localized: true,
                    admin: {
                        description: 'Plan name, e.g. "Starter", "Pro"',
                    },
                },
                {
                    name: 'price',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'Price display string, e.g. "$29", "Free"',
                    },
                },
                {
                    name: 'interval',
                    type: 'text',
                    localized: true,
                    admin: {
                        description: 'e.g. "/month", "/year", "one-time"',
                    },
                },
                {
                    name: 'description',
                    type: 'textarea',
                    localized: true,
                    admin: {
                        description: 'Short plan description (optional)',
                    },
                },
                {
                    name: 'features',
                    label: 'Features',
                    type: 'array',
                    minRows: 1,
                    maxRows: 10,
                    required: true,
                    fields: [
                        {
                            name: 'feature',
                            type: 'text',
                            required: true,
                            localized: true,
                        },
                    ],
                },
                {
                    name: 'highlighted',
                    type: 'checkbox',
                    label: 'Highlight this plan (Popular)',
                    defaultValue: false,
                },
                {
                    type: 'collapsible',
                    label: 'Call to Action',
                    admin: { initCollapsed: true },
                    fields: [
                        link({
                            overrides: {
                                name: 'cta',
                                label: 'Plan CTA',
                                required: false,
                            },
                        }),
                    ],
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
