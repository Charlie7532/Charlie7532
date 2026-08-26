import type { PayloadRequest } from 'payload'

export function formatUserAvatarUpload(data: any, req: PayloadRequest, operation: string) {
    if (operation === 'create' && req.user && !data.user) {
        data.user = req.user.id
    }

    if (!data.alt) {
        const user = req?.user as any
        const userName = user?.name || user?.email || 'user'
        data.alt = `${userName} - avatar`
    }

    return data
}