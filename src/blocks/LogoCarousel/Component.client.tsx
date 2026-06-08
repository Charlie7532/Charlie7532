'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

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

type Props = {
    id?: string
    heading?: string | null
    items: LogoItem[]
    autoplay: boolean
    speed: number
    logoSize: 'sm' | 'md' | 'lg'
    grayscale: boolean
}

const sizeMap: Record<string, number> = {
    sm: 32,
    md: 48,
    lg: 64,
}

export const LogoCarouselClient: React.FC<Props> = ({
    id,
    heading,
    items,
    autoplay,
    speed,
    logoSize,
    grayscale,
}) => {
    const autoplayPlugin = useRef(
        Autoplay({ delay: speed, stopOnInteraction: false, stopOnMouseEnter: true }),
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            dragFree: true,
        },
        autoplay ? [autoplayPlugin.current] : [],
    )

    const logoHeight = sizeMap[logoSize] ?? 48

    return (
        <div className="py-12" id={id ? `block-${id}` : undefined}>
            {heading && (
                <p className="container mb-6 text-center text-sm font-semibold uppercase tracking-widest opacity-50">
                    {heading}
                </p>
            )}

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-center gap-10 px-8">
                    {items.map((item) => {
                        const lightLogo = item.logo
                        const darkLogo = item.logoDark ?? item.logo

                        const logoEl = (url: string | null | undefined, alt: string, extraClass: string) =>
                            url ? (
                                <Image
                                    src={url}
                                    alt={alt}
                                    width={lightLogo?.width ?? logoHeight * 3}
                                    height={lightLogo?.height ?? logoHeight}
                                    style={{ height: logoHeight, width: 'auto', maxWidth: logoHeight * 4 }}
                                    className={`object-contain transition-all duration-300 ${grayscale ? 'grayscale hover:grayscale-0' : ''} ${extraClass}`}
                                />
                            ) : null

                        const Wrapper = item.website
                            ? ({ children }: { children: React.ReactNode }) => (
                                <a
                                    href={item.website!}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={item.name}
                                    className="flex shrink-0 items-center"
                                >
                                    {children}
                                </a>
                            )
                            : ({ children }: { children: React.ReactNode }) => (
                                <div className="flex shrink-0 items-center" title={item.name}>
                                    {children}
                                </div>
                            )

                        return (
                            <Wrapper key={item.id}>
                                {/* light logo — hidden in dark mode if a dark logo exists */}
                                {logoEl(
                                    lightLogo?.url,
                                    lightLogo?.alt ?? item.name,
                                    darkLogo && darkLogo.url !== lightLogo?.url ? 'block dark:hidden' : '',
                                )}
                                {/* dark logo — only shown in dark mode when different from light logo */}
                                {darkLogo && darkLogo.url !== lightLogo?.url &&
                                    logoEl(darkLogo.url, darkLogo.alt ?? item.name, 'hidden dark:block')}
                            </Wrapper>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
