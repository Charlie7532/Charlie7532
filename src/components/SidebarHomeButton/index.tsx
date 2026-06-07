'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@payloadcms/ui'
import './styles.scss'

interface MediaRef {
    url?: string
}

interface SiteSettings {
    branding?: {
        siteName?: string
        logoMode?: 'simple' | 'lightDark'
        logo?: MediaRef
        logoLight?: MediaRef
        logoDark?: MediaRef
        useCustomAdminLogo?: boolean
        adminLogoMode?: 'simple' | 'lightDark'
        adminLogo?: MediaRef
        adminLogoLight?: MediaRef
        adminLogoDark?: MediaRef
    }
}

/**
 * Button with site logo/favicon that appears at the top of the admin sidebar
 * Navigates to the home page when clicked
 * Uses admin logo override when provided, otherwise falls back to site logo
 */
const SidebarHomeButton: React.FC = () => {
    const { theme } = useTheme()
    const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const res = await fetch('/api/globals/site-settings', {
                    credentials: 'include',
                })

                if (res.ok) {
                    const data: SiteSettings = await res.json()
                    setSiteSettings(data)
                }
            } catch (error) {
                console.error('Error fetching site settings:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchLogo()
    }, [])

    const getLogoUrl = () => {
        const branding = siteSettings?.branding
        if (!branding) return null

        const isDark = theme === 'dark'
        if (branding.useCustomAdminLogo) {
            const adminMode = branding.adminLogoMode || 'simple'

            if (adminMode === 'lightDark') {
                const preferredAdmin = isDark ? branding.adminLogoDark?.url : branding.adminLogoLight?.url
                const fallbackAdmin = isDark ? branding.adminLogoLight?.url : branding.adminLogoDark?.url
                if (preferredAdmin || fallbackAdmin) return preferredAdmin || fallbackAdmin || null
            } else if (branding.adminLogo?.url) {
                return branding.adminLogo.url
            }
        }

        const siteMode = branding.logoMode || 'simple'
        if (siteMode === 'lightDark') {
            const preferredSite = isDark ? branding.logoDark?.url : branding.logoLight?.url
            const fallbackSite = isDark ? branding.logoLight?.url : branding.logoDark?.url
            return preferredSite || fallbackSite || null
        }

        return branding.logo?.url || null
    }

    const logoUrl = getLogoUrl()

    if (loading || !logoUrl) return null

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        window.open('/', '_blank')
    }

    return (
        <div className="sidebar-home-button-wrapper">
            <button
                onClick={handleClick}
                className="sidebar-home-button"
                title="Go to Site"
                aria-label="Go to Site"
            >
                <img
                    src={logoUrl}
                    alt={siteSettings?.branding?.siteName ? `${siteSettings.branding.siteName} Logo` : 'Site Logo'}
                    className="sidebar-home-button-logo"
                />
            </button>
        </div>
    )
}

export default SidebarHomeButton
