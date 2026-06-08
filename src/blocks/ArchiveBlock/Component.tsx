import type { Post, Project, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'

type ArchiveDoc = Post | Project

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs, relationTo } = props

  const limit = limitFromProps || 3
  const collection = (relationTo as string) === 'projects' ? 'projects' : 'posts'

  let docs: ArchiveDoc[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetched = await payload.find({
      collection,
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? { where: { categories: { in: flattenedCategories } } }
        : {}),
    })

    docs = fetched.docs as ArchiveDoc[]
  } else {
    if (selectedDocs?.length) {
      docs = selectedDocs.map((item) => {
        if (typeof item.value === 'object') return item.value
      }) as ArchiveDoc[]
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive docs={docs} relationTo={collection} />
    </div>
  )
}
