'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '@/payload-types'
import { Media } from '@/components/Media'
import { Reveal, SectionHeading } from './primitives'

export type FeaturedProjectItem = Pick<
    Project,
    'id' | 'title' | 'slug' | 'summary' | 'meta' | 'heroImage' | 'completedAt' | 'populatedTechnologies'
>

type Props = {
    projects: FeaturedProjectItem[]
}

/** No completedAt ⇒ still in development */
const StatusPill: React.FC<{ completedAt?: string | null }> = ({ completedAt }) => {
    const live = Boolean(completedAt)
    return (
        <span className="neu-chip absolute top-3 right-3 z-10 inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium text-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-success' : 'bg-warning'}`} />
            {live ? 'Live' : 'In development'}
        </span>
    )
}

const ProjectTile: React.FC<{ project: FeaturedProjectItem; index: number }> = ({
    project,
    index,
}) => {
    const reduce = useReducedMotion()
    const image =
        project.meta?.image && typeof project.meta.image !== 'number'
            ? project.meta.image
            : project.heroImage && typeof project.heroImage !== 'number'
                ? project.heroImage
                : null

    const technologies = (project.populatedTechnologies ?? []).slice(0, 4)

    return (
        <Reveal as="li" index={index} className="h-full">
            <motion.div
                className="h-full"
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
                <Link
                    href={`/projects/${project.slug}`}
                    className="neu-raised group flex h-full flex-col overflow-hidden rounded-3xl p-4"
                >
                    <div className="neu-inset relative aspect-[16/10] overflow-hidden rounded-2xl">
                        <StatusPill completedAt={project.completedAt} />
                        {image ? (
                            <Media
                                resource={image}
                                size="(max-width: 768px) 100vw, 33vw"
                                fill
                                imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center font-mono text-sm text-muted">
                                {project.title}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                        {project.summary && (
                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                                {project.summary}
                            </p>
                        )}
                        {technologies.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2 pt-2">
                                {technologies.map(
                                    (tech) =>
                                        tech?.name && (
                                            <span
                                                key={tech.name}
                                                className="neu-chip px-3 py-1 font-mono text-[11px] text-muted"
                                            >
                                                {tech.name}
                                            </span>
                                        ),
                                )}
                            </div>
                        )}
                    </div>
                </Link>
            </motion.div>
        </Reveal>
    )
}

export const FeaturedProjectsClient: React.FC<Props> = ({ projects }) => {
    if (!projects.length) return null

    return (
        <section id="recent-work" className="py-20 md:py-28">
            <div className="container">
                <SectionHeading
                    eyebrow="Work"
                    title="Recent Work"
                    subtitle="Agentic systems and platforms that ship — not just prototype."
                />
                <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, i) => (
                        <ProjectTile key={project.id} project={project} index={i} />
                    ))}
                </ul>
                <Reveal className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="neu-button inline-block rounded-full px-7 py-3 text-sm font-semibold text-foreground"
                    >
                        All projects →
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
