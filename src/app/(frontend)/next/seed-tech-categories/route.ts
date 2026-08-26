import { getPayload } from 'payload'
import config from '@payload-config'
import { seedTechCategories } from '@/endpoints/seed/tech-categories-seed'

export const maxDuration = 300

export async function GET(): Promise<Response> {
    try {
        const payload = await getPayload({ config })
        const req = {} as any

        const result = await seedTechCategories(payload, req)

        return Response.json({
            success: true,
            message: 'Tech categories seeded.',
            ...result,
        })
    } catch (e) {
        console.error('Error seeding tech categories:', e)
        return Response.json({ success: false, error: String(e) }, { status: 500 })
    }
}
