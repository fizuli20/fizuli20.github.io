"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./about"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hesenovfizuli2020@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* no-op */
    }
  }

  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="relative border-t border-[var(--color-border)] px-5 py-32 md:px-8"
    >
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-5xl text-center">
        <SectionLabel index="05" label="Connect" />

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-8 max-w-3xl text-balance font-serif text-[36px] leading-[1.05] tracking-tight text-foreground sm:text-[48px] md:text-[56px]"
        >
          Let&rsquo;s build something inevitable.
        </motion.h2>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--color-muted)]">
          I read every message. The fastest way to reach me is email &mdash; expect a reply within
          a day.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {/* Email */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[#111] text-[var(--color-accent)]">
                <Mail size={16} />
              </span>
              <span className="rounded-full border border-[var(--color-success-border)] bg-[var(--color-success-bg)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-success)]">
                Fastest response
              </span>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
              Email
            </p>
            <a
              href="mailto:hesenovfizuli2020@gmail.com"
              className="mt-1 block break-all text-[15px] text-foreground transition-colors hover:text-[var(--color-accent)]"
            >
              hesenovfizuli2020@gmail.com
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[#111] px-3 py-1.5 font-mono text-[11px] tracking-[0.04em] text-[var(--color-muted)] transition-colors hover:border-[#2a2a2a] hover:text-foreground"
              aria-live="polite"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </motion.article>

          {/* LinkedIn */}
          <ContactCard
            icon={<Linkedin size={16} />}
            badge="Connect directly"
            label="LinkedIn"
            value="/in/fizuli-hasanov"
            href="https://www.linkedin.com/in/fizuli-hasanov/"
            delay={0.08}
          />

          {/* GitHub */}
          <ContactCard
            icon={<Github size={16} />}
            badge="See my work"
            label="GitHub"
            value="@fizuli20"
            href="https://github.com/fizuli20"
            delay={0.16}
          />
        </div>

        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
          Open to: Internships &middot; Founder collaborations &middot; AI/ML research &middot;
          Speaking opportunities
        </p>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  badge,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode
  badge: string
  label: string
  value: string
  href: string
  delay: number
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[#111] text-[var(--color-accent)]">
          {icon}
        </span>
        <span className="rounded-full border border-[#2a2a2a] bg-[#111] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {badge}
        </span>
      </div>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
        {label}
      </p>
      <p className="mt-1 flex items-center gap-2 text-[15px] text-foreground">
        {value}
        <ArrowUpRight
          size={14}
          className="text-[var(--color-muted-foreground)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
        />
      </p>
    </motion.a>
  )
}
