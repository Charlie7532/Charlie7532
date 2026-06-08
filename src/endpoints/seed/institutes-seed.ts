import type { File, Payload, PayloadRequest } from 'payload'

type InstituteEntry = {
    name: string
    logo: string
    type: 'university' | 'certification' | 'bootcamp' | 'other'
}

// prettier-ignore
const INSTITUTES: InstituteEntry[] = [
    { name: 'San Ignacio', logo: 'https://cdn.juancbotero.com/assets/pictures/institutions/primavera_h100.svg', type: 'university' },
    { name: 'EAFIT', logo: 'https://cdn.juancbotero.com/assets/pictures/institutions/eafit_h100.svg', type: 'university' },
    { name: 'Udemy', logo: 'https://cdn.juancbotero.com/assets/pictures/institutions/holz_h100.svg', type: 'bootcamp' },
    { name: 'MIT | xPro', logo: 'https://cdn.juancbotero.com/assets/pictures/institutions/sofasa_h100.svg', type: 'certification' },
    { name: 'Coursera', logo: 'https://cdn.juancbotero.com/assets/pictures/institutions/multiplo_h100.svg', type: 'bootcamp' },
    { name: 'Google', logo: 'https://cdn.juancbotero.com/assets/pictures/institutions/multiplo_h100.svg', type: 'certification' },
]

function getMimeType(url: string): string {
    const ext = (url.split('?')[0] ?? url).split('.').pop()?.toLowerCase() ?? ''
    const map: Record<string, string> = {
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        webp: 'image/webp',
    }
    return map[ext] ?? 'image/png'
}

async function fetchLogoFile(url: string, name: string): Promise<File> {
    const res = await fetch(url, { method: 'GET' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.arrayBuffer()
    const filename =
        (url.split('?')[0] ?? url).split('/').pop() ??
        `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`
    return {
        name: filename,
        data: Buffer.from(data),
        mimetype: getMimeType(url),
        size: data.byteLength,
    }
}

export async function seedInstitutes(payload: Payload, req: PayloadRequest): Promise<void> {
    payload.logger.info('— Seeding institutes...')

    // Clear existing (table may not exist yet on first run)
    try {
        await payload.db.deleteMany({ collection: 'institutes' as any, req, where: {} })
    } catch {
        payload.logger.info('  institutes table not found — skipping clear')
    }

    const mediaCache = new Map<string, string>()
    let created = 0

    for (const institute of INSTITUTES) {
        let logoId: number | undefined

        try {
            if (mediaCache.has(institute.logo)) {
                logoId = Number(mediaCache.get(institute.logo))
            } else {
                const file = await fetchLogoFile(institute.logo, institute.name)
                const mediaDoc = await payload.create({
                    collection: 'media',
                    data: { alt: `${institute.name} logo` },
                    file,
                })
                logoId = mediaDoc.id as number
                mediaCache.set(institute.logo, String(logoId))
            }
        } catch {
            payload.logger.warn(`  ⚠ Could not fetch logo for "${institute.name}" — creating without logo`)
        }

        try {
            await payload.create({
                collection: 'institutes' as any,
                data: {
                    name: institute.name,
                    type: institute.type,
                    featured: false,
                    ...(logoId ? { logo: logoId } : {}),
                },
            })
            created++
        } catch (err) {
            payload.logger.warn(`  ⚠ Failed to create institute "${institute.name}": ${err}`)
        }
    }

    payload.logger.info(`— Seeded ${created} institutes ✓`)
}
