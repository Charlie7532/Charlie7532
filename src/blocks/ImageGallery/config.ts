import type { Block } from 'payload'

export const ImageGalleryBlock: Block = {
    slug: 'imageGallery',
    interfaceName: 'ImageGalleryBlock',
    labels: {
        singular: 'Image Gallery',
        plural: 'Image Galleries',
    },
    fields: [
        {
            name: 'showBorder',
            type: 'checkbox',
            label: 'Show image borders',
            defaultValue: false,
            admin: {
                description: 'Add a subtle border around each image cell to emphasise the mosaic grid structure.',
            },
        },
        {
            name: 'images',
            type: 'array',
            label: 'Images',
            minRows: 1,
            maxRows: 24,
            required: true,
            admin: {
                description: 'Add images for this mosaic group. Use multiple Image Gallery blocks for separate visual sections.',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'caption',
                    type: 'text',
                    label: 'Caption',
                    localized: true,
                    admin: {
                        description: 'Optional caption shown in the lightbox',
                    },
                },
            ],
        },
    ],
}
