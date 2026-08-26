import { getPayload } from 'payload'
import config from '@payload-config'
import { seedAdditionalTechnologies } from '@/endpoints/seed/additional-technologies-seed'

export const maxDuration = 300

export async function GET(): Promise<Response> {
    try {
        const payload = await getPayload({ config })
        const req = {} as any

        const result = await seedAdditionalTechnologies(payload, req)

        return Response.json({
            success: true,
            message: 'Additional technologies seeded.',
            ...result,
        })
    } catch (e) {
        console.error('Error seeding additional technologies:', e)
        return Response.json({ success: false, error: String(e) }, { status: 500 })
    }
}
