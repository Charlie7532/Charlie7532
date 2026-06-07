import type { FeatureCardsBlock as FeatureCardsBlockProps } from '@/payload-types';
import React from 'react';
import { FeatureCardsClient } from './Component.client';

type Props = {
    className?: string;
} & FeatureCardsBlockProps;

export const FeatureCards: React.FC<Props> = (props) => {
    return <FeatureCardsClient {...props} />;
};
