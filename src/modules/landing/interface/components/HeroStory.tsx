'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion'
import { heroContent, heroStoryStages, statsContent } from '@/modules/landing/domain/content'

const ROTATE_MS = 3200

/* ------------------------------------------------------------------ */
/*  Rotating headline                                                  */
/* ------------------------------------------------------------------ */

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
                    className="absolute inset-0 font-semibold text-accent dark:brightness-[1.9] dark:saturate-[0.85]"
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

/* ------------------------------------------------------------------ */
/*  Count-up stat                                                      */
/* ------------------------------------------------------------------ */

const CountUp: React.FC<{ value: number; suffix: string; run: boolean }> = ({
    value,
    suffix,
    run,
}) => {
    const [display, setDisplay] = useState(0)
    const reduce = useReducedMotion()

    useEffect(() => {
        if (!run) return
        if (reduce) {
            setDisplay(value)
            return
        }
        let frame: number
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))))
            if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [value, reduce, run])

    return (
        <span className="font-mono text-xl font-bold text-foreground tabular-nums md:text-2xl">
            {display}
            {suffix}
        </span>
    )
}

/* ------------------------------------------------------------------ */
/*  Story stage terminal panel                                         */
/* ------------------------------------------------------------------ */

const StagePanel: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
    const stage = heroStoryStages[stageIndex]
    if (!stage) return null

    return (
        <div className="neu-inset rounded-2xl p-5 font-mono text-xs leading-relaxed md:text-sm">
            {stage.panelLines.map((line, i) => (
                <motion.p
                    key={line}
                    className="text-muted"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.15 }}
                >
                    <span className="text-accent dark:brightness-[1.9]">❯ </span>
                    {line}
                </motion.p>
            ))}
        </div>
    )
}

/* ------------------------------------------------------------------ */
/*  HeroStory — pinned scroll story: Intro → Idea → Architecture →     */
/*  Production. The page holds for ~4 viewport-heights while the       */
/*  narrative advances; the photo stays pinned on the right.           */
/* ------------------------------------------------------------------ */

export const HeroStory: React.FC = () => {
    const reduce = useReducedMotion()
    const trackRef = useRef<HTMLDivElement>(null)
    const [stageIndex, setStageIndex] = useState(-1) // -1 = intro
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ['start start', 'end end'],
    })

    // Map scroll progress → story stage. First ~28% is the intro.
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        if (v < 0.28) setStageIndex(-1)
        else if (v < 0.52) setStageIndex(0)
        else if (v < 0.76) setStageIndex(1)
        else setStageIndex(2)
    })

    // Pinned photo subtly rotates/scales through the journey
    const photoRotate = useTransform(scrollYProgress, [0, 1], [0, -4])
    const photoScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.97, 0.93])
    const progressScaleX = useTransform(scrollYProgress, [0.05, 0.95], [0, 1])

    const stage = stageIndex >= 0 ? (heroStoryStages[stageIndex] ?? null) : null

    return (
        /* Tall scroll track — with reduced motion it collapses to a normal section.
           Negative top margin pulls the hero underneath the header so the section
           (and its corner blobs) starts at the true top of the viewport. */
        <div ref={trackRef} className={reduce ? '-mt-24' : '-mt-24 h-[400vh]'}>
            <section
                className={
                    reduce
                        ? 'relative flex min-h-screen items-center overflow-hidden'
                        : 'sticky top-0 flex min-h-screen items-center overflow-hidden'
                }
            >
                {/* soft ambient blobs */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-56 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/5 blur-3xl"
                />

                <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* ------------- Left: intro OR story stage ------------- */}
                    <div className="relative">
                        <div className="min-h-[24rem] md:min-h-[26rem]">
                            <AnimatePresence mode="wait">
                                {!stage ? (
                                    <motion.div
                                        key="intro"
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -24 }}
                                        transition={{ duration: 0.45 }}
                                    >
                                        <span className="neu-chip inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs tracking-widest text-muted uppercase">
                                            <span className="relative flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                                            </span>
                                            Available for ambitious builds
                                        </span>

                                        <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                                            {heroContent.greeting}.
                                            <span className="mt-3 block text-3xl font-semibold sm:text-4xl md:text-5xl">
                                                {heroContent.headline.prefix} <RotatingPhrase />
                                            </span>
                                        </h1>

                                        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                                            {heroContent.subtitle}
                                        </p>

                                        <div className="mt-8 flex flex-wrap items-center gap-4">
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
                                        </div>

                                        {!reduce && (
                                            <p className="mt-10 hidden items-center gap-3 font-mono text-xs text-muted md:flex">
                                                <span className="neu-dial flex h-8 w-8 animate-bounce items-center justify-center">
                                                    ↓
                                                </span>
                                                Scroll — from idea to production
                                            </p>
                                        )}
                                    </motion.div>
                                ) : (
                                    (() => {
                                        const s = stage
                                        return (
                                            <motion.div
                                                key={s.key}
                                                initial={{ opacity: 0, y: 24 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -24 }}
                                                transition={{ duration: 0.45 }}
                                            >
                                                <span className="neu-chip inline-block px-4 py-1.5 font-mono text-xs tracking-widest text-muted uppercase">
                                                    {s.eyebrow}
                                                </span>
                                                <h2 className="mt-6 text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                                                    {s.title}
                                                </h2>
                                                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                                                    {s.description}
                                                </p>
                                                <div className="mt-8 max-w-md">
                                                    <StagePanel stageIndex={stageIndex} />
                                                </div>
                                            </motion.div>
                                        )
                                    })()
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Story progress track */}
                        {!reduce && (
                            <div className="mt-8 hidden max-w-md items-center gap-4 lg:flex">
                                <div className="neu-track h-2 flex-1 overflow-hidden">
                                    <motion.div
                                        className="h-full origin-left rounded-full bg-accent dark:brightness-[1.6]"
                                        style={{ scaleX: progressScaleX }}
                                    />
                                </div>
                                <span className="font-mono text-[10px] whitespace-nowrap text-muted">
                                    {stageIndex + 2} / 4
                                </span>
                            </div>
                        )}
                    </div>

                    {/* ------------- Right: pinned frame, visual swaps per stage ------------- */}
                    <motion.div
                        className="relative mx-auto w-full max-w-sm lg:max-w-md"
                        style={reduce ? undefined : { rotate: photoRotate, scale: photoScale }}
                    >
                        <div className="neu-raised rounded-[2.5rem] p-4">
                            <div className="neu-inset relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                                {/* Intro: photo. Stages: AI-generated stage art (SVG placeholders for now). */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={stage?.key ?? 'photo'}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Image
                                            src={stage ? stage.image : heroContent.photo}
                                            alt={stage ? stage.imageAlt : 'Juan Carlos Botero'}
                                            fill
                                            priority={!stage}
                                            sizes="(max-width: 1024px) 90vw, 40vw"
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* floating chip switches with the story */}
                        <div className="neu-chip absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 text-xs font-medium whitespace-nowrap text-muted">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={stage?.key ?? 'location'}
                                    className="inline-block"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {stage ? stage.eyebrow : heroContent.location}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        {/* Stats dials — slide in at the final (Production) stage */}
                        <motion.ul
                            className="absolute top-1/2 -left-10 hidden -translate-y-1/2 flex-col gap-5 xl:flex"
                            initial={false}
                            animate={{
                                opacity: stageIndex === 2 ? 1 : 0,
                                x: stageIndex === 2 ? -48 : -16,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {statsContent.map((stat) => (
                                <li key={stat.label} className="flex flex-col items-center gap-2 text-center">
                                    <div className="neu-dial flex h-20 w-20 items-center justify-center">
                                        <CountUp value={stat.value} suffix={stat.suffix} run={stageIndex === 2} />
                                    </div>
                                    <span className="w-24 text-[10px] font-medium tracking-wide text-muted">
                                        {stat.label}
                                    </span>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
