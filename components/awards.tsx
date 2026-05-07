"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionLabel } from "./about"

type Award = {
  tier: 1 | 2
  top: string
  title: string
  sub: string
  date: string
}

const AWARDS: Award[] = [
  {
    tier: 1,
    top: "1ST PLACE",
    title: "AzCON Future Tech Hackathon",
    sub: "Milli Cloud Security \u00b7 AZN 1,500",
    date: "Apr 2026",
  },
  {
    tier: 1,
    top: "1ST PLACE",
    title: "Alternative Energy Track",
    sub: "EcoConcrete \u00b7 1 of 100 University Teams",
    date: "Apr 2026",
  },
  {
    tier: 1,
    top: "PRESIDENTIAL SCHOLAR",
    title: "Republic of Azerbaijan",
    sub: "Top 3 of 20,000+ DIM applicants \u00b7 Score 686/700",
    date: "Jun 2025",
  },
  {
    tier: 2,
    top: "FINALIST",
    title: "PASHA Hackathon 6.0",
    sub: "HyperAutomation",
    date: "May 2026",
  },
  {
    tier: 2,
    top: "INCUBATED",
    title: "SabahHub 9th Cohort",
    sub: "AutoFlow AZ",
    date: "2026",
  },
  {
    tier: 2,
    top: "INCUBATED",
    title: "EmpowerMe + 5th Tusi",
    sub: "EcoConcrete",
    date: "2026",
  },
  {
    tier: 2,
    top: "FINALIST",
    title: "Aspire Leaders Program",
    sub: "9,988 of 54,337",
    date: "Dec 2025",
  },
  {
    tier: 2,
    top: "OUTSTANDING",
    title: "Elevvo Pathways",
    sub: "2,000+ global participants",
    date: "Mar 2026",
  },
  {
    tier: 2,
    top: "TOP 29 / 150+",
    title: "Urban Hackathon",
    sub: "GreenMile",
    date: "2026",
  },
  {
    tier: 2,
    top: "3RD PLACE",
    title: "Holberton Data Driven Hackathon",
    sub: "HSPTS",
    date: "Apr 2026",
  },
  {
    tier: 2,
    top: "5TH PLACE",
    title: "Hult Prize BHOS On-Campus",
    sub: "13 finalists of 29 teams",
    date: "2025",
  },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function Awards() {
  const reduce = useReducedMotion()
  const champions = AWARDS.filter((a) => a.tier === 1)
  const standard = AWARDS.filter((a) => a.tier === 2)

  return (
    <section
      id="awards"
      aria-label="Recognition"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel index="04" label="RECOGNITION" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Wins, finals, and scholarships.
        </h2>

        <hr className="mt-8 border-white/5" />

        {/* Tier 1 — Champion Row */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {champions.map((a, i) => (
            <motion.div
              key={a.title}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: easeOutExpo, delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -3 }}
              className="rounded-2xl border border-white/10 border-l-[3px] border-l-white bg-zinc-900 p-7 transition-all duration-200 hover:border-white/[0.12] hover:bg-zinc-800"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                {a.top}
              </p>
              <h3 className="mt-3 text-[18px] font-semibold text-white">
                {a.title}
              </h3>
              <p className="mt-1 text-[14px] text-zinc-400">{a.sub}</p>
              <p className="mt-3 font-mono text-[11px] text-zinc-600">
                {a.date}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tier 2 — Standard Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {standard.map((a, i) => (
            <motion.div
              key={a.title + a.sub}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: easeOutExpo, delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -3 }}
              className="rounded-xl border border-white/[0.06] bg-zinc-900 p-5 transition-all duration-200 hover:border-white/[0.12] hover:bg-zinc-800"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] text-white">{a.title}</h3>
                <span className="font-mono text-[11px] text-zinc-600">
                  {a.date}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-zinc-400">
                {a.top} &middot; {a.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
