'use client';
import React from 'react';
import type { FAQBlock } from '@/payload-types';
import { cn } from '@/utilities/ui';
import { Accordion } from '@heroui/react';

type Props = {
    className?: string;
} & FAQBlock;

export const FAQClient: React.FC<Props> = ({
    eyebrow,
    title,
    description,
    faqItems,
    textAlignment = 'center',
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment,
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
        start: 'text-left items-start',
        center: 'text-center items-center',
        end: 'text-right items-end',
    };

    const alignment = contentAlignment ?? textAlignment;

    return (
        <section
            className={cn(
                spacingClasses[spacingPreset as keyof typeof spacingClasses],
                themeClasses[backgroundTheme as keyof typeof themeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        'flex flex-col gap-8 max-w-3xl',
                        alignmentClasses[alignment as keyof typeof alignmentClasses],
                        {
                            'mx-auto': alignment === 'center',
                            'ml-auto': alignment === 'end',
                        },
                    )}
                >
                    {/* Header Section */}
                    <div className={cn('flex flex-col gap-4', alignmentClasses[alignment as keyof typeof alignmentClasses])}>
                        {eyebrow && (
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                {eyebrow}
                            </span>
                        )}

                        {title && (
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="text-lg text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* FAQ Accordion */}
                    {faqItems && faqItems.length > 0 && (
                        <Accordion className="w-full" variant="surface">
                            {faqItems.map((item, index) => (
                                <Accordion.Item key={index}>
                                    <Accordion.Heading>
                                        <Accordion.Trigger className="text-left text-base md:text-lg font-semibold">
                                            {item.question}
                                            <Accordion.Indicator />
                                        </Accordion.Trigger>
                                    </Accordion.Heading>
                                    <Accordion.Panel>
                                        <Accordion.Body className="text-base text-muted-foreground leading-relaxed">
                                            {item.answer}
                                        </Accordion.Body>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    )}
                </div>
            </div>
        </section>
    );
};
