import type { File, Payload, PayloadRequest } from 'payload'

/**
 * Additive seed — adds new Technologies without touching existing ones,
 * linking each to its TechCategory by slug (categories must already exist,
 * see /next/seed-tech-categories). Safe to run multiple times: skips any
 * technology whose name already exists.
 */

type NewTechEntry = {
  name: string
  logo: string
  categorySlug: string
}

// prettier-ignore
const NEW_TECHNOLOGIES: NewTechEntry[] = [
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript', categorySlug: 'languages' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript', categorySlug: 'languages' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb', categorySlug: 'databases' },
  { name: 'SQLite', logo: 'https://cdn.simpleicons.org/sqlite', categorySlug: 'databases' },
  { name: 'DBeaver', logo: 'https://cdn.simpleicons.org/dbeaver', categorySlug: 'dev-tools' },
  { name: 'opencode', logo: 'https://cdn.simpleicons.org/opencode', categorySlug: 'dev-tools' },
  { name: 'ChatGPT', logo: 'https://cdn.simpleicons.org/openai', categorySlug: 'ai-agents' },
  { name: 'DigitalOcean', logo: 'https://cdn.simpleicons.org/digitalocean', categorySlug: 'cloud-devops' },
  { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini', categorySlug: 'ai-agents' },
  { name: 'Claude', logo: 'https://cdn.simpleicons.org/claude', categorySlug: 'ai-agents' },
  { name: 'Groq', logo: 'https://cdn.simpleicons.org/groq', categorySlug: 'ai-agents' },
  { name: 'DeepSeek', logo: 'https://cdn.simpleicons.org/deepseek', categorySlug: 'ai-agents' },
]

async function fetchLogoFile(url: string, name: string): Promise<File> {
  const res = await fetch(url, { method: 'GET' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.arrayBuffer()
  return {
    name: `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.svg`,
    data: Buffer.from(data),
    mimetype: 'image/svg+xml',
    size: data.byteLength,
  }
}

export async function seedAdditionalTechnologies(
  payload: Payload,
  req: Partial<PayloadRequest>,
): Promise<{ created: number; existing: number; missingCategory: number }> {
  let created = 0
  let existing = 0
  let missingCategory = 0

  // Resolve TechCategory IDs by slug once
  const categoryIdBySlug = new Map<string, number>()
  const neededSlugs = [...new Set(NEW_TECHNOLOGIES.map((t) => t.categorySlug))]
  for (const slug of neededSlugs) {
    const found = await payload.find({
      collection: 'tech-categories',
      where: { slug: { equals: slug } },
      limit: 1,
      req: req as PayloadRequest,
    })
    if (found.docs.length > 0) categoryIdBySlug.set(slug, found.docs[0]!.id)
  }

  for (const tech of NEW_TECHNOLOGIES) {
    const found = await payload.find({
      collection: 'technologies',
      where: { name: { equals: tech.name } },
      limit: 1,
      req: req as PayloadRequest,
    })
    if (found.docs.length > 0) {
      existing++
      continue
    }

    const categoryId = categoryIdBySlug.get(tech.categorySlug)
    if (!categoryId) missingCategory++

    let logoId: number | undefined
    try {
      const file = await fetchLogoFile(tech.logo, tech.name)
      const mediaDoc = await payload.create({
        collection: 'media',
        data: { alt: `${tech.name} logo` },
        file,
        req: req as PayloadRequest,
      })
      logoId = mediaDoc.id as number
    } catch {
      payload.logger.warn(`  ⚠ Could not fetch logo for "${tech.name}" — creating without logo`)
    }

    await payload.create({
      collection: 'technologies',
      data: {
        name: tech.name,
        featured: true,
        ...(logoId ? { logo: logoId } : {}),
        ...(categoryId ? { techCategories: [categoryId] } : {}),
      },
      req: req as PayloadRequest,
    })
    created++
  }

  return { created, existing, missingCategory }
}
