import { Field, slugField } from 'payload'

import {
    BlocksFeature,
    FixedToolbarFeature,
    HeadingFeature,
    HorizontalRuleFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { IconGridBlock } from '../../blocks/IconGrid/config'
import { TechStackBlock } from '../../blocks/TechStack/config'
import { TwoColumnTextImageBlock } from '../../blocks/TwoColumnTextImage/config'

import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const projectsFields: Field[] = [
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Content',
                fields: [
                    {
                        name: 'heroImage',
                        type: 'upload',
                        relationTo: 'media',
                        label: 'Hero / Cover Image',
                    },
                    {
                        name: 'summary',
                        type: 'textarea',
                        label: 'Short Summary',
                        admin: {
                            description: 'One or two sentences shown on project cards and the archive page.',
                        },
                    },
                    {
                        name: 'content',
                        type: 'richText',
                        label: 'Case Study Body',
                        editor: lexicalEditor({
                            features: ({ rootFeatures }) => [
                                ...rootFeatures,
                                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                                BlocksFeature({ blocks: [Banner, Code, MediaBlock, IconGridBlock, TechStackBlock, TwoColumnTextImageBlock] }),
                                FixedToolbarFeature(),
                                InlineToolbarFeature(),
                                HorizontalRuleFeature(),
                            ],
                        }),
                    },
                ],
            },
            {
                label: 'Details',
                fields: [
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'startDate',
                                type: 'date',
                                label: 'Start Date',
                                admin: {
                                    width: '50%',
                                    date: { pickerAppearance: 'dayOnly' },
                                    description: 'When did this project start?',
                                },
                            },
                            {
                                name: 'duration',
                                type: 'text',
                                label: 'Duration',
                                admin: {
                                    placeholder: 'e.g. 6 months, 1.5 Years',
                                    width: '50%',
                                    description: 'How long did the project take?',
                                },
                            },
                        ],
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'difficulty',
                                type: 'select',
                                label: 'Difficulty',
                                admin: { width: '50%' },
                                options: [
                                    { label: '1/5 – Very Easy', value: '1' },
                                    { label: '2/5 – Easy', value: '2' },
                                    { label: '3/5 – Moderate', value: '3' },
                                    { label: '4/5 – Hard', value: '4' },
                                    { label: '5/5 – Expert', value: '5' },
                                ],
                            },
                            {
                                name: 'role',
                                type: 'text',
                                label: 'My Role',
                                admin: {
                                    placeholder: 'e.g. Lead Designer & Developer',
                                    width: '50%',
                                },
                            },
                        ],
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'liveUrl',
                                type: 'text',
                                label: 'Live URL',
                                admin: {
                                    placeholder: 'https://',
                                    width: '50%',
                                },
                            },
                        ],
                    },
                    {
                        name: 'repoUrl',
                        type: 'text',
                        label: 'GitHub / Repo URL',
                        admin: {
                            placeholder: 'https://github.com/',
                        },
                    },
                    {
                        name: 'clients',
                        type: 'relationship',
                        label: 'Client(s)',
                        relationTo: 'clients',
                        hasMany: true,
                        admin: {
                            description: 'Link one or more clients/brands this project was built for',
                        },
                    },
                    {
                        name: 'technologies',
                        type: 'relationship',
                        label: 'Technologies Used',
                        relationTo: 'technologies',
                        hasMany: true,
                        admin: {
                            description: 'Link the technologies / tools used in this project',
                        },
                    },
                    {
                        name: 'categories',
                        type: 'relationship',
                        relationTo: 'categories',
                        hasMany: true,
                        admin: {
                            position: 'sidebar',
                        },
                    },
                    {
                        name: 'featured',
                        type: 'checkbox',
                        label: 'Featured on homepage',
                        defaultValue: false,
                        admin: {
                            position: 'sidebar',
                            description: 'Show this project in the Featured Projects block',
                        },
                    },
                    {
                        name: 'completedAt',
                        type: 'date',
                        label: 'Completion Date',
                        admin: {
                            position: 'sidebar',
                            date: { pickerAppearance: 'dayOnly' },
                        },
                    },
                ],
            },
            {
                name: 'meta',
                label: 'SEO',
                fields: [
                    OverviewField({
                        titlePath: 'meta.title',
                        descriptionPath: 'meta.description',
                        imagePath: 'meta.image',
                    }),
                    MetaTitleField({ hasGenerateFn: true }),
                    MetaImageField({ relationTo: 'media' }),
                    MetaDescriptionField({}),
                    PreviewField({
                        hasGenerateFn: true,
                        titlePath: 'meta.title',
                        descriptionPath: 'meta.description',
                    }),
                ],
            },
        ],
    },
    slugField(),
]
