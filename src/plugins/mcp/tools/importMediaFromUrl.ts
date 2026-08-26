import { z } from 'zod'
import type { MCPPluginConfig } from '@payloadcms/plugin-mcp'

type MCPTool = NonNullable<NonNullable<MCPPluginConfig['mcp']>['tools']>[number]

/**
 * MCP tool: importMediaFromUrl
 *
 * Downloads an image from a public URL and creates a Payload media record.
 * Returns the new media ID, URL, and dimensions.
 *
 * This allows AI agents to import images from external sources (e.g. WordPress
 * blog posts) without any local file handling or multipart upload — a capability
 * that plain CRUD tools cannot provide because the MCP JSON-RPC transport is
 * text-only.
 */
export const importMediaFromUrl: MCPTool = {
    name: 'importMediaFromUrl',
    description:
        'Download an image from a public URL and upload it to the Payload media library. ' +
        'Returns the new media record ID and URL. ' +
        'Use this to import images from external sources (e.g. WordPress blogs) without needing a local file or multipart upload.',
    parameters: {
        url: z.string().url().describe('Public URL of the image to download and import'),
        alt: z.string().optional().describe('Alt text / accessible description for the image'),
    },
    handler: async ({ url, alt }, req) => {
        try {
            const cleanUrl = (url as string).split('?')[0]!
            const name = cleanUrl.split('/').pop() ?? 'imported-image'

            const res = await fetch(url as string, {
                headers: { 'User-Agent': 'Mozilla/5.0 (compatible; payload-mcp/1.0)' },
            })

            if (!res.ok) {
                return {
                    content: [{ type: 'text' as const, text: `Failed to download: HTTP ${res.status} — ${url}` }],
                }
            }

            const mimetype = (res.headers.get('content-type') ?? 'image/jpeg').split(';')[0]!.trim()
            const data = Buffer.from(await res.arrayBuffer())

            const media = await req.payload.create({
                collection: 'media',
                data: { alt: (alt as string | undefined) ?? name },
                file: { data, mimetype, name, size: data.length },
                overrideAccess: true,
                req,
            })

            return {
                content: [{
                    type: 'text' as const,
                    text: JSON.stringify({
                        id: media.id,
                        url: media.url,
                        filename: media.filename,
                        width: media.width,
                        height: media.height,
                    }),
                }],
            }
        } catch (err) {
            return {
                content: [{ type: 'text' as const, text: `Error: ${(err as Error).message}` }],
            }
        }
    },
}
