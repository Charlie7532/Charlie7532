'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link'

// Local type until `pnpm generate:types` produces Pricing1Block in payload-types
type PlanCTA = {
    type?: 'reference' | 'custom' | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reference?: { relationTo: 'pages' | 'posts'; value: any } | null
    url?: string | null
    newTab?: boolean | null
    label?: string | null
    appearance?: 'default' | 'outline' | null
}

type Plan = {
    id?: string | null
    name: string
    price: string
    interval?: string | null
    description?: string | null
    features?: { id?: string | null; feature: string }[]
    highlighted?: boolean | null
    cta?: PlanCTA | null
}

type Pricing1Props = {
    title: string
    description?: string | null
    plans?: Plan[]
    spacingPreset?: 'none' | 'small' | 'medium' | 'large' | null
    backgroundTheme?: 'default' | 'light' | 'dark' | 'primary' | null
    contentAlignment?: 'start' | 'center' | 'end' | null
    className?: string
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
}

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
}

export const Pricing1Client: React.FC<Pricing1Props> = ({
    title,
    description,
    plans,
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'center',
    className,
}) => {
    const planCount = plans?.length ?? 0

    const spacingClasses = {
        none: 'py-0',
        small: 'py-8',
        medium: 'py-12 md:py-16 lg:py-20',
        large: 'py-16 md:py-24 lg:py-32',
    }

    const sectionThemeClasses = {
        default: 'bg-background',
        light: 'bg-gray-50',
        dark: 'bg-gray-900',
        primary: 'bg-primary/5',
    }

    // Per-theme text/card overrides so colors are always readable
    // regardless of the site's dark/light mode setting.
    type ThemeTokens = {
        heading: string
        muted: string
        card: string
        cardBorder: string
        divider: string
    }

    const themeTokens = {
        default: {
            heading: 'text-foreground',
            muted: 'text-muted-foreground',
            card: 'bg-card',
            cardBorder: 'border-border',
            divider: 'border-border',
        } satisfies ThemeTokens,
        light: {
            heading: 'text-gray-900',
            muted: 'text-gray-500',
            card: 'bg-white',
            cardBorder: 'border-gray-200',
            divider: 'border-gray-200',
        } satisfies ThemeTokens,
        dark: {
            heading: 'text-white',
            muted: 'text-gray-400',
            card: 'bg-gray-800',
            cardBorder: 'border-gray-700',
            divider: 'border-gray-700',
        } satisfies ThemeTokens,
        primary: {
            heading: 'text-foreground',
            muted: 'text-muted-foreground',
            card: 'bg-card',
            cardBorder: 'border-border',
            divider: 'border-border',
        } satisfies ThemeTokens,
    }

    const resolvedTheme =
        backgroundTheme === 'light' ? 'light' :
            backgroundTheme === 'dark' ? 'dark' :
                backgroundTheme === 'primary' ? 'primary' : 'default'

    const tokens: ThemeTokens = themeTokens[resolvedTheme]

    // Highlighted card: same background as the theme (text tokens always match),
    // visually elevated with accent ring + shadow.
    // This avoids the text/button contrast issues that arise from a solid accent background.
    const hlCard = 'ring-2 ring-(--accent) shadow-2xl shadow-(--accent)/10 scale-[1.03] z-10'
    const hlBadge = 'bg-(--accent) text-(--accent-foreground)'

    // The `outline` button uses `--button-fg: var(--color-default-foreground)` which
    // follows the SITE's dark/light mode — not the block's backgroundTheme. When the
    // block forces a background (e.g. light section in a dark-mode site), the button
    // text color would be wrong. Override --button-fg to always match the forced bg.
    const outlineCTAClass = cn(
        'w-full justify-center',
        resolvedTheme === 'light' && '[--button-fg:oklch(16.93%_0_0)]',
        resolvedTheme === 'dark' && '[--button-fg:oklch(99.11%_0_0)]',
    )

    const alignmentClasses = {
        start: 'text-left',
        center: 'text-center',
        end: 'text-right',
    }

    // Grid cols based on number of plans
    const gridColsClass =
        planCount === 1
            ? 'grid-cols-1 max-w-md mx-auto'
            : planCount === 2
                ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

    return (
        <section
            className={cn(
                spacingClasses[spacingPreset as keyof typeof spacingClasses] ?? spacingClasses.medium,
                sectionThemeClasses[backgroundTheme as keyof typeof sectionThemeClasses] ??
                sectionThemeClasses.default,
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                {(title || description) && (
                    <motion.div
                        className={cn(
                            'mb-12 md:mb-16',
                            alignmentClasses[contentAlignment as keyof typeof alignmentClasses] ??
                            alignmentClasses.center,
                        )}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={headerVariants}
                    >
                        {title && (
                            <h2 className={cn('mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl', tokens.heading)}>
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className={cn('mx-auto max-w-3xl text-base sm:text-lg', tokens.muted)}>
                                {description}
                            </p>
                        )}
                    </motion.div>
                )}

                {/* Plans grid — pt-8 keeps space for the Popular badge that hangs above */}
                {plans && planCount > 0 && (
                    <motion.div
                        className={cn('grid gap-6 pt-6', gridColsClass)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                    >
                        {plans.map((plan, index) => {
                            const isHL = !!plan.highlighted
                            return (
                                <motion.div
                                    key={plan.id ?? index}
                                    className={cn(
                                        'relative flex flex-col rounded-2xl border p-8 transition-all duration-200',
                                        tokens.card,
                                        tokens.cardBorder,
                                        isHL ? hlCard : 'shadow-sm hover:shadow-md',
                                    )}
                                    variants={cardVariants}
                                >
                                    {/* Popular badge */}
                                    {isHL && (
                                        <span className={cn(
                                            'absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-semibold shadow-sm',
                                            hlBadge,
                                        )}>
                                            Popular
                                        </span>
                                    )}

                                    {/* Plan name */}
                                    <h3 className={cn('text-base font-semibold', tokens.heading)}>
                                        {plan.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mt-4 flex items-baseline gap-1">
                                        <span className={cn('text-4xl font-bold tracking-tight', tokens.heading)}>
                                            {plan.price}
                                        </span>
                                        {plan.interval && (
                                            <span className={cn('text-sm', tokens.muted)}>
                                                {plan.interval}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    {plan.description && (
                                        <p className={cn('mt-3 text-sm leading-relaxed', tokens.muted)}>
                                            {plan.description}
                                        </p>
                                    )}

                                    {/* Divider */}
                                    <hr className={cn('my-6', tokens.divider)} />

                                    {/* Features */}
                                    {plan.features && plan.features.length > 0 && (
                                        <ul className="flex flex-col gap-y-3">
                                            {plan.features.map((f, fIndex) => (
                                                <li
                                                    key={f.id ?? fIndex}
                                                    className={cn('flex items-start gap-x-3 text-sm', tokens.muted)}
                                                >
                                                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-(--accent)' />
                                                    {f.feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* CTA */}
                                    {plan.cta?.label && (
                                        <div className="mt-auto pt-8">
                                            <CMSLink
                                                {...plan.cta}
                                                appearance={isHL ? 'default' : 'outline'}
                                                className={isHL ? 'w-full justify-center' : outlineCTAClass}
                                                size="lg"
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
