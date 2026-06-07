import type { Field } from 'payload';

export const spacingPreset = (): Field => ({
    name: 'spacingPreset',
    type: 'select',
    label: 'Spacing',
    defaultValue: 'medium',
    options: [
        {
            label: 'None',
            value: 'none',
        },
        {
            label: 'Small',
            value: 'small',
        },
        {
            label: 'Medium',
            value: 'medium',
        },
        {
            label: 'Large',
            value: 'large',
        },
    ],
    admin: {
        description: 'Vertical spacing around the section',
    },
});

export const backgroundTheme = (): Field => ({
    name: 'backgroundTheme',
    type: 'select',
    label: 'Background Theme',
    defaultValue: 'default',
    options: [
        {
            label: 'Default',
            value: 'default',
        },
        {
            label: 'Light',
            value: 'light',
        },
        {
            label: 'Dark',
            value: 'dark',
        },
        {
            label: 'Primary',
            value: 'primary',
        },
    ],
    admin: {
        description: 'Background color theme for the section',
    },
});

export const contentAlignment = (): Field => ({
    name: 'contentAlignment',
    type: 'select',
    label: 'Content Alignment',
    defaultValue: 'start',
    options: [
        {
            label: 'Start',
            value: 'start',
        },
        {
            label: 'Center',
            value: 'center',
        },
        {
            label: 'End',
            value: 'end',
        },
    ],
    admin: {
        description: 'Horizontal alignment of text content',
    },
});
