'use client'

import React from 'react'
import { philosophyContent } from '@/modules/landing/domain/content'
import { Reveal, SectionHeading } from './primitives'

export const Philosophy: React.FC = () => (
    <section id="philosophy" className="py-20 md:py-28">
        <div className="container">
            <SectionHeading eyebrow="Philosophy" title={philosophyContent.title} />

            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                {/* Narrative in an inset well — like text etched into the surface */}
                <Reveal>
                    <div className="neu-inset space-y-5 rounded-3xl p-8 md:p-10">
                        {philosophyContent.paragraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-foreground/85">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Reveal>

                {/* Pillars as raised rows */}
                <ul className="flex flex-col justify-center gap-6">
                    {philosophyContent.pillars.map((pillar, i) => (
                        <Reveal as="li" key={pillar.title} index={i}>
                            <div className="neu-raised flex items-start gap-5 rounded-2xl p-6">
                                <div className="neu-dial flex h-12 w-12 shrink-0 items-center justify-center font-mono text-sm font-bold text-accent dark:text-foreground">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </div>
    </section>
)
