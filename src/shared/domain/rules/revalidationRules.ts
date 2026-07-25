/**
 * Pure rules to determine if a document state change warrants a cache revalidation.
 * Shared between Pages, Posts, and Projects collections.
 */

export function requiresRevalidationOnUpdate(
    currentStatus?: string | null,
    previousStatus?: string | null,
): boolean {
    if (currentStatus === 'published') return true

    if (previousStatus === 'published' && currentStatus !== 'published') return true

    return false
}

export function requiresRevalidationOnDelete(): boolean {
    return true
}

export function isNewlyUnpublished(
    currentStatus?: string | null,
    previousStatus?: string | null,
): boolean {
    return previousStatus === 'published' && currentStatus !== 'published'
}

export function isCurrentlyPublished(currentStatus?: string | null): boolean {
    return currentStatus === 'published'
}