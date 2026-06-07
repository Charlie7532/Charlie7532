import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']
type GlobalData<TSlug extends Global> = Config['globals'][TSlug]

const isMissingRelationError = (error: unknown): boolean => {
  return error instanceof Error && /relation .* does not exist/i.test(error.message)
}

async function getGlobal<TSlug extends Global>(slug: TSlug, depth = 0): Promise<GlobalData<TSlug> | null> {
  try {
    const payload = await getPayload({ config: configPromise })

    const global = await payload.findGlobal({
      slug,
      depth,
    })

    return global as GlobalData<TSlug>
  } catch (error) {
    const reason = isMissingRelationError(error)
      ? 'the Payload/Postgres schema is out of sync'
      : 'an unexpected error occurred'

    console.warn(
      `[getCachedGlobal] Failed to load global "${slug}" because ${reason}. Returning null so the page can still render.`,
      error,
    )

    return null
  }
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = <TSlug extends Global>(slug: TSlug, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug, String(depth)], {
    tags: [`global_${slug}`],
  })
