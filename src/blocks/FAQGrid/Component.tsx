import type { FAQGridBlock as FAQGridBlockProps } from '@/payload-types';
import React from 'react';
import { FAQGridClient } from './Component.client';

type Props = {
    className?: string;
} & FAQGridBlockProps;

export const FAQGridBlock: React.FC<Props> = (props) => {
    return <FAQGridClient {...props} />;
};
