export function getProjectWebPath(slug?: string | null): string {
    if (!slug) return '/projects'
    return `/projects/${slug}`
}