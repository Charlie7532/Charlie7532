import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign';
import type { Block } from 'payload';

export const FAQ: Block = {
    slug: 'faq',
    interfaceName: 'FAQBlock',
    imageURL: '/assets/blocks/faq-block.svg',
    imageAltText: 'FAQ section with collapsible questions and answers',
    fields: [
        {
            type: 'collapsible',
            label: 'Header',
            admin: {
                initCollapsed: false,
            },
            fields: [
                {
                    name: 'eyebrow',
                    label: 'Eyebrow',
                    type: 'text',
                    localized: true,
                    admin: {
                        placeholder: 'e.g., FAQ, Questions, Help',
                    },
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    required: true,
                    localized: true,
                    admin: {
                        placeholder: 'e.g., Frequently Asked Questions',
                    },
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                    localized: true,
                    admin: {
                        placeholder: 'Optional description text',
                    },
                },
            ],
        },
        {
            type: 'collapsible',
            label: 'FAQ Items',
            admin: {
                initCollapsed: false,
            },
            fields: [
                {
                    name: 'faqItems',
                    label: 'Questions & Answers',
                    type: 'array',
                    minRows: 1,
                    maxRows: 20,
                    required: true,
                    fields: [
                        {
                            name: 'question',
                            label: 'Question',
                            type: 'text',
                            required: true,
                            localized: true,
                            admin: {
                                placeholder: 'Enter your question here',
                            },
                        },
                        {
                            name: 'answer',
                            label: 'Answer',
                            type: 'textarea',
                            required: true,
                            localized: true,
                            admin: {
                                placeholder: 'Enter your answer here',
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: 'collapsible',
            label: 'Layout',
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'textAlignment',
                    label: 'Text Alignment',
                    type: 'select',
                    options: [
                        { label: 'Start', value: 'start' },
                        { label: 'Center', value: 'center' },
                        { label: 'End', value: 'end' },
                    ],
                    defaultValue: 'center',
                    admin: {
                        description: 'Alignment of the header section',
                    },
                },
            ],
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
};
