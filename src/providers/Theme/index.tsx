'use client'

import React, { createContext, use, useState, useEffect, useCallback } from 'react'

import type { Theme, ThemeContextType, ThemeProviderProps } from './types'
import { themeLocalStorageKey } from './ThemeSelector/types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
  resolvedTheme: undefined,
}

const ThemeContext = createContext(initialContext)

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export const ThemeProvider = ({
  children,
  themeMode = 'both',
  defaultTheme = 'system',
}: ThemeProviderProps) => {
  const forcedTheme: Theme | null =
    themeMode === 'light-only' ? 'light' : themeMode === 'dark-only' ? 'dark' : null

  // Stored preference: 'light' | 'dark' | null (null = follow system)
  const [stored, setStored] = useState<Theme | null>(null)

  // On mount: read localStorage and apply
  useEffect(() => {
    if (forcedTheme) {
      applyTheme(forcedTheme)
      return
    }
    const saved = localStorage.getItem(themeLocalStorageKey)
    const resolved = saved === 'light' || saved === 'dark' ? (saved as Theme) : null
    setStored(resolved)
    applyTheme(resolved ?? (defaultTheme === 'system' ? getSystemTheme() : (defaultTheme as Theme)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Follow system preference when no explicit preference is stored
  useEffect(() => {
    if (forcedTheme || stored !== null) return
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme(mql.matches ? 'dark' : 'light')
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [forcedTheme, stored])

  const setTheme = useCallback(
    (t: Theme | null) => {
      if (themeMode !== 'both') return
      if (t === null) {
        localStorage.removeItem(themeLocalStorageKey)
        setStored(null)
        applyTheme(getSystemTheme())
      } else {
        localStorage.setItem(themeLocalStorageKey, t)
        setStored(t)
        applyTheme(t)
      }
    },
    [themeMode],
  )

  const resolvedTheme: Theme =
    forcedTheme ?? stored ?? (defaultTheme === 'system' ? getSystemTheme() : (defaultTheme as Theme))

  return (
    <ThemeContext
      value={{
        setTheme,
        theme: forcedTheme ?? stored ?? undefined,
        resolvedTheme,
      }}
    >
      {children}
    </ThemeContext>
  )
}

export const useTheme = (): ThemeContextType => use(ThemeContext)

// Re-export types for convenience
export type { Theme, ThemeMode, DefaultTheme, ThemeContextType, ThemeProviderProps } from './types'
export { themeIsValid } from './types'
