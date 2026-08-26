import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

/**
 * Neumorphic (soft-UI) primitives.
 *
 * Thin, typed wrappers over the `.neu-*` utilities defined in
 * `src/app/(frontend)/globals.css`. Elements share the page background and
 * get depth from paired light/dark shadows — adapting to light/dark themes
 * automatically via theme tokens.
 *
 * These are server-safe (no hooks) — use them anywhere.
 */

/* ------------------------------------------------------------------ */
/*  NeuCard — raised / inset / flat surfaces                           */
/* ------------------------------------------------------------------ */

const neuCardVariants = cva('', {
    defaultVariants: {
        variant: 'raised',
        rounded: 'xl',
    },
    variants: {
        variant: {
            /** Extruded card — the default neumorphic surface */
            raised: 'neu-raised',
            /** Pressed-in well — for media frames, terminals, inputs */
            inset: 'neu-inset',
            /** Flush with the page, lifts on hover */
            flat: 'neu-flat',
        },
        rounded: {
            lg: 'rounded-2xl',
            xl: 'rounded-3xl',
            '2xl': 'rounded-[2.5rem]',
            full: 'rounded-full',
        },
    },
})

export type NeuCardProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof neuCardVariants>

export const NeuCard = React.forwardRef<HTMLDivElement, NeuCardProps>(
    ({ className, variant, rounded, ...props }, ref) => (
        <div ref={ref} className={cn(neuCardVariants({ variant, rounded }), className)} {...props} />
    ),
)
NeuCard.displayName = 'NeuCard'

/* ------------------------------------------------------------------ */
/*  NeuButton — interactive raised element with press feedback         */
/* ------------------------------------------------------------------ */

const neuButtonVariants = cva(
    'inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounded: 'full',
        },
        variants: {
            variant: {
                /** Neutral raised button */
                default: 'neu-button text-foreground',
                /** Accent-colored raised button */
                accent: 'neu-button-accent',
            },
            size: {
                sm: 'px-4 py-2 text-xs',
                default: 'px-7 py-3 text-sm',
                lg: 'px-8 py-3.5 text-sm',
                /** Square icon button — pair with rounded="full" for a dial */
                icon: 'h-9 w-9 p-0',
            },
            rounded: {
                lg: 'rounded-2xl',
                full: 'rounded-full',
            },
        },
    },
)

type NeuButtonBaseProps = VariantProps<typeof neuButtonVariants> & {
    className?: string
    children?: React.ReactNode
}

export type NeuButtonProps = NeuButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        /** Renders a Next.js Link (internal) or anchor (external) when set */
        href?: string
        /** Anchor target — only used with href */
        target?: string
        rel?: string
    }

export const NeuButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, NeuButtonProps>(
    ({ className, variant, size, rounded, href, target, rel, children, ...props }, ref) => {
        const classes = cn(neuButtonVariants({ variant, size, rounded }), className)

        if (href) {
            const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:')
            if (isExternal) {
                return (
                    <a
                        ref={ref as React.Ref<HTMLAnchorElement>}
                        href={href}
                        target={target}
                        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
                        className={classes}
                    >
                        {children}
                    </a>
                )
            }
            return (
                <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes}>
                    {children}
                </Link>
            )
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {children}
            </button>
        )
    },
)
NeuButton.displayName = 'NeuButton'

/* ------------------------------------------------------------------ */
/*  NeuChip — small raised pill (labels, badges, tags)                 */
/* ------------------------------------------------------------------ */

const neuChipVariants = cva('neu-chip inline-flex items-center gap-2', {
    defaultVariants: { size: 'default' },
    variants: {
        size: {
            sm: 'px-3 py-1 text-[11px] font-medium',
            default: 'px-4 py-1.5 text-xs font-medium',
            lg: 'px-5 py-2 text-xs font-medium',
        },
    },
})

export type NeuChipProps = React.HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof neuChipVariants> & {
        /** Optional status dot color class, e.g. "bg-success" */
        dot?: string
        /** Monospace uppercase eyebrow styling */
        mono?: boolean
    }

export const NeuChip = React.forwardRef<HTMLSpanElement, NeuChipProps>(
    ({ className, size, dot, mono, children, ...props }, ref) => (
        <span
            ref={ref}
            className={cn(
                neuChipVariants({ size }),
                mono && 'font-mono tracking-widest uppercase',
                'text-muted',
                className,
            )}
            {...props}
        >
            {dot && <span className={cn('h-1.5 w-1.5 rounded-full', dot)} />}
            {children}
        </span>
    ),
)
NeuChip.displayName = 'NeuChip'

/* ------------------------------------------------------------------ */
/*  NeuDial — circular raised badge (stats, icons, numbers)            */
/* ------------------------------------------------------------------ */

const neuDialVariants = cva('neu-dial flex items-center justify-center', {
    defaultVariants: { size: 'default' },
    variants: {
        size: {
            sm: 'h-8 w-8',
            md: 'h-12 w-12',
            default: 'h-20 w-20',
            lg: 'h-24 w-24 md:h-28 md:w-28',
        },
    },
})

export type NeuDialProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof neuDialVariants>

export const NeuDial = React.forwardRef<HTMLDivElement, NeuDialProps>(
    ({ className, size, ...props }, ref) => (
        <div ref={ref} className={cn(neuDialVariants({ size }), className)} {...props} />
    ),
)
NeuDial.displayName = 'NeuDial'

/* ------------------------------------------------------------------ */
/*  NeuDivider — etched divider line                                   */
/* ------------------------------------------------------------------ */

export type NeuDividerProps = React.HTMLAttributes<HTMLDivElement>

export const NeuDivider = React.forwardRef<HTMLDivElement, NeuDividerProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('neu-etched', className)} {...props} />
    ),
)
NeuDivider.displayName = 'NeuDivider'

/* ------------------------------------------------------------------ */
/*  NeuTrack — inset groove with optional progress fill                */
/* ------------------------------------------------------------------ */

export type NeuTrackProps = React.HTMLAttributes<HTMLDivElement>

export const NeuTrack = React.forwardRef<HTMLDivElement, NeuTrackProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('neu-track h-2 overflow-hidden', className)} {...props}>
            {children}
        </div>
    ),
)
NeuTrack.displayName = 'NeuTrack'
