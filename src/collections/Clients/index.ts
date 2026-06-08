import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const Clients: CollectionConfig<'clients'> = {
    slug: 'clients',
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    admin: {
        group: 'Portfolio',
        defaultColumns: ['logo', 'name', 'industry', 'featured', 'updatedAt'],
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            label: 'Logo',
        },
        {
            name: 'logoDark',
            type: 'upload',
            relationTo: 'media',
            label: 'Logo (Dark Mode)',
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
            name: 'industry',
            type: 'text',
            label: 'Industry',
            admin: { placeholder: 'e.g. SaaS, Healthcare, E-commerce' },
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Short Description',
        },
        {
            name: 'featured',
            type: 'checkbox',
            label: 'Show in logo carousel',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Include this client in the featured clients carousel block',
            },
        },
    ],
}
