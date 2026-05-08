"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    n: "01",
    title: "Strategic Logic",
    body: "Business analysis, product discovery, financial modeling, and stakeholder management. EY Strategy School, Aspire Leaders (Harvard-founded), Hult Prize finalist. Agile/Scrum certified mindset \u2014 from backlog to boardroom.",
  },
  {
    n: "02",
    title: "AI Orchestration",
    body: "Agentic workflows, prompt engineering, and rapid prototyping. Built LedgerLens (OCR for SME ledgers) and HyperAutomation (RPA + AGV warehouse automation). GenAI certified \u2014 Holberton School AZ, 100% scholarship.",
  },
  {
    n: "03",
    title: "Technical Fluency",
    body: "Python, SQL, Power BI, Tableau, scikit-learn, XGBoost. Production ML on 284K+ real transactions. PR-AUC 0.87 fraud detection. End-to-end product thinking from data pipeline to decision recommendation.",
  },
]

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600">
      {index} &middot; {label}
    </p>
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
        <SectionLabel index="00" label="PROFILE" />

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

            <p className="mt-6 max-w-[65ch] text-[15px] leading-[1.75] text-zinc-400">
              Business Administration student at Baku Higher Oil School
              (GPA 96.3/100) and Presidential Scholar &mdash; Top 3 of 20,000+
              university entrance applicants nationwide (DIM score 686/700).
              Two 1st-place hackathon wins in a single week. Three ventures
              under active incubation. I move between Python pipelines,
              SQL warehouses, financial models, and pitch rooms &mdash; turning
              raw data into decisions that investors and operators act on.
              Currently building at the intersection of product, data, and AI.
            </p>

            {/* Three pillar rows */}
            <div className="mt-10">
              {PILLARS.map((p) => (
                <div
                  key={p.n}
                  className="group flex items-start gap-4 border-b border-white/5 py-4 transition-transform duration-150 hover:translate-x-1"
                >
                  <span className="mt-0.5 font-mono text-[11px] text-zinc-700">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-zinc-500">{p.body}</p>
                  </div>
                </div>
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
            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-white/10">
              <Image
                src="/profile-photo.jpg"
                alt="Fizuli Hasanov"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] text-zinc-700">
              F. Hasanov &middot; 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
