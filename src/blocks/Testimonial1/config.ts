import type { Block } from 'payload'
import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign'

export const Testimonial1: Block = {
    slug: 'testimonial1',
    interfaceName: 'Testimonial1Block',
    imageURL: '/assets/blocks/testimonial1-block.svg',
    imageAltText: 'A testimonial card with quote, author info and avatar',
    labels: {
        singular: 'Testimonial Card',
        plural: 'Testimonial Cards',
    },
    fields: [
        {
            name: 'testimonial',
            type: 'relationship',
            relationTo: 'testimonials',
            label: 'Testimonial',
            required: true,
            admin: {
                description: 'Select a testimonial from the collection',
            },
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
}
