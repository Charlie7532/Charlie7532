'use client'

import React from 'react'
import { useTheme } from '@/providers/Theme'

const SunIcon = () => (
    <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
    </svg>
)

const MoonIcon = () => (
    <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
    </svg>
)

interface IconThemeSwitchProps {
    className?: string
    /** 'neu' renders the raised neumorphic dial used alongside neu-* surfaces */
    variant?: 'default' | 'neu'
}

export const IconThemeSwitch: React.FC<IconThemeSwitchProps> = ({ className, variant = 'default' }) => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    const baseClasses =
        variant === 'neu'
            ? 'group h-9 w-9 rounded-full neu-button flex justify-center items-center text-foreground'
            : 'group w-9 h-9 rounded-full border border-current flex justify-center items-center transition-opacity duration-300 hover:opacity-60'

    // Show placeholder during SSR to avoid hydration mismatch
    if (!mounted) {
        return (
            <button
                className={`${baseClasses} ${className ?? ''}`}
                aria-label="Toggle theme"
                data-theme-switch
                disabled
            >
                <div className="w-5 h-5" />
            </button>
        )
    }

    const isDark = resolvedTheme === 'dark'

    return (
        <button
            onClick={toggleTheme}
            className={`${baseClasses} ${className ?? ''}`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            data-theme-switch
        >
            <div className="transition-opacity duration-300">
                {isDark ? <SunIcon /> : <MoonIcon />}
            </div>
        </button>
    )
}