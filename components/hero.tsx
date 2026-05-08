"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const TICKER_ITEMS = [
  "96.3 GPA / 100",
  "Top 3 of 20,000+ \u2014 Presidential Scholar",
  "2\u00d7 1st Place Hackathon Champion",
  "2.1M+ Digital Views \u2014 Zero Paid Reach",
  "100% GenAI Scholarship \u2014 Holberton AZ",
  "Aspire Leaders Alumni \u2014 9,988 of 54,337 selected",
  "Finalist \u2014 Aspire \u00d7 Harvard AI for Global Business",
  "2\u00d7 Active Incubations \u2014 SabahHub \u00b7 EmpowerMe \u00b7 5th Tusi",
]

function CascadeLine({
  text,
  delay,
  indent,
}: {
  text: string
  delay: number
  indent: string
}) {
  const reduce = useReducedMotion()

  return (
    <span className="block overflow-hidden" style={{ paddingLeft: indent }}>
      <motion.span
        className="block text-white"
        style={{
          fontSize: "clamp(48px, 9vw, 116px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1.05,
        }}
        initial={reduce ? undefined : { y: "108%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {text}
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
  const springX = useSpring(x, { stiffness: 180, damping: 18 })
  const springY = useSpring(y, { stiffness: 180, damping: 18 })
  const reduce = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.28)
    y.set((e.clientY - centerY) * 0.28)
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

function TickerStrip() {
  const reduce = useReducedMotion()
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="mt-14 w-full overflow-hidden border-y border-white/5 py-3">
      <div className={reduce ? "flex gap-8 overflow-x-auto" : "flex gap-8 animate-scroll-x w-max"}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 font-mono text-[12px] text-zinc-500 whitespace-nowrap"
          >
            <span aria-hidden className="h-1 w-1 rounded-full bg-zinc-700" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-0 pt-16 md:justify-center md:px-16 md:pb-0 xl:px-24"
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

        {/* Cascade headline — signature visual */}
        <h1 className="mt-6 uppercase">
          <CascadeLine text="Fizuli" delay={0} indent="0px" />
          <CascadeLine text="Hasanov" delay={0.15} indent="clamp(24px, 6vw, 96px)" />
        </h1>

        {/* Thin rule */}
        <motion.hr
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 max-w-[120px] border-white/10"
        />

        {/* Sub-tagline */}
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.65 }}
          className="mt-6 max-w-[60ch] text-[15px] leading-[1.7] text-zinc-400"
        >
          Top 3 of 20,000+ university applicants nationwide.
          Two 1st-place wins in a single week. Three ventures under
          active incubation. I build at the intersection of product,
          data, and AI&nbsp;&mdash;&nbsp;and I ship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.85 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton
            href="#work"
            className="inline-flex items-center justify-center rounded-md border border-white/[0.12] px-5 py-2.5 text-[14px] text-white transition-all duration-200 hover:bg-white hover:text-black"
          >
            View ventures &darr;
          </MagneticButton>
          <MagneticButton
            href="/Fizuli-Hasanov-CV.pdf"
            download
            className="inline-flex items-center justify-center text-[14px] text-zinc-500 underline decoration-white/20 underline-offset-4 transition-all duration-200 hover:text-zinc-100 hover:decoration-white/60"
          >
            Download CV
          </MagneticButton>
        </motion.div>

        {/* Metrics ticker */}
        <TickerStrip />
      </div>

      {/* Scroll indicator — bottom left */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
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
