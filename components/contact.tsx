"use client"

import { useState, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Mail, Linkedin, Github, Check, Copy, ArrowUpRight } from "lucide-react"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function Contact() {
  const [copied, setCopied] = useState(false)
  const reduce = useReducedMotion()

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("hesenovfizuli2020@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40 lg:px-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.08),transparent_68%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      <div className="relative mx-auto max-w-[1120px]">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
          className="contact-console glass-surface relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-white/[0.025] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:p-8"
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/[0.08] animate-contact-orbit" />
          <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit-reverse" />
          <div aria-hidden className="pointer-events-none absolute right-[54px] top-[54px] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_26px_rgba(255,255,255,0.9)] animate-contact-signal" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-1 pb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/35" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                Open channel
              </span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">
              Baku &middot; UTC+4 &middot; Signal available
            </span>
          </div>

          <div className="relative z-10 grid gap-8 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:py-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Next collaboration
              </p>
              <h2
                className="mt-5 max-w-[13ch] text-white"
                style={{
                  fontSize: "clamp(36px, 5.2vw, 66px)",
                  fontWeight: 750,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.98,
                }}
              >
                Let&apos;s turn emerging technology into practical impact.
              </h2>
              <p className="mt-6 max-w-[58ch] text-[14px] leading-[1.7] text-zinc-400">
                I&apos;m open to ambitious conversations around AI products,
                innovation strategy, venture collaboration, and international
                programs.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "AI product opportunities",
                  "Innovation & strategy",
                  "Venture collaboration",
                  "International programs",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-zinc-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="mailto:hesenovfizuli2020@gmail.com"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-5 py-3 text-[13px] font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.22)]"
              >
                Start a conversation
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="self-end rounded-2xl border border-white/[0.075] bg-black/25 p-2 backdrop-blur-xl">
              <a
                href="https://www.linkedin.com/in/fizuli-hasanov/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-transparent p-4 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.045]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-500 transition-colors duration-500 group-hover:text-white">
                  <Linkedin size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">Fastest response</span>
                  <span className="mt-1 block text-[14px] text-zinc-300 transition-colors duration-500 group-hover:text-white">LinkedIn</span>
                </span>
                <ArrowUpRight size={15} className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-transparent p-4 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.045]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-500 transition-colors duration-500 group-hover:text-white">
                  <Mail size={17} />
                </span>
                <a href="mailto:hesenovfizuli2020@gmail.com" className="min-w-0 flex-1">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">Direct channel</span>
                  <span className="mt-1 block truncate text-[13px] text-zinc-300 transition-colors duration-500 group-hover:text-white">hesenovfizuli2020@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="flex h-8 min-w-8 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>

              <a
                href="https://github.com/fizuli20"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-transparent p-4 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.045]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-500 transition-colors duration-500 group-hover:text-white">
                  <Github size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">Build archive</span>
                  <span className="mt-1 block text-[14px] text-zinc-300 transition-colors duration-500 group-hover:text-white">GitHub &middot; @fizuli20</span>
                </span>
                <ArrowUpRight size={15} className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-1 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">
            <span>Problem discovery &rarr; AI/product strategy &rarr; execution</span>
            <span>Based in Baku &middot; globally oriented</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
