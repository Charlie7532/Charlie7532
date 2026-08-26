'use client'

import React from 'react'
import { useTheme } from '@/providers/Theme'
import { Media } from '@/components/Media'
import { techStackContent } from '@/modules/landing/domain/content'
import { Reveal, SectionHeading } from './primitives'
import type { TechCategoryGroup } from '@/modules/landing/application/getLandingData'

type Props = {
    groups: TechCategoryGroup[]
}

export const TechStackClient: React.FC<Props> = ({ groups }) => {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])
    const isDark = mounted && resolvedTheme === 'dark'

    if (!groups.length) return null

    return (
        <section id="capabilities" className="py-20 md:py-28">
            <div className="container">
                <SectionHeading
                    eyebrow="Toolbox"
                    title={techStackContent.title}
                    subtitle={techStackContent.subtitle}
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {groups.map((group, i) => (
                        <Reveal key={group.id} index={i}>
                            <div className="neu-raised h-full rounded-3xl p-8">
                                <h3 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase dark:text-muted">
                                    {group.label}
                                </h3>
                                <div className="neu-etched mt-4 mb-6" />
                                <ul className="flex flex-wrap gap-4">
                                    {group.technologies.map((tech) => {
                                        const logo =
                                            isDark &&
                                            tech.logoDark &&
                                            typeof tech.logoDark === 'object'
                                                ? tech.logoDark
                                                : tech.logo && typeof tech.logo === 'object'
                                                  ? tech.logo
                                                  : null

                                        return (
                                            <li
                                                key={tech.id}
                                                className="neu-chip flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-foreground/85"
                                                title={tech.name}
                                            >
                                                {logo && (
                                                    <Media
                                                        resource={logo}
                                                        imgClassName="h-5 w-5 object-contain"
                                                    />
                                                )}
                                                {tech.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
