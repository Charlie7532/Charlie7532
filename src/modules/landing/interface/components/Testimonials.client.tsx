'use client'

import React, { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Testimonial } from '@/payload-types'
import { Media } from '@/components/Media'
import { Reveal, SectionHeading } from './primitives'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type TestimonialItem = Testimonial

type Props = {
    testimonials: TestimonialItem[]
}

const TestimonialCard: React.FC<{ t: TestimonialItem; index: number }> = ({ t, index }) => {
    const reduce = useReducedMotion()

    return (
        <Reveal as="div" index={index} className="h-full shrink-0 w-[320px] sm:w-[380px] snap-center">
            <motion.article
                className="neu-raised flex h-full flex-col rounded-2xl p-6"
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
                {/* Quote mark */}
                <svg
                    className="mb-4 h-7 w-7 text-foreground/10"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="flex-1 text-sm leading-relaxed text-foreground/85">
                    {t.quote}
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
                    {t.authorImage && typeof t.authorImage === 'object' && (
                        <div className="neu-inset relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                            <Media resource={t.authorImage} imgClassName="object-cover" fill />
                        </div>
                    )}
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                            {t.authorName}
                        </p>
                        {t.authorRole && (
                            <p className="truncate text-xs text-muted-foreground">
                                {t.authorRole}
                            </p>
                        )}
                    </div>
                </div>
            </motion.article>
        </Reveal>
    )
}

export const TestimonialsClient: React.FC<Props> = ({ testimonials }) => {
    const scrollRef = useRef<HTMLDivElement>(null)

    if (!testimonials.length) return null

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return
        const card = scrollRef.current.querySelector('[data-card]')
        const gap = 24
        const distance = (card?.clientWidth ?? 340) + gap
        scrollRef.current.scrollBy({
            left: dir === 'left' ? -distance : distance,
            behavior: 'smooth',
        })
    }

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="Don't just take it from me"
                    subtitle="Let the voices of satisfaction speak for themselves."
                />

                {/* Horizontal scroll carousel */}
                <div className="relative">
                    {/* Left arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="neu-raised absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-2.5 text-muted-foreground hover:text-foreground transition-colors sm:flex"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Generous padding + negative margins so neu shadows aren't clipped by overflow */}
                    <div
                        ref={scrollRef}
                        className="-mx-6 -my-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 py-8 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((t, i) => (
                            <div key={t.id} data-card>
                                <TestimonialCard t={t} index={i} />
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="neu-raised absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-2.5 text-muted-foreground hover:text-foreground transition-colors sm:flex"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}