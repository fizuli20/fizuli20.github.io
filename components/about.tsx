"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    n: "01",
    title: "Product & Strategy",
    body: "Product discovery, backlog management, user story writing, and stakeholder alignment. Agile/Scrum mindset from sprint planning to GTM. EY Strategy School, Aspire Leaders (Harvard-founded), Hult Prize finalist.",
  },
  {
    n: "02",
    title: "AI Orchestration",
    body: "Agentic workflows, prompt engineering, rapid prototyping. Built LedgerLens (AI-OCR for SME ledgers) and HyperAutomation (RPA + AGV warehouse automation). GenAI certified \u2014 Holberton School AZ, 100% scholarship.",
  },
  {
    n: "03",
    title: "Technical Fluency",
    body: "Python, SQL, Power BI, Tableau, scikit-learn, XGBoost. Production ML on 284K+ real transactions. PR-AUC 0.87 fraud detection. End-to-end product thinking from data pipeline to decision recommendation.",
  },
]

export function SectionLabel({ label }: { label: string }) {
  const reduce = useReducedMotion()

  return (
    <div className="flex items-center gap-3">
      <motion.p
        initial={reduce ? undefined : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
        className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600"
      >
        {label}
      </motion.p>
      <motion.div
        initial={reduce ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.1 }}
        className="h-px w-10 origin-left bg-white/20"
      />
    </div>
  )
}

export function About() {
  const reduce = useReducedMotion()

  return (
    <section
      id="about"
      aria-label="Profile"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel label="PROFILE" />

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-[1fr_1fr]">
          {/* Left — text */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          >
            <h2
              className="text-white"
              style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Operator-engineer hybrid. Built for ambiguity.
            </h2>

            {/* Para 1 — identity + credential */}
            <p className="mt-6 max-w-[65ch] text-[15px] leading-[1.75] text-zinc-400">
              Presidential Scholar and BBA student at Baku Higher Oil
              School (GPA 96.3/100) &mdash; ranked Top 3 of 20,000+
              university entrance applicants by the Ministry of Science
              and Education of the Republic of Azerbaijan. Two 1st-place
              hackathon wins in a single week. Three ventures under
              active incubation.
            </p>

            {/* Para 2 — operating mode */}
            <p className="mt-4 max-w-[65ch] text-[15px] leading-[1.75] text-zinc-400">
              I move between Python pipelines, SQL warehouses, financial
              models, and pitch rooms. I&apos;ve led product discovery on
              284,807-transaction fraud systems, built ventures accepted
              into national incubation programs, and shipped data products
              that generate decisions &mdash; not just dashboards. Currently
              targeting Product Owner and Business Analyst roles.
            </p>

            {/* Three pillar rows */}
            <div className="mt-10 space-y-3">
              {PILLARS.map((p, index) => (
                <motion.div
                  key={p.n}
                  initial={reduce ? undefined : { opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.06 * index }}
                  whileHover={reduce ? undefined : { x: 5 }}
                  className="edge-lit-card glass-surface group rounded-xl border border-white/[0.06] bg-zinc-900/80 px-5 py-4 transition-all duration-500 hover:border-white/[0.16] hover:bg-zinc-800/90"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="mt-0.5 font-mono text-[11px] text-zinc-700 transition-colors duration-500 group-hover:text-zinc-500">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-white">
                      {p.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-[1.7] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.1 }}
            className="flex flex-col items-center justify-start md:items-end"
          >
            <div className="edge-lit-card glass-surface group relative w-full max-w-[390px] overflow-hidden rounded-[34px] border border-white/[0.09] bg-zinc-950/80 px-7 pb-7 pt-8 transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/90">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-20 top-10 h-44 w-44 rounded-full bg-white/[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-6 h-px w-32 bg-gradient-to-r from-transparent via-white/45 to-transparent shadow-[0_0_34px_rgba(255,255,255,0.3)]"
              />
              <div className="relative z-10 mx-auto h-[232px] w-[232px] overflow-hidden rounded-full border border-white/20 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_26px_80px_rgba(0,0,0,0.56),0_0_46px_rgba(255,255,255,0.08)] transition-transform duration-700 group-hover:scale-[1.015]">
                <Image
                  src="/profile-photo.jpg"
                  alt="Fizuli Hasanov"
                  fill
                  sizes="232px"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 mt-7 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
                  F. Hasanov &middot; 2026
                </p>
                <h3 className="mt-3 text-[24px] font-semibold text-white">
                  Architect of Value
                </h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-[13px] leading-[1.7] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  Product thinking, AI systems, and strategy shaped into visible outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
