import type { Block } from 'payload'

export const LogoCarousel: Block = {
    slug: 'logoCarousel',
    interfaceName: 'LogoCarouselBlock',
    labels: { singular: 'Logo Carousel', plural: 'Logo Carousels' },
    fields: [
        {
            name: 'heading',
            type: 'text',
            label: 'Heading',
            admin: {
                description: 'Optional label above the carousel (e.g. "Technologies I use")',
            },
        },
        {
            name: 'populateBy',
            type: 'select',
            label: 'Populate By',
            defaultValue: 'collection',
            options: [
                { label: 'All featured items from a collection', value: 'collection' },
                { label: 'Manual selection', value: 'selection' },
            ],
        },
        {
            name: 'collectionType',
            type: 'select',
            label: 'Collection',
            defaultValue: 'technologies',
            admin: {
                condition: (_, siblingData) => siblingData?.populateBy === 'collection',
                description: 'Pull all items marked as "featured" from this collection',
            },
            options: [
                { label: 'Clients', value: 'clients' },
                { label: 'Institutes / Schools', value: 'institutes' },
                { label: 'Technologies', value: 'technologies' },
            ],
        },
        {
            name: 'selectedItems',
            type: 'relationship',
            label: 'Selected Items',
            relationTo: ['clients', 'institutes', 'technologies'],
            hasMany: true,
            admin: {
                condition: (_, siblingData) => siblingData?.populateBy === 'selection',
                description: 'Pick individual logos to show',
            },
        },
        {
            name: 'limit',
            type: 'number',
            label: 'Max items to show',
            defaultValue: 12,
            min: 1,
            max: 50,
            admin: {
                condition: (_, siblingData) => siblingData?.populateBy === 'collection',
            },
        },
        {
            name: 'autoplay',
            type: 'checkbox',
            label: 'Autoplay',
            defaultValue: true,
        },
        {
            name: 'speed',
            type: 'number',
            label: 'Autoplay delay (ms)',
            defaultValue: 3000,
            min: 500,
            max: 10000,
            admin: {
                condition: (_, siblingData) => siblingData?.autoplay === true,
                description: 'Milliseconds between slides (default 3000)',
            },
        },
        {
            name: 'logoSize',
            type: 'select',
            label: 'Logo size',
            defaultValue: 'md',
            options: [
                { label: 'Small (32px)', value: 'sm' },
                { label: 'Medium (48px)', value: 'md' },
                { label: 'Large (64px)', value: 'lg' },
            ],
        },
        {
            name: 'grayscale',
            type: 'checkbox',
            label: 'Grayscale logos (color on hover)',
            defaultValue: true,
        },
    ],
}
