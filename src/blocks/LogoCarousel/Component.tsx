'use server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import type { LogoCarouselBlock as LogoCarouselBlockProps } from '@/payload-types'
import { LogoCarouselClient } from './Component.client'

type LogoItem = {
    id: string
    name: string
    website?: string | null
    logo?: {
        url?: string | null
        alt?: string
        width?: number | null
        height?: number | null
    } | null
    logoDark?: {
        url?: string | null
        alt?: string
        width?: number | null
        height?: number | null
    } | null
}

export const LogoCarouselBlock: React.FC<LogoCarouselBlockProps & { id?: string }> = async (props) => {
    const {
        id,
        heading,
        populateBy,
        collectionType,
        selectedItems,
        limit: limitFromProps,
        autoplay,
        speed,
        logoSize,
        grayscale,
    } = props

    let items: LogoItem[] = []

    if (populateBy === 'collection' && collectionType) {
        const payload = await getPayload({ config: configPromise })
        const collection = collectionType as 'clients' | 'institutes' | 'technologies'

        const fetched = await payload.find({
            collection,
            depth: 1,
            limit: limitFromProps ?? 12,
            where: { featured: { equals: true } },
        })

        items = (fetched.docs as unknown as LogoItem[]).filter((doc) => doc.logo)
    } else if (populateBy === 'selection' && selectedItems?.length) {
        items = selectedItems
            .map((item) => {
                if (typeof item.value === 'object' && item.value !== null) {
                    return item.value as unknown as LogoItem
                }
                return null
            })
            .filter((item): item is LogoItem => item !== null && Boolean(item.logo))
    }

    if (!items.length) return null

    return (
        <LogoCarouselClient
            id={id}
            heading={heading}
            items={items}
            autoplay={autoplay ?? true}
            speed={speed ?? 3000}
            logoSize={logoSize ?? 'md'}
            grayscale={grayscale ?? true}
        />
    )
}
