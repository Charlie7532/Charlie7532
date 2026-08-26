import type { Payload, PayloadRequest } from 'payload'

/**
 * Seeds/upserts the TechCategory records used by the landing page.
 *
 * The legacy `category` select field on Technologies has been removed —
 * technologies are now linked to categories manually via the
 * `techCategories` relationship in the admin UI. This endpoint only
 * ensures the category groups themselves exist.
 */

const CATEGORIES = [
  { label: 'AI / Agents', slug: 'ai-agents', order: 10, showOnLanding: true },
  { label: 'Languages', slug: 'languages', order: 20, showOnLanding: true },
  { label: 'Product & Frontend', slug: 'product-frontend', order: 30, showOnLanding: true },
  { label: 'Backend & Platforms', slug: 'backend-platforms', order: 40, showOnLanding: true },
  { label: 'Databases', slug: 'databases', order: 50, showOnLanding: true },
  { label: 'Cloud & DevOps', slug: 'cloud-devops', order: 60, showOnLanding: true },
  { label: 'Design', slug: 'design', order: 70, showOnLanding: true },
  { label: 'Dev Tools', slug: 'dev-tools', order: 80, showOnLanding: true },
  { label: 'Web Services', slug: 'web-services', order: 90, showOnLanding: false },
  { label: 'Embedded & Hardware', slug: 'embedded-hardware', order: 100, showOnLanding: true },
  { label: 'Manufacturing', slug: 'manufacturing', order: 110, showOnLanding: false },
  { label: 'Other', slug: 'other', order: 999, showOnLanding: false },
]

export async function seedTechCategories(
  payload: Payload,
  req: Partial<PayloadRequest>,
): Promise<{ created: number; existing: number }> {
  let created = 0
  let existing = 0

  for (const cat of CATEGORIES) {
    const found = await payload.find({
      collection: 'tech-categories',
      where: { slug: { equals: cat.slug } },
      limit: 1,
      req: req as PayloadRequest,
    })

    if (found.docs.length > 0) {
      existing++
      continue
    }

    await payload.create({
      collection: 'tech-categories',
      data: {
        label: cat.label,
        slug: cat.slug,
        order: cat.order,
        showOnLanding: cat.showOnLanding,
      },
      req: req as PayloadRequest,
    })
    created++
  }

  return { created, existing }
}
