'use client'

import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion'
import React, { useCallback } from 'react'

interface FooterLogoKnobProps {
  knobSize: number
  children: React.ReactNode
}

// Radio-dial wobble keyframes: left → right → left, decaying like tuning a knob
const wobbleKeyframes = [0, -20, 16, -10, 6, -3, 0]

export const FooterLogoKnob: React.FC<FooterLogoKnobProps> = ({ knobSize, children }) => {
  const controls = useAnimationControls()

  const handleHoverStart = useCallback(() => {
    controls.start({
      rotate: wobbleKeyframes,
      transition: {
        duration: 0.8,
        times: [0, 0.15, 0.35, 0.55, 0.7, 0.85, 1],
        ease: 'easeInOut',
      },
    })
  }, [controls])

  const handleHoverEnd = useCallback(() => {
    // Always spring back to center, no matter where the animation was interrupted
    controls.stop()
    controls.start({
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    })
  }, [controls])

  return (
    <motion.div
      className="mb-8 shrink-0 xl:mb-0"
      style={{ height: knobSize, width: knobSize }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Link
        href="/"
        className="neu-knob relative flex h-full w-full items-center justify-center overflow-hidden"
      >
        {children}
      </Link>
    </motion.div>
  )
}
