type ProjectDateFields = {
    startDate?: string | null
    createdAt?: string | null
}

/**
 * Most recently started first. Projects without a start date cannot be
 * ranked by start, so they sink to the end of the archive (newest-created
 * first among themselves).
 *
 * Owns the archive ordering because Postgres `DESC` sorts NULLs first —
 * a plain `-startDate` sort would float unranked projects to the top.
 */
export function orderProjectsForArchive<T extends ProjectDateFields>(projects: T[]): T[] {
    const byStartDesc = (a: T, b: T) => {
        if (a.startDate === b.startDate) return compareDesc(a.createdAt, b.createdAt)
        return a.startDate! < b.startDate! ? 1 : -1
    }

    const dated = projects
        .filter((project): project is T & { startDate: string } => Boolean(project.startDate))
        .sort(byStartDesc)

    const undated = projects
        .filter((project) => !project.startDate)
        .sort((a, b) => compareDesc(a.createdAt, b.createdAt))

    return [...dated, ...undated]
}

/** Descending string compare for ISO dates — `undefined`/null sort last. */
function compareDesc(a?: string | null, b?: string | null): number {
    if (a === b) return 0
    if (!a) return 1
    if (!b) return -1
    return a < b ? 1 : -1
}
