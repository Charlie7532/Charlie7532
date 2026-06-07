'use client'

import React from 'react'
import { useTheme } from '@/providers/Theme'

const SunIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
)

const MoonIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
    </svg>
)

export const PillThemeSwitch: React.FC<{ className?: string }> = ({ className }) => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? resolvedTheme === 'dark' : false

    const toggle = () => setTheme(isDark ? 'light' : 'dark')

    return (
        <button
            onClick={toggle}
            role="switch"
            aria-checked={isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className={[
                'relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
                isDark ? 'bg-blue-600' : 'bg-zinc-400',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <span
                className={[
                    'absolute top-0.5 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow transition-transform duration-300',
                    isDark ? 'translate-x-7' : 'translate-x-0.5',
                ].join(' ')}
            >
                <span className={isDark ? 'text-blue-600' : 'text-yellow-500'}>
                    {isDark ? <MoonIcon /> : <SunIcon />}
                </span>
            </span>
        </button>
    )
}
