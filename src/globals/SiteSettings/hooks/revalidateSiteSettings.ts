import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateSiteSettings: GlobalAfterChangeHook = ({ doc, req: _req }) => {
    if (!doc) {
        return doc
    }

    console.log('Revalidating site-settings')

    revalidateTag('global_site-settings')

    return doc
}