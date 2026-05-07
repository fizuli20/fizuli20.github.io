"use client"

import { motion } from "framer-motion"
import { Trophy, Medal } from "lucide-react"
import { SectionLabel } from "./about"

type GoldAward = {
  event: string
  project: string
  date: string
  outcome: string
}

type Recognition = {
  title: string
  meta: string
}

const GOLD: GoldAward[] = [
  {
    event: "AzCON Future Tech Hackathon",
    project: "Milli Cloud Security",
    date: "Apr 2026",
    outcome: "AZN 1,500 prize · Holberton AZ × AZCON Holding",
  },
  {
    event: "Alternative Energy Track",
    project: "EcoConcrete",
    date: "Apr 2026",
    outcome: "1st of 100 university teams",
  },
  {
    event: "Presidential Scholar",
    project: "Republic of Azerbaijan",
    date: "Jun 2025",
    outcome: "Top 3 of 20,000+ · DIM 686/700",
  },
]

const ALL: Recognition[] = [
  { title: "3rd Place — Holberton Hackathon", meta: "Holberton School Azerbaijan" },
  { title: "PASHA Hackathon 6.0 — Finalist", meta: "May 15–17, 2026" },
  { title: "SabahHub — Incubated", meta: "9th cohort · AutoFlow AZ" },
  { title: "EmpowerMe + 5th Tusi — Incubated", meta: "EcoConcrete · Cleantech" },
  { title: "Aspire Leaders — Finalist", meta: "9,988 / 54,337 globally" },
  { title: "Outstanding Contributor — Elevvo", meta: "Top of 2,000+ analysts" },
  { title: "Urban Hackathon — Top 29", meta: "Out of 150+ teams" },
  { title: "Hult Prize — 5th Place", meta: "Campus round" },
]

export function Awards() {
  return (
    <section
      id="awards"
      aria-label="Awards and recognition"
      className="relative border-t border-[var(--color-border)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04" label="Recognition" />
        <h2 className="mt-6 max-w-2xl font-serif text-[32px] leading-[1.1] tracking-tight text-foreground sm:text-[40px]">
          The receipts.
        </h2>

        {/* Tier 1 — gold */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {GOLD.map((g, i) => (
            <motion.article
              key={g.event}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-gold-border)] bg-[var(--color-gold-bg)] p-7 transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[44px] leading-none text-[var(--color-gold)]">
                  1<span className="align-super text-[20px]">st</span>
                </span>
                <Trophy size={22} className="text-[var(--color-gold)]/70" />
              </div>
              <h3 className="mt-6 text-[15px] font-medium leading-snug text-foreground">
                {g.event}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#fbbf24]/80">
                {g.project}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[var(--color-gold-border)] pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {g.date}
                </span>
                <span className="text-[12px] text-[var(--color-muted)]">{g.outcome}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tier 2 */}
        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
            All recognition
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ALL.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-colors hover:border-[#2a2a2a]"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[#111] text-[var(--color-muted)]">
                  <Medal size={16} />
                </span>
                <div>
                  <h4 className="text-[14px] font-medium leading-snug text-foreground">
                    {r.title}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">
                    {r.meta}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
