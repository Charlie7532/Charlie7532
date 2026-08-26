'use client'

import React from 'react'
import { contactContent } from '@/modules/landing/domain/content'
import { Reveal } from './primitives'
import { NeuButton, NeuCard, NeuChip, NeuDivider } from '@/components/ui/neu'

export const Contact: React.FC = () => (
    <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-3xl">
            <Reveal>
                <NeuCard rounded="2xl" className="p-10 text-center md:p-16">
                    <NeuChip mono>Contact</NeuChip>
                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {contactContent.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base text-muted md:text-lg">
                        {contactContent.subtitle}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <NeuButton variant="accent" size="lg" href={`mailto:${contactContent.email}`}>
                            Email me
                        </NeuButton>
                        <NeuButton size="lg" href={contactContent.linkedin} target="_blank">
                            LinkedIn
                        </NeuButton>
                        <NeuButton size="lg" href={contactContent.github} target="_blank">
                            GitHub
                        </NeuButton>
                    </div>

                    <NeuDivider className="mx-auto mt-10 w-32" />
                    <p className="mt-6 font-mono text-xs text-muted">{contactContent.email}</p>
                </NeuCard>
            </Reveal>
        </div>
    </section>
)
