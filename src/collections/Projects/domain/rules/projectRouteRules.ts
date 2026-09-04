export function getProjectWebPath(slug?: string | null): string {
    if (!slug) return '/projects'
    return `/projects/${slug}`
}

/** The archive listing — reflects any publish-state or card-content change. */
export function getProjectsArchivePath(): string {
    return '/projects'
}