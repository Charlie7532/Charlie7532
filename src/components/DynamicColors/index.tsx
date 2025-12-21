'use client'

import React, { useEffect } from 'react'
import { generateDynamicColorCSS } from '@/utilities/generateDynamicColors'

interface DynamicColorsProps {
    siteSettings: any
}

export const DynamicColors: React.FC<DynamicColorsProps> = ({ siteSettings }) => {
    const dynamicCSS = generateDynamicColorCSS(siteSettings)

    useEffect(() => {
        // Handle theme mode restrictions
        const themeSettings = siteSettings?.themeSettings
        const themeMode = themeSettings?.themeMode || 'both'

        if (themeMode !== 'both') {
            // Force a specific theme if only one is supported
            const forcedTheme = themeMode === 'light-only' ? 'light' : 'dark'
            document.documentElement.setAttribute('data-theme', forcedTheme)

            // Hide theme switcher if only one theme is supported
            const themeSwitchers = document.querySelectorAll('[data-theme-switch]')
            themeSwitchers.forEach(switcher => {
                (switcher as HTMLElement).style.display = 'none'
            })
        } else {
            // Show theme switcher if both themes are supported
            const themeSwitchers = document.querySelectorAll('[data-theme-switch]')
            themeSwitchers.forEach(switcher => {
                (switcher as HTMLElement).style.display = ''
            })

            // Set default theme if specified and not already set by user preference
            const defaultTheme = themeSettings?.defaultTheme
            if (defaultTheme && defaultTheme !== 'system') {
                // Only set if user hasn't already made a choice (no localStorage entry)
                const userTheme = typeof window !== 'undefined' ? localStorage.getItem('payload-theme') : null
                if (!userTheme) {
                    document.documentElement.setAttribute('data-theme', defaultTheme)
                }
            }
        }
    }, [siteSettings])

    // Only inject styles if custom colors are enabled
    if (!dynamicCSS) {
        return null
    }

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: dynamicCSS,
            }}
        />
    )
}

export default DynamicColors