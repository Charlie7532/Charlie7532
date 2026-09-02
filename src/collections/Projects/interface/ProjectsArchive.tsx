import React from 'react'

import { NeuChip, NeuDivider } from '@/components/ui/neu'
import { Reveal } from '@/components/ui/reveal'
import { getLatestProjects, getProjectsArchivePage } from '../application/useCases/getProjectsArchive'
import { GRID_OFFSET } from '../domain/models/archive'
import { ProjectsHero } from './components/ProjectsHero.client'
import { ProjectsGrid } from './components/ProjectsGrid.client'

/**
 * Projects archive composition (server component).
 *
 * The two most recent projects get a side-by-side hero row; everything else
 * flows through an infinite-scroll grid. The grid starts from page 2 of the
 * archive stream — page 1 powers the hero row and the initial grid batch.
 */
export const ProjectsArchive: React.FC = async () => {
    const [latest, firstPage] = await Promise.all([
        getLatestProjects(),
        getProjectsArchivePage(1),
    ])

    const initialGridItems = firstPage.items.slice(GRID_OFFSET)
    const hasAnyProjects = firstPage.items.length > 0

    return (
        <div className="pt-24 pb-24">
            <div className="container">
                <Reveal className="mx-auto mb-16 max-w-2xl text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Projects
                    </h1>
                    <p className="mt-4 text-base text-muted md:text-lg">
                        A collection of things I've built over the years — from client work to
                        personal experiments.
                    </p>
                    <NeuDivider className="mx-auto mt-8 w-24" />
                </Reveal>

                <ProjectsHero projects={latest} />

                {hasAnyProjects ? (
                    initialGridItems.length > 0 && (
                        <div className="mt-24">
                            <Reveal className="mb-12 flex items-center justify-center gap-4">
                                <NeuDivider className="w-16" />
                                <NeuChip mono>
                                    More work
                                </NeuChip>
                                <NeuDivider className="w-16" />
                            </Reveal>
                            <ProjectsGrid
                                initialItems={initialGridItems}
                                startPage={2}
                                totalPages={firstPage.totalPages}
                                totalDocs={firstPage.totalDocs}
                            />
                        </div>
                    )
                ) : (
                    <div className="neu-inset mx-auto max-w-xl rounded-3xl p-12 text-center">
                        <p className="font-mono text-sm text-muted">No projects published yet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
