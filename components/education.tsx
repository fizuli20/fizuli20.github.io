"use client"

import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { SectionLabel } from "./section-label"

type Program = {
  school: string
  program: string
  date: string
  detail: string
  note?: string
  current?: boolean
}

const DEGREE: Program = {
  school: "Baku Higher Oil School",
  program: "Bachelor of Business Administration — Business Administration",
  date: "SEP 2024 — JUN 2029",
  detail:
    "Nominated by BHOS as 1 of 4 students for Deloitte's summer mentorship program, and selected as an Undergraduate Research Fellow for econometric research on Azerbaijan's hydrocarbon dependence.",
  note: "3.8 GPA",
  current: true,
}

const PROGRAMS: Program[] = [
  {
    school: "Holon Institute of Technology",
    program: "Entrepreneurship / Entrepreneurial Studies",
    date: "JUL 2026 — PRESENT",
    detail:
      "Entrepreneurship track reached through the Vistar Excellence Program with IDDA, Azercosmos, and Israel Aerospace Industries.",
    current: true,
  },
  {
    school: "Holberton School",
    program: "Generative Artificial Intelligence",
    date: "FEB 2026 — JUN 2026",
    detail:
      "Selected among hundreds of applicants on a 100% scholarship. Applied the track directly into Auditly and CampusSync.",
    note: "100% scholarship",
  },
  {
    school: "Aspire Institute",
    program: "Aspire Leaders Program · Cohort 5",
    date: "OCT 2025 — DEC 2025",
    detail:
      "1 of 9,988 finalists from 54,337 global applicants (top 18%) for a leadership program founded by Harvard University faculty. Completed 40 hours of coursework across global leadership, responsible AI, cross-cultural negotiation, and entrepreneurship.",
    note: "Top 18% of 54,337",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function ProgramCard({ p, featured }: { p: Program; featured?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      variants={itemVariants}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`edge-lit-card glass-surface group relative flex flex-col rounded-2xl border bg-zinc-950/55 p-6 transition-all duration-500 hover:bg-zinc-900/75 ${
        featured
          ? "border-white/[0.12] hover:border-white/[0.26] md:col-span-3"
          : "border-white/[0.06] hover:border-white/[0.16]"
      }`}
    >
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
          {p.date}
        </span>
        <div className="flex items-center gap-2">
          {p.note && (
            <span className="rounded-full border border-white/[0.14] bg-white/[0.04] px-3 py-0.5 font-mono text-[11px] text-zinc-300">
              {p.note}
            </span>
          )}
          {p.current && (
            <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
              CURRENT
            </span>
          )}
        </div>
      </div>

      <h3
        className={`relative z-10 mt-3 font-semibold text-white ${
          featured ? "text-[24px] tracking-[-0.03em]" : "text-[17px]"
        }`}
      >
        {p.school}
      </h3>

      <p className="relative z-10 mt-1.5 font-mono text-[12px] leading-[1.5] text-zinc-400">
        {p.program}
      </p>

      <p className="relative z-10 mt-4 max-w-[68ch] text-[13px] leading-[1.65] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
        {p.detail}
      </p>
    </motion.article>
  )
}

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel label="EDUCATION" />

        <div className="mt-2 flex items-start justify-between gap-6">
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(34px, 4.4vw, 54px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Formal training behind the execution.
          </h2>
          <GraduationCap
            size={22}
            aria-hidden
            className="mt-3 hidden shrink-0 text-zinc-700 md:block"
          />
        </div>

        <hr className="mt-8 border-white/5" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          <ProgramCard p={DEGREE} featured />
          {PROGRAMS.map((p) => (
            <ProgramCard key={p.school} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
