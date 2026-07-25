/**
 * Strip sensitive keys from arbitrarily nested data and return a transformed
 * MCP `overrideResponse` payload.
 */

type McpResponse = {
    content: Array<{
        text: string
        type: string
    }>
}

export function buildSensitiveFieldStripper(sensitiveKeys: Iterable<string>) {
    const denylist = new Set(sensitiveKeys)

    const sanitize = (value: unknown): unknown => {
        if (Array.isArray(value)) return value.map(sanitize)
        if (value && typeof value === 'object') {
            const out: Record<string, unknown> = {}
            for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
                if (denylist.has(k)) continue
                out[k] = sanitize(v)
            }
            return out
        }
        return value
    }

    return (response: McpResponse): McpResponse => ({
        content: response.content.map((item) => {
            if (item.type !== 'text') return item
            try {
                const parsed = JSON.parse(item.text)
                return { ...item, text: JSON.stringify(sanitize(parsed)) }
            } catch {
                return item
            }
        }),
    })
}

/**
 * Sensitive fields for the `users` collection. Covers Payload auth-managed
 * fields — defense-in-depth even if the collection is not exposed.
 */
export const USER_SENSITIVE_FIELDS = [
    'password',
    'hash',
    'salt',
    'apiKey',
    'apiKeyIndex',
    'enableAPIKey',
    'resetPasswordToken',
    'resetPasswordExpiration',
    'loginAttempts',
    'lockUntil',
    'sessions',
    '_verificationToken',
] as const
