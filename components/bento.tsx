"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

type StatCell = {
  value: string
  numericValue: number
  prefix?: string
  suffix?: string
  decimals: number
  label: string
  detail: string
  visual: "scholar" | "wins" | "fund" | "ventures" | "genai" | "deloitte"
  span: 1 | 2
  skipCount?: boolean
  hero?: boolean
}

const STATS: StatCell[] = [
  {
    value: "TOP 3",
    numericValue: 3,
    prefix: "TOP ",
    decimals: 0,
    label: "PRESIDENTIAL SCHOLAR",
    detail: "TOP 3 \u00b7 20,000+ DIM APPLICANTS",
    visual: "scholar",
    span: 2,
    skipCount: true,
    hero: true,
  },
  {
    value: "2\u00d7",
    numericValue: 2,
    suffix: "\u00d7",
    decimals: 0,
    label: "1ST-PLACE INNOVATION WINS",
    detail: "ACHIEVED IN A SINGLE WEEK",
    visual: "wins",
    span: 2,
    hero: true,
  },
  {
    value: "1 OF 40",
    numericValue: 1,
    decimals: 0,
    label: "ASPIRE SEED FUND SELECTION",
    detail: "$400 AWARD \u00b7 1,800+ GLOBAL APPLICATIONS",
    visual: "fund",
    span: 1,
    skipCount: true,
  },
  {
    value: "3",
    numericValue: 3,
    decimals: 0,
    label: "INCUBATED VENTURES",
    detail: "AISE \u00b7 CARBORYN \u00b7 HYPERAUTOMATION",
    visual: "ventures",
    span: 1,
  },
  {
    value: "1 OF 20",
    numericValue: 1,
    decimals: 0,
    label: "YOUTH IN DEVELOPMENT FELLOW",
    detail: "ASPIRE INSTITUTE × IMPACT TOOLBOX · GLOBAL",
    visual: "genai",
    span: 1,
    skipCount: true,
  },
  {
    value: "1 OF 4",
    numericValue: 1,
    decimals: 0,
    label: "DELOITTE SRT PROGRAM",
    detail: "BHOS STUDENTS NOMINATED",
    visual: "deloitte",
    span: 1,
    skipCount: true,
  },
]

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function formatNumber(n: number, decimals: number, prefix?: string, suffix?: string): string {
  let formatted: string
  if (n >= 1000 && decimals === 0) {
    formatted = Math.round(n).toLocaleString("en-US")
  } else {
    formatted = n.toFixed(decimals)
  }
  return (prefix || "") + formatted + (suffix || "")
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function StatGraphic({
  visual,
  hero,
}: {
  visual: StatCell["visual"]
  hero?: boolean
}) {
  const reduce = useReducedMotion()
  const orbitTransition = {
    duration: 14,
    ease: "linear" as const,
    repeat: Infinity,
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute right-0 top-0 z-[2] overflow-hidden opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${
        hero ? "h-full w-[48%]" : "h-full w-[58%]"
      }`}
    >
      {visual === "scholar" && (
        <>
          <motion.span
            animate={reduce ? undefined : { rotate: 360 }}
            transition={orbitTransition}
            className="absolute right-[12%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-white/[0.12] shadow-[0_0_50px_rgba(255,255,255,0.05)]"
          />
          <span className="absolute right-[calc(12%+27px)] top-1/2 h-[74px] w-[74px] -translate-y-1/2 rounded-full border border-dashed border-white/[0.16]" />
          <span className="absolute right-[calc(12%+61px)] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
        </>
      )}

      {visual === "wins" && (
        <>
          <motion.span
            animate={reduce ? undefined : { x: [-10, 8, -10] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="absolute right-[20%] top-[-20%] h-[140%] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-white/35 to-transparent shadow-[0_0_22px_rgba(255,255,255,0.28)]"
          />
          <motion.span
            animate={reduce ? undefined : { x: [8, -10, 8] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="absolute right-[28%] top-[-20%] h-[140%] w-px -rotate-[28deg] bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />
          <span className="absolute right-[18%] top-1/2 h-16 w-16 -translate-y-1/2 rotate-45 border border-white/[0.1]" />
        </>
      )}

      {visual === "fund" && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={reduce ? undefined : { scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 2.8, delay: i * 0.35, ease: "easeInOut", repeat: Infinity }}
              className="absolute bottom-8 w-px origin-bottom bg-gradient-to-t from-white/60 to-transparent shadow-[0_0_14px_rgba(255,255,255,0.18)]"
              style={{ right: `${18 + i * 13}%`, height: `${42 + i * 17}%` }}
            />
          ))}
        </>
      )}

      {visual === "ventures" && (
        <>
          <span className="absolute right-[17%] top-1/2 h-px w-[48%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={reduce ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.9, 1.12, 0.9] }}
              transition={{ duration: 3.2, delay: i * 0.45, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.32)]"
              style={{ right: `${18 + i * 18}%` }}
            />
          ))}
        </>
      )}

      {visual === "genai" && (
        <>
          <motion.span
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ ...orbitTransition, duration: 20 }}
            className="absolute right-[14%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-dashed border-white/[0.18]"
          />
          <motion.span
            animate={reduce ? undefined : { opacity: [0.2, 0.72, 0.2], scale: [0.92, 1.06, 0.92] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="absolute right-[calc(14%+25px)] top-1/2 h-12 w-12 -translate-y-1/2 rotate-45 border border-white/25 shadow-[0_0_30px_rgba(255,255,255,0.18)]"
          />
        </>
      )}

      {visual === "deloitte" && (
        <>
          <div className="absolute inset-y-0 right-[12%] w-[62%] bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent)]" />
          <motion.span
            animate={reduce ? undefined : { y: [-18, 72, -18] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="absolute right-[17%] top-1/2 h-px w-[45%] bg-gradient-to-r from-transparent via-white/45 to-transparent shadow-[0_0_16px_rgba(255,255,255,0.22)]"
          />
        </>
      )}
    </div>
  )
}

function CounterCell({ stat, index }: { stat: StatCell; index: number }) {
  const [display, setDisplay] = useState(stat.value)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasRun = useRef(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!ref.current || hasRun.current || stat.skipCount) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true

        if (reduce) {
          setDisplay(stat.value)
          return
        }

        const duration = 1400
        const start = performance.now()

        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = easeOutQuart(progress)
          const current = eased * stat.numericValue

          setDisplay(formatNumber(current, stat.decimals, stat.prefix, stat.suffix))

          if (progress < 1) {
            requestAnimationFrame(tick)
          } else {
            setDisplay(stat.value)
          }
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.1 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [stat, reduce])

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={reduce ? undefined : { y: -5, scale: 1.006 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(event) => {
        if (!ref.current || reduce) return
        const rect = ref.current.getBoundingClientRect()
        setMousePos({ x: event.clientX - rect.left, y: event.clientY - rect.top })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`impact-card glass-surface group relative overflow-hidden rounded-2xl border bg-white/[0.035] px-6 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_28px_90px_rgba(0,0,0,0.58),0_0_58px_rgba(255,255,255,0.07)] ${
        stat.span === 2 ? "col-span-2" : "col-span-2 sm:col-span-1"
      } ${
        stat.hero
          ? "min-h-[196px] border-white/[0.14] py-7 hover:border-white/[0.3]"
          : "min-h-[178px] border-white/[0.09] py-6 hover:border-white/[0.24]"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.13), transparent 46%)`,
        }}
      />
      <div aria-hidden className="impact-scan pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100" />
      <StatGraphic visual={stat.visual} hero={stat.hero} />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-700 transition-colors duration-500 group-hover:text-zinc-400">
          Signal {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-1.5 w-1.5 rounded-full border border-white/30 bg-white/10 shadow-[0_0_14px_rgba(255,255,255,0.24)] transition-all duration-500 group-hover:bg-white/80 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
      </div>

      <div
        className="relative z-10 mt-8 font-mono font-bold tracking-[-0.055em] text-white"
        style={{
          fontSize: stat.hero ? "clamp(40px, 5vw, 60px)" : "clamp(28px, 3.5vw, 44px)",
        }}
      >
        {display}
      </div>
      <div
        className={`relative z-10 mt-2 font-mono uppercase tracking-[0.12em] transition-colors duration-500 ${
          stat.hero ? "text-[11px] text-zinc-400 group-hover:text-white" : "text-[10px] text-zinc-500 group-hover:text-zinc-200"
        }`}
      >
        {stat.label}
      </div>
      <div className="relative z-10 mt-1.5 max-w-[70%] font-mono text-[9px] uppercase leading-[1.5] tracking-[0.1em] text-zinc-700 transition-colors duration-500 group-hover:text-zinc-500">
        {stat.detail}
      </div>
    </motion.div>
  )
}

export function Bento() {
  return (
    <section aria-label="Selected impact" className="relative overflow-hidden border-y border-white/5 bg-black py-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_68%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto mb-5 flex max-w-[1120px] items-center justify-between px-6 md:px-10 lg:px-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          Selected impact
        </p>
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-800">
          Evidence over claims
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto grid max-w-[1120px] grid-cols-2 gap-4 px-6 md:grid-cols-4 md:px-10 lg:px-16"
      >
        {STATS.map((stat, index) => (
          <CounterCell key={stat.label} stat={stat} index={index} />
        ))}
      </motion.div>
    </section>
  )
}
