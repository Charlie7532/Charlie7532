import React from 'react'

/**
 * No completedAt ⇒ still in development.
 * Floating neumorphic status pill for project tiles.
 */
export const StatusPill: React.FC<{
    completedAt?: string | null
    className?: string
}> = ({ completedAt, className }) => {
    const live = Boolean(completedAt)
    return (
        <span
            className={`neu-chip absolute top-3 right-3 z-10 inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium text-muted ${className ?? ''}`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-success' : 'bg-warning'}`} />
            {live ? 'Live' : 'In development'}
        </span>
    )
}
