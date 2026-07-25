/**
 * WordPress → Payload project migration script
 *
 * Fetches every post in the "projects" WP category, downloads the featured
 * image, converts the HTML content to Lexical JSON, and creates the record
 * in the Payload `projects` collection (skipping slugs that already exist).
 *
 * Run with:
 *   pnpm payload run src/scripts/migrate-wp-projects.ts
 *
 * Optional env override (defaults to the live site):
 *   WP_BASE_URL=https://blog.juancbotero.com
 */

import type { Payload } from 'payload'

// ─── Config ────────────────────────────────────────────────────────────────

const WP_BASE = (process.env.WP_BASE_URL ?? 'https://blog.juancbotero.com').replace(/\/$/, '')
const PROJECTS_CATEGORY_SLUG = 'projects'
const PER_PAGE = 50

// ─── WP REST API types (only the fields we use) ────────────────────────────

type WPPost = {
    id: number
    slug: string
    date: string // ISO string
    title: { rendered: string }
    excerpt: { rendered: string }
    content: { rendered: string }
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url?: string
            media_details?: { width?: number; height?: number }
            alt_text?: string
            mime_type?: string
        }>
        'wp:term'?: Array<Array<{ id: number; slug: string; name: string }>>
    }
}

// ─── WP fetch helpers ──────────────────────────────────────────────────────

async function wpGet<T>(path: string): Promise<T> {
    const url = `${WP_BASE}/wp-json/wp/v2${path}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`WP API ${res.status}: ${url}`)
    return res.json() as Promise<T>
}

/** Returns the numeric WP category ID for a given slug, or null if not found. */
async function getProjectsCategoryId(): Promise<number | null> {
    type WPCategory = { id: number; slug: string }
    const cats = await wpGet<WPCategory[]>(`/categories?slug=${PROJECTS_CATEGORY_SLUG}&per_page=1`)
    return cats[0]?.id ?? null
}

/** Fetches all WP posts (all pages) for the given category ID. */
async function fetchAllProjectPosts(categoryId: number): Promise<WPPost[]> {
    const posts: WPPost[] = []
    let page = 1
    while (true) {
        const batch = await wpGet<WPPost[]>(
            `/posts?categories=${categoryId}&per_page=${PER_PAGE}&page=${page}&_embed=true`,
        )
        if (!Array.isArray(batch) || batch.length === 0) break
        posts.push(...batch)
        if (batch.length < PER_PAGE) break
        page++
    }
    return posts
}

// ─── Image upload helper ───────────────────────────────────────────────────

/** Downloads an image from a URL and uploads it to Payload Media. */
async function uploadImage(
    payload: Payload,
    imageUrl: string,
    altText: string,
): Promise<number | null> {
    try {
        const res = await fetch(imageUrl)
        if (!res.ok) return null

        const contentType = res.headers.get('content-type') ?? 'image/jpeg'
        const ext = contentType.split('/')[1]?.split(';')[0] ?? 'jpg'
        const filename = `wp-import-${Date.now()}.${ext}`

        const arrayBuffer = await res.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const media = await payload.create({
            collection: 'media',
            data: { alt: altText || filename },
            file: {
                data: buffer,
                mimetype: contentType,
                name: filename,
                size: buffer.length,
            },
        })

        return media.id as number
    } catch (err) {
        payload.logger.warn(`  ⚠ Could not upload image ${imageUrl}: ${(err as Error).message}`)
        return null
    }
}

// ─── HTML → Lexical converter ──────────────────────────────────────────────

type LexicalTextNode = {
    type: 'text'
    text: string
    format: number // 0=normal 1=bold 2=italic 3=bold+italic
    detail: 0
    mode: 'normal'
    style: ''
    version: 1
}

type LexicalLinkNode = {
    type: 'link'
    children: LexicalTextNode[]
    direction: 'ltr'
    format: ''
    indent: 0
    version: 1
    fields: { url: string; newTab: boolean; linkType: 'custom' }
}

type LexicalListItemNode = {
    type: 'listitem'
    children: LexicalTextNode[]
    direction: 'ltr'
    format: ''
    indent: 0
    version: 1
    value: number
    checked: undefined
}

type LexicalListNode = {
    type: 'list'
    listType: 'bullet' | 'number'
    tag: 'ul' | 'ol'
    start: 1
    children: LexicalListItemNode[]
    direction: 'ltr'
    format: ''
    indent: 0
    version: 1
}

type LexicalHeadingNode = {
    type: 'heading'
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: LexicalTextNode[]
    direction: 'ltr'
    format: ''
    indent: 0
    version: 1
}

type LexicalParagraphNode = {
    type: 'paragraph'
    children: (LexicalTextNode | LexicalLinkNode)[]
    direction: 'ltr'
    format: ''
    indent: 0
    version: 1
}

type LexicalNode =
    | LexicalParagraphNode
    | LexicalHeadingNode
    | LexicalListNode

type LexicalRoot = {
    root: {
        type: 'root'
        children: LexicalNode[]
        direction: 'ltr'
        format: ''
        indent: 0
        version: 1
    }
}

function decodeHTMLEntities(str: string): string {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/&#\d+;/g, (m) => String.fromCharCode(Number(m.slice(2, -1))))
}

function stripTags(html: string): string {
    return decodeHTMLEntities(html.replace(/<[^>]+>/g, ''))
}

/** Parse inline HTML into Lexical text/link children. */
function parseInline(html: string): (LexicalTextNode | LexicalLinkNode)[] {
    const nodes: (LexicalTextNode | LexicalLinkNode)[] = []

    // Tokenize: links first, then other inline tags, then raw text
    const linkRe = /<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
    const inlineTagRe = /<\/?(strong|b|em|i|s|del|u|span)[^>]*>/gi

    let lastIndex = 0

    const addText = (rawHtml: string, format: number) => {
        // strip any remaining inline tags and decode entities
        const text = decodeHTMLEntities(rawHtml.replace(inlineTagRe, ''))
        if (!text) return
        nodes.push({
            type: 'text',
            text,
            format,
            detail: 0,
            mode: 'normal',
            style: '',
            version: 1,
        })
    }

    let m: RegExpExecArray | null
    linkRe.lastIndex = 0
    while ((m = linkRe.exec(html)) !== null) {
        if (m.index > lastIndex) {
            const chunk = html.slice(lastIndex, m.index)
            addText(chunk, inferFormat(chunk))
        }
        const linkText = stripTags(m[2] ?? '')
        const linkUrl = m[1] ?? '#'
        if (linkText) {
            nodes.push({
                type: 'link',
                children: [{ type: 'text', text: linkText, format: 0, detail: 0, mode: 'normal', style: '', version: 1 }],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
                fields: { url: linkUrl, newTab: true, linkType: 'custom' },
            })
        }
        lastIndex = m.index + m[0].length
    }

    if (lastIndex < html.length) {
        addText(html.slice(lastIndex), inferFormat(html.slice(lastIndex)))
    }

    return nodes
}

/** Very rough inline-format detector: bold=1, italic=2, bold+italic=3. */
function inferFormat(html: string): number {
    const bold = /<(strong|b)[\s>]/i.test(html)
    const italic = /<(em|i)[\s>]/i.test(html)
    return (bold ? 1 : 0) | (italic ? 2 : 0)
}

function makeParagraph(html: string): LexicalParagraphNode {
    return {
        type: 'paragraph',
        children: parseInline(html),
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
    }
}

function makeHeading(tag: LexicalHeadingNode['tag'], html: string): LexicalHeadingNode {
    const text = stripTags(html)
    return {
        type: 'heading',
        tag,
        children: text
            ? [{ type: 'text', text, format: 0, detail: 0, mode: 'normal', style: '', version: 1 }]
            : [],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
    }
}

function makeList(html: string, type: 'bullet' | 'number', tag: 'ul' | 'ol'): LexicalListNode {
    const items: LexicalListItemNode[] = []
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi
    let m: RegExpExecArray | null
    let idx = 1
    while ((m = liRe.exec(html)) !== null) {
        const text = stripTags(m[1] ?? '')
        if (!text.trim()) continue
        items.push({
            type: 'listitem',
            children: [{ type: 'text', text, format: 0, detail: 0, mode: 'normal', style: '', version: 1 }],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
            value: idx++,
            checked: undefined,
        })
    }
    return { type: 'list', listType: type, tag, start: 1, children: items, direction: 'ltr', format: '', indent: 0, version: 1 }
}

/**
 * Converts WP `content.rendered` HTML to Payload Lexical JSON.
 * Handles: h1–h6, p, ul, ol, inline bold/italic/links.
 * Skips: figure/img (too complex for automated migration — add images manually).
 */
export function htmlToLexical(html: string): LexicalRoot {
    // Normalise line-endings, collapse whitespace between block tags
    const clean = html.replace(/\r\n/g, '\n').replace(/>\s+</g, '><').trim()

    const children: LexicalNode[] = []

    // Match top-level block elements
    const blockRe =
        /<(h[1-6]|p|ul|ol|blockquote|div|figure)[^>]*>([\s\S]*?)<\/\1>/gi
    let m: RegExpExecArray | null
    let lastIndex = 0

    while ((m = blockRe.exec(clean)) !== null) {
        const tag = (m[1] ?? '').toLowerCase()
        const inner = m[2] ?? ''
        lastIndex = m.index + m[0].length

        if (/^h[1-6]$/.test(tag)) {
            const node = makeHeading(tag as LexicalHeadingNode['tag'], inner)
            if (node.children.length) children.push(node)
        } else if (tag === 'ul') {
            const node = makeList(inner, 'bullet', 'ul')
            if (node.children.length) children.push(node)
        } else if (tag === 'ol') {
            const node = makeList(inner, 'number', 'ol')
            if (node.children.length) children.push(node)
        } else if (tag === 'blockquote' || tag === 'p') {
            const text = stripTags(inner).trim()
            if (text) children.push(makeParagraph(inner))
        }
        // figure / div / other block containers → skip (images need manual re-add)
    }

    // If nothing was parsed (some posts use <br>-separated plain text), fall back
    if (children.length === 0 && clean.length > 0) {
        const text = stripTags(clean).trim()
        if (text) children.push(makeParagraph(text))
    }

    return {
        root: {
            type: 'root',
            children,
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
        },
    }
}

// ─── Main migration runner ─────────────────────────────────────────────────

export async function run({ payload }: { payload: Payload }) {
    payload.logger.info(`🔄 WP → Payload project migration`)
    payload.logger.info(`   Source: ${WP_BASE}`)

    // 1. Find WP "projects" category ID
    const categoryId = await getProjectsCategoryId()
    if (!categoryId) {
        payload.logger.error(`✗ WP category "${PROJECTS_CATEGORY_SLUG}" not found. Aborting.`)
        return
    }
    payload.logger.info(`   WP category ID for "projects": ${categoryId}`)

    // 2. Fetch all WP project posts
    const wpPosts = await fetchAllProjectPosts(categoryId)
    payload.logger.info(`   Found ${wpPosts.length} WP project post(s)`)

    // 3. Get existing slugs so we can skip duplicates
    const existing = await payload.find({
        collection: 'projects',
        limit: 1000,
        pagination: false,
        select: { slug: true } as any,
    })
    const existingSlugs = new Set(existing.docs.map((d: any) => d.slug as string))

    let created = 0
    let skipped = 0

    for (const post of wpPosts) {
        const slug = post.slug

        if (existingSlugs.has(slug)) {
            payload.logger.info(`  → skip (already exists): ${slug}`)
            skipped++
            continue
        }

        payload.logger.info(`  → importing: ${slug}`)

        // 4. Upload featured image
        let heroImageId: number | null = null
        const media = post._embedded?.['wp:featuredmedia']?.[0]
        if (media?.source_url) {
            heroImageId = await uploadImage(
                payload,
                media.source_url,
                media.alt_text || post.title.rendered,
            )
        }

        // 5. Convert content HTML → Lexical
        const lexicalContent = htmlToLexical(post.content.rendered)

        // 6. Strip HTML from title and excerpt
        const title = stripTags(post.title.rendered)
        const summary = stripTags(post.excerpt.rendered).trim().replace(/\n+/g, ' ')

        // 7. Map WP categories/tags to Payload categories (best-effort by slug)
        const wpTerms = (post._embedded?.['wp:term'] ?? []).flat()
        const tagSlugs = wpTerms
            .filter((t) => t.slug !== PROJECTS_CATEGORY_SLUG)
            .map((t) => t.slug)

        const payloadCats: number[] = []
        for (const s of tagSlugs) {
            try {
                const res = await payload.find({
                    collection: 'categories',
                    where: { slug: { equals: s } },
                    limit: 1,
                })
                if (res.docs[0]) payloadCats.push(res.docs[0].id as number)
            } catch {
                // category doesn't exist yet — skip
            }
        }

        // 8. Create the project record
        await payload.create({
            collection: 'projects',
            data: {
                title,
                slug,
                summary,
                content: lexicalContent,
                completedAt: post.date ? new Date(post.date).toISOString() : undefined,
                heroImage: heroImageId ?? undefined,
                categories: payloadCats.length ? payloadCats : undefined,
                _status: 'published',
            } as any,
        })

        created++
        payload.logger.info(`    ✓ created: "${title}"`)
    }

    payload.logger.info(
        `\n✓ Migration complete — created: ${created}, skipped (already exist): ${skipped}`,
    )
    payload.logger.info(
        `  Note: inline images in content are not migrated. Re-add them manually via the editor.`,
    )
}
