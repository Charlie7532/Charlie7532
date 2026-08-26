import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const Technologies: CollectionConfig<'technologies'> = {
    slug: 'technologies',
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    admin: {
        group: 'Portfolio',
        defaultColumns: ['logo', 'name', 'techCategories', 'featured', 'updatedAt'],
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
            admin: {
                description: 'Brief intro shown on the technology page and search results',
            },
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            label: 'Logo / Icon',
        },
        {
            name: 'logoDark',
            type: 'upload',
            relationTo: 'media',
            label: 'Logo / Icon (Dark Mode)',
            admin: {
                description: 'Optional alternate logo for dark backgrounds',
            },
        },
        {
            name: 'website',
            type: 'text',
            label: 'Website URL',
            admin: { placeholder: 'https://' },
        },
        {
            name: 'techCategories',
            type: 'relationship',
            relationTo: 'tech-categories',
            hasMany: true,
            label: 'Tech Categories',
            admin: {
                description:
                    'Assign one or more categories. On the landing page, the tech will appear under each selected category.',
            },
        },
        {
            name: 'featured',
            type: 'checkbox',
            label: 'Show in logo carousel',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Include in featured tech stack carousels',
            },
        },
    ],
}
