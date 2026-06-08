import type { Block } from 'payload'

// Curated subset of Lucide icons covering common portfolio use cases
export const iconOptions = [
    // People & Communication
    { label: 'Users / Team', value: 'users' },
    { label: 'User', value: 'user' },
    { label: 'Message Circle', value: 'message-circle' },
    { label: 'Mail', value: 'mail' },
    { label: 'Phone', value: 'phone' },
    { label: 'Bell', value: 'bell' },
    // Business & Strategy
    { label: 'Target / Bullseye', value: 'target' },
    { label: 'Trending Up', value: 'trending-up' },
    { label: 'Bar Chart', value: 'bar-chart-2' },
    { label: 'Pie Chart', value: 'pie-chart' },
    { label: 'Bookmark', value: 'bookmark' },
    { label: 'Flag', value: 'flag' },
    { label: 'Star', value: 'star' },
    { label: 'Gift', value: 'gift' },
    { label: 'Tag', value: 'tag' },
    // Design & Creative
    { label: 'Pencil / Edit', value: 'pencil' },
    { label: 'Paintbrush', value: 'paintbrush' },
    { label: 'Layers', value: 'layers' },
    { label: 'Image', value: 'image' },
    { label: 'Camera', value: 'camera' },
    { label: 'Video', value: 'video' },
    // Technology
    { label: 'Laptop', value: 'laptop' },
    { label: 'Monitor / Screen', value: 'monitor' },
    { label: 'Smartphone', value: 'smartphone' },
    { label: 'CPU / Chip', value: 'cpu' },
    { label: 'Server', value: 'server' },
    { label: 'Database', value: 'database' },
    { label: 'Cloud', value: 'cloud' },
    { label: 'Wifi', value: 'wifi' },
    { label: 'Code', value: 'code' },
    { label: 'Globe', value: 'globe' },
    { label: 'Link', value: 'link' },
    { label: 'Search', value: 'search' },
    { label: 'Filter', value: 'filter' },
    { label: 'Settings / Gear', value: 'settings' },
    // Security & Trust
    { label: 'Shield', value: 'shield' },
    { label: 'Lock', value: 'lock' },
    { label: 'Key', value: 'key' },
    { label: 'Eye', value: 'eye' },
    // Productivity
    { label: 'Check Circle', value: 'check-circle-2' },
    { label: 'Calendar', value: 'calendar' },
    { label: 'Clock', value: 'clock' },
    { label: 'Map Pin', value: 'map-pin' },
    { label: 'Home', value: 'home' },
    { label: 'Folder', value: 'folder' },
    // Engineering & Manufacturing
    { label: 'Wrench / Tool', value: 'wrench' },
    { label: 'Scissors', value: 'scissors' },
    { label: 'Package / Box', value: 'package' },
    { label: 'Truck', value: 'truck' },
    { label: 'Zap / Lightning', value: 'zap' },
    { label: 'Droplet / Water', value: 'droplet' },
    { label: 'Thermometer', value: 'thermometer' },
    { label: 'Layout / Columns', value: 'layout-grid' },
    // Misc
    { label: 'Heart', value: 'heart' },
    { label: 'Play', value: 'play' },
    { label: 'Globe 2', value: 'globe-2' },
    { label: 'Award', value: 'award' },
    { label: 'Handshake', value: 'handshake' },
    { label: 'Lightbulb', value: 'lightbulb' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Sparkles', value: 'sparkles' },
]

export const IconGridBlock: Block = {
    slug: 'iconGrid',
    interfaceName: 'IconGridBlock',
    imageURL: '/assets/blocks/icon-grid-block.svg',
    imageAltText: 'Grid of icon cards with titles and descriptions',
    labels: {
        singular: 'Icon Grid',
        plural: 'Icon Grids',
    },
    fields: [
        {
            name: 'sectionHeading',
            type: 'text',
            label: 'Section Heading',
            admin: {
                description: 'Optional heading above the grid (e.g. "Operational Benefits")',
            },
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'columns',
                    type: 'select',
                    label: 'Columns',
                    defaultValue: '3',
                    admin: { width: '50%' },
                    options: [
                        { label: '2 columns', value: '2' },
                        { label: '3 columns', value: '3' },
                        { label: '4 columns', value: '4' },
                    ],
                },
                {
                    name: 'style',
                    type: 'select',
                    label: 'Icon Style',
                    defaultValue: 'boxed',
                    admin: { width: '50%' },
                    options: [
                        { label: 'Boxed (icon in filled square)', value: 'boxed' },
                        { label: 'Plain (outline icon)', value: 'plain' },
                    ],
                },
            ],
        },
        {
            name: 'items',
            type: 'array',
            label: 'Items',
            minRows: 1,
            maxRows: 12,
            required: true,
            fields: [
                {
                    name: 'icon',
                    type: 'select',
                    label: 'Icon',
                    required: true,
                    options: iconOptions,
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
}
