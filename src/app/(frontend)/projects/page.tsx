import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'

import { Media } from '@/components/Media'
import { Pagination } from '@/components/Pagination'
import { PageRange } from '@/components/PageRange'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ProjectsPage() {
    const payload = await getPayload({ config: configPromise })

    const projects = await payload.find({
        collection: 'projects',
        depth: 1,
        limit: 12,
        overrideAccess: false,
        select: {
            title: true,
            slug: true,
            summary: true,
            heroImage: true,
            techStack: true,
            categories: true,
            client: true,
            meta: true,
        },
    })

    return (
        <div className="pt-24 pb-24">
            <PageClient />
            <div className="container mb-16">
                <div className="prose dark:prose-invert max-w-none">
                    <h1>Projects</h1>
                </div>
            </div>

            <div className="container mb-8">
                <PageRange
                    collection="projects"
                    currentPage={projects.page}
                    limit={12}
                    totalDocs={projects.totalDocs}
                />
            </div>

            <div className="container">
                <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8">
                    {projects.docs.map((project) => {
                        const { slug, title, summary, heroImage, technologies, clients, meta } = project
                        const image = heroImage ?? meta?.image
                        const firstClient = clients?.[0]
                        const clientName = firstClient && typeof firstClient !== 'number' ? firstClient.name : null

                        return (
                            <div key={slug} className="col-span-4">
                                <Link href={`/projects/${slug}`} className="group block overflow-hidden hover:cursor-pointer">
                                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded mb-4 bg-gray-100 dark:bg-gray-800">
                                        {image && typeof image !== 'string' ? (
                                            <Media
                                                resource={image}
                                                fill
                                                size="33vw"
                                                imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                                No image
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-2">
                                        {clientName && (
                                            <p className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-1 tracking-widest">
                                                {clientName}
                                            </p>
                                        )}
                                        <h2 className="text-lg font-semibold group-hover:underline mb-2">{title}</h2>
                                        {summary && (
                                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{summary}</p>
                                        )}
                                        {technologies && technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-3">
                                                {technologies.slice(0, 4).map((tech) => {
                                                    const techName = typeof tech !== 'number' ? tech.name : null
                                                    return techName ? (
                                                        <span
                                                            key={techName}
                                                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
                                                        >
                                                            {techName}
                                                        </span>
                                                    ) : null
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-12">
                {projects.totalPages > 1 && projects.page && (
                    <Pagination page={projects.page} totalPages={projects.totalPages} />
                )}
            </div>
        </div>
    )
}

export function generateMetadata(): Metadata {
    return {
        title: 'Projects',
    }
}
