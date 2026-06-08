import type { File, Payload, PayloadRequest } from 'payload'

// Maps JSON category labels → our select values
const CATEGORY_MAP: Record<string, string> = {
    'Frontend Framework': 'frontend-framework',
    'Programming Language': 'language',
    'Database Management System': 'database',
    'Web Services': 'web-services',
    'Integrated Development Environment': 'dev-tools',
    'Scripting Language': 'scripting',
    'Cloud Service Provider': 'cloud',
    Microcontroller: 'microcontroller',
    'Single-Board Computer': 'sbc',
    'Development Platform': 'embedded',
    Firmware: 'embedded',
    'Electronics Design': 'electronics-design',
    'Computer-Aided Design (CAD)': 'cad',
    'Graphic Design': 'graphic-design',
    'UI/UX Design': 'ui-ux',
    '3D Printing': '3d-printing',
    'CNC Control': 'cnc',
    Manufacturing: 'manufacturing',
    Material: 'material',
    'Internet of Things (IoT)': 'iot',
    'Communication Protocol': 'protocol',
    'IoT Automation': 'iot',
    'Wireless Communication': 'wireless',
}

type TechEntry = {
    id: string
    name: string
    logo: string
    category: string
}

// prettier-ignore
const TECHNOLOGIES: TechEntry[] = [
    // ── Frontend ──
    { id: 'react', name: 'React', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/react_w160.svg', category: 'Frontend Framework' },
    { id: 'next', name: 'Next JS', logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png', category: 'Frontend Framework' },
    { id: 'next-ui', name: 'Next UI', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/next_h160.svg', category: 'Frontend Framework' },
    { id: 'materialize', name: 'Materialize', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/materialize_h160.svg', category: 'Frontend Framework' },

    // ── Languages ──
    { id: 'c-plus-plus', name: 'C++', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/c++_h160.svg', category: 'Programming Language' },
    { id: 'python', name: 'Python', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/python_h160.svg', category: 'Programming Language' },
    { id: 'php', name: 'PHP', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/php_h160.svg', category: 'Programming Language' },
    { id: 'html', name: 'HTML', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/html_h160.svg', category: 'Programming Language' },
    { id: 'css', name: 'CSS', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/css_h160.svg', category: 'Programming Language' },
    { id: 'node-js', name: 'Node JS', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/nodejs_h160.svg', category: 'Programming Language' },
    { id: 'matlab', name: 'Matlab', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/matlab_h160.svg', category: 'Programming Language' },

    // ── Databases ──
    { id: 'my-sql', name: 'mySQL', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/myswl_h160.svg', category: 'Database Management System' },
    { id: 'postgre-sql', name: 'PostgreSQL', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/postgres_h160.svg', category: 'Database Management System' },

    // ── Cloud & Services ──
    { id: 'cloudflare', name: 'Cloudflare', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/cloudflare_h160.svg', category: 'Web Services' },
    { id: 'gcp', name: 'GCP', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/gcp_h160.svg', category: 'Cloud Service Provider' },
    { id: 'aws', name: 'AWS', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/aws_h160.svg', category: 'Cloud Service Provider' },

    // ── Dev Tools ──
    { id: 'vs-code', name: 'VS Code', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/vst_h160.svg', category: 'Integrated Development Environment' },
    { id: 'appscript', name: 'Apps Script', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/appscript_h160.svg', category: 'Scripting Language' },

    // ── Microcontrollers & Embedded ──
    { id: 'arduino', name: 'Arduino', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/arduino_h160.svg', category: 'Microcontroller' },
    { id: 'esp32', name: 'ESP 32', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/esp_32_h160.svg', category: 'Microcontroller' },
    { id: 'rpi', name: 'Raspberry Pi', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/raspberry_pi_h160.svg', category: 'Single-Board Computer' },
    { id: 'pio', name: 'Platform IO', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/platformio_h160.svg', category: 'Development Platform' },
    { id: 'marlin', name: 'Marlin', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/marlin_w160.svg', category: 'Firmware' },
    { id: 'pcb', name: 'Custom PCB', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/pcb_h160.svg', category: 'Electronics Design' },

    // ── CAD ──
    { id: 'inventor', name: 'Autodesk Inventor', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/inventor_h160.svg', category: 'Computer-Aided Design (CAD)' },
    { id: 'fusion', name: 'Autodesk Fusion 360', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/fusion_h160.svg', category: 'Computer-Aided Design (CAD)' },
    { id: 'solid', name: 'SolidWorks', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/solid_h160.svg', category: 'Computer-Aided Design (CAD)' },
    { id: 'creo', name: 'PTC Creo Parametric', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/ptc_h160.svg', category: 'Computer-Aided Design (CAD)' },
    { id: 'onshape', name: 'Onshape', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/onshape_h160.svg', category: 'Computer-Aided Design (CAD)' },

    // ── Design ──
    { id: 'inkscape', name: 'Inkscape', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/inkscape_h160.svg', category: 'Graphic Design' },
    { id: 'figma', name: 'Figma', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/figma_h160.svg', category: 'UI/UX Design' },

    // ── 3D Printing ──
    { id: 'cura', name: 'Cura', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/cura_h160.svg', category: '3D Printing' },
    { id: 'photon', name: 'Photon', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/photon_h160.svg', category: '3D Printing' },
    { id: '3dp', name: '3D Printing', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/3d_h160.svg', category: '3D Printing' },

    // ── CNC & Manufacturing ──
    { id: 'chillipeper', name: 'ChiliPeppr', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/chillipeper_h160.svg', category: 'CNC Control' },
    { id: 'cnc', name: 'CNC', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/cnc.svg', category: 'Manufacturing' },
    { id: 'laser', name: 'Laser Cut', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/laser_h160.svg', category: 'Manufacturing' },
    { id: 'plasma', name: 'Plasma Cut', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/laser_h160.svg', category: 'Manufacturing' },
    { id: 'metal-sheet', name: 'Sheet Metal Bending', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/sheet_metal_h160.svg', category: 'Manufacturing' },
    { id: 'openbuilds', name: 'Openbuilds', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/openbuilds_logo.svg', category: 'Manufacturing' },

    // ── Materials ──
    { id: 'composite', name: 'Composite Materials', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/composite_h160.svg', category: 'Material' },

    // ── IoT & Protocols ──
    { id: 'blynk', name: 'Blynk IoT', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/blynk_h160.svg', category: 'Internet of Things (IoT)' },
    { id: 'mqtt', name: 'MQTT', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/mqtt_h60.svg', category: 'Communication Protocol' },
    { id: 'nodered', name: 'Node-RED', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/node_red_h160.svg', category: 'IoT Automation' },

    // ── Wireless ──
    { id: 'wifi', name: 'WiFi', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/wifi.svg', category: 'Wireless Communication' },
    { id: 'bluetooth', name: 'Bluetooth', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/bluetooth.svg', category: 'Wireless Communication' },
    { id: 'lora', name: 'LoRa', logo: 'https://cdn.juancbotero.com/assets/pictures/tecnologies/lora.svg', category: 'Wireless Communication' },
]

function getMimeType(url: string): string {
    const ext = (url.split('?')[0] ?? url).split('.').pop()?.toLowerCase() ?? ''
    const map: Record<string, string> = {
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        webp: 'image/webp',
        gif: 'image/gif',
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

export async function seedTechnologies(payload: Payload, req: PayloadRequest): Promise<void> {
    payload.logger.info('— Seeding technologies...')

    // Clear existing (table may not exist yet on first run)
    try {
        await payload.db.deleteMany({ collection: 'technologies' as any, req, where: {} })
    } catch {
        payload.logger.info('  technologies table not found — skipping clear')
    }

    // Cache logo URL → media doc id to avoid re-uploading identical logos
    const mediaCache = new Map<string, string>()
    let created = 0

    for (const tech of TECHNOLOGIES) {
        let logoId: number | undefined

        try {
            if (mediaCache.has(tech.logo)) {
                logoId = Number(mediaCache.get(tech.logo))
            } else {
                const file = await fetchLogoFile(tech.logo, tech.name)
                const mediaDoc = await payload.create({
                    collection: 'media',
                    data: { alt: `${tech.name} logo` },
                    file,
                })
                logoId = mediaDoc.id as number
                mediaCache.set(tech.logo, String(logoId))
            }
        } catch (err) {
            payload.logger.warn(`  ⚠ Could not fetch logo for "${tech.name}" — creating without logo`)
        }

        try {
            await payload.create({
                collection: 'technologies' as any,
                data: {
                    name: tech.name,
                    category: CATEGORY_MAP[tech.category] ?? 'other',
                    featured: false,
                    ...(logoId ? { logo: logoId } : {}),
                },
            })
            created++
        } catch (err) {
            payload.logger.warn(`  ⚠ Failed to create technology "${tech.name}": ${err}`)
        }
    }

    payload.logger.info(`— Seeded ${created} technologies ✓`)
}
