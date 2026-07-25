import type { Block } from 'payload'

export const ProjectTechStackBlock: Block = {
    slug: 'projectTechStack',
    interfaceName: 'ProjectTechStackBlock',
    labels: {
        singular: 'Project Tech Stack',
        plural: 'Project Tech Stacks',
    },
    fields: [
        {
            name: 'groupByCategory',
            type: 'checkbox',
            label: 'Group by category',
            defaultValue: true,
            admin: {
                description: 'When unchecked, all technologies are shown in a single flat grid.',
            },
        },
    ],
}
