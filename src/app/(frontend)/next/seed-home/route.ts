import { getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'

export const maxDuration = 300

// ── helpers ──────────────────────────────────────────────────────────────────

async function fetchFile(url: string) {
    const res = await fetch(url)
    if (!res.ok) return null
    const buffer = await res.arrayBuffer()
    const mimeType = res.headers.get('content-type') ?? 'image/jpeg'
    const name = url.split('/').pop()!.split('?')[0]!
    return { name, data: Buffer.from(buffer), mimetype: mimeType, size: buffer.byteLength }
}

async function tryUpload(payload: any, alt: string, url: string): Promise<{ id: number | string } | null> {
    try {
        const file = await fetchFile(url)
        if (!file) { console.warn(`Skipping image (fetch failed): ${url}`); return null }
        return await payload.create({ collection: 'media', data: { alt }, file })
    } catch (e) {
        console.warn(`Skipping image (upload failed): ${url}`, e)
        return null
    }
}

function makeText(text: string) {
    return { type: 'text' as const, detail: 0, format: 0, mode: 'normal' as const, style: '', text, version: 1 }
}

function makeParagraph(text: string) {
    return { type: 'paragraph' as const, children: [makeText(text)], direction: 'ltr' as const, format: '' as const, indent: 0, textFormat: 0, version: 1 }
}

function makeHeading(text: string, tag: 'h1' | 'h2' | 'h3') {
    return { type: 'heading' as const, tag, children: [makeText(text)], direction: 'ltr' as const, format: '' as const, indent: 0, version: 1 }
}

function makeRichText(children: object[]) {
    return { root: { type: 'root' as const, children, direction: 'ltr' as const, format: '' as const, indent: 0, version: 1 } }
}

// ── route handler ─────────────────────────────────────────────────────────────

export async function GET(): Promise<Response> {
    const payload = await getPayload({ config })
    const requestHeaders = await headers()

    const { user } = await payload.auth({ headers: requestHeaders })
    if (!user) {
        return new Response('Forbidden – log in to /admin first.', { status: 403 })
    }

    try {
        // ── 1. Upload images (failures are skipped, not fatal) ──────────────────
        const [
            profilePhoto,
            lifecycleImage,
            jorgeImage,
            veronicaImage,
            paulinaImage,
            andresGarciaImage,
            andresGoezImage,
            alejandroImage,
        ] = await Promise.all([
            tryUpload(payload, 'Juan C Botero profile photo', 'https://juancbotero.com/assets/images/fotos/Juancbotero-BB3.png'),
            tryUpload(payload, 'Product Life Cycle Diagram – 10 Steps', 'https://juancbotero.com/assets/images/fotos/10_steps.png'),
            tryUpload(payload, 'Jorge Andrés Barrera', 'https://blog.juancbotero.com/wp-content/uploads/2024/02/Jorge-Barrera.jpeg'),
            tryUpload(payload, 'Veronica Botero', 'https://blog.juancbotero.com/wp-content/uploads/2024/02/Veronica-Botero.jpeg'),
            tryUpload(payload, 'Paulina Ferrer', 'https://blog.juancbotero.com/wp-content/uploads/2024/02/paulina-ferrer.jpeg'),
            tryUpload(payload, 'Andres Garcia', 'https://blog.juancbotero.com/wp-content/uploads/2024/02/Andres-Garcia.jpeg'),
            tryUpload(payload, 'Andres Goez', 'https://blog.juancbotero.com/wp-content/uploads/2024/02/Andres-Goez.jpg'),
            tryUpload(payload, 'Alejandro Mafla', 'https://blog.juancbotero.com/wp-content/uploads/2024/02/Alejandro-Mafla.jpeg'),
        ])

        // ── 2. Find the home page ───────────────────────────────────────────────
        const { docs } = await payload.find({
            collection: 'pages',
            where: { slug: { equals: 'home' } },
            limit: 1,
        })

        if (!docs[0]) {
            return Response.json({ success: false, error: 'Home page not found – make sure the page with slug "home" exists.' }, { status: 404 })
        }

        const homePageId = docs[0].id

        // ── 3. Build layout ─────────────────────────────────────────────────────
        const layout: any[] = [
            // Hero – ProfileWithImage
            {
                blockType: 'profileWithImage',
                blockName: 'Hero',
                heading: "Hi, I'm Juan",
                subHeading: {
                    text: 'A passionate engineer who seeks quality in the smallest details!',
                    heighlight: true,
                },
                content: makeRichText([
                    makeParagraph(
                        "I'm Juan Carlos Botero, also known as Charlie. I thrive on being proactive, passionate, and meticulously detail-oriented. When it comes to taking on new projects, I possess a remarkable ability to autonomously learn and adapt swiftly to various subjects. My expertise lies in product design, automation, and manufacturing, where I consistently deliver exceptional performance.",
                    ),
                ]),
                media: profilePhoto.id,
                mediaDisplayAlignment: 'right',
            },

            // Product Lifecycle – TwoColumnTextImage
            {
                blockType: 'twoColumnTextImage',
                blockName: 'Product Lifecycle',
                richText: makeRichText([
                    makeHeading('I meticulously handle every detail from concept to market.', 'h2'),
                    makeParagraph(
                        'I possess comprehensive knowledge of the product development lifecycle, spanning from initial conceptualization to successful market integration. This expertise extends beyond physical products to encompass digital realms, emphasizing a holistic approach centered on enhancing user experience. Yes, I also design web applications and AI-based concepts.',
                    ),
                ]),
                media: lifecycleImage.id,
                imagePosition: 'right',
                imageStyle: 'contain',
                populateBy: 'collection',
                relationTo: 'projects',
                limit: 4,
            },

            // Testimonials – TestimonialGrid
            {
                blockType: 'testimonialGrid',
                blockName: 'Testimonials',
                title: "Don't just take it from me,",
                description: 'Let the voices of satisfaction speak for themselves.',
                testimonials: [
                    {
                        quote: 'Juan is a natural gifted engineer, obsessed with detail. He has proven to be an incredibly reliable person, occasionally going beyond his duties. I continue to consult and work with Juan on a regular basis. Always impressed with the results and the insights developed.',
                        authorName: 'Jorge Andrés Barrera',
                        authorRole: 'CTO',
                        authorCompany: 'Ellin US LLC',
                        authorImage: jorgeImage.id,
                    },
                    {
                        quote: 'Juan Carlos is a very attentive, dedicated, and highly initiative-driven person. He has a great passion for engineering and the ability to learn quickly. He has a positive attitude and is capable of solving problems easily when they arise. He possesses skills in computer programming and is a pleasant individual with good energy.',
                        authorName: 'Veronica Botero',
                        authorRole: 'MBA Fashion Designer',
                        authorCompany: 'Brand Management, Social Media Expert',
                        authorImage: veronicaImage.id,
                    },
                    {
                        quote: 'I have had the privilege of consulting and working with Juan Carlos for an extended period, and I continue to be impressed by the consistently outstanding results he delivers. Juan\'s reliability and commitment to exceeding expectations make him a valuable collaborator. His insights into engineering challenges are truly insightful, and I have full confidence in his ability to tackle complex tasks.',
                        authorName: 'Paulina Ferrer',
                        authorRole: 'Creative Marketing Specialist',
                        authorCompany: 'Meni LLC',
                        authorImage: paulinaImage.id,
                    },
                    {
                        quote: 'I have had the pleasure of working closely with Juan on numerous engineering projects, and I can confidently attest to his exceptional skills and attention to detail. Juan is not only a natural talent in engineering but also someone who goes above and beyond his responsibilities. His commitment to delivering high-quality results is truly commendable.',
                        authorName: 'Andres Garcia',
                        authorRole: 'R&D Analyst',
                        authorCompany: 'Prominerales S.A.S',
                        authorImage: andresGarciaImage.id,
                    },
                    {
                        quote: 'Juan Carlos has consistently demonstrated a strong work ethic and dedication to his role. His initiative-driven approach sets him apart, and he\'s always willing to take on additional responsibilities. Juan has a passion for engineering that is contagious, and he has a remarkable ability to learn quickly and adapt to new challenges.',
                        authorName: 'Andres Goez',
                        authorRole: 'CEO',
                        authorCompany: 'Firefly Creative Group',
                        authorImage: andresGoezImage.id,
                    },
                    {
                        quote: 'I have had the pleasure of mentoring Juan in his engineering endeavors, and I can confidently say that he is a gifted individual with a keen eye for detail. Juan\'s commitment to excellence and his continuous pursuit of knowledge make him stand out. His programming skills are top-notch, and he consistently brings fresh insights to the table.',
                        authorName: 'Alejandro Mafla',
                        authorRole: 'R&D Director',
                        authorCompany: 'Mitsubishi Electric',
                        authorImage: alejandroImage.id,
                    },
                ],
            },

            // Institutes – LogoCarousel
            {
                blockType: 'logoCarousel',
                blockName: 'Institutes',
                heading: 'Institutes that shaped me',
                populateBy: 'collection',
                collectionType: 'institutes',
                limit: 12,
                autoplay: true,
                speed: 3000,
            },

            // Clients – LogoCarousel
            {
                blockType: 'logoCarousel',
                blockName: 'Clients and Allies',
                heading: 'Clients and Allies',
                populateBy: 'collection',
                collectionType: 'clients',
                limit: 12,
                autoplay: true,
                speed: 3000,
            },

            // Final CTA – CtaSection
            {
                blockType: 'ctaSection',
                blockName: 'CTA',
                title: "Let's have a Coffee and Brew some Ideas",
                description: 'No credit card required · 100% Quality time · Proven Track Record',
                ctaPrimary: {
                    type: 'custom',
                    newTab: true,
                    url: 'https://cal.com/juancbotero',
                    label: 'Schedule time with me',
                    appearance: 'default',
                },
                ctaSecondary: {
                    type: 'custom',
                    newTab: false,
                    url: '/about',
                    label: 'Learn more about me',
                    appearance: 'outline',
                },
                textAlignment: 'center',
            },
        ]

        // ── 4. Update the home page ─────────────────────────────────────────────
        await payload.update({
            collection: 'pages',
            id: homePageId,
            data: {
                title: 'Home',
                hero: {
                    type: 'none',
                    media: profilePhoto.id,
                },
                layout,
            },
        })

        return Response.json({ success: true, message: 'Home page updated. Open /admin/collections/pages to review and publish.' })
    } catch (e) {
        console.error('Error seeding home page:', e)
        return Response.json({ success: false, error: String(e) }, { status: 500 })
    }
}
