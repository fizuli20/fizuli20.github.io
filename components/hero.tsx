"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"

const ROTATING_LINES = [
  "Presidential Scholar. Top 3 of 20,000+.",
  "2× Hackathon Champion. 2 active incubations.",
  "XGBoost PR-AUC 0.87. Built on real data.",
]

function useTypewriter(lines: string[], typeSpeed = 38, hold = 2400, fade = 500) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing")
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setText(lines[index])
      const t = setTimeout(() => setIndex((i) => (i + 1) % lines.length), hold + fade)
      return () => clearTimeout(t)
    }

    const current = lines[index]

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase("holding"), hold)
      return () => clearTimeout(t)
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("erasing"), 0)
      return () => clearTimeout(t)
    }

    // erasing
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 18)
      return () => clearTimeout(t)
    }
    setIndex((i) => (i + 1) % lines.length)
    setPhase("typing")
  }, [text, phase, index, lines, typeSpeed, hold, fade, reduce])

  return text
}

export function Hero() {
  const text = useTypewriter(ROTATING_LINES)

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-16 md:px-8"
    >
      {/* Faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.55]" aria-hidden />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 55%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--color-success-border)] bg-[var(--color-success-bg)] px-4 py-1.5"
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse-dot"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-success)]">
            Available for internships &amp; collaborations &mdash; Summer 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="font-serif text-[44px] leading-[0.98] tracking-[-0.025em] text-foreground sm:text-[64px] md:text-[88px] lg:text-[104px]"
        >
          FIZULI HASANOV
        </motion.h1>

        {/* Typewriter line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 h-6 font-mono text-[13px] tracking-[0.04em] text-[var(--color-accent)] sm:text-sm"
          aria-live="polite"
        >
          <span>{text}</span>
          <span aria-hidden className="ml-0.5 inline-block w-[2px] -translate-y-[1px] caret-blink">
            &nbsp;
          </span>
        </motion.p>

        {/* Body line */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base"
        >
          I build data products that move revenue and ventures that win competitions. Currently at
          Codveda, founding EcoConcrete, and presenting at PASHA Hackathon 6.0.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            View my work
            <ArrowDown size={16} />
          </a>
          <a
            href="/Fizuli-Hasanov-CV.pdf"
            download
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-7 text-sm font-medium text-foreground transition-colors hover:border-[#2a2a2a] hover:bg-[var(--color-card)]"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
