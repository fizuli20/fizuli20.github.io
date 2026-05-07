"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionLabel } from "./about"

const LEFT_SKILLS = [
  { name: "Business Analysis", tag: "Strategy" },
  { name: "Product Discovery", tag: "Strategy" },
  { name: "Agile / Scrum", tag: "Process" },
  { name: "Backlog Management", tag: "Process" },
  { name: "User Story Writing", tag: "Process" },
  { name: "Stakeholder Management", tag: "Strategy" },
  { name: "Financial Modeling", tag: "Finance" },
  { name: "Scenario Analysis", tag: "Finance" },
  { name: "Go-to-Market Strategy", tag: "Strategy" },
  { name: "OLS Regression", tag: "Statistics" },
  { name: "Cohort Retention Analysis", tag: "Analytics" },
]

const RIGHT_SKILLS = [
  { name: "Python (pandas \u00b7 NumPy \u00b7 scikit-learn)", tag: "Language" },
  { name: "XGBoost \u00b7 Random Forest \u00b7 Isolation Forest", tag: "ML" },
  { name: "SQL \u00b7 PostgreSQL \u00b7 BigQuery", tag: "Data" },
  { name: "Power BI \u00b7 Tableau", tag: "Viz" },
  { name: "RFM Segmentation \u00b7 SMOTE", tag: "Analytics" },
  { name: "Fraud Detection \u00b7 Churn Prediction", tag: "ML" },
  { name: "Generative AI \u00b7 Prompt Engineering", tag: "AI" },
  { name: "Agentic Workflows \u00b7 RPA \u00b7 Document AI", tag: "AI" },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function SkillRow({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="group flex items-center justify-between border-b border-white/5 py-3 transition-all duration-150 hover:translate-x-1 hover:text-white">
      <span className="text-[15px] text-zinc-300 transition-colors duration-150 group-hover:text-white">
        {name}
      </span>
      <span className="font-mono text-[11px] text-zinc-700">{tag}</span>
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
        <SectionLabel index="03" label="SKILLSET" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Stack and toolkit. End-to-end.
        </h2>

        <hr className="mt-8 border-white/5" />

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2"
        >
          {/* Left column */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              STRATEGY & PRODUCT
            </p>
            {LEFT_SKILLS.map((s) => (
              <SkillRow key={s.name} name={s.name} tag={s.tag} />
            ))}
          </div>

          {/* Right column */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              TECHNICAL ORCHESTRATION
            </p>
            {RIGHT_SKILLS.map((s) => (
              <SkillRow key={s.name} name={s.name} tag={s.tag} />
            ))}
          </div>
        </motion.div>

        {/* Currently deepening strip */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.1 }}
          className="mt-10 rounded-xl border border-white/5 bg-zinc-900 px-5 py-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600">
            CURRENTLY DEEPENING &rarr;
          </span>
          <span className="ml-3 font-mono text-[13px] text-zinc-400">
            Product Management (JTBD &middot; OKRs) &middot; LLM fine-tuning &middot; Azerbaijani NLP
          </span>
        </motion.div>
      </div>
    </section>
  )
}
