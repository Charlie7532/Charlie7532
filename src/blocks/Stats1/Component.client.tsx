'use client'
import type { Stats1Block as Stats1BlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    className?: string
} & Stats1BlockProps

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
}

const statVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
}

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

const textThemeClasses = {
    default: 'text-foreground',
    light: 'text-gray-900',
    dark: 'text-white',
    primary: 'text-foreground',
}

const mutedTextThemeClasses = {
    default: 'text-muted-foreground',
    light: 'text-gray-600',
    dark: 'text-gray-300',
    primary: 'text-muted-foreground',
}

const eyebrowThemeClasses = {
    default: 'text-primary',
    light: 'text-primary',
    dark: 'text-primary-foreground/70',
    primary: 'text-primary',
}

const cardThemeClasses = {
    default: 'bg-card border shadow-sm',
    light: 'bg-white border border-gray-200 shadow-sm',
    dark: 'bg-gray-800 border border-gray-700 shadow-md',
    primary: 'bg-card border shadow-sm',
}

const statValueThemeClasses = {
    default: 'text-foreground',
    light: 'text-gray-900',
    dark: 'text-white',
    primary: 'text-foreground',
}

const alignmentClasses = {
    start: 'text-left',
    center: 'text-center',
    end: 'text-right',
}

const statColClasses: Record<number, string> = {
    1: 'col-span-12',
    2: 'col-span-6',
    3: 'col-span-12 sm:col-span-4',
    4: 'col-span-6 lg:col-span-3',
    5: 'col-span-6 sm:col-span-4 lg:col-span-2',
    6: 'col-span-6 sm:col-span-4 lg:col-span-2',
}

export const Stats1Client: React.FC<Props> = ({
    eyebrow,
    title,
    description,
    stats,
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'center',
    className,
}) => {
    const theme = (backgroundTheme ?? 'default') as keyof typeof sectionThemeClasses
    const spacing = (spacingPreset ?? 'medium') as keyof typeof spacingClasses
    const alignment = (contentAlignment ?? 'center') as keyof typeof alignmentClasses

    const colClass = stats && stats.length > 0 ? (statColClasses[stats.length] ?? 'col-span-6 sm:col-span-4 lg:col-span-3') : 'col-span-6'

    return (
        <section
            className={cn(
                spacingClasses[spacing],
                sectionThemeClasses[theme],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Section header */}
                    {(eyebrow || title || description) && (
                        <motion.div
                            variants={headerVariants}
                            className={cn('mb-12', alignmentClasses[alignment])}
                        >
                            {eyebrow && (
                                <p className={cn(
                                    'mb-3 text-sm font-semibold uppercase tracking-widest',
                                    eyebrowThemeClasses[theme],
                                )}>
                                    {eyebrow}
                                </p>
                            )}
                            {title && (
                                <h2 className={cn(
                                    'text-3xl font-bold tracking-tight sm:text-4xl',
                                    textThemeClasses[theme],
                                )}>
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className={cn(
                                    'mx-auto mt-4 max-w-2xl text-base leading-relaxed',
                                    mutedTextThemeClasses[theme],
                                    alignment === 'center' ? 'text-center' : '',
                                )}>
                                    {description}
                                </p>
                            )}
                        </motion.div>
                    )}

                    {/* Stats grid */}
                    {stats && stats.length > 0 && (
                        <div className="grid grid-cols-12 gap-6 sm:gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.id ?? index}
                                    variants={statVariants}
                                    className={cn(
                                        colClass,
                                        'rounded-2xl p-8 text-center',
                                        cardThemeClasses[theme],
                                    )}
                                >
                                    <div className={cn(
                                        'text-4xl font-bold tracking-tight sm:text-5xl',
                                        statValueThemeClasses[theme],
                                    )}>
                                        {stat.value}
                                    </div>
                                    <div className={cn(
                                        'mt-2 text-sm font-medium',
                                        mutedTextThemeClasses[theme],
                                    )}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
