import type { Project } from '@/payload-types'

/**
 * Domain layer — projects archive models.
 * Pure types and constants, shared by server and interface layers.
 * Type-only imports — safe to bundle into client components.
 */

/** Docs at the top of the archive that power the hero row instead of the grid. */
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
    | 'startDate'
    | 'createdAt'
    | 'completedAt'
    | 'populatedClients'
    | 'populatedTechnologies'
>
