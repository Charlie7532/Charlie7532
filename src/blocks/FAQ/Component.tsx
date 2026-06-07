import type { FAQBlock as FAQBlockProps } from '@/payload-types';
import React from 'react';
import { FAQClient } from './Component.client';

type Props = {
    className?: string;
} & FAQBlockProps;

export const FAQBlock: React.FC<Props> = (props) => {
    return <FAQClient {...props} />;
};
