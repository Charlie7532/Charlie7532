'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { cn } from '@/utilities/ui'
import { toKebabCase } from '@/utilities/toKebabCase'

export type TocPosition = 'left' | 'right' | 'none'

interface TableOfContentsProps {
    className?: string
    position?: TocPosition
}

interface HeadingItem {
    id: string
    text: string
    level: number
}

// Smooth single rotation per heading change — accumulates so grip dots visibly turn
const ROTATION_STEP = 60 // degrees per notch

// LED progress dots around the dial — each dot lights when its share of the article is read
const PROGRESS_DOTS = 12
// Bright LED blue (theme --accent is too dark to read as a lit LED at 3px)
const LED_COLOR = 'oklch(70% 0.15 238.89)'
const LED_GLOW = 'oklch(70% 0.15 238.89 / 0.55)'

export default function TableOfContents({ className, position = 'right' }: TableOfContentsProps) {
    const [headings, setHeadings] = useState<HeadingItem[]>([])
    const [activeId, setActiveId] = useState<string>('')
    const [readProgress, setReadProgress] = useState<number>(0) // 0..1 through the article
    const dialControls = useAnimationControls()

    // Rotation is derived from the active section index: scrolling down turns the
    // knob clockwise, scrolling up counter-clockwise, and jumping several sections
    // sweeps proportionally — always in sync with the LEDs.
    useEffect(() => {
        if (!activeId || headings.length === 0) return
        const index = headings.findIndex((h) => h.id === activeId)
        if (index === -1) return
        dialControls.start({
            rotate: index * ROTATION_STEP,
            transition: { type: 'spring', stiffness: 120, damping: 16 },
        })
    }, [activeId, headings, dialControls])

    // Extract headings from the page and add IDs
    useEffect(() => {
        const addIdsToHeadings = () => {
            // Try multiple selectors to find H2 headings
            const selectors = [
                '.payload-richtext h2',
                'article h2',
                'h2',
                '.prose h2'
            ]

            let headingElements: NodeListOf<Element> | null = null
            for (const selector of selectors) {
                headingElements = document.querySelectorAll(selector)
                if (headingElements.length > 0) {
                    console.log(`Found ${headingElements.length} headings with selector: ${selector}`)
                    break
                }
            }

            if (!headingElements || headingElements.length === 0) {
                console.log('No H2 headings found with any selector')
                return
            }

            const headingItems: HeadingItem[] = []

            headingElements.forEach((element) => {
                const text = element.textContent || ''
                if (text.trim()) {
                    const id = toKebabCase(text.trim())
                    element.id = id
                    headingItems.push({
                        id,
                        text: text.trim(),
                        level: 2,
                    })
                    console.log('Added heading:', { id, text: text.trim() })
                }
            })

            setHeadings(headingItems)
            console.log('Total headings set:', headingItems.length)
        }

        // Run immediately
        addIdsToHeadings()

        // Also run after delays to handle dynamic content
        const timer1 = setTimeout(addIdsToHeadings, 500)
        const timer2 = setTimeout(addIdsToHeadings, 1000)

        // Run when page is fully loaded
        const onLoad = () => addIdsToHeadings()
        if (document.readyState === 'complete') {
            onLoad()
        } else {
            window.addEventListener('load', onLoad)
        }

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            window.removeEventListener('load', onLoad)
        }
    }, [])

    // Handle scroll to update active heading + reading progress
    const handleScroll = useCallback(() => {
        if (headings.length === 0) return

        const headingElements = headings.map(heading => document.getElementById(heading.id)).filter(Boolean)

        if (headingElements.length === 0) return

        // Reading progress: from the first heading to the bottom of the article content
        const first = headingElements[0]
        const article = first?.closest('article') ?? first?.closest('.payload-richtext')
        if (first) {
            const start = first.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2
            const endEl = article ?? headingElements[headingElements.length - 1]
            const end = endEl!.getBoundingClientRect().bottom + window.scrollY - window.innerHeight
            const range = Math.max(end - start, 1)
            const progress = Math.min(Math.max((window.scrollY - start) / range, 0), 1)
            setReadProgress(progress)
        }

        // Find the heading that's currently in view
        let activeHeading = headingElements[0]

        for (const element of headingElements) {
            if (element) {
                const rect = element.getBoundingClientRect()
                // Consider a heading active if it's above the middle of the screen
                if (rect.top <= window.innerHeight / 2) {
                    activeHeading = element
                } else {
                    break
                }
            }
        }

        if (activeHeading && activeHeading.id !== activeId) {
            setActiveId(activeHeading.id)
        }
    }, [headings, activeId])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // Initial call to set active heading
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    // Smooth scroll to heading
    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const headerOffset = 80 // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    // Show placeholder when no headings for debugging
    const isDevelopment = process.env.NODE_ENV === 'development'
    const showPlaceholder = isDevelopment && headings.length === 0

    // Always show the component in development for debugging
    if (!isDevelopment && headings.length === 0) {
        return null
    }

    return (
        <nav
            className={cn(
                'sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto',
                'neu-raised rounded-2xl p-5 min-h-[200px]',
                'block', // Always show for debugging
                position === 'left' ? 'lg:order-1' : 'lg:order-2',
                className
            )}
            aria-label="Table of contents"
        >
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Contents
                </h3>
                <div className="relative h-8 w-8" title={`${Math.round(readProgress * 100)}% read`}>
                    {/* LED progress dots — light up clockwise as you read (ref: knob w/ lit dots) */}
                    {Array.from({ length: PROGRESS_DOTS }, (_, i) => {
                        const lit = readProgress >= (i + 1) / PROGRESS_DOTS - 0.001
                        const deg = (i / PROGRESS_DOTS) * 360 // start at 12 o'clock, clockwise
                        return (
                            <span
                                key={i}
                                className="absolute left-1/2 top-1/2 h-[3px] w-[3px] rounded-full transition-all duration-300"
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-14px)`,
                                    background: lit
                                        ? LED_COLOR
                                        : 'color-mix(in oklch, var(--muted) 35%, transparent)',
                                    boxShadow: lit
                                        ? `0 0 5px 1.5px ${LED_GLOW}`
                                        : 'inset 0.5px 0.5px 1px var(--neu-shadow-soft)',
                                }}
                            />
                        )
                    })}
                    {/* Knob face — rotates one notch per section, finger dot marks position */}
                    <motion.div
                        className="neu-dial absolute inset-[5px] rounded-full"
                        style={{
                            boxShadow:
                                '2px 2px 5px var(--neu-shadow-soft), -2px -2px 5px var(--neu-light)',
                        }}
                        animate={dialControls}
                    >
                        {/* Lead dot — plain mark on the knob face so the rotation reads clearly */}
                        <span
                            className="absolute left-1/2 top-1/2 h-[3.5px] w-[3.5px] rounded-full bg-foreground/70"
                            style={{
                                transform: 'translate(-50%, -50%) translateY(-5.5px)',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <div className="neu-etched mb-3" />
            {showPlaceholder ? (
                <div className="text-sm text-muted-foreground">
                    <p>Searching for H2 headings...</p>
                    <p className="text-xs mt-1">Found {headings.length} headings</p>
                    <p className="text-xs mt-1">Position: {position}</p>
                </div>
            ) : headings.length > 0 ? (
                <ul className="space-y-2">
                    {headings.map((heading) => (
                        <li key={heading.id}>
                            <button
                                onClick={() => scrollToHeading(heading.id)}
                                className={cn(
                                    'block w-full text-left text-sm transition-all duration-200',
                                    'hover:text-primary focus:text-primary focus:outline-none',
                                    'py-1.5 px-3 rounded-xl',
                                    activeId === heading.id
                                        ? 'text-primary neu-inset font-medium'
                                        : 'text-muted-foreground hover:bg-[var(--neu-bg)]'
                                )}
                                aria-current={activeId === heading.id ? 'true' : undefined}
                            >
                                {heading.text}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-sm text-muted-foreground">
                    No headings found
                </div>
            )}
        </nav>
    )
}
