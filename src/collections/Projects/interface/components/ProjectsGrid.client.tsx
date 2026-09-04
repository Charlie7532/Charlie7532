'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import { Media } from '@/components/Media'
import { NeuDivider } from '@/components/ui/neu'
import { Reveal } from '@/components/ui/reveal'
import { GRID_OFFSET, type ProjectArchiveItem } from '../../domain/models/archive'

type Props = {
    /** Grid items from the server render, already ordered by the application layer. */
    items: ProjectArchiveItem[]
}

const ProjectTile: React.FC<{ project: ProjectArchiveItem; index: number }> = ({
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
                        {client && (
                            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                                {client}
                            </p>
                        )}
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

export const ProjectsGrid: React.FC<Props> = ({ items }) => {
    if (!items.length) return null

    return (
        <div>
            <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {items.map((project, i) => (
                    <ProjectTile key={project.id} project={project} index={(i % 3) + 1} />
                ))}
            </ul>

            <Reveal className="mt-20 flex flex-col items-center gap-4">
                <NeuDivider className="w-24" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    End of the archive · {items.length + GRID_OFFSET} projects
                </p>
            </Reveal>
        </div>
    )
}
