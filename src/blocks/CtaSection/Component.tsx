import type { CtaSectionBlock as CtaSectionBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import React from 'react'

type Props = {
    className?: string
} & CtaSectionBlockProps

export const CtaSectionBlock: React.FC<Props> = ({
    title,
    description,
    ctaPrimary,
    ctaSecondary,
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

    // Background theme classes
    const themeClasses = {
        default: 'bg-background text-foreground',
        light: 'bg-gray-50 text-foreground',
        dark: 'bg-gray-900 text-white',
        primary: 'bg-primary text-primary-foreground',
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
                themeClasses[backgroundTheme as keyof typeof themeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {description}
                        </p>
                    )}

                    {(ctaPrimary?.label || ctaSecondary?.label) && (
                        <div className="flex flex-wrap gap-4">
                            {ctaPrimary?.label && <CMSLink {...ctaPrimary} size="lg" />}
                            {ctaSecondary?.label && <CMSLink {...ctaSecondary} size="lg" />}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
