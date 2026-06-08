import type { File, Payload, PayloadRequest } from 'payload'

type ClientEntry = {
    name: string
    logo: string
    website: string
}

// prettier-ignore
const CLIENTS: ClientEntry[] = [
    { name: 'Holz', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/holz_h100.svg', website: 'https://juancbotero.com/' },
    { name: '3D Shape', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/3d_shape_h100.svg', website: 'https://juancbotero.com/' },
    { name: 'EAFIT', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/eafit_h100.svg', website: 'https://www.eafit.edu.co/' },
    { name: 'Primavera II', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/primavera_h100.svg', website: 'https://juancbotero.com/' },
    { name: 'Renault Sofasa', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/sofasa_h100.svg', website: 'https://www.renault.com.co/renault-en-colombia.html' },
    { name: 'EPM', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/epm_h100.svg', website: 'https://juancbotero.com/' },
    { name: 'Mitsubishi Electric', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/me_h100.svg', website: 'https://www.mitsubishielectric.com/en/index.html' },
    { name: 'Multiplo Colombia', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/multiplo_h100.svg', website: 'https://www.linkedin.com/company/multiplo-col/' },
    { name: 'EEW Protec', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/eew_h100.svg', website: 'https://www.eew-protec.de/' },
    { name: 'Firefly Creative Group', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/firefly_h100.svg', website: 'https://www.funfirefly.com/' },
    { name: 'Revo Soccer', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/revo_h100.svg', website: 'http://revosoccer.com/' },
    { name: 'Main 12', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/main12_h100.svg', website: 'https://main12.com/' },
    { name: 'Metodo', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/mtd_h100.svg', website: 'https://mtd.com.co/' },
    { name: 'East Orlando Chamber of Commerce', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/eocc_h100.svg', website: 'https://www.eocc.org/' },
    { name: 'Hispanic Chamber of Commerce', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/hcc_h100.svg', website: 'https://hispanicchamberorlando.com/' },
    { name: 'Meni Coffee', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/meni_h100.svg', website: 'https://menicoffee.com/' },
    { name: 'Cloudflare', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/cloudflare_h160.svg', website: 'https://www.cloudflare.com/' },
    { name: 'Estudio EFH', logo: 'https://cdn.juancbotero.com/assets/pictures/clients/cd-logo.png', website: 'https://juancbotero.com/' },
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

export async function seedClients(payload: Payload, req: PayloadRequest): Promise<void> {
    payload.logger.info('— Seeding clients...')

    // Clear existing (table may not exist yet on first run)
    try {
        await payload.db.deleteMany({ collection: 'clients' as any, req, where: {} })
    } catch {
        payload.logger.info('  clients table not found — skipping clear')
    }

    const mediaCache = new Map<string, string>()
    let created = 0

    for (const client of CLIENTS) {
        let logoId: number | undefined

        try {
            if (mediaCache.has(client.logo)) {
                logoId = Number(mediaCache.get(client.logo))
            } else {
                const file = await fetchLogoFile(client.logo, client.name)
                const mediaDoc = await payload.create({
                    collection: 'media',
                    data: { alt: `${client.name} logo` },
                    file,
                })
                logoId = mediaDoc.id as number
                mediaCache.set(client.logo, String(logoId))
            }
        } catch {
            payload.logger.warn(`  ⚠ Could not fetch logo for "${client.name}" — creating without logo`)
        }

        try {
            await payload.create({
                collection: 'clients' as any,
                data: {
                    name: client.name,
                    website: client.website,
                    featured: false,
                    ...(logoId ? { logo: logoId } : {}),
                },
            })
            created++
        } catch (err) {
            payload.logger.warn(`  ⚠ Failed to create client "${client.name}": ${err}`)
        }
    }

    payload.logger.info(`— Seeded ${created} clients ✓`)
}
