'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import { Reveal } from '@/components/ui/reveal'
import { NeuChip, NeuDivider } from '@/components/ui/neu'

// Re-export shared primitives so landing components keep a single import point.
export { Reveal, revealVariants } from '@/components/ui/reveal'

type SectionHeadingProps = {
    eyebrow?: string
    title: string
    subtitle?: string
    className?: string
}

/** Consistent neumorphic section heading with etched divider */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
    eyebrow,
    title,
    subtitle,
    className,
}) => (
    <Reveal className={cn('mx-auto mb-12 max-w-2xl text-center', className)}>
        {eyebrow && (
            <NeuChip mono className="mb-4">
                {eyebrow}
            </NeuChip>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
        <NeuDivider className="mx-auto mt-8 w-24" />
    </Reveal>
)
