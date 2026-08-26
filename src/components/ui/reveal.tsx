'use client'

import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/utilities/ui'

/** Shared scroll-reveal variants */
export const revealVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
}

export type RevealProps = {
    children: React.ReactNode
    className?: string
    /** Stagger index — each unit adds 0.1s delay */
    index?: number
    as?: 'div' | 'section' | 'article' | 'li' | 'span'
}

/**
 * Fades + slides content in when it scrolls into view.
 * Respects prefers-reduced-motion. Generic — usable in any section.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className, index = 0, as = 'div' }) => {
    const reduce = useReducedMotion()
    const Comp = motion[as]
    return (
        <Comp
            className={className}
            custom={index}
            initial={reduce ? undefined : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={revealVariants}
        >
            {children}
        </Comp>
    )
}
