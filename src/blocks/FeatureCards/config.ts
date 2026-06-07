import type { Block } from 'payload';

export const FeatureCardsBlock: Block = {
    slug: 'featureCards',
    interfaceName: 'FeatureCardsBlock',
    imageURL: '/assets/blocks/feature-cards-block.svg',
    imageAltText: 'Feature cards with images in a grid layout',
    labels: {
        singular: 'Feature Cards',
        plural: 'Feature Cards',
    },
    fields: [
        {
            name: 'eyebrow',
            label: 'Eyebrow',
            type: 'text',
            admin: {
                description: 'Small text above the title',
            },
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            admin: {
                description: 'Optional description below the title',
            },
        },
        {
            name: 'features',
            type: 'array',
            label: 'Features',
            minRows: 1,
            maxRows: 4,
            required: true,
            fields: [
                {
                    name: 'image',
                    label: 'Image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Description',
                },
            ],
        },
    ],
};
