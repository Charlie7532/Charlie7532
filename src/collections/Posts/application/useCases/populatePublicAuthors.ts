import type { UserRepository } from '../../domain/ports/UserRepository'
import type { AuthorPreview } from '../../domain/models/AuthorPreview'

export async function populatePublicAuthors(
    authorRefs: any[],
    userRepo: UserRepository,
): Promise<AuthorPreview[]> {
    if (!authorRefs || authorRefs.length === 0) {
        return []
    }

    const authorDocs: AuthorPreview[] = []

    for (const author of authorRefs) {
        const id = typeof author === 'object' ? author?.id : author
        if (!id) continue

        const authorDoc = await userRepo.getAuthorPreview(id)
        if (authorDoc) {
            authorDocs.push(authorDoc)
        }
    }

    return authorDocs
}