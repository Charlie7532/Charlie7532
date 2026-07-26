/**
 * One-time script: populate Primavera II (project id 15) with full content,
 * images, and metadata sourced from blog.juancbotero.com/primavera-ii/
 *
 * Run with:
 *   pnpm payload run src/scripts/update-primavera.ts
 */

import type { Payload } from 'payload'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function downloadImage(url: string): Promise<{ data: Buffer; mimetype: string; name: string; size: number }> {
    const cleanUrl = url.split('?')[0]!
    const name = cleanUrl.split('/').pop()!

    const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; seed-script/1.0)' },
    })
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)

    const mimetypeHeader = res.headers.get('content-type') ?? 'image/jpeg'
    const mimetype = mimetypeHeader.split(';')[0]!.trim()
    const arrayBuffer = await res.arrayBuffer()
    const data = Buffer.from(arrayBuffer)

    return { data, mimetype, name, size: data.length }
}

function makeId(): string {
    return Math.random().toString(36).slice(2, 10)
}

function textNode(text: string, format = 0) {
    return { type: 'text', text, version: 1, format, mode: 'normal', style: '', detail: 0 }
}

function paragraph(children: unknown[], format = '') {
    return {
        type: 'paragraph',
        children,
        direction: 'ltr',
        format,
        indent: 0,
        version: 1,
        textFormat: 0,
        textStyle: '',
    }
}

function heading(tag: 'h2' | 'h3', text: string) {
    return {
        type: 'heading',
        tag,
        children: [textNode(text)],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
    }
}

function mediaBlock(mediaId: number) {
    return {
        type: 'block',
        version: 2,
        fields: {
            id: makeId(),
            blockType: 'mediaBlock',
            media: mediaId,
            width: { type: 'max', preset: 'wide' },
        },
    }
}

function twoColBlock(
    richTextChildren: unknown[],
    mediaId: number,
    imagePosition: 'left' | 'right' = 'right',
    imageStyle: 'cover' | 'contain' = 'cover',
) {
    return {
        type: 'block',
        version: 2,
        fields: {
            id: makeId(),
            blockType: 'twoColumnTextImage',
            richText: {
                root: {
                    type: 'root',
                    children: richTextChildren,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                },
            },
            media: mediaId,
            imagePosition,
            imageStyle,
            links: [],
        },
    }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export async function run({ payload }: { payload: Payload }) {
    payload.logger.info('→ Downloading Primavera II images…')

    const blogImages = [
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/450_1000.jpg', alt: 'Primavera II solar vehicle' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2014-07-16-17.53.17-1024x768.jpg', alt: 'Primavera II team working on the vehicle frame' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2014-07-16-17.53.24-1024x768.jpg', alt: 'Primavera II team assembling components' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/carro-solar2.jpg', alt: 'Primavera II solar car design render' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2014-07-22-09.51.16-scaled.jpg', alt: 'Battery pack design and assembly' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2014-07-22-16.35.07-scaled.jpg', alt: 'Vehicle preparation for transport to Australia' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2014-07-22-09.51.08-scaled.jpg', alt: 'Primavera II team battery integration' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2014-07-22-09.51.21-scaled.jpg', alt: 'Primavera II electronics and wiring' },
        { url: 'https://blog.juancbotero.com/wp-content/uploads/2023/07/2015-04-08-18.31.38-scaled.jpg', alt: 'Primavera II at the World Solar Challenge 2015 in Australia' },
    ]

    const mediaIds: number[] = []

    for (const img of blogImages) {
        try {
            payload.logger.info(`  Uploading: ${img.url.split('/').pop()}`)
            const file = await downloadImage(img.url)
            const media = await payload.create({
                collection: 'media',
                data: { alt: img.alt },
                file,
                overrideAccess: true,
            })
            mediaIds.push(media.id)
            payload.logger.info(`  ✓ media id=${media.id}`)
        } catch (err) {
            payload.logger.error(`  ✗ Failed: ${(err as Error).message}`)
            mediaIds.push(0)  // placeholder so indices stay aligned
        }
    }

    const [
        heroId,          // 0 – main vehicle photo
        teamPhoto1Id,    // 1 – team working on frame
        teamPhoto2Id,    // 2 – team assembling components
        solarCarId,      // 3 – solar car render
        batteryId1,      // 4 – battery pack assembly
        logisticsId,     // 5 – vehicle transport prep
        batteryId2,      // 6 – battery integration
        electronicsId,   // 7 – electronics and wiring
        raceId,          // 8 – World Solar Challenge race day
    ] = mediaIds

    // Build Lexical richtext children
    const contentNodes: unknown[] = [

        // ── Project Description ─────────────────────────────────────────────
        heading('h2', 'Project Description'),
        paragraph([textNode(
            'Every two years, the "World Solar Challenge" solar vehicle competition takes place in Australia — a 3,022 km race from Darwin to Adelaide, promoting the development of renewable energy technologies worldwide. Attended by some of the best universities since 1987, the event inspired the Primavera project, born in Medellín, the city of eternal spring.'
        )]),
        paragraph([textNode(
            "In 2014, the development of Primavera II commenced with a dedicated team of 30 individuals \u2014 enthusiastic undergraduates alongside experienced master's and doctoral students. The team was divided into six subsystems: mechanics, aerodynamics, bodywork, electronics, logistics, and strategy. Their collective challenge was to integrate mechanical components, harness electric-solar technology, optimise aerodynamics akin to an airplane, and devise a race strategy worthy of Formula 1."
        )]),

        // two team photos side by side as two-column blocks
        ...(teamPhoto1Id ? [twoColBlock(
            [paragraph([textNode('Early development: the Primavera II chassis takes shape in the EAFIT workshop, with the mechanics and bodywork teams collaborating on structural integration.')])],
            teamPhoto1Id, 'right', 'cover'
        )] : []),
        ...(teamPhoto2Id ? [twoColBlock(
            [paragraph([textNode('The aerodynamics team refining the outer shell geometry and preparing molds for composite manufacturing.')])],
            teamPhoto2Id, 'left', 'cover'
        )] : []),

        // ── The Opportunity ─────────────────────────────────────────────────
        heading('h2', 'The Opportunity'),
        ...(solarCarId ? [twoColBlock(
            [
                paragraph([textNode(
                    'The Primavera II project presented a remarkable opportunity for EAFIT University and EPM to showcase their dedication to sustainable engineering and demonstrate Colombia\'s potential in the global renewable-energy field.'
                )]),
                paragraph([textNode(
                    'By pushing the boundaries of solar-powered transportation, the project aimed to inspire innovation, raise awareness about renewable energies, and motivate further advancements across the automotive and energy industries.'
                )]),
            ],
            solarCarId, 'right', 'contain'
        )] : [
            paragraph([textNode(
                'The Primavera II project presented a remarkable opportunity for EAFIT University and EPM to showcase Colombia\'s engineering potential on the world stage, inspiring innovation in sustainable transportation.'
            )]),
        ]),

        // ── The Challenge ───────────────────────────────────────────────────
        heading('h2', 'The Challenge'),
        paragraph([textNode(
            'Developing a competitive solar vehicle for the World Solar Challenge came with significant challenges. The team had to navigate engineering complexities, tackle logistical hurdles, and meet stringent competition requirements — designing a vehicle that was energy-efficient, lightweight, aerodynamic, and capable of enduring 3,000+ km of gruelling Australian outback conditions.'
        )]),
        paragraph([textNode(
            'Balancing performance, reliability, and efficiency within tight competition constraints demanded innovative solutions across every subsystem, from carbon-fibre bodywork to real-time solar energy management.'
        )]),

        // ── My Role ─────────────────────────────────────────────────────────
        heading('h2', 'My Role'),

        heading('h3', '1. Designing the Battery Pack'),
        ...(batteryId2 && batteryId1 ? [
            twoColBlock(
                [
                    paragraph([textNode(
                        'As the designer of the battery pack, I had the crucial responsibility of optimising the energy storage and delivery system for the solar vehicle. By fine-tuning the battery pack\'s design — considering energy density, charging capabilities, and system safety — I contributed to enhancing the overall performance and endurance of Primavera II.'
                    )]),
                ],
                batteryId2, 'right', 'cover'
            ),
            ...(batteryId1 ? [mediaBlock(batteryId1)] : []),
        ] : [
            paragraph([textNode(
                'As the designer of the battery pack, I optimised the energy storage and delivery system, fine-tuning energy density, charging capabilities, and system safety to maximise endurance throughout the race.'
            )]),
        ]),
        ...(electronicsId ? [mediaBlock(electronicsId)] : []),

        heading('h3', '2. Managing Team Logistics and Vehicle Transport'),
        ...(logisticsId ? [twoColBlock(
            [
                paragraph([textNode(
                    'In addition to my technical role, I took on the challenge of managing the logistics of the Primavera II team and coordinating the transport of the vehicle to Australia — an undertaking that involved navigating customs regulations, securing experimental-vehicle insurance (nearly half a million dollars in coverage), and meticulous planning across multiple agencies.'
                )]),
                paragraph([textNode(
                    'Through determined efforts and resourcefulness, we successfully navigated these obstacles, ensuring the safe and timely arrival of Primavera II at the starting line in Darwin.'
                )]),
            ],
            logisticsId, 'left', 'cover'
        )] : [
            paragraph([textNode(
                'I managed the logistics of the team and coordinated the vehicle transport to Australia, navigating customs regulations and securing almost half a million dollars in insurance coverage for the experimental vehicle.'
            )]),
        ]),

        // ── The Solution ────────────────────────────────────────────────────
        heading('h2', 'The Solution'),
        paragraph([textNode(
            'To overcome the challenges, the Primavera II team adopted a systematic approach, forming six specialised subsystems. Each played a critical role in the project\'s success.'
        )]),

        heading('h3', '1. Mechanics Team'),
        paragraph([textNode(
            'The mechanics team integrated the various mechanical components of Primavera II, ensuring optimal performance and safety — from the propulsion system to suspension and braking mechanisms — achieving the desired functionality and overall excellence of the vehicle.'
        )]),

        heading('h3', '2. Aerodynamics Team'),
        paragraph([textNode(
            'The aerodynamics team meticulously analysed airflow patterns and conducted wind-tunnel testing to refine the body shape, reduce drag, and improve overall efficiency. Through their expertise, Primavera II sliced through the wind effortlessly, maximising speed and energy efficiency during the race.'
        )]),

        heading('h3', '3. Bodywork Team'),
        paragraph([textNode(
            'The bodywork team excelled in precision mould design and composite manufacturing. Collaborating closely with the aerodynamics team, they transformed optimised curves and contours into a lightweight and aerodynamically efficient outer structure using advanced composite materials.'
        )]),

        heading('h3', '4. Electronics Team'),
        paragraph([textNode(
            'The electronics team developed cutting-edge solar and electric systems to power the vehicle — designing advanced energy management systems, efficient solar panel arrays, and high-performance batteries, ensuring seamless integration and maximum energy conversion throughout the race.'
        )]),

        heading('h3', '5. Logistics Team'),
        paragraph([textNode(
            'The logistics team managed the project\'s resources, supply chain, and coordination — meticulously planning procurement, managing inventory, and streamlining workflows to keep all six subsystems on schedule.'
        )]),

        heading('h3', '6. Strategy Team'),
        paragraph([textNode(
            'The strategy team formulated a comprehensive race plan, factoring in weather conditions, speed optimisation, and energy management. Their data-driven decisions — including when to deploy energy reserves or conserve power — played a crucial role in maximising Primavera II\'s competitive performance across 3,022 km.'
        )]),

        // ── Project Result ──────────────────────────────────────────────────
        heading('h2', 'Project Result'),
        ...(raceId ? [twoColBlock(
            [
                paragraph([textNode(
                    'The dedication, expertise, and collaborative efforts of the Primavera II team paid off as they proudly secured their position among the top 10 solar vehicles in the world at the 2015 World Solar Challenge in Australia.'
                )]),
                paragraph([textNode(
                    'The success of Primavera II not only showcased Colombia\'s talent in renewable technologies but also inspired future generations to pursue sustainable engineering solutions — proving that solar-powered vehicles represent a genuine paradigm shift in transportation.'
                )]),
            ],
            raceId, 'right', 'cover'
        )] : [
            paragraph([textNode(
                'Primavera II proudly secured a position among the top 10 solar vehicles in the world at the 2015 World Solar Challenge, showcasing Colombia\'s engineering talent and inspiring future sustainable innovation.'
            )]),
        ]),
    ]

    const content = {
        root: {
            type: 'root',
            children: contentNodes,
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
        },
    }

    payload.logger.info('→ Updating project 15 (Primavera II)…')

    await payload.update({
        collection: 'projects',
        id: 15,
        overrideAccess: true,
        data: {
            heroImage: heroId || undefined,
            summary:
                'In 2015 EAFIT University and EPM competed in the World Solar Challenge with Primavera II — a single-person solar vehicle built by a 30-person team — finishing in the top 10 solar vehicles globally.',
            startDate: '2014-02-15T05:00:00.000Z',
            duration: '2 Years',
            difficulty: '5',
            role: 'Battery design · Logistics management',
content: content as any,
        },
    })

    payload.logger.info('✓ Primavera II updated successfully')
}
