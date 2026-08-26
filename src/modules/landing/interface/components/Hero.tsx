'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { heroContent, statsContent } from '@/modules/landing/domain/content'

const ROTATE_MS = 3200

const RotatingPhrase: React.FC = () => {
    const { phrases } = heroContent.headline
    const [index, setIndex] = useState(0)
    const reduce = useReducedMotion()

    useEffect(() => {
        if (reduce) return
        const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), ROTATE_MS)
        return () => clearInterval(id)
    }, [phrases.length, reduce])

    return (
        <span className="relative block h-[2.6em] overflow-hidden sm:h-[1.3em]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent dark:from-accent-foreground dark:to-accent-foreground/60"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    {phrases[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

const CountUp: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
    const [display, setDisplay] = useState(0)
    const reduce = useReducedMotion()

    useEffect(() => {
        if (reduce) {
            setDisplay(value)
            return
        }
        let frame: number
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            // ease-out cubic
            setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))))
            if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [value, reduce])

    return (
        <span className="font-mono text-3xl font-bold text-foreground tabular-nums md:text-4xl">
            {display}
            {suffix}
        </span>
    )
}

export const Hero: React.FC = () => {
    const reduce = useReducedMotion()
    const { scrollY } = useScroll()
    const photoY = useTransform(scrollY, [0, 600], [0, 80])
    const fade = useTransform(scrollY, [0, 400], [1, 0.25])

    return (
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
            {/* soft ambient blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-56 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/5 blur-3xl"
            />

            <div className="container relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Copy */}
                <motion.div style={reduce ? undefined : { opacity: fade }}>
                    <motion.span
                        className="neu-chip inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs tracking-widest text-muted uppercase"
                        initial={reduce ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                        </span>
                        Available for ambitious builds
                    </motion.span>

                    <motion.h1
                        className="mt-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
                        initial={reduce ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {heroContent.greeting}.
                        <span className="mt-3 block text-3xl font-semibold sm:text-4xl md:text-5xl">
                            {heroContent.headline.prefix} <RotatingPhrase />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
                        initial={reduce ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {heroContent.subtitle}
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-wrap items-center gap-4"
                        initial={reduce ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            href={heroContent.ctas.primary.href}
                            className="neu-button-accent rounded-full px-7 py-3 text-sm font-semibold"
                        >
                            {heroContent.ctas.primary.label}
                        </Link>
                        <Link
                            href={heroContent.ctas.secondary.href}
                            className="neu-button rounded-full px-7 py-3 text-sm font-semibold text-foreground"
                        >
                            {heroContent.ctas.secondary.label}
                        </Link>
                    </motion.div>

                    {/* Stats dials */}
                    <motion.ul
                        className="mt-12 flex flex-wrap gap-8"
                        initial={reduce ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        {statsContent.map((stat) => (
                            <li key={stat.label} className="flex flex-col items-center gap-3 text-center">
                                <div className="neu-dial flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
                                    <CountUp value={stat.value} suffix={stat.suffix} />
                                </div>
                                <span className="text-xs font-medium tracking-wide text-muted">{stat.label}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Photo — raised neumorphic frame */}
                <motion.div
                    className="relative mx-auto w-full max-w-sm lg:max-w-md"
                    style={reduce ? undefined : { y: photoY }}
                    initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="neu-raised rounded-[2.5rem] p-4">
                        <div className="neu-inset overflow-hidden rounded-[2rem]">
                            <Image
                                src={heroContent.photo}
                                alt="Juan Carlos Botero"
                                width={640}
                                height={800}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                    {/* floating location chip */}
                    <div className="neu-chip absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 text-xs font-medium whitespace-nowrap text-muted">
                        {heroContent.location}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
