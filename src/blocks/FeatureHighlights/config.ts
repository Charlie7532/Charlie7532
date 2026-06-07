import type { Block } from 'payload';
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign';

export const FeatureHighlightsBlock: Block = {
    slug: 'featureHighlights',
    interfaceName: 'FeatureHighlightsBlock',
    imageURL: '/assets/blocks/feature-highlights-block.svg',
    imageAltText: 'Feature highlights with checkmarks and optional image',
    labels: {
        singular: 'Feature Highlights',
        plural: 'Feature Highlights',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Badge',
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'badgeText',
                    label: 'Badge Text',
                    type: 'text',
                    admin: {
                        description: 'Optional badge text displayed above the title',
                    },
                    localized: true,
                },
            ],
        },
        {
            type: 'collapsible',
            label: 'Main Content',
            admin: {
                initCollapsed: true,
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
                    name: 'subtitle',
                    label: 'Subtitle',
                    type: 'textarea',
                    admin: {
                        description: 'Optional subtitle or description',
                    },
                    localized: true,
                },
            ],
        },
        {
            name: 'features',
            type: 'array',
            label: 'Feature List',
            minRows: 1,
            maxRows: 6,
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Feature Title',
                    required: true,
                    localized: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Feature Description',
                    admin: {
                        description: 'Optional detailed description of the feature',
                    },
                    localized: true,
                },
            ],
        },
        {
            type: 'collapsible',
            label: 'Media',
            admin: {
                initCollapsed: true,
                description: 'Add an optional image to display alongside features',
            },
            fields: [
                {
                    name: 'image',
                    label: 'Image (Optional)',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        description:
                            'When an image is added, features will display in a 2-column layout. Without image, features will display in a 3-column grid.',
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
};
