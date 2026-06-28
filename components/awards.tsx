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
  // Tier 1 — Champion cards
  {
    tier: 1,
    top: "1ST PLACE",
    title: "AzCON Future Tech Hackathon",
    sub: "Milli Cloud Security \u00b7 Holberton School AZ \u00d7 AZCON Holding \u00b7 AZN 1,500 prize",
    date: "Apr 2026",
  },
  {
    tier: 1,
    top: "1ST PLACE",
    title: "GreenTech III Startup & Innovation Competition",
    sub: "Alternative Energy & Clean Environment Track \u00b7 Carboryn \u00b7 1st of 100+ university teams",
    date: "Apr 2026",
  },
  {
    tier: 1,
    top: "PRESIDENTIAL SCHOLAR",
    title: "Presidential Scholar",
    sub: "Ministry of Science and Education, Republic of Azerbaijan \u00b7 Top 3 of 20,000+ DIM applicants \u00b7 Score 686/700",
    date: "Jun 2025",
  },
  // Tier 2 — Standard grid (12 items, newest first)
  {
    tier: 2,
    top: "FINALIST",
    title: "PASHA Hackathon 6.0",
    sub: "HyperAutomation \u00b7 Selected from thousands nationwide",
    date: "May 2026",
  },
  {
    tier: 2,
    top: "$400 SEED FUND",
    title: "Aspire Institute Seed Fund",
    sub: "FinVeda \u00b7 1 of 40 founders selected from 1,800+ global applications",
    date: "2026",
  },
  {
    tier: 2,
    top: "FELLOW",
    title: "Youth in Development Fellow 2026",
    sub: "Aspire Institute \u00d7 Impact Toolbox \u00b7 1 of 20 fellows globally",
    date: "2026",
  },
  {
    tier: 2,
    top: "INCUBATED",
    title: "SabahHub 9th Cohort",
    sub: "HyperAutomation \u00b7 Accepted among competitive applicants",
    date: "2026",
  },
  {
    tier: 2,
    top: "INCUBATION PATH",
    title: "Carboryn Venture Development",
    sub: "EmpowerMe graduate \u00b7 Startup School 4 + 5th Tusi active",
    date: "2026",
  },
  {
    tier: 2,
    top: "OUTSTANDING",
    title: "Outstanding Contributor \u2014 Elevvo Pathways",
    sub: "Recognized among 2,000+ international participants for work exceeding the analytics brief",
    date: "Mar 2026",
  },
  {
    tier: 2,
    top: "ALUMNI",
    title: "Aspire Leaders Alumni",
    sub: "Aspire Institute (Harvard-founded) \u00b7 9,988 selected from 54,337 global applicants",
    date: "Dec 2025",
  },
  {
    tier: 2,
    top: "ACCEPTED",
    title: "ABB 6th Incubation",
    sub: "LedgerLens \u00b7 AI-OCR for handwritten Azerbaijani SME ledgers",
    date: "2026",
  },
  {
    tier: 2,
    top: "TOP 29 / 150+",
    title: "Urban Hackathon 2026",
    sub: "GreenMile B2B HR SaaS \u00b7 Ministry of Youth & Sport \u00b7 National Student Hackathon on Sustainable Urban Mobility",
    date: "2026",
  },
  {
    tier: 2,
    top: "3RD PLACE",
    title: "Holberton School AZ Data Driven Solutions",
    sub: "HSPTS student analytics platform \u00b7 Earned additional Holberton course access",
    date: "Apr 2026",
  },
  {
    tier: 2,
    top: "3RD PLACE",
    title: "G\u0259ncV\u0130ZYON Ideathon, Digital Future & AI Track",
    sub: "Transparent Legal Navigator \u00b7 240 youth, 40 teams",
    date: "2025",
  },
  {
    tier: 2,
    top: "100% SCHOLARSHIP",
    title: "GenAI Track \u2014 Holberton School Azerbaijan",
    sub: "Selected among hundreds",
    date: "2025",
  },
]

const championVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const championItem = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const gridItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

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
        <SectionLabel label="RECOGNITION" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(34px, 4.4vw, 54px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Recognition for building and exploring.
        </h2>

        <hr className="mt-8 border-white/5" />

        {/* Tier 1 — Champion Row */}
        <motion.div
          variants={championVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {champions.map((a) => (
            <motion.div
              key={a.title}
              variants={championItem}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="glass-surface group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all duration-500 hover:border-white/25 hover:bg-zinc-800/90 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_24px_80px_rgba(0,0,0,0.46),0_0_48px_rgba(255,255,255,0.06)]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-px bg-white/35 transition-all duration-500 group-hover:w-[3px] group-hover:bg-white group-hover:shadow-[0_0_26px_rgba(255,255,255,0.78)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(255,255,255,0.16),rgba(255,255,255,0.045)_32%,transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative z-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  {a.top}
                </p>
                <h3 className="mt-3 text-[18px] font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.55] text-zinc-400 transition-colors duration-500 group-hover:text-zinc-300">
                  {a.sub}
                </p>
                <p className="mt-3 font-mono text-[11px] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-500">
                  {a.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tier 2 — Standard Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2"
        >
          {standard.map((a) => (
            <motion.div
              key={a.title + a.sub}
              variants={gridItem}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="glass-surface group relative overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-900 p-5 transition-all duration-500 hover:border-white/[0.16] hover:bg-zinc-800/90"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.08),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <h3 className="text-[15px] text-white">{a.title}</h3>
                <span className="shrink-0 font-mono text-[11px] text-zinc-600">
                  {a.date}
                </span>
              </div>
              <p className="relative z-10 mt-1 text-[13px] text-zinc-400 transition-colors duration-500 group-hover:text-zinc-300">
                {a.top} &middot; {a.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
