import { link } from '@/fields/link';
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign';
import type { Block } from 'payload';

export const CtaSection: Block = {
    slug: 'ctaSection',
    interfaceName: 'CtaSectionBlock',
    imageURL: '/assets/blocks/cta-section-block.svg',
    imageAltText: 'A CTA section with title, description and action buttons',
    labels: {
        singular: 'CTA Section',
        plural: 'CTA Sections',
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
};
