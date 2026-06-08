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
        defaultColumns: ['logo', 'name', 'category', 'featured', 'updatedAt'],
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
            name: 'category',
            type: 'select',
            label: 'Category',
            options: [
                // Software
                { label: 'Frontend Framework', value: 'frontend-framework' },
                { label: 'Backend / Runtime', value: 'backend-runtime' },
                { label: 'Programming Language', value: 'language' },
                { label: 'Database', value: 'database' },
                { label: 'Cloud & Infrastructure', value: 'cloud' },
                { label: 'Web Services & CDN', value: 'web-services' },
                { label: 'IDE & Dev Tools', value: 'dev-tools' },
                { label: 'Scripting & Automation', value: 'scripting' },
                // Design
                { label: 'UI/UX Design', value: 'ui-ux' },
                { label: 'Graphic Design', value: 'graphic-design' },
                { label: 'CAD / 3D Modeling', value: 'cad' },
                // Electronics & Embedded
                { label: 'Microcontroller', value: 'microcontroller' },
                { label: 'Single-Board Computer', value: 'sbc' },
                { label: 'Embedded Development', value: 'embedded' },
                { label: 'Electronics Design (PCB)', value: 'electronics-design' },
                { label: 'IoT Platform', value: 'iot' },
                { label: 'Communication Protocol', value: 'protocol' },
                { label: 'Wireless Communication', value: 'wireless' },
                // Manufacturing
                { label: '3D Printing', value: '3d-printing' },
                { label: 'CNC & Machining', value: 'cnc' },
                { label: 'Manufacturing Process', value: 'manufacturing' },
                { label: 'Material', value: 'material' },
                // Other
                { label: 'Other', value: 'other' },
            ],
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
