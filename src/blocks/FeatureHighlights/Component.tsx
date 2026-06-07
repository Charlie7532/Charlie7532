import { Check } from 'lucide-react';
import type { FeatureHighlightsBlock as FeatureHighlightsBlockProps } from '@/payload-types';

import { Chip } from '@heroui/react';
import { cn } from '@/utilities/ui';
import { Media } from '@/components/Media';
import React from 'react';

type Props = {
    className?: string;
} & FeatureHighlightsBlockProps;

export const FeatureHighlightsBlock: React.FC<Props> = ({
    badgeText,
    title,
    subtitle,
    features,
    image,
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'start',
    className,
}) => {
    const hasImage = image && typeof image === 'object';

    // Spacing classes
    const spacingClasses = {
        none: 'py-0',
        small: 'py-8',
        medium: 'py-12 md:py-16 lg:py-20',
        large: 'py-16 md:py-24 lg:py-32',
    };

    // Background theme classes
    const themeClasses = {
        default: 'bg-background text-foreground',
        light: 'bg-gray-50 text-foreground',
        dark: 'bg-gray-900 text-white',
        primary: 'bg-primary text-primary-foreground',
    };

    // Alignment classes
    const alignmentClasses = {
        start: 'text-left',
        center: 'text-center',
        end: 'text-right',
    };

    return (
        <section
            className={cn(
                spacingClasses[spacingPreset as keyof typeof spacingClasses],
                themeClasses[backgroundTheme as keyof typeof themeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {hasImage ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Content Column */}
                        <div className="flex flex-col gap-10">
                            {/* Header */}
                            <div className={cn('flex flex-col gap-4', alignmentClasses[contentAlignment as keyof typeof alignmentClasses])}>
                                {badgeText && <Chip variant="secondary">{badgeText}</Chip>}
                                {title && (
                                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                        {title}
                                    </h2>
                                )}
                                {subtitle && (
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                        {subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Features List */}
                            {features && features.length > 0 && (
                                <div className="flex flex-col gap-6 lg:pl-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex flex-row items-start gap-6">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground/5 mt-0.5">
                                                <Check className="h-3.5 w-3.5 text-foreground" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                {feature.title && (
                                                    <p className="font-semibold text-foreground">{feature.title}</p>
                                                )}
                                                {feature.description && (
                                                    <p className="text-sm/6 text-muted-foreground">
                                                        {feature.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Image Column */}
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted ring-1 ring-foreground/5">
                            <Media resource={image} fill imgClassName="object-cover" />
                        </div>
                    </div>
                ) : (
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col gap-10">
                            {/* Header */}
                            <div className={cn('flex flex-col gap-4', alignmentClasses[contentAlignment as keyof typeof alignmentClasses])}>
                                {badgeText && <Chip variant="secondary">{badgeText}</Chip>}
                                {title && (
                                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                        {title}
                                    </h2>
                                )}
                                {subtitle && (
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                        {subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Features Grid */}
                            {features && features.length > 0 && (
                                <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-3">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex flex-row items-start gap-6">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground/5 mt-0.5">
                                                <Check className="h-3.5 w-3.5 text-foreground" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                {feature.title && (
                                                    <p className="font-semibold text-foreground">{feature.title}</p>
                                                )}
                                                {feature.description && (
                                                    <p className="text-sm/6 text-muted-foreground">
                                                        {feature.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
