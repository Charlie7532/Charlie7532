/**
 * Import images from a remote URL list into Payload media, then
 * append an ImageGallery block to a project's content.
 *
 * Edit PROJECT_ID and IMAGE_URLS below before running.
 *
 * Usage:
 *   pnpm payload run src/scripts/import-project-images.ts
 */

import type { Payload } from 'payload'

// ─── CONFIGURE HERE ────────────────────────────────────────────────────────────

const PROJECT_ID = 9 // peristaltic-pump

const IMAGE_URLS: Array<{ url: string; caption?: string }> = [
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/05/000MAIN_ASM-02-1024x576.png', caption: 'Micro Dose Pump — main assembly V1' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/05/000MAIN_ASM2-1024x576.png', caption: 'Micro Dose Pump — assembly view 2' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/05/000MAIN_ASM2-3-1024x576.png', caption: 'Micro Dose Pump — assembly view 3' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/ASM-V2-V3-1024x576.png', caption: 'Evolution — V2 and V3 comparison' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/ASM-V2-V3-2-1024x576.png', caption: 'Evolution — V2 and V3 detail' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/PUMP1-1024x724.png', caption: 'Micro Dose Pump — complete unit' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2024/06/Hight-Fidelity-Prototypes.webp', caption: 'High-fidelity prototype with WiFi app' },
    { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/PPump-1-1024x640.png', caption: 'Micro Dose Pump — installed setup' },
]

// ─── Helpers ───────────────────────────────────────────────────────────────────

async function downloadImage(rawUrl: string) {
    const cleanUrl = rawUrl.split('?')[0]!
    const name = cleanUrl.split('/').pop()!
    const res = await fetch(rawUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; payload-seed/1.0)' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${rawUrl}`)
    const mimetypeHeader = res.headers.get('content-type') ?? 'image/jpeg'
    const mimetype = mimetypeHeader.split(';')[0]!.trim()
    const data = Buffer.from(await res.arrayBuffer())
    return { data, mimetype, name, size: data.length }
}

function makeId() {
    return Math.random().toString(36).slice(2, 10)
}

// ─── Main ──────────────────────────────────────────────────────────────────────

export async function run({ payload }: { payload: Payload }) {
    payload.logger.info(`→ Importing ${IMAGE_URLS.length} images for project ${PROJECT_ID}…`)

    // 1. Upload images
    const galleryItems: Array<{ image: number; caption?: string }> = []

    for (const { url, caption } of IMAGE_URLS) {
        try {
            payload.logger.info(`  Downloading: ${url.split('/').pop()}`)
            const file = await downloadImage(url)
            const media = await payload.create({
                collection: 'media',
                data: { alt: caption ?? file.name },
                file,
                overrideAccess: true,
            })
            galleryItems.push({ image: media.id, caption })
            payload.logger.info(`  ✓ media id=${media.id}`)
        } catch (err) {
            payload.logger.error(`  ✗ ${(err as Error).message}`)
        }
    }

    if (galleryItems.length === 0) {
        payload.logger.error('No images uploaded — aborting.')
        return
    }

    // 2. Fetch existing content
    const project = await payload.findByID({
        collection: 'projects',
        id: PROJECT_ID,
        locale: 'en',
        overrideAccess: true,
    })

    const existingChildren: unknown[] = (project.content as any)?.root?.children ?? []

    // 3. Append gallery block
    const galleryBlock = {
        type: 'block',
        version: 2,
        fields: {
            id: makeId(),
            blockType: 'imageGallery',
            images: galleryItems,
        },
    }

    const updatedChildren = [...existingChildren, galleryBlock]

    await payload.update({
        collection: 'projects',
        id: PROJECT_ID,
        locale: 'en' as any,
        overrideAccess: true,
        data: {
            content: {
                root: {
                    type: 'root',
                    children: updatedChildren,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                },
            } as any,
        },
    })

    payload.logger.info(`✓ Gallery block with ${galleryItems.length} images appended to project ${PROJECT_ID}`)
}
