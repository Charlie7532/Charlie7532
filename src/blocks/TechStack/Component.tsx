import React from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import type { Technology } from '@/payload-types'

// Inline type until payload-types regenerates after block is registered
type TechGroup = {
    groupLabel?: string | null
    description?: string | null
    technologies?: (number | Technology)[] | null
}

type TechStackBlockProps = {
    blockType: 'techStack'
    sectionHeading?: string | null
    groups: TechGroup[]
    className?: string
}

export const TechStackBlock: React.FC<TechStackBlockProps> = ({
    sectionHeading,
    groups,
    className,
}) => {
    return (
        <div className={cn('py-6', className)}>
            {sectionHeading && (
                <h2 className="text-2xl font-bold mb-8">{sectionHeading}</h2>
            )}

            {groups && groups.length > 0 && (
                <div className="flex flex-col gap-10">
                    {groups.map((group, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            {group.groupLabel && (
                                <h3 className="text-lg font-semibold italic">{group.groupLabel}:</h3>
                            )}
                            {group.description && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {group.description}
                                </p>
                            )}
                            {group.technologies && group.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-6">
                                    {group.technologies.map((tech, j) => {
                                        if (typeof tech === 'number') return null
                                        const technology = tech as Technology
                                        return (
                                            <div
                                                key={j}
                                                className="flex flex-col items-center gap-2 w-20"
                                                title={technology.name}
                                            >
                                                {technology.logo &&
                                                    typeof technology.logo === 'object' && (
                                                        <div className="w-12 h-12 flex items-center justify-center">
                                                            <Media
                                                                resource={technology.logo}
                                                                imgClassName="w-12 h-12 object-contain"
                                                            />
                                                        </div>
                                                    )}
                                                <span className="text-xs text-center leading-tight">
                                                    {technology.name}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
