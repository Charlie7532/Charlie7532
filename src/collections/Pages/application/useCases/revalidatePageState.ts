import type { CacheRevalidator } from '../../../../shared/domain/ports/CacheRevalidator'
import {
    isCurrentlyPublished,
    isNewlyUnpublished,
    requiresRevalidationOnDelete,
    requiresRevalidationOnUpdate,
} from '../../../../shared/domain/rules/revalidationRules'
import { getPageWebPath } from '../../domain/rules/pageRouteRules'

export interface RevalidationPayloadLogger {
    info(msg: string): void
}

export function revalidatePageStateOnUpdate(
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
        const path = getPageWebPath(currentDoc.slug)
        logger.info(`Revalidating page at path: ${path}`)
        cacheRevalidator.revalidatePath(path)
        cacheRevalidator.revalidateTag('pages-sitemap')
    }

    if (previousDoc && isNewlyUnpublished(currentDoc._status, previousDoc._status)) {
        const oldPath = getPageWebPath(previousDoc.slug)
        logger.info(`Revalidating old page at path: ${oldPath}`)
        cacheRevalidator.revalidatePath(oldPath)
        cacheRevalidator.revalidateTag('pages-sitemap')
    }
}

export function revalidatePageStateOnDelete(
    deletedDoc: { slug?: string | null; _status?: string | null },
    cacheRevalidator: CacheRevalidator,
): void {
    if (requiresRevalidationOnDelete()) {
        const path = getPageWebPath(deletedDoc?.slug)
        cacheRevalidator.revalidatePath(path)
        cacheRevalidator.revalidateTag('pages-sitemap')
    }
}