import type { Payload } from 'payload'
import type { ClientRepository } from '../../domain/ports/ClientRepository'
import type { ClientPreview } from '../../domain/models/ClientPreview'

export class PayloadClientRepository implements ClientRepository {
    constructor(private readonly payload: Payload) {}

    async getClientPreview(id: string | number): Promise<ClientPreview | null> {
        try {
            const doc = await this.payload.findByID({
                collection: 'clients',
                id,
                depth: 0,
            })

            if (!doc) {
                return null
            }

            return {
                id: doc.id,
                name: doc.name as string,
            }
        } catch {
            return null
        }
    }
}