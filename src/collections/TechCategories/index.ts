import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

/**
 * TechCategories — editable groupings for technologies.
 *
 * Each tech category has a label, display order, an optional icon,
 * and a "showOnLanding" flag. Technologies link to one (or more)
 * TechCategory, replacing the old hardcoded `category` select.
 */
export const TechCategories: CollectionConfig = {
  slug: 'tech-categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Portfolio',
    defaultColumns: ['label', 'order', 'showOnLanding', 'updatedAt'],
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
      label: 'Display Label',
      admin: {
        description: 'e.g. "Embedded & Hardware", "Design", "AI / Agents" — translated per locale',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL-safe identifier (lowercase, dashes). e.g. "embedded-hardware". Not localized.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: 'Description',
      admin: {
        description: 'Optional short description for the category — translated per locale',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Category Icon',
      admin: {
        description: 'Optional icon displayed next to the category label',
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'tech-categories',
      label: 'Parent Category',
      admin: {
        description:
          'Optional — makes this a subcategory. On the landing page, subcategories are grouped under their parent.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 50,
      admin: {
        description: 'Lower numbers appear first on the landing page (within the same parent)',
        position: 'sidebar',
      },
    },
    {
      name: 'showOnLanding',
      type: 'checkbox',
      label: 'Show on Landing Page',
      defaultValue: false,
      admin: {
        description: 'Include this category group in the landing page Tech Stack section',
        position: 'sidebar',
      },
    },
  ],
}
