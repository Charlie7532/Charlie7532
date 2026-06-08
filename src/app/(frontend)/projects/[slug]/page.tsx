import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { ProjectHero } from '@/heros/ProjectHero'
import { ProjectArticle } from '@/components/ProjectArticle'
import PageClient from './page.client'

export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise })
    const projects = await payload.find({
        collection: 'projects',
        draft: false,
        limit: 1000,
        overrideAccess: false,
        pagination: false,
        select: { slug: true },
    })
    return projects.docs.map(({ slug }) => ({ slug }))
}

type Args = {
    params: Promise<{ slug?: string }>
}

export default async function ProjectPage({ params: paramsPromise }: Args) {
    const { isEnabled: draft } = await draftMode()
    const { slug = '' } = await paramsPromise
    const url = '/projects/' + slug
    const project = await queryProjectBySlug({ slug })

    if (!project) return <PayloadRedirects url={url} />

    return (
        <article className="pt-16 pb-16">
            <PageClient />
            <PayloadRedirects disableNotFound url={url} />
            {draft && <LivePreviewListener />}
            <ProjectHero project={project} />
            <ProjectArticle project={project} />
        </article>
    )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise
    const project = await queryProjectBySlug({ slug })
    return generateMeta({ doc: project })
}

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'projects',
        draft,
        limit: 1,
        overrideAccess: draft,
        pagination: false,
        depth: 2,
        where: { slug: { equals: slug } },
    })

    return result.docs?.[0] || null
})
