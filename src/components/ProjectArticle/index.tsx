'use client'

import React from 'react'
import RichText from '@/components/RichText'
import TableOfContents from '@/components/TableOfContents'
import { TechStackBlock } from '@/blocks/TechStack/Component'
import { NeuButton, NeuDivider } from '@/components/ui/neu'
import { ExternalLink, Github } from 'lucide-react'
import { formatDateTime } from '@/utilities/formatDateTime'
import { cn } from '@/utilities/ui'

interface ProjectArticleProps {
    project: any
}

const difficultyLabel: Record<string, string> = {
    '1': '1 / 5',
    '2': '2 / 5',
    '3': '3 / 5',
    '4': '4 / 5',
    '5': '5 / 5',
}

export function ProjectArticle({ project }: ProjectArticleProps) {
    const { content, liveUrl, repoUrl, startDate, duration, difficulty } = project

    const hasDetails = startDate || duration || difficulty
    const hasSidebar = content || hasDetails  // show sidebar whenever there's content to navigate

    return (
        <div className="flex flex-col items-center gap-4 pt-8">
            <div className="container">
                {/* Links bar */}
                {(liveUrl || repoUrl) && (
                    <div className={cn('flex gap-4 mb-10', hasSidebar ? 'max-w-[64rem] mx-auto' : 'max-w-[48rem] mx-auto')}>
                        {liveUrl && (
                            <NeuButton
                                variant="accent"
                                size="sm"
                                href={liveUrl}
                                target="_blank"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live site
                            </NeuButton>
                        )}
                        {repoUrl && (
                            <NeuButton
                                size="sm"
                                href={repoUrl}
                                target="_blank"
                            >
                                <Github className="w-4 h-4" />
                                View repo
                            </NeuButton>
                        )}
                    </div>
                )}

                {/* Body + right sidebar */}
                <div
                    className={cn(
                        'mx-auto',
                        hasSidebar
                            ? 'flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-[64rem]'
                            : 'max-w-[48rem]',
                    )}
                >
                    {/* ── Mobile TOC — above content, hidden on desktop ── */}
                    {content && hasSidebar && (
                        <div className="lg:hidden">
                            <TableOfContents position="right" />
                        </div>
                    )}

                    {/* Prose content */}
                    {content && (
                        <div className="lg:col-start-1 lg:row-start-1">
                            <RichText
                                data={content}
                                enableGutter={false}
                                extraBlockConverters={{
                                    techStack: ({ node }) => (
                                        <TechStackBlock
                                            projectTechnologies={project.technologies}
                                            {...node.fields}
                                        />
                                    ),
                                }}
                            />
                        </div>
                    )}

                    {/* ── Desktop sidebar: TOC + Details + My Role (sticky) ── */}
                    {hasSidebar && (
                        <aside className="hidden lg:flex lg:flex-col lg:gap-4 lg:sticky lg:top-24 self-start lg:col-start-2 lg:row-start-1">
                            {content && <TableOfContents position="right" />}

                            {(startDate || duration || difficulty) && (
                                <div className="neu-raised rounded-2xl p-5 flex flex-col gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Details
                                    </p>
                                    <NeuDivider />
                                    <div className="flex flex-col gap-2 text-sm">
                                        {startDate && (
                                            <div className="flex justify-between gap-4">
                                                <span className="text-muted-foreground shrink-0">Start date</span>
                                                <time dateTime={startDate} className="text-right">
                                                    {formatDateTime(startDate)}
                                                </time>
                                            </div>
                                        )}
                                        {duration && (
                                            <div className="flex justify-between gap-4">
                                                <span className="text-muted-foreground shrink-0">Duration</span>
                                                <span className="text-right">{duration}</span>
                                            </div>
                                        )}
                                        {difficulty && (
                                            <div className="flex justify-between gap-4">
                                                <span className="text-muted-foreground shrink-0">Difficulty</span>
                                                <span className="text-right">
                                                    {difficultyLabel[difficulty] ?? difficulty}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </aside>
                    )}

                    {/* ── Mobile Details + My Role — below content, hidden on desktop ── */}
                    {hasDetails && (
                        <div className="lg:hidden flex flex-col gap-4">
                            {(startDate || duration || difficulty) && (
                                <div className="neu-raised rounded-2xl p-5 flex flex-col gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Details
                                    </p>
                                    <NeuDivider />
                                    <div className="flex flex-col gap-2 text-sm">
                                        {startDate && (
                                            <div className="flex justify-between gap-4">
                                                <span className="text-muted-foreground shrink-0">Start date</span>
                                                <time dateTime={startDate} className="text-right">
                                                    {formatDateTime(startDate)}
                                                </time>
                                            </div>
                                        )}
                                        {duration && (
                                            <div className="flex justify-between gap-4">
                                                <span className="text-muted-foreground shrink-0">Duration</span>
                                                <span className="text-right">{duration}</span>
                                            </div>
                                        )}
                                        {difficulty && (
                                            <div className="flex justify-between gap-4">
                                                <span className="text-muted-foreground shrink-0">Difficulty</span>
                                                <span className="text-right">
                                                    {difficultyLabel[difficulty] ?? difficulty}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
