import { Field, slugField } from 'payload'

export const categoriesFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  slugField(),
]
