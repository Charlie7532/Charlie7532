'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import { Media } from '@/components/Media'
import { Reveal } from '@/components/ui/reveal'
import type { ProjectArchiveItem } from '../../domain/models/archive'
import { StatusPill } from './StatusPill'

type Props = {
    projects: ProjectArchiveItem[]
}

const HeroTile: React.FC<{ project: ProjectArchiveItem; index: number }> = ({
    project,
    index,
}) => {
    const reduce = useReducedMotion()
    const image =
        project.heroImage && typeof project.heroImage !== 'number'
            ? project.heroImage
            : project.meta?.image && typeof project.meta.image !== 'number'
                ? project.meta.image
                : null

    const client = project.populatedClients?.[0]?.name ?? null
    const technologies = (project.populatedTechnologies ?? []).slice(0, 6)

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
                                size="(max-width: 768px) 100vw, 50vw"
                                fill
                                imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center font-mono text-sm text-muted">
                                {project.title}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                        {client && (
                            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                                {client}
                            </p>
                        )}
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                            {project.title}
                        </h2>
                        {project.summary && (
                            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted md:text-base">
                                {project.summary}
                            </p>
                        )}
                        {technologies.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2 pt-1">
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

/** The two most recent projects, side by side. */
export const ProjectsHero: React.FC<Props> = ({ projects }) => {
    if (!projects.length) return null

    return (
        <ul className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
                <HeroTile key={project.id} project={project} index={i} />
            ))}
        </ul>
    )
}
