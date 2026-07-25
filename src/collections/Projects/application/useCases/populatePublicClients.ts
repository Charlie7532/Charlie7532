import type { ClientRepository } from '../../domain/ports/ClientRepository'
import type { ClientPreview } from '../../domain/models/ClientPreview'

export async function populatePublicClients(
    clientRefs: any[],
    clientRepo: ClientRepository,
): Promise<ClientPreview[]> {
    if (!clientRefs || clientRefs.length === 0) {
        return []
    }

    const clientDocs: ClientPreview[] = []

    for (const client of clientRefs) {
        const id = typeof client === 'object' ? client?.id : client
        if (!id) continue

        const clientDoc = await clientRepo.getClientPreview(id)
        if (clientDoc) {
            clientDocs.push(clientDoc)
        }
    }

    return clientDocs
}