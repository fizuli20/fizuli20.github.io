"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./about"

type Project = {
  category: string
  badge: string
  name: string
  description: string
  metrics: string
  link?: { label: string; href: string }
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    category: "CLEANTECH \u00b7 FOUNDER",
    badge: "1st Place \u00b7 1 of 100 Teams",
    name: "EcoConcrete",
    description:
      "Secured 1st place out of 100 university teams by engineering a nano-mineral concrete additive that sequesters CO\u2082 during the curing process. Under active incubation at EmpowerMe and 5th Tusi targeting B2B construction market entry.",
    metrics: "1 of 100 teams \u00b7 2\u00d7 incubators \u00b7 B2B construction GTM",
    link: { label: "Visit", href: "https://eco-concrete.vercel.app" },
    featured: true,
  },
  {
    category: "ROBOTICS + RPA \u00b7 CO-FOUNDER",
    badge: "SabahHub 9th Cohort",
    name: "AutoFlow AZ",
    description:
      "Designed an RPA + AGV warehouse automation system for Azerbaijani SMEs \u2014 selected for SabahHub 9th cohort and advancing to PASHA Hackathon 6.0 finals (May 2026) from thousands of applicants.",
    metrics: "SabahHub incubated \u00b7 PASHA Hackathon 6.0 \u00b7 Pre-launch",
  },
  {
    category: "INFRASTRUCTURE \u00b7 CO-FOUNDER",
    badge: "1st Place \u00b7 AZN 1,500",
    name: "Milli Cloud Security",
    description:
      "Won 1st place at AzCON Future Tech Hackathon for a cloud security platform addressing Azerbaijan\u2019s national data infrastructure gap. Prize: AZN 1,500.",
    metrics: "AzCON Hackathon \u00b7 AZN 1,500 \u00b7 Holberton AZ",
  },
  {
    category: "FINTECH AI \u00b7 FOUNDER",
    badge: "ABB Incubation Applied",
    name: "LedgerLens",
    description:
      "Built an AI-OCR product for handwritten Azerbaijani SME ledgers \u2014 benchmarked against Google Document AI and Azure Form Recognizer on accuracy and unit economics.",
    metrics: "AI/OCR \u00b7 SME digitization \u00b7 ABB applied",
    link: { label: "Visit", href: "https://ledgerlenss.vercel.app/ocr" },
  },
  {
    category: "MACROECONOMIC RESEARCH \u00b7 UNIVERSITY RESEARCHER",
    badge: "Published",
    name: "Azerbaijan Economy Analysis",
    description:
      "20-year OLS regression: Brent crude explains 50.9% of GDP variance (R\u00b2=0.509, p<0.001). Modeled the March 2026 Hormuz Crisis as a +$2.35B/month windfall for Azerbaijan via BTC pipeline. Built 3-scenario 2026 stress test.",
    metrics: "R\u00b2=0.509 \u00b7 p<0.001 \u00b7 +$2.35B/month model",
    link: { label: "Visit", href: "https://github.com/fizuli20" },
  },
  {
    category: "FINTECH \u00b7 CO-FOUNDER",
    badge: "Live",
    name: "FinVeda",
    description:
      "Architected an AI-powered financial literacy platform for emerging-market Gen Z. Adaptive learning meets behavioral finance for underbanked youth.",
    metrics: "AI tutor \u00b7 Emerging markets \u00b7 Gen Z",
    link: { label: "Visit", href: "https://fin-veda-eight.vercel.app" },
  },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: easeOutExpo, delay: index * 0.06 }}
      whileHover={reduce ? undefined : { y: -3 }}
      className={`flex flex-col rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-zinc-800 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Top row: category + badge */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600">
          {project.category}
        </span>
        <span
          className={`font-mono text-[11px] rounded-full border px-3 py-0.5 ${
            project.badge.startsWith("1st")
              ? "border-white/20 bg-white/5 text-zinc-100 border-l-2 border-l-white/40"
              : "border-white/10 bg-white/[0.02] text-zinc-400"
          }`}
        >
          {project.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-[20px] font-semibold text-white">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-[65ch] text-[14px] leading-[1.6] text-zinc-400">
        {project.description}
      </p>

      {/* Metrics row */}
      <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/5 pt-4 mt-4">
        <span className="font-mono text-[13px] text-zinc-500">
          {project.metrics}
        </span>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-mono text-[13px] text-zinc-600 transition-colors duration-200 hover:text-white"
          >
            {project.link.label}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export function Ventures() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel index="01" label="SELECTED WORK" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Ventures shipped, incubated, and won with.
        </h2>

        <hr className="mt-8 border-white/5" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
