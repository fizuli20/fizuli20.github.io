"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "./about"

type Role = {
  num: string
  title: string
  company: string
  meta: string
  current?: boolean
  keyWin: string
  bullets: string[]
  stack: string[]
  logoColor: string
  initials: string
}

const ROLES: Role[] = [
  {
    num: "01",
    title: "Business Analyst Intern",
    company: "Codveda Technologies",
    meta: "Remote · Mar 2026 – Present",
    current: true,
    keyWin:
      "XGBoost fraud detection — PR-AUC 0.87 on 284,807 real transactions (577:1 imbalance).",
    bullets: [
      "Engineered a fraud-detection pipeline on 284,807 real card transactions, hitting PR-AUC 0.87 and ROC-AUC 0.91 against a brutal 577:1 class imbalance using SMOTE + XGBoost.",
      "Delivered an RFM customer segmentation that surfaced $7.45M in latent revenue across the loyalty cohort, translated into 4 actionable retention plays.",
      "Shipped cohort-retention dashboards in Power BI that cut a 6-hour weekly reporting cycle to a 15-minute self-serve view for ops leadership.",
      "Documented model assumptions, drift checks, and runbooks so non-ML stakeholders could trust and challenge the outputs.",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "SMOTE", "PostgreSQL", "Power BI"],
    logoColor: "#2563eb",
    initials: "CV",
  },
  {
    num: "02",
    title: "Data Analyst Intern",
    company: "Elevvo Pathways",
    meta: "Remote · Feb – Mar 2026",
    keyWin:
      "Outstanding Contributor — recognized among 2,000+ global participants.",
    bullets: [
      "Completed 8 production-grade data tasks across cleaning, EDA, modeling, and dashboarding inside a 6-week sprint.",
      "Built a churn-prediction baseline that out-performed the program benchmark and was reused by other cohort members.",
      "Earned the Outstanding Contributor recognition from a global pool of 2,000+ analysts.",
    ],
    stack: ["Python", "pandas", "Tableau", "SQL"],
    logoColor: "#10b981",
    initials: "EP",
  },
  {
    num: "03",
    title: "Business & Finance Coordinator",
    company: "IYDP (Intl. Youth Development Program)",
    meta: "Baku · Feb 2026 – Present",
    keyWin: "Coordinating finance + business ops for a multi-track international youth program.",
    bullets: [
      "Own the financial planning, budget tracking, and partner reporting cycle for the program's Baku chapter.",
      "Coordinate cross-functional ops between sponsors, mentors, and 30+ delegates across multiple tracks.",
    ],
    stack: ["Financial Modeling", "Stakeholder Mgmt", "Reporting"],
    logoColor: "#f59e0b",
    initials: "IY",
  },
  {
    num: "04",
    title: "VP & Project Manager (×3 clubs)",
    company: "Baku Higher Oil School",
    meta: "Sep 2025 – Present",
    keyWin: "Leading three student organizations in parallel — strategy, ops, and execution.",
    bullets: [
      "Vice President / PM across three student clubs spanning entrepreneurship, data, and leadership.",
      "Built recurring program cadences: events, partnerships, mentor pipelines, and member growth loops.",
    ],
    stack: ["Leadership", "Operations", "Program Design"],
    logoColor: "#8b5cf6",
    initials: "BH",
  },
  {
    num: "05",
    title: "Digital Product Growth",
    company: "TikTok",
    meta: "Oct 2024 – Aug 2025",
    keyWin: "2.1M+ views, 70K+ likes in 11 months using data-driven audience segmentation.",
    bullets: [
      "Ran a personal growth experiment as a product: hypothesis → content → measurement → iteration.",
      "Used audience-segmentation analytics and posting-time optimization to break 2.1M+ views and 70K+ likes in 11 months.",
    ],
    stack: ["Audience Analytics", "A/B Testing", "Content Strategy"],
    logoColor: "#ef4444",
    initials: "TT",
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="relative border-t border-[var(--color-border)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="02" label="Experience" />
        <h2 className="mt-6 max-w-2xl font-serif text-[32px] leading-[1.1] tracking-tight text-foreground sm:text-[40px]">
          Five roles. One operating system.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">
          Every role earned a measurable result. Below: the stack, the stakes, and the receipts.
        </p>

        <ol className="relative mt-16">
          {/* timeline spine */}
          <span
            aria-hidden
            className="absolute left-[18px] top-2 bottom-2 w-px bg-[var(--color-border)] md:left-[22px]"
          />
          {ROLES.map((r, i) => (
            <RoleItem key={r.num} role={r} last={i === ROLES.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function RoleItem({ role, last }: { role: Role; last: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pl-14 md:pl-20 ${last ? "" : "pb-12"}`}
    >
      {/* node */}
      <span
        aria-hidden
        className={`absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-full border md:h-11 md:w-11 ${
          role.current
            ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10"
            : "border-[var(--color-border)] bg-[var(--color-card)]"
        }`}
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-white md:h-6 md:w-6"
          style={{ backgroundColor: role.logoColor }}
        >
          {role.initials}
        </span>
      </span>

      <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[#2a2a2a] md:p-7">
        <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-accent)]">
            {role.num}
          </span>
          <h3 className="font-serif text-xl text-foreground sm:text-2xl">{role.title}</h3>
          {role.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-success-border)] bg-[var(--color-success-bg)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-success)]">
              <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-success)]" />
              Current
            </span>
          )}
        </header>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[var(--color-muted)]">
          <span className="text-foreground">{role.company}</span>
          <span aria-hidden className="text-[var(--color-muted-foreground)]">·</span>
          <span className="font-mono text-[12px] text-[var(--color-muted-foreground)]">
            {role.meta}
          </span>
        </div>

        {/* Key win */}
        <div className="mt-5 rounded-md border-l-[3px] border-l-[var(--color-success)] bg-[#0f1a0f] px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-success)]">
            Key win
          </p>
          <p className="mt-1 text-[14px] leading-relaxed text-foreground">{role.keyWin}</p>
        </div>

        {/* Bullets */}
        <ul className="mt-5 space-y-2.5">
          {role.bullets.map((b) => (
            <li
              key={b}
              className="relative pl-5 text-[14px] leading-relaxed text-[var(--color-muted)]"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[10px] h-1 w-1 rounded-full bg-[var(--color-accent)]"
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Stack pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {role.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[#2a2a2a] bg-[#111] px-2.5 py-1 font-mono text-[11px] text-[var(--color-muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      </article>
    </motion.li>
  )
}
