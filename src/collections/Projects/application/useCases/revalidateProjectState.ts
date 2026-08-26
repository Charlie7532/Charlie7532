import type { CacheRevalidator } from '../../../../shared/domain/ports/CacheRevalidator'
import {
    isCurrentlyPublished,
    isNewlyUnpublished,
    requiresRevalidationOnDelete,
    requiresRevalidationOnUpdate,
} from '../../../../shared/domain/rules/revalidationRules'
import { getProjectWebPath } from '../../domain/rules/projectRouteRules'

export interface RevalidationPayloadLogger {
    info(msg: string): void
}

export function revalidateProjectStateOnUpdate(
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
        const path = getProjectWebPath(currentDoc.slug)
        logger.info(`Revalidating project at path: ${path}`)
        cacheRevalidator.revalidatePath(path)
        cacheRevalidator.revalidateTag('projects')
        cacheRevalidator.revalidateTag('projects-sitemap')
    }

    if (previousDoc && isNewlyUnpublished(currentDoc._status, previousDoc._status)) {
        const oldPath = getProjectWebPath(previousDoc.slug)
        logger.info(`Revalidating old project at path: ${oldPath}`)
        cacheRevalidator.revalidatePath(oldPath)
        cacheRevalidator.revalidateTag('projects')
        cacheRevalidator.revalidateTag('projects-sitemap')
    }
}

export function revalidateProjectStateOnDelete(
    deletedDoc: { slug?: string | null; _status?: string | null },
    cacheRevalidator: CacheRevalidator,
): void {
    if (requiresRevalidationOnDelete()) {
        const path = getProjectWebPath(deletedDoc?.slug)
        cacheRevalidator.revalidatePath(path)
        cacheRevalidator.revalidateTag('projects')
        cacheRevalidator.revalidateTag('projects-sitemap')
    }
}