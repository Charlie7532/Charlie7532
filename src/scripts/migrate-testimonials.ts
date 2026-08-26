/**
 * One-shot script to migrate inline testimonials from the homepage TestimonialGrid
 * block into the new Testimonials collection.
 *
 * Run: pnpm payload run scripts/migrate-testimonials.ts
 */
import { getPayload } from 'payload'
import config from '@payload-config'

async function migrate() {
  const payload = await getPayload({ config })

  // 1. Find the homepage (page ID 8)
  const page = await payload.findByID({
    collection: 'pages',
    id: 8,
    depth: 0,
  })

  if (!page) {
    console.log('❌ Homepage (ID 8) not found')
    return
  }

  // 2. Find TestimonialGrid blocks with inline testimonials
  const blocks = (page as any).layout ?? []
  let migrated = 0

  for (const block of blocks) {
    if (block.blockType !== 'testimonialGrid') continue

    const testimonials = block.testimonials
    if (!Array.isArray(testimonials) || testimonials.length === 0) continue

    // Check if already migrated (relationship IDs instead of inline objects)
    if (typeof testimonials[0] === 'number' || typeof testimonials[0] === 'string') {
      console.log('⏭️  TestimonialGrid already uses relationships, skipping')
      continue
    }

    const newIds: number[] = []

    for (const t of testimonials) {
      // Create a Testimonial collection entry
      const created = await payload.create({
        collection: 'testimonials',
        data: {
          quote: t.quote ?? '',
          authorName: t.authorName ?? '',
          authorRole: t.authorRole ?? null,
          authorCompany: t.authorCompany ?? null,
          authorImage: t.authorImage ?? null,
          rating: t.rating ?? '5',
        },
      })

      newIds.push(created.id)
      console.log(`✅ Created testimonial: "${t.authorName}" (ID: ${created.id})`)
    }

    // Replace inline array with relationship IDs
    block.testimonials = newIds
    migrated += newIds.length
  }

  if (migrated === 0) {
    console.log('ℹ️  No inline testimonials found to migrate')
    return
  }

  // 3. Save the updated page
  await payload.update({
    collection: 'pages',
    id: 8,
    data: { layout: blocks },
  })

  console.log(`\n🎉 Migration complete! ${migrated} testimonials moved to collection.`)
}

migrate()
  .then(() => {
    console.log('Done.')
    process.exit(0)
  })
  .catch((err) => {
    console.error('Migration failed:', err)
    process.exit(1)
  })