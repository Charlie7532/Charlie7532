import configPromise from '@payload-config'
import { getPayload } from 'payload'

import {
    ARCHIVE_PAGE_SIZE,
    type ArchivePage,
    type ProjectArchiveItem,
} from '../../domain/models/archive'

/**
 * Application layer — server-side projects archive use cases (Local API).
 *
 * The archive is a single paginated stream of published projects sorted by
 * recency (`-completedAt`). The first `GRID_OFFSET` docs of page 1 are
 * reserved for the "Latest" hero row; every other doc flows through the
 * infinite-scroll grid. All pages use the same page size, so page numbering
 * stays consistent between the server render and client-side fetching.
 *
 * Server-only — imports the Payload config. Client components must use
 * `fetchProjectsArchivePage` (REST) instead.
 */

async function findArchiveProjects(page: number, limit: number) {
    const payload = await getPayload({ config: configPromise })
    return payload.find({
        collection: 'projects',
        depth: 1,
        page,
        limit,
        overrideAccess: false,
        where: { _status: { equals: 'published' } },
        sort: '-completedAt',
        select: {
            title: true,
            slug: true,
            summary: true,
            meta: true,
            heroImage: true,
            completedAt: true,
            populatedClients: true,
            populatedTechnologies: true,
        },
    })
}

/** The most recent projects — rendered side by side at the top of the archive. */
export async function getLatestProjects(limit = 2): Promise<ProjectArchiveItem[]> {
    try {
        const result = await findArchiveProjects(1, limit)
        return result.docs as ProjectArchiveItem[]
    } catch {
        return []
    }
}

/** One page of the archive stream — server side, for the initial render. */
export async function getProjectsArchivePage(page = 1): Promise<ArchivePage> {
    try {
        const result = await findArchiveProjects(page, ARCHIVE_PAGE_SIZE)
        return {
            items: result.docs as ProjectArchiveItem[],
            page: result.page ?? page,
            totalPages: result.totalPages ?? 1,
            totalDocs: result.totalDocs ?? 0,
        }
    } catch {
        return { items: [], page, totalPages: 1, totalDocs: 0 }
    }
}
