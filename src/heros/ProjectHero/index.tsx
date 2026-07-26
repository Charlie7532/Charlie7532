import React from 'react'
import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

export const ProjectHero: React.FC<{ project: any }> = ({ project }) => {
    const { title, heroImage, client, role, completedAt, techStack, categories } = project
    const hasHeroImage = heroImage && typeof heroImage !== 'string'

    return (
        <div className={`relative flex items-end ${hasHeroImage ? '-mt-[10.4rem]' : 'pt-16 pb-4'}`}>
            <div
                className={`container z-10 relative pb-8 ${hasHeroImage ? 'text-white' : ''}`}
            >
                <div className="max-w-[64rem] mx-auto">
                    {categories && categories.length > 0 && (
                        <div className="uppercase text-sm mb-6">
                            {categories.map((cat: any, i: number) => {
                                if (typeof cat !== 'object') return null
                                return (
                                    <React.Fragment key={i}>
                                        {cat.title}
                                        {i < categories.length - 1 && <React.Fragment>, &nbsp;</React.Fragment>}
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    )}

                    <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        {client && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm opacity-70">Client</p>
                                <p>{client}</p>
                            </div>
                        )}
                        {completedAt && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm opacity-70">Completed</p>
                                <time dateTime={completedAt}>{formatDateTime(completedAt)}</time>
                            </div>
                        )}
                        {role && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm opacity-70">Role</p>
                                <p>{role}</p>
                            </div>
                        )}
                    </div>

                    {techStack && techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {techStack.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="text-xs bg-white/20 border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {hasHeroImage && (
                <div className="min-h-[80vh] select-none">
                    <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
                    <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />
                </div>
            )}
        </div>
    )
}
