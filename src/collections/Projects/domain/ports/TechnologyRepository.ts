import { TechnologyPreview } from '../models/TechnologyPreview'

export interface TechnologyRepository {
    getTechnologyPreview(id: string | number): Promise<TechnologyPreview | null>
}