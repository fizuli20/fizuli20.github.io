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
  span: number
  skipCount?: boolean
}

const STATS: StatCell[] = [
  { value: "96.3", numericValue: 96.3, suffix: " / 100", decimals: 1, label: "GPA \u00b7 BHOS", span: 2 },
  { value: "TOP 3", numericValue: 3, prefix: "TOP ", decimals: 0, label: "OF 20,000+ DIM APPLICANTS", span: 1, skipCount: true },
  { value: "2\u00d7", numericValue: 2, suffix: "\u00d7", decimals: 0, label: "HACKATHON CHAMPION", span: 1 },
  { value: "2.1M+", numericValue: 2.1, suffix: "M+", decimals: 1, label: "DIGITAL VIEWS", span: 1 },
  { value: "100%", numericValue: 100, suffix: "%", decimals: 0, label: "GENAI SCHOLARSHIP", span: 1 },
  { value: "9,988", numericValue: 9988, decimals: 0, label: "ASPIRE LEADERS ALUMNI", span: 1 },
  { value: "2", numericValue: 2, decimals: 0, label: "ACTIVE INCUBATIONS", span: 1 },
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

function CounterCell({ stat }: { stat: StatCell }) {
  const [display, setDisplay] = useState(stat.value)
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      className={`rounded-xl border border-white/[0.06] bg-zinc-900 px-6 py-5 transition-[border-color] duration-200 hover:border-white/[0.14] hover:bg-zinc-800 ${
        stat.span === 2 ? "col-span-2" : "col-span-1"
      }`}
    >
      <div
        className="font-mono font-bold text-white"
        style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
      >
        {display}
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
        {stat.label}
      </div>
    </motion.div>
  )
}

export function Bento() {
  return (
    <section aria-label="Key metrics" className="border-y border-white/5 bg-black py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[1120px] grid-cols-2 gap-3 px-6 md:grid-cols-4 md:px-10 lg:px-16"
      >
        {STATS.map((stat) => (
          <CounterCell key={stat.label} stat={stat} />
        ))}
      </motion.div>
    </section>
  )
}
