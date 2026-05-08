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
    title: "GreenTech 3 Festival",
    sub: "EcoConcrete \u00b7 Alternative Energy & Clean Environment Track \u00b7 1st of 100 university teams nationwide",
    date: "Apr 2026",
  },
  {
    tier: 1,
    top: "PRESIDENTIAL SCHOLAR",
    title: "Presidential Scholar",
    sub: "Ministry of Science and Education, Republic of Azerbaijan \u00b7 Top 3 of 20,000+ DIM applicants nationwide \u00b7 Score 686/700",
    date: "Jun 2025",
  },
  // Tier 2 — Standard grid
  {
    tier: 2,
    top: "FINALIST",
    title: "PASHA Hackathon 6.0",
    sub: "HyperAutomation \u00b7 Selected from thousands of applicants nationwide",
    date: "May 2026",
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
    top: "INCUBATED",
    title: "EmpowerMe + 5th Tusi Incubation Program",
    sub: "EcoConcrete \u00b7 Two simultaneous incubations",
    date: "2026",
  },
  {
    tier: 2,
    top: "OUTSTANDING",
    title: "Elevvo Pathways",
    sub: "Recognized among 2,000+ global participants",
    date: "Mar 2026",
  },
  {
    tier: 2,
    top: "ALUMNI",
    title: "Aspire Leaders Alumni",
    sub: "Aspire Institute (Harvard-founded) \u00b7 Selected as one of 9,988 finalists from 54,337 global applicants",
    date: "Dec 2025",
  },
  {
    tier: 2,
    top: "FINALIST",
    title: "Aspire \u00d7 Harvard AI for Global Business Hackathon",
    sub: "AI-powered financial insights prototype \u00b7 Global online event",
    date: "2025\u20132026",
  },
  {
    tier: 2,
    top: "TOP 29 / 150+",
    title: "Urban Hackathon 2026",
    sub: "GreenMile \u00b7 National Student Hackathon on Sustainable Urban Mobility \u00b7 Ministry of Youth & Sport",
    date: "2026",
  },
  {
    tier: 2,
    top: "3RD PLACE",
    title: "Holberton School AZ Data Driven Solutions Hackathon",
    sub: "HSPTS student analytics platform \u00b7 Earned additional Holberton course access",
    date: "Apr 2026",
  },
  {
    tier: 2,
    top: "5TH PLACE",
    title: "Hult Prize BHOS On-Campus Competition",
    sub: "Financial resilience & behavioral systems concept \u00b7 13 finalists out of 29 teams",
    date: "2025",
  },
  {
    tier: 2,
    top: "3RD PLACE",
    title: "G\u0259ncV\u0130ZYON Ideathon, Digital Future & AI Track",
    sub: "Transparent Legal Navigator \u00b7 240 youth, 40 teams, 5 tracks",
    date: "2025",
  },
  {
    tier: 2,
    top: "BUILT & COMPETED",
    title: "Cursor Hackathon @ ADA University",
    sub: "Private Audit AI \u00b7 Offline document analysis MVP",
    date: "2025",
  },
  {
    tier: 2,
    top: "100% SCHOLARSHIP",
    title: "GenAI Track \u2014 Holberton School Azerbaijan",
    sub: "Selected among hundreds of applicants",
    date: "2025",
  },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

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
              className="rounded-2xl border border-white/10 border-l-[3px] border-l-white bg-zinc-900 p-7 transition-[border-color] duration-200 hover:border-white/[0.14] hover:bg-zinc-800"
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
              className="rounded-xl border border-white/[0.06] bg-zinc-900 p-5 transition-[border-color] duration-200 hover:border-white/[0.14] hover:bg-zinc-800"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] text-white">{a.title}</h3>
                <span className="shrink-0 font-mono text-[11px] text-zinc-600">
                  {a.date}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-zinc-400">
                {a.top} &middot; {a.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
