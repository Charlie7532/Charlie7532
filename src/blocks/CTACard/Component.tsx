import type { CtaCardBlock as CtaCardBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import React from 'react'

type Props = {
    className?: string
} & CtaCardBlockProps

export const CTACardBlock: React.FC<Props> = ({
    title,
    description,
    ctaPrimary,
    ctaSecondary,
    variant = 'muted',
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
    }

    // Background theme classes for section
    const sectionThemeClasses = {
        default: 'bg-background',
        light: 'bg-gray-50',
        dark: 'bg-gray-900',
        primary: 'bg-primary/5',
    }

    // Card variant classes
    const cardVariantClasses = {
        default: 'border-border bg-background',
        muted: 'border-transparent bg-muted',
        card: 'border-border bg-card',
    }

    // Alignment classes
    const alignmentClasses = {
        start: 'text-left items-start',
        center: 'text-center items-center',
        end: 'text-right items-end',
    }

    const alignment = contentAlignment ?? textAlignment

    return (
        <section
            className={cn(
                spacingClasses[spacingPreset as keyof typeof spacingClasses],
                sectionThemeClasses[backgroundTheme as keyof typeof sectionThemeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        'rounded-2xl border p-8 sm:p-12',
                        cardVariantClasses[variant as keyof typeof cardVariantClasses],
                    )}
                >
                    <div
                        className={cn(
                            'flex flex-col gap-6 max-w-3xl',
                            alignmentClasses[alignment as keyof typeof alignmentClasses],
                            {
                                'mx-auto': alignment === 'center',
                                'ml-auto': alignment === 'end',
                            },
                        )}
                    >
                        {title && (
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
                        )}

                        {(ctaPrimary?.label || ctaSecondary?.label) && (
                            <div className="flex flex-wrap gap-4">
                                {ctaPrimary?.label && <CMSLink {...ctaPrimary} size="lg" />}
                                {ctaSecondary?.label && <CMSLink {...ctaSecondary} size="lg" />}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
