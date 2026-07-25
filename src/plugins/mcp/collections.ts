import type { MCPPluginConfig } from '@payloadcms/plugin-mcp'
import { buildSensitiveFieldStripper, USER_SENSITIVE_FIELDS } from './sanitizers'

/**
 * Collections exposed via the Payload MCP plugin.
 *
 * Guidelines:
 *  - Only enable collections an agent has a real reason to read/write.
 *  - Default to `find` only. Enable create/update/delete deliberately.
 *  - Attach `overrideResponse` for anything containing PII or secrets.
 *  - Do NOT expose: users (auth), form-submissions (PII), search (internal).
 */
export const mcpCollections: NonNullable<MCPPluginConfig['collections']> = {
    // ── Portfolio content ────────────────────────────────────────────────────
    projects: {
        enabled: { find: true, create: true, update: true },
        description:
            'Portfolio project records. Agents can search, create, and update projects including title, summary, content, technologies, and metadata.',
    },
    posts: {
        enabled: { find: true, create: true, update: true },
        description:
            'Blog post records. Agents can search, create, and update posts including title, content, categories, and SEO metadata.',
    },
    pages: {
        enabled: { find: true, create: true, update: true },
        description: 'Static page records. Read-only for agents.',
    },

    // ── Reference data ───────────────────────────────────────────────────────
    technologies: {
        enabled: { find: true, create: true, update: true },
        description:
            'Technology / tool records used across projects (name, logo, category, website). Agents can add new technologies and update existing ones.',
    },
    categories: {
        enabled: { find: true, create: true },
        description: 'Taxonomy categories used by posts and projects.',
    },
    clients: {
        enabled: { find: true, create: true, update: true },
        description: 'Client/company records linked to projects.',
    },
    media: {
        enabled: { find: true, create: true, update: true },
        description: 'Media library records (images, files). Read-only — uploads must go through the admin UI.',
    },
}
