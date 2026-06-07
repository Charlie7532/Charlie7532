import type { Block } from 'payload'

export const EmbedCode: Block = {
    slug: 'embedCode',
    interfaceName: 'EmbedCodeBlock',
    labels: {
        singular: 'Embed Code',
        plural: 'Embed Code Blocks',
    },
    fields: [
        {
            name: 'embedCode',
            label: 'Embed Code',
            type: 'textarea',
            required: true,
            admin: {
                rows: 10,
                description:
                    'Paste trusted HTML / iframe / script embed code here (for example Dubsado, Calendly, or other form embeds).',
            },
        },
        {
            name: 'widthMode',
            label: 'Width setting',
            type: 'select',
            defaultValue: 'content',
            options: [
                {
                    label: 'Fit content width',
                    value: 'content',
                },
                {
                    label: 'Full screen width',
                    value: 'full',
                },
                {
                    label: 'Custom width (px)',
                    value: 'custom',
                },
            ],
        },
        {
            name: 'customWidth',
            label: 'Custom width in pixels',
            type: 'number',
            min: 200,
            admin: {
                step: 10,
                description: 'Only used when “Custom width (px)” is selected.',
                condition: (_, siblingData) => siblingData?.widthMode === 'custom',
            },
        },
    ],
}
