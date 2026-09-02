import {
    ARCHIVE_PAGE_SIZE,
    ARCHIVE_SELECT_FIELDS,
    type ArchivePage,
} from '../../domain/models/archive'

/**
 * Application layer — client-side archive use case (REST API).
 *
 * Fetches one page of the archive stream through Payload's built-in REST
 * endpoint. Deliberately free of any Payload/server imports so client
 * components can bundle it without pulling in the Payload config.
 */

type ProjectsRestResponse = {
    docs: ArchivePage['items']
    totalDocs: number
    page: number
    totalPages: number
}

export async function fetchProjectsArchivePage(page: number): Promise<ArchivePage> {
    const params = new URLSearchParams({
        depth: '1',
        limit: String(ARCHIVE_PAGE_SIZE),
        page: String(page),
        sort: '-completedAt,-createdAt',
        'where[_status][equals]': 'published',
    })
    for (const field of ARCHIVE_SELECT_FIELDS) {
        params.set(`select[${field}]`, 'true')
    }

    const response = await fetch(`/api/projects?${params.toString()}`)
    if (!response.ok) {
        throw new Error(`Failed to load projects (HTTP ${response.status})`)
    }

    const data = (await response.json()) as ProjectsRestResponse
    return {
        items: data.docs ?? [],
        page: data.page ?? page,
        totalPages: data.totalPages ?? 1,
        totalDocs: data.totalDocs ?? 0,
    }
}
