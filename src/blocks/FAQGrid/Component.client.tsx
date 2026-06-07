'use client';
import React from 'react';
import type { FAQGridBlock } from '@/payload-types';
import { cn } from '@/utilities/ui';

type Props = {
    className?: string;
} & FAQGridBlock;

export const FAQGridClient: React.FC<Props> = ({
    title,
    description,
    faqItems,
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'center',
    className,
}) => {
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
                {/* Header Section */}
                <div
                    className={cn(
                        'mb-12 md:mb-16 max-w-3xl',
                        alignmentClasses[contentAlignment as keyof typeof alignmentClasses],
                        {
                            'mx-auto': contentAlignment === 'center',
                            'ml-auto': contentAlignment === 'end',
                        },
                    )}
                >
                    {title && (
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            {title}
                        </h2>
                    )}

                    {description && (
                        <p className="text-lg text-muted-foreground">{description}</p>
                    )}
                </div>

                {/* FAQ Grid */}
                {faqItems && faqItems.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {faqItems.map((item, index) => (
                            <div
                                key={item.id || index}
                                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-3">
                                    {item.question}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
