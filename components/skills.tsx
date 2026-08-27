"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionLabel } from "./about"

const COL1 = [
  { name: "Zero-to-One Venture Building", tag: "Venture" },
  { name: "Business Analysis & Requirements", tag: "Business" },
  { name: "Product Discovery & Roadmapping", tag: "Product" },
  { name: "Go-to-Market & Partnerships", tag: "Strategy" },
  { name: "Financial Modeling & Valuation", tag: "Finance" },
]

const COL2 = [
  { name: "Prompt Engineering & System Design", tag: "GenAI" },
  { name: "Rapid AI MVP Prototyping", tag: "GenAI" },
  { name: "Multi-Model LLM Routing", tag: "GenAI" },
  { name: "Document AI \u00b7 OCR Pipelines", tag: "GenAI" },
  { name: "AI Evaluation & Guardrails", tag: "GenAI" },
]

const COL3 = [
  { name: "Python (pandas \u00b7 NumPy)", tag: "Language" },
  { name: "SQL \u00b7 PostgreSQL \u00b7 BigQuery", tag: "Data" },
  { name: "Next.js \u00b7 React \u00b7 TypeScript", tag: "Web" },
  { name: "Supabase \u00b7 REST APIs", tag: "Backend" },
  { name: "Power BI \u00b7 Tableau", tag: "Viz" },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function SkillRow({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="group/row relative flex cursor-default items-center justify-between gap-4 overflow-hidden border-b border-white/[0.055] px-3 py-3 transition-all duration-500 hover:border-white/[0.14]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07),transparent_52%)] opacity-0 transition-opacity duration-500 group-hover/row:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-7 w-px -translate-y-1/2 bg-white/0 transition-all duration-500 group-hover/row:bg-white group-hover/row:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
      />
      <span className="relative z-10 text-[14px] text-zinc-300 transition-all duration-500 group-hover/row:translate-x-1.5 group-hover/row:text-white">
        {name}
      </span>
      <div className="relative z-10 flex items-center gap-2">
        <span className="font-mono text-[11px] text-zinc-700 transition-colors duration-500 group-hover/row:text-zinc-400">
          {tag}
        </span>
        <span
          aria-hidden
          className="font-mono text-[11px] text-zinc-700 opacity-0 transition-all duration-500 group-hover/row:translate-x-1 group-hover/row:text-zinc-300 group-hover/row:opacity-100"
        >
          &rarr;
        </span>
      </div>
    </div>
  )
}

function SkillColumn({
  title,
  skills,
}: {
  title: string
  skills: Array<{ name: string; tag: string }>
}) {
  return (
    <div className="edge-lit-card glass-surface group rounded-2xl border border-white/[0.06] bg-zinc-950/55 p-4 transition-all duration-500 hover:border-white/[0.16] hover:bg-zinc-900/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_80px_rgba(0,0,0,0.45),0_0_44px_rgba(255,255,255,0.055)]">
      <div className="relative z-10 mb-3 flex items-center justify-between px-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
          {title}
        </p>
        <span
          aria-hidden
          className="h-px w-14 bg-gradient-to-r from-transparent via-white/25 to-white/0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="relative z-10">
        {skills.map((s) => (
          <SkillRow key={s.name} name={s.name} tag={s.tag} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section
      id="skills"
      aria-label="Skillset"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel label="SKILLSET" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(34px, 4.4vw, 54px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Tools for turning ideas into impact.
        </h2>

        <hr className="mt-8 border-white/5" />

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          <SkillColumn title="PRODUCT & STRATEGY" skills={COL1} />
          <SkillColumn title="GENERATIVE AI" skills={COL2} />
          <SkillColumn title="TECHNICAL FLUENCY" skills={COL3} />
        </motion.div>

        {/* Currently deepening strip */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.1 }}
          className="edge-lit-card glass-surface group mt-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-950/75 px-6 py-5 transition-all duration-500 hover:border-white/[0.18] hover:bg-zinc-900/85"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.08),transparent_60%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] text-zinc-400">
            <span className="text-[11px] uppercase tracking-[0.12em] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
              Currently deepening &rarr;
            </span>
            <span className="text-zinc-300">
              Product discovery &middot; Sustainability strategy &middot; Azerbaijani-language OCR
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
