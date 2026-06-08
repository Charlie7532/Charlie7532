import React from 'react'
import RichText from '@/components/RichText'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectArticleProps {
    project: any
}

export function ProjectArticle({ project }: ProjectArticleProps) {
    const { content, liveUrl, repoUrl } = project

    return (
        <div className="flex flex-col items-center gap-4 pt-8">
            <div className="container">
                {/* Links bar */}
                {(liveUrl || repoUrl) && (
                    <div className="flex gap-4 mb-10 max-w-[48rem] mx-auto">
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

                {/* Body */}
                {content && (
                    <div className="max-w-[48rem] mx-auto">
                        <RichText data={content} enableGutter={false} />
                    </div>
                )}
            </div>
        </div>
    )
}
