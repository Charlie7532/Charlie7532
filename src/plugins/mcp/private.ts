import { mcpPlugin } from '@payloadcms/plugin-mcp'
import { mcpCollections } from './collections'
import { importMediaFromUrl } from './tools'

/**
 * Private (admin / internal) Payload MCP plugin instance.
 *
 * Endpoint: POST /api/mcp
 * Auth:     Authorization: Bearer <key>
 *           Keys are managed in the `payload-mcp-api-keys` collection in admin.
 *
 * To expose or restrict collections, edit ./collections.ts.
 * To add custom tools, add a file to ./tools/ and export it from ./tools/index.ts.
 */
export const mcp = mcpPlugin({
    collections: mcpCollections,
    overrideApiKeyCollection: (collection) => ({
        ...collection,
        admin: {
            ...collection.admin,
            group: 'System',
            description:
                'Bearer tokens used to authenticate MCP clients (Claude, Copilot, internal agents) against the /api/mcp endpoint.',
        },
        labels: {
            singular: 'MCP Key',
            plural: 'MCP Keys',
        },
    }),
    mcp: {
        tools: [importMediaFromUrl],
    },
})
