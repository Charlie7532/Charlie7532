import React from 'react'
import { Media } from '@/components/Media'
import { NeuChip, NeuDivider } from '@/components/ui/neu'
import { formatDateTime } from '@/utilities/formatDateTime'

export const ProjectHero: React.FC<{ project: any }> = ({ project }) => {
    const { title, heroImage, client, role, completedAt, techStack, categories } = project
    const hasHeroImage = heroImage && typeof heroImage !== 'string'

    return (
        <div className="container pt-20 pb-8">
            <div className="max-w-[64rem] mx-auto flex flex-col gap-8">
                {/* Category chips */}
                {categories && categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat: any, i: number) => {
                            if (typeof cat !== 'object') return null
                            return (
                                <NeuChip key={i} mono size="sm">
                                    {cat.title}
                                </NeuChip>
                            )
                        })}
                    </div>
                )}

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{title}</h1>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4">
                    {client && (
                        <div className="neu-raised flex flex-col gap-1 rounded-2xl px-5 py-3">
                            <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                                Client
                            </p>
                            <p className="text-sm font-semibold">{client}</p>
                        </div>
                    )}
                    {completedAt && (
                        <div className="neu-raised flex flex-col gap-1 rounded-2xl px-5 py-3">
                            <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                                Completed
                            </p>
                            <time dateTime={completedAt} className="text-sm font-semibold">
                                {formatDateTime(completedAt)}
                            </time>
                        </div>
                    )}
                    {role && (
                        <div className="neu-raised flex flex-col gap-1 rounded-2xl px-5 py-3">
                            <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                                Role
                            </p>
                            <p className="text-sm font-semibold">{role}</p>
                        </div>
                    )}
                </div>

                {/* Tech stack chips */}
                {techStack && techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech: string) => (
                            <NeuChip key={tech} size="sm">
                                {tech}
                            </NeuChip>
                        ))}
                    </div>
                )}

                <NeuDivider />

                {/* Hero image in neumorphic frame */}
                {hasHeroImage && (
                    <div className="neu-raised rounded-[2.5rem] p-4">
                        <div className="neu-inset relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                            <Media fill priority imgClassName="object-cover" resource={heroImage} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
