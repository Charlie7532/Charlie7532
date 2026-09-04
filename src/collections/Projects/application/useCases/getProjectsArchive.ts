import configPromise from '@payload-config'
import { getPayload } from 'payload'

import {
    type ProjectArchiveItem,
} from '../../domain/models/archive'
import { orderProjectsForArchive } from '../../domain/rules/projectOrderRules'

/**
 * Application layer — server-side projects archive use case (Local API).
 *
 * Fetches every published project once and lets the domain rule own the
 * ordering: most recently started first, projects without a start date
 * sinking to the end.
 *
 * In-memory ordering is required because Postgres sorts NULLs first on
 * `DESC` and Payload's sort syntax has no `NULLS LAST` — a per-page SQL
 * sort would float unranked projects to the top of every page instead of
 * the end of the archive.
 *
 * Server-only — imports the Payload config.
 */

export async function getProjectsArchive(): Promise<ProjectArchiveItem[]> {
    try {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.find({
            collection: 'projects',
            depth: 1,
            pagination: false,
            overrideAccess: false,
            where: { _status: { equals: 'published' } },
            select: {
                title: true,
                slug: true,
                summary: true,
                meta: true,
                heroImage: true,
                startDate: true,
                createdAt: true,
                completedAt: true,
                populatedClients: true,
                populatedTechnologies: true,
            },
        })
        return orderProjectsForArchive(result.docs as ProjectArchiveItem[])
    } catch {
        return []
    }
}
