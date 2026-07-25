import type { Block } from 'payload'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const Stats1: Block = {
    slug: 'stats1',
    interfaceName: 'Stats1Block',
    imageURL: '/assets/blocks/stats1-block.svg',
    imageAltText: 'Stats section with numeric highlights in a grid layout',
    labels: {
        singular: 'Stats Section',
        plural: 'Stats Sections',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Text Content',
            admin: { initCollapsed: true },
            fields: [
                {
                    name: 'eyebrow',
                    label: 'Eyebrow',
                    type: 'text',
                    localized: true,
                    admin: {
                        description: 'Small label above the title',
                    },
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    localized: true,
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                    localized: true,
                },
            ],
        },
        {
            name: 'stats',
            label: 'Stats',
            type: 'array',
            minRows: 1,
            maxRows: 6,
            fields: [
                {
                    name: 'value',
                    label: 'Value',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'e.g. "10K+", "99%", "$2M"',
                    },
                },
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                    required: true,
                    localized: true,
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
