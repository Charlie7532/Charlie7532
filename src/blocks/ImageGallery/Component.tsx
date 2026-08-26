'use client'

import React, { useState, useEffect, useCallback } from 'react'
import NextImage from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/utilities/ui'
import type { Media } from '@/payload-types'

// ─── Types ────────────────────────────────────────────────────────────────────

type GalleryImage = {
    image: number | Media
    caption?: string | null
}

type Props = {
    images: GalleryImage[]
    showBorder?: boolean | null
    className?: string
}

// ─── Justified row layout ─────────────────────────────────────────────────────
// Uses flex with each item's flex-grow = aspect-ratio so items in each row
// share the available width proportionally to their natural dimensions.
// All items in a row have the same height (set via rowHeight inline style).
// The last row is left-aligned (not stretched) via a flex-spacer.

// ─── Main component ────────────────────────────────────────────────────────────

export function ImageGalleryBlock({ images, showBorder = false, className }: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const isOpen = activeIndex !== null

    const resolved = images.filter(
        (item): item is { image: Media; caption?: string | null } =>
            typeof item.image === 'object' && item.image !== null,
    )

    const prev = useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i - 1 + resolved.length) % resolved.length))
    }, [resolved.length])

    const next = useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i + 1) % resolved.length))
    }, [resolved.length])

    const close = useCallback(() => setActiveIndex(null), [])

    useEffect(() => {
        if (!isOpen) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev()
            else if (e.key === 'ArrowRight') next()
            else if (e.key === 'Escape') close()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [isOpen, prev, next, close])

    if (resolved.length === 0) return null

    const active = activeIndex !== null ? resolved[activeIndex] : null

    return (
        <>
            {/* ── Justified row mosaic ─────────────────────────────────────── */}
            {/* Each item's flex value = its aspect ratio, so items fill each   */}
            {/* row proportionally. Height is uniform per row via the h-* style. */}
            <div
                className={cn('flex flex-wrap gap-1.5 sm:gap-2', className)}
            >
                {resolved.map((item, i) => {
                    const w = item.image.width ?? 16
                    const h = item.image.height ?? 9
                    const ratio = w / h
                    return (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={cn(
                                'relative overflow-hidden rounded-lg cursor-zoom-in group',
                                showBorder && 'ring-1 ring-border',
                            )}
                            style={{
                                // flex-grow proportional to aspect ratio so items fill each row
                                flex: `${ratio} 1 0%`,
                                // uniform row height in vw units — scales with viewport
                                height: '22vw',
                                // prevent very wide or very narrow items from dominating
                                minWidth: '80px',
                                maxWidth: '70%',
                            }}
                            aria-label={item.caption ?? `Image ${i + 1}`}
                        >
                            <NextImage
                                src={item.image.url ?? ''}
                                alt={item.image.alt ?? item.caption ?? ''}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                        </button>
                    )
                })}
                {/* Flex spacer: left-aligns the last row instead of stretching it */}
                <div style={{ flex: '999 1 0%', height: '22vw', maxWidth: '70%' }} aria-hidden />
            </div>

            {/* ── Fullscreen lightbox ──────────────────────────────────────── */}
            {isOpen && active && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={close}
                >
                    <div
                        className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Counter */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums z-10 bg-black/40 px-3 py-1 rounded-full">
                            {(activeIndex ?? 0) + 1} / {resolved.length}
                        </div>

                        {/* Close */}
                        <button
                            onClick={close}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Main image */}
                        <div className="relative w-[85vw] h-[80vh] sm:w-[80vw]">
                            <NextImage
                                src={active.image.url ?? ''}
                                alt={active.image.alt ?? active.caption ?? ''}
                                fill
                                sizes="85vw"
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Caption */}
                        {active.caption && (
                            <p className="mt-3 text-white/80 text-sm text-center max-w-lg px-4">
                                {active.caption}
                            </p>
                        )}
                    </div>

                    {/* Prev / Next */}
                    {resolved.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prev() }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next() }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Thumbnail strip */}
                    {resolved.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[80vw] overflow-x-auto px-2">
                            {resolved.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setActiveIndex(i) }}
                                    className={cn(
                                        'relative flex-shrink-0 w-12 h-8 rounded overflow-hidden transition-all duration-200',
                                        i === activeIndex
                                            ? 'ring-2 ring-white opacity-100'
                                            : 'opacity-50 hover:opacity-80',
                                    )}
                                    aria-label={`Go to image ${i + 1}`}
                                >
                                    <NextImage
                                        src={item.image.url ?? ''}
                                        alt=""
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
