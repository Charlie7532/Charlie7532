import type { Payload } from 'payload'
import type { TechnologyRepository } from '../../domain/ports/TechnologyRepository'
import type { TechnologyPreview } from '../../domain/models/TechnologyPreview'

export class PayloadTechnologyRepository implements TechnologyRepository {
    constructor(private readonly payload: Payload) {}

    async getTechnologyPreview(id: string | number): Promise<TechnologyPreview | null> {
        try {
            const doc = await this.payload.findByID({
                collection: 'technologies',
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