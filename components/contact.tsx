"use client"

import { useState, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Mail, Linkedin, Github, Check, Copy } from "lucide-react"

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
      className="px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
          className="text-white"
          style={{
            fontSize: "clamp(40px, 5vw, 60px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Let&apos;s build something inevitable.
        </motion.h2>
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.06 }}
          className="mt-4 text-[15px] text-zinc-400"
        >
          Open to: Product Management &amp; PO roles &middot; Business Analysis internships &middot; Founder collaborations &middot; AI/ML research &middot; Speaking opportunities
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/fizuli-hasanov/"
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: 0 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="edge-lit-card glass-surface group flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-500 hover:border-white/[0.16] hover:bg-zinc-800/90"
          >
            <Linkedin size={20} className="relative z-10 text-zinc-400 transition-colors duration-500 group-hover:text-white" />
            <span className="relative z-10 text-[14px] text-zinc-300 transition-colors duration-500 group-hover:text-white">
              /in/fizuli-hasanov
            </span>
            <p className="relative z-10 font-mono text-[11px] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-300">
              Fastest response
            </p>
          </motion.a>

          {/* Email */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.06 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="edge-lit-card glass-surface group flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-500 hover:border-white/[0.16] hover:bg-zinc-800/90"
          >
            <Mail size={20} className="relative z-10 text-zinc-400 transition-colors duration-500 group-hover:text-white" />
            <a
              href="mailto:hesenovfizuli2020@gmail.com"
              className="relative z-10 text-[14px] text-zinc-300 transition-colors duration-500 hover:text-white group-hover:text-white"
            >
              hesenovfizuli2020@gmail.com
            </a>
            <p className="relative z-10 font-mono text-[11px] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-300">
              Direct email
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="relative z-10 mt-1 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/10 px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              {copied ? (
                <>
                  <Check size={12} /> Copied
                </>
              ) : (
                <>
                  <Copy size={12} /> Copy
                </>
              )}
            </button>
          </motion.div>

          {/* GitHub */}
          <motion.a
            href="https://github.com/fizuli20"
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.12 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="edge-lit-card glass-surface group flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-500 hover:border-white/[0.16] hover:bg-zinc-800/90"
          >
            <Github size={20} className="relative z-10 text-zinc-400 transition-colors duration-500 group-hover:text-white" />
            <span className="relative z-10 text-[14px] text-zinc-300 transition-colors duration-500 group-hover:text-white">
              @fizuli20
            </span>
            <p className="relative z-10 font-mono text-[11px] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-300">
              Code &amp; projects
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
