import type { Project } from '@/payload-types'

/**
 * Domain layer — projects archive models.
 * Pure types and constants, shared by server and client use cases.
 * Type-only imports — safe to bundle into client components.
 */

/** Docs per page in the archive stream (server + REST). */
export const ARCHIVE_PAGE_SIZE = 20
/** Docs at the top of page 1 that power the hero row instead of the grid. */
export const GRID_OFFSET = 2

/** The minimal project shape rendered by the archive. */
export type ProjectArchiveItem = Pick<
    Project,
    | 'id'
    | 'title'
    | 'slug'
    | 'summary'
    | 'meta'
    | 'heroImage'
    | 'completedAt'
    | 'populatedClients'
    | 'populatedTechnologies'
>

/** One page of the archive stream, ready for rendering. */
export type ArchivePage = {
    items: ProjectArchiveItem[]
    page: number
    totalPages: number
    totalDocs: number
}

/** Fields the archive renders — single source for the REST select params. */
export const ARCHIVE_SELECT_FIELDS = [
    'title',
    'slug',
    'summary',
    'meta',
    'heroImage',
    'completedAt',
    'populatedClients',
    'populatedTechnologies',
] as const
