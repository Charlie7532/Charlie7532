import type { TechnologyRepository } from '../../domain/ports/TechnologyRepository'
import type { TechnologyPreview } from '../../domain/models/TechnologyPreview'

export async function populatePublicTechnologies(
    technologyRefs: any[],
    technologyRepo: TechnologyRepository,
): Promise<TechnologyPreview[]> {
    if (!technologyRefs || technologyRefs.length === 0) {
        return []
    }

    const technologyDocs: TechnologyPreview[] = []

    for (const tech of technologyRefs) {
        const id = typeof tech === 'object' ? tech?.id : tech
        if (!id) continue

        const techDoc = await technologyRepo.getTechnologyPreview(id)
        if (techDoc) {
            technologyDocs.push(techDoc)
        }
    }

    return technologyDocs
}