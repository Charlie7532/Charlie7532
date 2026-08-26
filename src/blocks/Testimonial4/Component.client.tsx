'use client'

import { useRef } from 'react'
import type { Testimonial4Type } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utilities/ui'

type Props = {
    className?: string
} & Testimonial4Type

function StarRating({ rating }: { rating: string }) {
    const value = parseFloat(rating)
    const fullStars = Math.floor(value)
    const hasHalfStar = value % 1 !== 0

    return (
        <div className="flex gap-0.5">
            {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            {hasHalfStar && (
                <div className="relative h-4 w-4">
                    <Star className="h-4 w-4 text-gray-300" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
            )}
            {Array.from({ length: 5 - Math.ceil(value) }).map((_, i) => (
                <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
            ))}
        </div>
    )
}

export const Testimonial4Client: React.FC<Props> = ({
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
    const scrollRef = useRef<HTMLDivElement>(null)

    if (!testimonials || testimonials.length === 0) return null

    function scrollBy(direction: number) {
        if (!scrollRef.current) return
        const card = scrollRef.current.querySelector('[data-card]')
        if (!card) return
        const gap = 24
        const distance = card.clientWidth + gap
        scrollRef.current.scrollBy({ left: direction * distance, behavior: 'smooth' })
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
                {/* Header Section */}
                <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div className={cn('flex-1', alignmentClasses[contentAlignment as keyof typeof alignmentClasses])}>
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
                            <p className="text-lg text-muted-foreground">{description}</p>
                        )}
                    </div>

                    <div className="flex shrink-0 items-center gap-4">
                        {cta?.label && (
                            <CMSLink {...cta} appearance={cta.appearance ?? 'default'} />
                        )}
                        {testimonials.length > 2 && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => scrollBy(-1)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    aria-label="Previous testimonials"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => scrollBy(1)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    aria-label="Next testimonials"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div
                    ref={scrollRef}
                    className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {testimonials.map((testimonial, index) => {
                        // `testimonials` is typed as `(number | Testimonial)[]`, so it can be either
                        // a populated object or just an ID. Guard against the numeric variant before
                        // accessing any fields.
                        if (!testimonial || typeof testimonial === 'number') return null

                        const hasImage =
                            testimonial.authorImage &&
                            typeof testimonial.authorImage === 'object'

                        return (
                            <article
                                key={testimonial.id ?? index}
                                data-card
                                className="w-full shrink-0 snap-start overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                {hasImage ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto">
                                            <Media
                                                // `authorImage` is typed as `(number | null) | Media`, which
                                                // matches the `resource` prop on `Media`, so it can be passed
                                                // directly without additional casting.
                                                resource={testimonial.authorImage ?? undefined}
                                                imgClassName="object-cover"
                                                fill
                                            />
                                        </div>

                                        <div className="flex flex-col justify-between gap-4 p-6">
                                            <div className="space-y-1">
                                                <p className="text-sm font-semibold text-foreground">
                                                    {testimonial.authorName}
                                                </p>
                                                {(testimonial.authorRole || testimonial.authorCompany) && (
                                                    <p className="text-sm text-muted-foreground">
                                                        {testimonial.authorRole}
                                                        {testimonial.authorCompany && (
                                                            <span className="font-medium text-foreground">
                                                                {testimonial.authorRole ? ' at ' : ''}
                                                                {testimonial.authorCompany}
                                                            </span>
                                                        )}
                                                    </p>
                                                )}
                                            </div>

                                            <hr className="border-border" />

                                            {testimonial.rating && <StarRating rating={testimonial.rating} />}

                                            <p className="text-base leading-relaxed text-muted-foreground">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-between gap-4 p-6">
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-foreground">
                                                {testimonial.authorName}
                                            </p>
                                            {(testimonial.authorRole || testimonial.authorCompany) && (
                                                <p className="text-sm text-muted-foreground">
                                                    {testimonial.authorRole}
                                                    {testimonial.authorCompany && (
                                                        <span className="font-medium text-foreground">
                                                            {testimonial.authorRole ? ' at ' : ''}
                                                            {testimonial.authorCompany}
                                                        </span>
                                                    )}
                                                </p>
                                            )}
                                        </div>

                                        <hr className="border-border" />

                                        {testimonial.rating && <StarRating rating={testimonial.rating} />}

                                        <p className="text-base leading-relaxed text-muted-foreground">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </p>
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
