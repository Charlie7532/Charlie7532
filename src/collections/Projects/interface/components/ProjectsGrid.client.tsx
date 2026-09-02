'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import { Media } from '@/components/Media'
import { NeuButton, NeuDivider } from '@/components/ui/neu'
import { Reveal } from '@/components/ui/reveal'
import { fetchProjectsArchivePage } from '../../application/useCases/fetchProjectsArchivePage'
import { GRID_OFFSET, type ProjectArchiveItem } from '../../domain/models/archive'
import { StatusPill } from './StatusPill'

type Props = {
    /** Grid items from the server render (page 1 minus the hero docs). */
    initialItems: ProjectArchiveItem[]
    /** Next page number to fetch (1-based, ARCHIVE_PAGE_SIZE stream). */
    startPage: number
    totalPages: number
    totalDocs: number
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

const SkeletonTile: React.FC = () => (
    <li className="neu-raised animate-pulse rounded-3xl p-4">
        <div className="neu-inset aspect-[16/10] rounded-2xl" />
        <div className="space-y-3 p-4">
            <div className="neu-inset h-3 w-1/3 rounded-full" />
            <div className="neu-inset h-5 w-3/4 rounded-full" />
            <div className="neu-inset h-3 w-full rounded-full" />
            <div className="neu-inset h-3 w-2/3 rounded-full" />
        </div>
    </li>
)

export const ProjectsGrid: React.FC<Props> = ({
    initialItems,
    startPage,
    totalPages,
    totalDocs,
}) => {
    const [items, setItems] = useState<ProjectArchiveItem[]>(initialItems)
    const [hasMore, setHasMore] = useState(startPage < totalPages)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [total, setTotal] = useState(totalDocs)

    const pageRef = useRef(startPage)
    const hasMoreRef = useRef(startPage < totalPages)
    const loadingRef = useRef(false)
    const sentinelRef = useRef<HTMLDivElement>(null)

    const loadMore = useCallback(async () => {
        if (loadingRef.current || !hasMoreRef.current) return
        loadingRef.current = true
        setLoading(true)
        setError(null)

        try {
            const data = await fetchProjectsArchivePage(pageRef.current)
            setItems((prev) => {
                // Guard against pagination overlap when sort keys tie.
                const seen = new Set(prev.map((item) => item.id))
                return [...prev, ...data.items.filter((item) => !seen.has(item.id))]
            })
            pageRef.current = data.page + 1
            hasMoreRef.current = data.page < data.totalPages
            setHasMore(hasMoreRef.current)
            setTotal(data.totalDocs)
        } catch (err) {
            // Stop auto-retrying while the sentinel stays in view; the
            // error state offers a manual retry instead.
            hasMoreRef.current = false
            setHasMore(false)
            setError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            loadingRef.current = false
            setLoading(false)
        }
    }, [])

    const retry = useCallback(() => {
        hasMoreRef.current = true
        setHasMore(true)
        void loadMore()
    }, [loadMore])

    useEffect(() => {
        const el = sentinelRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) void loadMore()
            },
            { rootMargin: '600px 0px' },
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [loadMore, items.length])

    if (!items.length) return null

    return (
        <div>
            <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {items.map((project, i) => (
                    <ProjectTile key={project.id} project={project} index={(i % 3) + 1} />
                ))}
                {loading && (
                    <>
                        <SkeletonTile />
                        <SkeletonTile />
                        <SkeletonTile />
                    </>
                )}
            </ul>

            {error && (
                <div className="mt-12 text-center">
                    <p className="mb-4 text-sm text-muted">{error}</p>
                    <NeuButton onClick={retry} size="sm">
                        Try again
                    </NeuButton>
                </div>
            )}

            {hasMore && !error && <div ref={sentinelRef} aria-hidden className="h-1" />}

            {!hasMore && !error && (
                <Reveal className="mt-20 flex flex-col items-center gap-4">
                    <NeuDivider className="w-24" />
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                        End of the archive · {items.length + GRID_OFFSET} of {total} projects
                    </p>
                </Reveal>
            )}
        </div>
    )
}
