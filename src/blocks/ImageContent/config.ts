import { link } from '@/fields/link';
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign';
import type { Block } from 'payload';

export const ImageContentBlock: Block = {
    slug: 'imageContent',
    interfaceName: 'ImageContentType',
    imageURL: '/assets/blocks/image-content-block.svg',
    imageAltText: 'A two-column layout with text content and an image',
    labels: {
        singular: 'Image Content',
        plural: 'Image Content Blocks',
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Text Content',
            admin: { initCollapsed: true },
            fields: [
                {
                    name: 'eyebrow',
                    type: 'text',
                    localized: true,
                    admin: {
                        description: 'Small text above the title',
                    },
                },
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
                },
            ],
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            type: 'collapsible',
            label: 'CTA (Optional)',
            admin: { initCollapsed: true },
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
            admin: { initCollapsed: true },
            fields: [
                {
                    name: 'textPlacement',
                    label: 'Text Placement',
                    type: 'select',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                    ],
                    defaultValue: 'left',
                    admin: {
                        description: 'Position of text content relative to image',
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
