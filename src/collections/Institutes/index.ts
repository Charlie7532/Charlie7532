import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const Institutes: CollectionConfig<'institutes'> = {
    slug: 'institutes',
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    admin: {
        group: 'Portfolio',
        defaultColumns: ['logo', 'name', 'type', 'featured', 'updatedAt'],
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
            name: 'type',
            type: 'select',
            label: 'Type',
            defaultValue: 'university',
            options: [
                { label: 'University', value: 'university' },
                { label: 'Certification Body', value: 'certification' },
                { label: 'Bootcamp / Course', value: 'bootcamp' },
                { label: 'Other', value: 'other' },
            ],
        },
        {
            name: 'credential',
            type: 'text',
            label: 'Degree / Credential',
            admin: { placeholder: 'e.g. B.Sc. Industrial Design' },
        },
        {
            name: 'featured',
            type: 'checkbox',
            label: 'Show in logo carousel',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Include this institute in logo carousels',
            },
        },
    ],
}
