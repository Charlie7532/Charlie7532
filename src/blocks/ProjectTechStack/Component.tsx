import React from 'react'
import { Media } from '@/components/Media'
import type { Technology } from '@/payload-types'

type Props = {
    groupByCategory?: boolean | null
    technologies?: (number | Technology)[] | null
}

export function ProjectTechStackComponent({ groupByCategory = true, technologies }: Props) {
    if (!technologies || technologies.length === 0) return null

    const resolved = technologies.filter((t): t is Technology => typeof t !== 'number')
    if (resolved.length === 0) return null

    // Group by category
    const groups: Record<string, Technology[]> = {}
    for (const tech of resolved) {
        const key = tech.category ?? 'other'
        if (!groups[key]) groups[key] = []
        groups[key]!.push(tech)
    }

    const categoryLabels: Record<string, string> = {
        cad: 'Design & CAD',
        manufacturing: 'Manufacturing',
        '3d-printing': '3D Printing',
        material: 'Materials',
        software: 'Software',
        firmware: 'Firmware',
        hardware: 'Hardware',
        other: 'Other',
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

    return (
        <div className="py-6">
            {groupByCategory ? (
                <div className="flex flex-col gap-10">
                    {Object.entries(groups).map(([cat, techs]) => (
                        <div key={cat} className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold italic">
                                {categoryLabels[cat] ?? cat}:
                            </h3>
                            <TechGrid techs={techs} />
                        </div>
                    ))}
                </div>
            ) : (
                <TechGrid techs={resolved} />
            )}
        </div>
    )
}
