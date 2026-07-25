import { ClientPreview } from '../models/ClientPreview'

export interface ClientRepository {
    getClientPreview(id: string | number): Promise<ClientPreview | null>
}