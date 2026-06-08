/**
 * One-time seed script for Technologies, Institutes, and Clients.
 *
 * Run with:
 *   pnpm payload run src/scripts/seed-portfolio.ts
 */

import type { Payload } from 'payload'
import { seedTechnologies } from '../endpoints/seed/technologies-seed'
import { seedInstitutes } from '../endpoints/seed/institutes-seed'
import { seedClients } from '../endpoints/seed/clients-seed'

// payload run injects `payload` into the module scope
export async function run({ payload }: { payload: Payload }) {
    const req = {} as any  // local API calls don't need a full req

    await seedTechnologies(payload, req)
    await seedInstitutes(payload, req)
    await seedClients(payload, req)

    payload.logger.info('✓ Portfolio seed complete')
}
