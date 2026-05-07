"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function WordReveal({ word, delay }: { word: string; delay: number }) {
  const reduce = useReducedMotion()

  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={reduce ? undefined : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, ease: easeOutExpo, delay }}
      >
        {word}
      </motion.span>
    </span>
  )
}

function MagneticButton({
  children,
  href,
  className,
  download,
}: {
  children: React.ReactNode
  href: string
  className: string
  download?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const reduce = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.25)
    y.set((e.clientY - centerY) * 0.25)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download || undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-24 pt-16 md:items-center md:px-16 md:pb-0 xl:px-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1120px]">
        {/* Metadata label */}
        <motion.p
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0 }}
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600"
        >
          BAKU &middot; AZERBAIJAN &middot; 2026
        </motion.p>

        {/* Name — Animation 1: per-word clip-path reveal */}
        <h1 className="mt-6" style={{ lineHeight: 0.92, letterSpacing: "-0.04em" }}>
          <span
            className="block text-white"
            style={{ fontSize: "clamp(80px, 11vw, 140px)", fontWeight: 800 }}
          >
            <WordReveal word="FIZULI" delay={0} />
          </span>
          <span
            className="block text-white"
            style={{
              fontSize: "clamp(80px, 11vw, 140px)",
              fontWeight: 800,
              paddingLeft: "10%",
            }}
          >
            <WordReveal word="HASANOV" delay={0.1} />
          </span>
        </h1>

        {/* Thin rule */}
        <motion.hr
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 max-w-[120px] border-white/10"
        />

        {/* Role descriptor */}
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.5 }}
          className="mt-6 text-[16px] text-zinc-400"
        >
          Presidential Scholar &middot; Product Leader &middot; Venture Builder
        </motion.p>

        {/* Conviction statement */}
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.6 }}
          className="mt-2 font-mono text-[14px] text-zinc-600"
        >
          Translating data into decisions. Building ventures that win.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton
            href="#work"
            className="inline-flex items-center justify-center rounded-md border border-white/[0.12] px-5 py-2.5 text-[14px] text-white transition-all duration-200 hover:bg-white hover:text-black"
          >
            View work &darr;
          </MagneticButton>
          <MagneticButton
            href="/Fizuli-Hasanov-CV.pdf"
            download
            className="inline-flex items-center justify-center text-[14px] text-zinc-500 underline decoration-white/20 underline-offset-4 transition-all duration-200 hover:text-zinc-100 hover:decoration-white/60"
          >
            Download CV
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom left */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-6 hidden flex-col items-center gap-2 md:flex md:left-16 xl:left-24"
      >
        <div className="relative h-8 w-px bg-white/20">
          <div className="absolute left-[-1.5px] top-0 h-1 w-1 rounded-full bg-white/60 animate-scroll-dot" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-700">
          SCROLL
        </span>
      </motion.div>
    </section>
  )
}
