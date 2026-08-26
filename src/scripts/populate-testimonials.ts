/**
 * Populate Testimonials collection from the live site data.
 * Run: pnpm payload run src/scripts/populate-testimonials.ts
 */
import { getPayload } from 'payload'
import config from '@payload-config'

async function populate() {
  const payload = await getPayload({ config })

  const testimonials = [
    {
      quote: "Juan is a natural gifted engineer, obsessed with detail. He has proven to be an incredibly reliable person, occasionally going beyond his duties. I continue to consult and work with Juan on a regular basis. Always impressed with the results and the insights developed.",
      authorName: "Jorge Andrés Barrera",
      authorRole: "CTO",
      authorCompany: null,
      rating: "5" as const,
    },
    {
      quote: "Juan Carlos is a very attentive, dedicated, and highly initiative-driven person. He has a great passion for engineering and the ability to learn quickly. He has a positive attitude and is capable of solving problems easily when they arise. He possesses skills in computer programming and is a pleasant individual with good energy.",
      authorName: "Veronica Botero",
      authorRole: "MBA Fashion Designer",
      authorCompany: null,
      rating: "5" as const,
    },
  ]

  const ids: number[] = []

  for (const t of testimonials) {
    const created = await payload.create({
      collection: 'testimonials',
      data: t,
    })
    ids.push(created.id)
    console.log(`✅ Created: "${t.authorName}" (ID: ${created.id})`)
  }

  console.log(`\n🎉 Done! ${ids.length} testimonials created. IDs: ${ids.join(', ')}`)
}

populate()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Failed:', err)
    process.exit(1)
  })