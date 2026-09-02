/**
 * Debug script — counts projects by status and by completedAt,
 * to verify what the archive stream should be showing.
 *
 * Run with:
 *   pnpm payload run src/scripts/debug-project-counts.ts
 */

import type { Payload } from 'payload'

export async function run({ payload }: { payload: Payload }) {
    const all = await payload.find({
        collection: 'projects',
        limit: 0,
        pagination: false,
        overrideAccess: true,
    })
    const published = await payload.count({
        collection: 'projects',
        overrideAccess: true,
        where: { _status: { equals: 'published' } },
    })
    const draft = await payload.count({
        collection: 'projects',
        overrideAccess: true,
        where: { _status: { equals: 'draft' } },
    })
    const noDate = await payload.count({
        collection: 'projects',
        overrideAccess: true,
        where: { _status: { equals: 'published' }, completedAt: { exists: false } },
    })

    payload.logger.info(`── Projects count ─────────────────────────`)
    payload.logger.info(`All docs (any status): ${all.totalDocs}`)
    payload.logger.info(`Published:             ${published.totalDocs}`)
    payload.logger.info(`Draft:                 ${draft.totalDocs}`)
    payload.logger.info(`Published w/o date:    ${noDate.totalDocs}`)

    const sorted = await payload.find({
        collection: 'projects',
        limit: 100,
        pagination: false,
        overrideAccess: true,
        where: { _status: { equals: 'published' } },
        sort: '-completedAt',
        select: { title: true, slug: true, completedAt: true },
    })
    payload.logger.info(`── Published order (-completedAt) ─────────`)
    for (const doc of sorted.docs) {
        payload.logger.info(
            `  ${doc.completedAt ?? '— no date'} | ${doc.title} (${doc.slug})`,
        )
    }
}
