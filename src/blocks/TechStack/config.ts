import type { Block } from 'payload'

export const TechStackBlock: Block = {
    slug: 'techStack',
    interfaceName: 'TechStackBlock',
    labels: {
        singular: 'Tech Stack',
        plural: 'Tech Stacks',
    },
    fields: [
        {
            name: 'source',
            type: 'select',
            label: 'Technology Source',
            defaultValue: 'manual',
            required: true,
            admin: {
                description: 'Choose technologies manually or inherit from the project.',
            },
            options: [
                { label: 'Manual Selection', value: 'manual' },
                { label: 'Project Technologies', value: 'project' },
            ],
        },
        {
            name: 'technologies',
            type: 'relationship',
            label: 'Technologies',
            relationTo: 'technologies',
            hasMany: true,
            admin: {
                condition: (_, siblingData) => siblingData?.source !== 'project',
            },
        },
        {
            name: 'groupByCategory',
            type: 'checkbox',
            label: 'Group by category',
            defaultValue: true,
            admin: {
                condition: (_, siblingData) => siblingData?.source === 'project',
                description: 'When unchecked, all technologies are shown in a single flat grid.',
            },
        },
    ],
}
