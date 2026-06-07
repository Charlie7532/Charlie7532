'use client'
import type { TestimonialGridBlock as TestimonialGridBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    className?: string
} & TestimonialGridBlockProps

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
}

const headerVariants = {
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

export const TestimonialGridClient: React.FC<Props> = ({
    title,
    description,
    testimonials,
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
    }

    // Background theme classes
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
                {(title || description) && (
                    <motion.div
                        className={cn(
                            'mb-12 md:mb-16',
                            alignmentClasses[contentAlignment as keyof typeof alignmentClasses],
                        )}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={headerVariants}
                    >
                        {title && (
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                                {description}
                            </p>
                        )}
                    </motion.div>
                )}

                {testimonials && testimonials.length > 0 && (
                    <motion.div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.article
                                key={testimonial.id ?? index}
                                className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
                                variants={cardVariants}
                            >
                                {/* Quote */}
                                <div className="mb-6 flex-1">
                                    <svg
                                        className="mb-3 h-8 w-8 text-primary/20"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="break-words text-base leading-7 text-foreground">{testimonial.quote}</p>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 border-t border-border pt-4">
                                    {testimonial.authorImage && typeof testimonial.authorImage === 'object' && (
                                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                                            <Media resource={testimonial.authorImage} imgClassName="object-cover" fill />
                                        </div>
                                    )}
                                    <div className="flex-1 space-y-0.5">
                                        <p className="text-sm font-semibold text-foreground">
                                            {testimonial.authorName}
                                        </p>
                                        {(testimonial.authorRole || testimonial.authorCompany) && (
                                            <p className="text-xs text-muted-foreground">
                                                {[testimonial.authorRole, testimonial.authorCompany]
                                                    .filter(Boolean)
                                                    .join(' • ')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
