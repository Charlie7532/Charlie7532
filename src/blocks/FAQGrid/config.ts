import { spacingPreset, backgroundTheme, contentAlignment } from '@/fields/blockDesign';
import type { Block } from 'payload';

export const FAQGrid: Block = {
    slug: 'faqGrid',
    interfaceName: 'FAQGridBlock',
    imageURL: '/assets/blocks/faq-grid-block.svg',
    imageAltText: 'FAQ section with grid layout showing questions and answers',
    fields: [
        {
            type: 'collapsible',
            label: 'Header',
            admin: {
                initCollapsed: false,
            },
            fields: [
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
                    maxRows: 12,
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
