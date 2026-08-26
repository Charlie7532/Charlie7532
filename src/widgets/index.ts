
import type { Widget, WidgetInstance } from 'payload'

export const widgets: Widget[] = []

export const defaultLayout: WidgetInstance[] = [
    { widgetSlug: 'cloudflare-traffic', width: 'full' },
    { widgetSlug: 'cloudflare-world-map', width: 'full' },
]

export const dashboard = { widgets, defaultLayout, }
