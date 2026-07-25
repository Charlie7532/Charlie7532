import { getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'
import { run } from '@/scripts/migrate-wp-projects'

export const maxDuration = 300

export async function GET(): Promise<Response> {
    const payload = await getPayload({ config })
    const requestHeaders = await headers()

    const { user } = await payload.auth({ headers: requestHeaders })
    if (!user) {
        return new Response('Forbidden – must be logged in to Payload admin.', { status: 403 })
    }

    try {
        await run({ payload })
        return Response.json({ success: true, message: 'Migration complete – check server logs for details.' })
    } catch (e) {
        payload.logger.error({ err: e, message: 'WP migration failed' })
        return new Response(`Migration failed: ${(e as Error).message}`, { status: 500 })
    }
}
