'use client'

import React from 'react'
import Link from 'next/link'
import { EnhancedConfigurableLogoClient } from '@/components/ConfigurableLogo/EnhancedConfigurableLogo.client'
import { HeaderNav } from '../Nav'
import { HamburgerButton } from '../HamburgerButton'
import { useTheme } from '@/providers/Theme'

import type { Header } from '@/payload-types'
import type { SiteSettings } from '@/utilities/getSiteSettings'

interface ModernHeaderProps {
    data: Header
    siteSettings?: SiteSettings
    isMobileMenuOpen: boolean
    toggleMobileMenu: () => void
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({
    data,
    siteSettings,
    isMobileMenuOpen,
    toggleMobileMenu
}) => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => { setMounted(true) }, [])
    const isDark = mounted ? resolvedTheme === 'dark' : false
    // @ts-expect-error settings were flattened in schema
    const backgroundType = data?.backgroundType || data?.settings?.backgroundType || 'solid'
    // @ts-expect-error settings were flattened in schema
    const backgroundColor = data?.backgroundColor || data?.settings?.backgroundColor || '#18181b'

    const logoHeight: number = (data as any)?.logo?.height || 40
    const fallback = Math.round(logoHeight * 0.25)
    const d = data as any
    const pt: number = d?.pillPaddingTop ?? fallback
    const pb: number = d?.pillPaddingBottom ?? fallback
    const pl: number = d?.pillPaddingLeft ?? fallback
    const pr: number = d?.pillPaddingRight ?? fallback

    const pillStyle: React.CSSProperties = {
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
    }
    if (backgroundType === 'semi-transparent') {
        pillStyle.backgroundColor = `${backgroundColor}90`
    } else {
        pillStyle.backgroundColor = backgroundColor
    }

    return (
        <div className="py-4 flex items-center relative">
            {/* Pill Container — height grows with logo */}
            <div className="w-full flex items-center text-white rounded-full" style={pillStyle}>
                {/* Logo */}
                <Link href="/" className="flex items-center flex-shrink-0">
                    <EnhancedConfigurableLogoClient
                        siteSettings={siteSettings}
                        headerData={data}
                        context="header"
                        className="w-auto"
                        priority={true}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1">
                    <HeaderNav data={data} />
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 ml-auto">
                    {/* Theme Toggle - Desktop Only */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => setTheme(isDark ? 'light' : 'dark')}
                            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                            data-theme-switch
                            className="flex items-center justify-center w-6 h-6 transition-opacity duration-300 hover:opacity-60 text-current"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <HamburgerButton
                        isOpen={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    />
                </div>
            </div>
        </div>
    )
}