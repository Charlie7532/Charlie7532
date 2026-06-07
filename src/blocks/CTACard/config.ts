import { link } from '@/fields/link'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'
import type { Block } from 'payload'

export const CTACard: Block = {
    slug: 'ctaCard',
    interfaceName: 'CtaCardBlock',
    imageURL: '/assets/blocks/cta-card-block.svg',
    imageAltText: 'A stylized CTA card with border, title, description and action buttons',
    labels: {
        singular: 'CTA Card',
        plural: 'CTA Cards',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Text Content',
            admin: {
                initCollapsed: false,
            },
            fields: [
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
            label: 'Call to Action Buttons',
            admin: {
                initCollapsed: true,
            },
            fields: [
                link({
                    overrides: {
                        name: 'ctaPrimary',
                        label: 'Primary CTA (Optional)',
                    },
                }),
                link({
                    overrides: {
                        name: 'ctaSecondary',
                        label: 'Secondary CTA (Optional)',
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
                    name: 'variant',
                    label: 'Card Background Variant',
                    type: 'select',
                    options: [
                        { label: 'Default', value: 'default' },
                        { label: 'Muted', value: 'muted' },
                        { label: 'Card', value: 'card' },
                    ],
                    defaultValue: 'muted',
                    admin: {
                        description: 'Background style for the card container',
                    },
                },
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
