import { cn } from '@/utilities/ui'
import React from 'react'

import { Card, CardDoc } from '@/components/Card'

export type Props = {
  docs: CardDoc[]
  relationTo?: 'posts' | 'projects'
  /** @deprecated use docs instead */
  posts?: CardDoc[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { docs, posts, relationTo = 'posts' } = props
  const items = docs ?? posts ?? []

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {items?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo={relationTo} showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
