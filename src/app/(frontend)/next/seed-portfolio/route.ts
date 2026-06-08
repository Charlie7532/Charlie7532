import { getPayload } from 'payload'
import config from '@payload-config'
import { seedTechnologies } from '@/endpoints/seed/technologies-seed'
import { seedInstitutes } from '@/endpoints/seed/institutes-seed'
import { seedClients } from '@/endpoints/seed/clients-seed'

export const maxDuration = 300

export async function GET(): Promise<Response> {
    try {
        const payload = await getPayload({ config })
        const req = {} as any

        await seedTechnologies(payload, req)
        await seedInstitutes(payload, req)
        await seedClients(payload, req)

        return Response.json({ success: true, message: 'Technologies, institutes, and clients seeded.' })
    } catch (e) {
        console.error('Error seeding portfolio:', e)
        return Response.json({ success: false, error: String(e) }, { status: 500 })
    }
}
