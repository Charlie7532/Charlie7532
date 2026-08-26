import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { FeaturedProjectItem } from '@/modules/landing/interface/components/FeaturedProjects.client'
import type { LatestPostItem } from '@/modules/landing/interface/components/LatestPosts.client'
import type { TechCategory, Technology } from '@/payload-types'

/**
 * Application layer — landing page data use cases.
 * Fetches featured projects and latest posts from Payload.
 */

export async function getFeaturedProjects(limit = 6): Promise<FeaturedProjectItem[]> {
    try {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.find({
            collection: 'projects',
            depth: 1,
            limit,
            overrideAccess: false,
            where: {
                featured: { equals: true },
                _status: { equals: 'published' },
            },
            sort: '-completedAt',
            select: {
                title: true,
                slug: true,
                summary: true,
                meta: true,
                heroImage: true,
                completedAt: true,
                populatedTechnologies: true,
            },
        })
        return result.docs as FeaturedProjectItem[]
    } catch {
        return []
    }
}

export async function getLatestPosts(limit = 3): Promise<LatestPostItem[]> {
    try {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.find({
            collection: 'posts',
            depth: 0,
            limit,
            overrideAccess: false,
            where: { _status: { equals: 'published' } },
            sort: '-publishedAt',
            select: {
                title: true,
                slug: true,
                meta: true,
                publishedAt: true,
            },
        })
        return result.docs as LatestPostItem[]
    } catch {
        return []
    }
}

/**
 * A tech category with its resolved technologies, ready for the landing page.
 */
export type TechCategoryGroup = {
    id: number
    label: string
    slug: string
    order: number
    technologies: Technology[]
}

/**
 * Fetches tech categories flagged for the landing page, sorted by `order`,
 * then for each category fetches the featured technologies that belong to it.
 */
export async function getLandingTechGroups(): Promise<TechCategoryGroup[]> {
    try {
        const payload = await getPayload({ config: configPromise })

        // 1. Get landing-visible categories, ordered
        const catResult = await payload.find({
            collection: 'tech-categories',
            depth: 0,
            limit: 50,
            overrideAccess: false,
            where: { showOnLanding: { equals: true } },
            sort: 'order',
        })
        const categories = catResult.docs as TechCategory[]
        if (!categories.length) return []

        // 2. Get all featured technologies with populated logos + techCategories
        const techResult = await payload.find({
            collection: 'technologies',
            depth: 1,
            limit: 200,
            overrideAccess: false,
            where: { featured: { equals: true } },
            sort: 'name',
        })
        const allTechs = techResult.docs as Technology[]

        // 3. Group technologies by category — a tech may appear in multiple groups
        const groups: TechCategoryGroup[] = categories.map((cat) => ({
            id: cat.id,
            label: cat.label,
            slug: cat.slug,
            order: cat.order ?? 50,
            technologies: allTechs.filter((tech) => {
                const techCats = tech.techCategories
                if (!techCats || !Array.isArray(techCats)) return false
                return techCats.some((tc) => {
                    const catId = typeof tc === 'number' ? tc : tc?.id
                    return catId === cat.id
                })
            }),
        }))

        // Filter out empty groups
        return groups.filter((g) => g.technologies.length > 0)
    } catch {
        return []
    }
}
