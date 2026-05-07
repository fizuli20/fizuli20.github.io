"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./about"

type BadgeTone = "green" | "blue" | "amber" | "neutral"

type Project = {
  num: string
  title: string
  category: string
  tagline: string
  badge: { label: string; tone: BadgeTone }
  impact: string[]
  problem: string
  solution: string
  outcome: string
  links: { label: string; href: string }[]
  visualBg: string
  visualMetric: { value: string; label: string }
}

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "EcoConcrete",
    category: "Cleantech · Founder",
    tagline: "Nano-mineral concrete additive that sequesters CO₂ via carbonation.",
    badge: { label: "1st Place · 100 teams · Incubated", tone: "green" },
    impact: ["1st / 100 teams", "2× Incubators (EmpowerMe + 5th Tusi)", "B2B Construction GTM"],
    problem:
      "Construction sector accounts for 8% of global CO₂ emissions with no affordable local solution.",
    solution:
      "Developed a nano-mineral additive that sequesters CO₂ during the concrete curing process.",
    outcome:
      "Won 1st place among 100 university teams; accepted into two incubation programs.",
    links: [
      { label: "Visit site", href: "https://eco-concrete.vercel.app" },
      { label: "Read pitch", href: "https://eco-concrete.vercel.app" },
    ],
    visualBg: "#0d1a0f",
    visualMetric: { value: "1 / 100", label: "University teams" },
  },
  {
    num: "02",
    title: "HyperAutomation (AutoFlow AZ)",
    category: "Robotics + RPA · Co-Founder",
    tagline: "RPA + Autonomous Guided Vehicle warehouse system for Azerbaijani SMEs.",
    badge: { label: "SabahHub Incubated · PASHA Hackathon 6.0 Finalist", tone: "blue" },
    impact: ["SabahHub 9th Cohort", "PASHA Hackathon 6.0 (May 15–17, 2026)", "Pre-launch"],
    problem:
      "Azerbaijani SME warehouses rely on manual picking, causing 30-40% operational inefficiency.",
    solution:
      "Integrated RPA software layer with AGV hardware for end-to-end warehouse automation.",
    outcome:
      "Accepted into SabahHub (9th cohort); selected to present at PASHA Hackathon 6.0 from thousands of applicants.",
    links: [],
    visualBg: "#0d0f1a",
    visualMetric: { value: "RPA × AGV", label: "Stack" },
  },
  {
    num: "03",
    title: "Milli Cloud Security",
    category: "Infrastructure · Co-Founder",
    tagline:
      "Cloud security and data-center infrastructure platform for Azerbaijan's national digital ecosystem.",
    badge: { label: "1st Place · AZN 1,500", tone: "amber" },
    impact: [
      "1st / AzCON Future Tech Hackathon",
      "AZN 1,500 Prize",
      "Holberton AZ × AZCON Holding",
    ],
    problem:
      "Azerbaijan's accelerating digital infrastructure lacks a national-grade cloud security layer.",
    solution:
      "Designed a cloud security platform addressing data sovereignty, access control, and incident response.",
    outcome:
      "Won 1st place at AzCON Future Tech Hackathon hosted by Holberton School Azerbaijan and AZCON Holding.",
    links: [],
    visualBg: "#1a0d0d",
    visualMetric: { value: "AZN 1.5K", label: "Prize" },
  },
  {
    num: "04",
    title: "LedgerLens",
    category: "Fintech AI · Founder",
    tagline:
      "AI-OCR for handwritten Azerbaijani SME ledgers — benchmarked against Google Document AI and Azure Form Recognizer.",
    badge: { label: "Applied to ABB Incubation", tone: "neutral" },
    impact: ["AI / OCR", "ABB Incubation Applied", "SME digitization target"],
    problem: "Azerbaijani SMEs still keep handwritten ledgers, blocking access to credit and analytics.",
    solution:
      "Built an OCR pipeline tuned for Azerbaijani handwriting, benchmarked against Google Document AI and Azure Form Recognizer.",
    outcome:
      "Working demo deployed; applied to ABB incubation as a fintech enabler for SME digitization.",
    links: [{ label: "View demo", href: "https://ledgerlenss.vercel.app/ocr" }],
    visualBg: "#12100a",
    visualMetric: { value: "OCR", label: "Handwritten AZ" },
  },
  {
    num: "05",
    title: "Azerbaijan Economy Analysis",
    category: "Macroeconomic Research",
    tagline:
      "20-year OLS regression study: Brent crude explains 50.9% of Azerbaijan's GDP variance.",
    badge: { label: "University Researcher · Published", tone: "neutral" },
    impact: [
      "R² = 0.509 (p < 0.001)",
      "+$2.35B / month Hormuz windfall model",
      "3-scenario 2026 GDP stress test ($74.7B–$82B)",
    ],
    problem:
      "Azerbaijan's GDP is widely understood to track oil — but without a quantified, modern statistical baseline.",
    solution:
      "Ran a 20-year OLS regression of Brent crude vs. national GDP and built a 3-scenario stress test for 2026.",
    outcome:
      "Quantified that Brent explains 50.9% of GDP variance and modeled a +$2.35B/month Hormuz disruption windfall.",
    links: [{ label: "Read on GitHub", href: "https://github.com/fizuli20" }],
    visualBg: "#0a0f12",
    visualMetric: { value: "R² 0.509", label: "Brent → GDP" },
  },
  {
    num: "06",
    title: "FinVeda",
    category: "Fintech · Co-Founder",
    tagline: "AI-powered financial literacy platform for emerging-market Gen Z.",
    badge: { label: "Fintech AI", tone: "neutral" },
    impact: ["AI tutor", "Emerging markets", "Gen Z"],
    problem: "Financial literacy content is built for developed markets and ignores Gen Z behavior.",
    solution:
      "An AI tutor and curriculum tailored to emerging-market Gen Z, focused on practical money decisions.",
    outcome: "Live MVP in production with iterative learning loops.",
    links: [{ label: "View", href: "https://fin-veda-eight.vercel.app" }],
    visualBg: "#0d0d1a",
    visualMetric: { value: "Gen Z", label: "Emerging markets" },
  },
]

const toneStyles: Record<BadgeTone, string> = {
  green:
    "bg-[var(--color-success-bg)] border-[var(--color-success-border)] text-[var(--color-success)]",
  blue: "bg-[#0a1530] border-[#1d3a8a] text-[#93c5fd]",
  amber: "bg-[var(--color-gold-bg)] border-[var(--color-gold-border)] text-[#fbbf24]",
  neutral: "bg-[#111] border-[#2a2a2a] text-[var(--color-muted)]",
}

export function Ventures() {
  return (
    <section
      id="work"
      aria-label="Selected ventures"
      className="relative border-t border-[var(--color-border)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01" label="Ventures" />
        <h2 className="mt-6 max-w-3xl font-serif text-[32px] leading-[1.1] tracking-tight text-foreground sm:text-[40px]">
          Ventures I&rsquo;ve shipped, incubated, or won with.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
          Six case studies across cleantech, robotics, infrastructure, fintech, and macro research
          &mdash; all built on real data, real teams, and real competitions.
        </p>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.title} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14"
    >
      {/* Visual */}
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--color-border)]"
          style={{ backgroundColor: project.visualBg }}
        >
          {/* grid */}
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          {/* number */}
          <div className="absolute left-6 top-6 font-mono text-[12px] tracking-[0.18em] text-[var(--color-muted-foreground)]">
            / {project.num}
          </div>
          {/* big metric */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="font-mono text-[44px] leading-none text-foreground sm:text-[64px] md:text-[72px]">
              {project.visualMetric.value}
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
              {project.visualMetric.label}
            </div>
          </div>
          {/* corner accent */}
          <div
            aria-hidden
            className="absolute -bottom-px -right-px h-16 w-16 border-b border-r border-[var(--color-accent)]"
          />
        </div>
      </div>

      {/* Text */}
      <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${toneStyles[project.badge.tone]}`}
        >
          {project.badge.label}
        </span>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
          {project.category}
        </p>

        <h3 className="mt-3 font-serif text-[28px] leading-[1.1] tracking-tight text-foreground sm:text-[36px]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--color-muted)]">
          {project.tagline}
        </p>

        {/* Impact row */}
        <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
          {project.impact.map((item) => (
            <li
              key={item}
              className="bg-[var(--color-card)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Narrative */}
        <dl className="mt-6 space-y-3 text-[14px] leading-relaxed">
          <NarrativeRow label="Problem" value={project.problem} />
          <NarrativeRow label="Solution" value={project.solution} />
          <NarrativeRow label="Outcome" value={project.outcome} />
        </dl>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-[13px] text-foreground transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {l.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

function NarrativeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] items-baseline gap-3 border-l border-[var(--color-border)] pl-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
        {label}
      </dt>
      <dd className="text-[var(--color-muted)]">{value}</dd>
    </div>
  )
}
