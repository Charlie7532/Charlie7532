import React from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import type { Technology } from '@/payload-types'

type TechStackBlockProps = {
    blockType: 'techStack'
    source?: 'manual' | 'project' | null
    technologies?: (number | Technology)[] | null
    groupByCategory?: boolean | null
    projectTechnologies?: (number | Technology)[] | null
    className?: string
}

/** First populated tech category's label, or 'Other' when unassigned/unpopulated */
function getCategoryLabel(tech: Technology): string {
    const categories = tech.techCategories
    if (!categories || categories.length === 0) return 'Other'
    const first = categories[0]
    return typeof first === 'object' && first !== null ? first.label : 'Other'
}

const TechGrid = ({ techs }: { techs: Technology[] }) => (
    <div className="flex flex-wrap gap-6">
        {techs.map((tech) => (
            <div
                key={tech.id}
                className="flex flex-col items-center gap-2 w-20"
                title={tech.name}
            >
                {tech.logo && typeof tech.logo === 'object' && (
                    <div className="w-12 h-12 flex items-center justify-center">
                        <Media
                            resource={tech.logo}
                            imgClassName="w-12 h-12 object-contain"
                        />
                    </div>
                )}
                <span className="text-xs text-center leading-tight text-muted-foreground">
                    {tech.name}
                </span>
            </div>
        ))}
    </div>
)

export const TechStackBlock: React.FC<TechStackBlockProps> = ({
    source = 'manual',
    technologies,
    groupByCategory = true,
    projectTechnologies,
    className,
}) => {
    const effectiveTechs = source === 'project' ? projectTechnologies : technologies
    if (!effectiveTechs || effectiveTechs.length === 0) return null

    const resolved = effectiveTechs.filter((t): t is Technology => typeof t !== 'number')
    if (resolved.length === 0) return null

    return (
        <div className={cn('py-6', className)}>
            {source === 'project' && groupByCategory ? (
                <div className="flex flex-col gap-10">
                    {(() => {
                        const groups: Record<string, Technology[]> = {}
                        for (const tech of resolved) {
                            const key = getCategoryLabel(tech)
                            if (!groups[key]) groups[key] = []
                            groups[key]!.push(tech)
                        }
                        return Object.entries(groups).map(([label, techs]) => (
                            <div key={label} className="flex flex-col gap-4">
                                <h3 className="text-lg font-semibold italic">{label}:</h3>
                                <TechGrid techs={techs} />
                            </div>
                        ))
                    })()}
                </div>
            ) : (
                <TechGrid techs={resolved} />
            )}
        </div>
    )
}
