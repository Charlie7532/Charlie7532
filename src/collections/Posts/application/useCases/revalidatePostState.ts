import type { CacheRevalidator } from '../../../../shared/domain/ports/CacheRevalidator'
import {
    isCurrentlyPublished,
    isNewlyUnpublished,
    requiresRevalidationOnDelete,
    requiresRevalidationOnUpdate,
} from '../../../../shared/domain/rules/revalidationRules'

export interface RevalidationPayloadLogger {
    info(msg: string): void
}

export function revalidatePostStateOnUpdate(
    currentDoc: { slug?: string | null; _status?: string | null },
    previousDoc: { slug?: string | null; _status?: string | null } | undefined,
    cacheRevalidator: CacheRevalidator,
    logger: RevalidationPayloadLogger,
): void {
    if (
        !requiresRevalidationOnUpdate(currentDoc._status, previousDoc?._status)
    ) {
        return
    }

    if (isCurrentlyPublished(currentDoc._status)) {
        const path = `/posts/${currentDoc.slug}`
        logger.info(`Revalidating post at path: ${path}`)
        cacheRevalidator.revalidatePath(path)
        cacheRevalidator.revalidateTag('posts-sitemap')
    }

    if (previousDoc && isNewlyUnpublished(currentDoc._status, previousDoc._status)) {
        const oldPath = `/posts/${previousDoc.slug}`
        logger.info(`Revalidating old post at path: ${oldPath}`)
        cacheRevalidator.revalidatePath(oldPath)
        cacheRevalidator.revalidateTag('posts-sitemap')
    }
}

export function revalidatePostStateOnDelete(
    deletedDoc: { slug?: string | null; _status?: string | null },
    cacheRevalidator: CacheRevalidator,
): void {
    if (requiresRevalidationOnDelete()) {
        const path = `/posts/${deletedDoc?.slug}`
        cacheRevalidator.revalidatePath(path)
        cacheRevalidator.revalidateTag('posts-sitemap')
    }
}