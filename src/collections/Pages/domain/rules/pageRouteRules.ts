export function getPageWebPath(slug?: string | null): string {
    if (!slug) return '/'
    return slug === 'home' ? '/' : `/${slug}`
}