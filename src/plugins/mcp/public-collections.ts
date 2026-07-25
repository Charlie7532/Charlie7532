import type { MCPPluginConfig } from '@payloadcms/plugin-mcp'

/**
 * Collections exposed via the **public** MCP endpoint (`/api/public/mcp`).
 *
 * Read-only, anonymous. Only includes collections with `read: anyone` or
 * `authenticatedOrPublished` access so published-only documents are returned.
 * Users, form-submissions, and search are intentionally excluded.
 */
export const publicMcpCollections: NonNullable<MCPPluginConfig['collections']> = {
    projects: {
        enabled: { find: true },
        description:
            'Portfolio project case studies. Each record includes title, summary, full content, ' +
            'technologies used, categories, client, role, start date, duration, difficulty (1–5), ' +
            'live URL, and repo URL. When summarising a project, include the role played, ' +
            'the technologies involved, and any measurable outcomes visible in the content. ' +
            'Request depth=2 to get fully resolved technology and client objects.',
    },
    technologies: {
        enabled: { find: true },
        description:
            'Technologies and tools used across projects. Each record has a name, category ' +
            '(e.g. frontend-framework, cad, microcontroller, language, manufacturing), and website. ' +
            'Use category filters to answer questions like "what CAD tools does he use?" or ' +
            '"what embedded platforms has he worked with?".',
    },
    categories: {
        enabled: { find: true },
        description: 'Taxonomy categories that classify projects and blog posts by domain (e.g. web, hardware, design).',
    },
    clients: {
        enabled: { find: true },
        description:
            'Clients and organisations Juan has built work for. ' +
            'Useful for answering questions about industry experience or professional context behind a project.',
    },
    posts: {
        enabled: { find: true },
        description:
            'Blog posts covering engineering decisions, project write-ups, and technical topics. ' +
            'Useful for understanding how Juan thinks and communicates technically.',
    },
}
