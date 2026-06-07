import { link } from '@/fields/link'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'
import type { Block } from 'payload'

export const TextSection: Block = {
    slug: 'textSection',
    interfaceName: 'TextSectionBlock',
    imageURL: '/assets/blocks/text-section-block.svg',
    imageAltText: 'A simple text section with optional eyebrow, title, description and CTA',
    fields: [
        {
            type: 'collapsible',
            label: 'Text Content',
            admin: {
                initCollapsed: false,
            },
            fields: [
                {
                    name: 'eyebrow',
                    label: 'Eyebrow',
                    type: 'text',
                    localized: true,
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    required: true,
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
                    },
                }),
            ],
        },
        {
            type: 'collapsible',
            label: 'Layout',
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'textAlignment',
                    label: 'Text Alignment',
                    type: 'select',
                    options: [
                        { label: 'Start', value: 'start' },
                        { label: 'Center', value: 'center' },
                        { label: 'End', value: 'end' },
                    ],
                    defaultValue: 'center',
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
