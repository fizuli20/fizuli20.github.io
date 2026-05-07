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
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
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
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.06 }}
          className="mt-4 text-[15px] text-zinc-400"
        >
          Open to internships, founder collaborations, AI/ML research, and speaking.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Email */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0 }}
            whileHover={reduce ? undefined : { y: -3 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-zinc-800"
          >
            <Mail size={20} className="text-zinc-400" />
            <a
              href="mailto:hesenovfizuli2020@gmail.com"
              className="text-[14px] text-zinc-300 transition-colors duration-150 hover:text-white"
            >
              hesenovfizuli2020@gmail.com
            </a>
            <p className="font-mono text-[11px] text-zinc-600">Fastest response</p>
            <button
              type="button"
              onClick={handleCopy}
              className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-200 hover:border-white/20 hover:text-white"
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

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/fizuli-hasanov/"
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.06 }}
            whileHover={reduce ? undefined : { y: -3 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-zinc-800"
          >
            <Linkedin size={20} className="text-zinc-400" />
            <span className="text-[14px] text-zinc-300">/in/fizuli-hasanov</span>
            <p className="font-mono text-[11px] text-zinc-600">Professional network</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/fizuli20"
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.12 }}
            whileHover={reduce ? undefined : { y: -3 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-zinc-800"
          >
            <Github size={20} className="text-zinc-400" />
            <span className="text-[14px] text-zinc-300">@fizuli20</span>
            <p className="font-mono text-[11px] text-zinc-600">Code & projects</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
