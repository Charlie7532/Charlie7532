import React from 'react'
import RichText from '@/components/RichText'
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
    const { content, liveUrl, repoUrl, startDate, duration, difficulty, role } = project

    const hasDetails = startDate || duration || difficulty || role

    return (
        <div className="flex flex-col items-center gap-4 pt-8">
            <div className="container">
                {/* Links bar */}
                {(liveUrl || repoUrl) && (
                    <div className={cn('flex gap-4 mb-10', hasDetails ? 'max-w-[64rem] mx-auto' : 'max-w-[48rem] mx-auto')}>
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium border border-current rounded-full px-4 py-1.5 hover:opacity-70 transition-opacity"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live site
                            </a>
                        )}
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium border border-current rounded-full px-4 py-1.5 hover:opacity-70 transition-opacity"
                            >
                                <Github className="w-4 h-4" />
                                View repo
                            </a>
                        )}
                    </div>
                )}

                {/* Body + optional details sidebar */}
                <div
                    className={cn(
                        'mx-auto',
                        hasDetails
                            ? 'grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 max-w-[64rem]'
                            : 'max-w-[48rem]',
                    )}
                >
                    {/* Prose content */}
                    {content && (
                        <div>
                            <RichText data={content} enableGutter={false} />
                        </div>
                    )}

                    {/* Details sidebar */}
                    {hasDetails && (
                        <aside className="lg:sticky lg:top-24 self-start flex flex-col gap-4">
                            {/* Details card */}
                            {(startDate || duration || difficulty) && (
                                <div className="rounded-xl border border-border p-5 flex flex-col gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Details
                                    </p>
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

                            {/* My Role card */}
                            {role && (
                                <div className="rounded-xl border border-border p-5 flex flex-col gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        My Role
                                    </p>
                                    <p className="text-sm leading-relaxed">{role}</p>
                                </div>
                            )}
                        </aside>
                    )}
                </div>
            </div>
        </div>
    )
}
