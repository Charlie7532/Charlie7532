import type { Block } from 'payload'

export const TechStackBlock: Block = {
    slug: 'techStack',
    interfaceName: 'TechStackBlock',
    // imageURL: '/assets/blocks/tech-stack-block.svg',
    // imageAltText: 'Technology logos arranged in a grid with optional category groups',
    labels: {
        singular: 'Tech Stack',
        plural: 'Tech Stacks',
    },
    fields: [
        {
            name: 'sectionHeading',
            type: 'text',
            label: 'Section Heading',
            admin: {
                description: 'e.g. "Technologies Used"',
                placeholder: 'Technologies Used',
            },
        },
        {
            name: 'groups',
            type: 'array',
            label: 'Technology Groups',
            minRows: 1,
            maxRows: 8,
            required: true,
            admin: {
                description:
                    'Organise technologies into named groups (e.g. "Design", "Software"). Use a single group with no label for a flat list.',
            },
            fields: [
                {
                    name: 'groupLabel',
                    type: 'text',
                    label: 'Group Label',
                    admin: {
                        description: 'Optional category heading (e.g. "Design", "Software")',
                        placeholder: 'e.g. Design',
                    },
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Group Description',
                    admin: {
                        description:
                            'Optional introductory paragraph shown before the logos in this group',
                    },
                },
                {
                    name: 'technologies',
                    type: 'relationship',
                    label: 'Technologies',
                    relationTo: 'technologies',
                    hasMany: true,
                    required: true,
                },
            ],
        },
    ],
}
