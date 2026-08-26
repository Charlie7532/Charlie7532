'use client'

import { useState } from 'react'
import type { Testimonial3Type } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/utilities/ui'

type Props = {
    className?: string
} & Testimonial3Type

export const Testimonial3Client: React.FC<Props> = ({
    eyebrow,
    title,
    description,
    cta,
    testimonials,
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'start',
    className,
}) => {
    const [current, setCurrent] = useState(0)

    if (!testimonials || testimonials.length === 0) return null

    const testimonial = testimonials[current]

    // `testimonials` is typed as `(number | Testimonial)[]` in `Testimonial3Type`,
    // so we need to guard against the numeric ID variant before accessing fields.
    if (!testimonial || typeof testimonial === 'number') return null

    const hasImage =
        testimonial.authorImage &&
        typeof testimonial.authorImage === 'object'

    function next() {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    function prev() {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    // Spacing classes
    const spacingClasses = {
        none: 'py-0',
        small: 'py-8',
        medium: 'py-12 md:py-16 lg:py-20',
        large: 'py-16 md:py-24 lg:py-32',
    }

    // Background theme classes
    const themeClasses = {
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
                themeClasses[backgroundTheme as keyof typeof themeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Header Section */}
                    <div className="flex flex-col justify-center lg:col-span-5">
                        <div className={alignmentClasses[contentAlignment as keyof typeof alignmentClasses]}>
                            {eyebrow && (
                                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                                    {eyebrow}
                                </p>
                            )}
                            {title && (
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className="mb-6 text-lg text-muted-foreground">{description}</p>
                            )}
                            {cta?.label && (
                                <div className="mt-6">
                                    <CMSLink {...cta} appearance={cta.appearance ?? 'default'} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="space-y-6 lg:col-span-7">
                        <div className="overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                            {hasImage ? (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col justify-between">
                                        <blockquote className="text-lg/8 font-medium text-foreground">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>
                                        <div className="mt-6 space-y-0.5">
                                            <p className="text-sm font-semibold text-foreground">
                                                {testimonial.authorName}
                                            </p>
                                            {(testimonial.authorRole || testimonial.authorCompany) && (
                                                <p className="text-sm text-muted-foreground">
                                                    {[testimonial.authorRole, testimonial.authorCompany]
                                                        .filter(Boolean)
                                                        .join(', ')}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Quote className="absolute -left-3 -top-3 z-10 h-10 w-10 text-muted-foreground/20" />
                                        <div className="relative aspect-square overflow-hidden rounded-xl">
                                            <Media
                                                // `authorImage` is typed as `(number | null) | Media`, which
                                                // is compatible with the `resource` prop on `Media`, so we can
                                                // pass it directly without extra type gymnastics.
                                                resource={testimonial.authorImage ?? undefined}
                                                imgClassName="object-cover"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <blockquote className="text-lg/8 font-medium text-foreground">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="mt-6 space-y-0.5">
                                        <p className="text-sm font-semibold text-foreground">
                                            {testimonial.authorName}
                                        </p>
                                        {(testimonial.authorRole || testimonial.authorCompany) && (
                                            <p className="text-sm text-muted-foreground">
                                                {[testimonial.authorRole, testimonial.authorCompany]
                                                    .filter(Boolean)
                                                    .join(', ')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Controls */}
                        {testimonials.length > 1 && (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={prev}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-card transition-colors hover:bg-accent"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={next}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-card transition-colors hover:bg-accent"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                                <div className="ml-2 flex gap-1.5">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrent(index)}
                                            className={cn(
                                                'h-2 rounded-full transition-all',
                                                index === current
                                                    ? 'w-6 bg-foreground'
                                                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                                            )}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
