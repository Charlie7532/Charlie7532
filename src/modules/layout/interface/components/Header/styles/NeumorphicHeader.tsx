'use client'

import React from 'react'
import Link from 'next/link'
import { EnhancedConfigurableLogoClient } from '@/components/ConfigurableLogo/EnhancedConfigurableLogo.client'
import { HeaderNav } from '../Nav'
import { HamburgerButton } from '../HamburgerButton'
import { useTheme } from '@/providers/Theme'
import { NeuButton } from '@/components/ui/neu'

import type { Header } from '@/payload-types'
import type { SiteSettings } from '@/utilities/getSiteSettings'

interface NeumorphicHeaderProps {
    data: Header
    siteSettings?: SiteSettings
    isMobileMenuOpen: boolean
    toggleMobileMenu: () => void
}

/**
 * Neumorphic (soft-UI) header — a raised pill that shares the page
 * background and gets depth from the paired light/dark shadows.
 * Uses the neu-* utilities from globals.css, so it adapts to
 * light/dark themes automatically and matches the landing page.
 */
export const NeumorphicHeader: React.FC<NeumorphicHeaderProps> = ({
    data,
    siteSettings,
    isMobileMenuOpen,
    toggleMobileMenu,
}) => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])
    const isDark = mounted ? resolvedTheme === 'dark' : false

    const logoHeight: number = (data as any)?.logo?.height || 40
    const fallback = Math.round(logoHeight * 0.25)
    const d = data as any
    const pt: number = d?.pillPaddingTop ?? fallback
    const pb: number = d?.pillPaddingBottom ?? fallback
    const pl: number = d?.pillPaddingLeft ?? Math.max(fallback, 16)
    const pr: number = d?.pillPaddingRight ?? Math.max(fallback, 16)

    return (
        <div className="relative flex items-center py-4">
            {/* Raised neumorphic pill */}
            <div
                className="neu-raised flex w-full items-center rounded-full text-foreground"
                style={{ paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr }}
            >
                {/* Logo in a subtle inset well */}
                <Link href="/" className="flex flex-shrink-0 items-center">
                    <EnhancedConfigurableLogoClient
                        siteSettings={siteSettings}
                        headerData={data}
                        context="header"
                        className="w-auto"
                        priority={true}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 md:flex">
                    <HeaderNav data={data} />
                </div>

                {/* Right Side Actions */}
                <div className="ml-auto flex items-center gap-3">
                    {/* Theme toggle — neumorphic dial with press feedback */}
                    <div className="hidden md:block">
                        <NeuButton
                            size="icon"
                            onClick={() => setTheme(isDark ? 'light' : 'dark')}
                            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                            data-theme-switch
                        >
                            {isDark ? (
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                                    />
                                </svg>
                            ) : (
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
                                </svg>
                            )}
                        </NeuButton>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
                </div>
            </div>
        </div>
    )
}
