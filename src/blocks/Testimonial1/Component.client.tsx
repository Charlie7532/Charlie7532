'use client'
import type { Testimonial1Block as Testimonial1BlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    className?: string
} & Testimonial1BlockProps

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
}

const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.2,
        },
    },
}

const authorVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
}

export const Testimonial1Client: React.FC<Props> = ({
    testimonial,
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'center',
    className,
}) => {
    // Relationship returns populated doc
    const t = testimonial as unknown as {
        quote: string
        authorName: string
        authorRole?: string | null
        authorCompany?: string | null
        authorImage?: any
    } | null
    if (!t) return null
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

    // Alignment classes
    const alignmentClasses = {
        start: 'text-left',
        center: 'text-center',
        end: 'text-right',
    }

    return (
        <section
            className={cn(
                spacingClasses[spacingPreset as keyof typeof spacingClasses],
                sectionThemeClasses[backgroundTheme as keyof typeof sectionThemeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <figure
                        className={cn(
                            'rounded-2xl border bg-card p-8 sm:p-10 shadow-sm',
                            alignmentClasses[contentAlignment as keyof typeof alignmentClasses],
                        )}
                    >
                        <motion.blockquote
                            variants={quoteVariants}
                            className="break-words text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl"
                        >
                            <span className="text-primary">&ldquo;</span>
                            {t.quote}
                            <span className="text-primary">&rdquo;</span>
                        </motion.blockquote>

                        <motion.figcaption
                            variants={authorVariants}
                            className={cn('mt-8 flex gap-4', {
                                'justify-start': contentAlignment === 'start',
                                'justify-center': contentAlignment === 'center',
                                'justify-end': contentAlignment === 'end',
                            })}
                        >
                            {t.authorImage && typeof t.authorImage === 'object' && (
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                    <Media
                                        resource={t.authorImage}
                                        imgClassName="object-cover"
                                        fill
                                    />
                                </div>
                            )}
                            <div
                                className={cn('flex flex-col justify-center space-y-0.5', {
                                    'items-start': contentAlignment === 'start',
                                    'items-center': contentAlignment === 'center',
                                    'items-end': contentAlignment === 'end',
                                })}
                            >
                                <p className="text-sm font-semibold text-foreground">{t.authorName}</p>
                                {(t.authorRole || t.authorCompany) && (
                                    <p className="text-sm text-muted-foreground">
                                        {[t.authorRole, t.authorCompany].filter(Boolean).join(', ')}
                                    </p>
                                )}
                            </div>
                        </motion.figcaption>
                    </figure>
                </motion.div>
            </div>
        </section>
    )
}
