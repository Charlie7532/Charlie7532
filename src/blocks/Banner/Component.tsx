'use client'

import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { Alert } from '@heroui/react'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & Omit<BannerBlockProps, 'style'> & {
  style: BannerBlockProps['style'] | 'callout'
}

// Map banner style to HeroUI Alert color
const colorMap: Record<string, 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'> = {
  info: 'default',
  error: 'danger',
  success: 'success',
  warning: 'warning',
}

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  if (style === 'callout') {
    return (
      <div className={cn('mx-auto my-8 w-full max-w-2xl rounded-2xl bg-muted/50 px-8 py-10 text-center', className)}>
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    )
  }

  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <Alert color={colorMap[style || 'info'] || 'default'}>
        <RichText data={content} enableGutter={false} enableProse={false} />
      </Alert>
    </div>
  )
}
