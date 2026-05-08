"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionLabel } from "./about"

const COL1 = [
  { name: "Product Discovery & User Research", tag: "Product" },
  { name: "Business Analysis & Requirements", tag: "Strategy" },
  { name: "Backlog Management & Prioritization", tag: "Process" },
  { name: "User Story Writing & Acceptance Criteria", tag: "Process" },
  { name: "Agile / Scrum \u00b7 Sprint Planning", tag: "Process" },
  { name: "Stakeholder Management & Communication", tag: "Strategy" },
  { name: "OKRs & KPI Definition", tag: "Strategy" },
  { name: "Product Roadmapping", tag: "Product" },
  { name: "Go-to-Market Strategy", tag: "Strategy" },
  { name: "Financial Modeling & Valuation", tag: "Finance" },
  { name: "Scenario & Sensitivity Analysis", tag: "Finance" },
]

const COL2 = [
  { name: "Generative AI \u00b7 Prompt Engineering", tag: "AI" },
  { name: "Agentic Workflows \u00b7 RPA", tag: "AI" },
  { name: "Document AI \u00b7 OCR Pipelines", tag: "AI" },
  { name: "AI Product Ownership", tag: "Product" },
  { name: "LLM Workflow Design", tag: "AI" },
]

const COL3 = [
  { name: "Python (pandas \u00b7 NumPy \u00b7 scikit-learn)", tag: "Language" },
  { name: "XGBoost \u00b7 Random Forest \u00b7 Isolation Forest", tag: "ML" },
  { name: "SQL \u00b7 PostgreSQL \u00b7 BigQuery", tag: "Data" },
  { name: "Power BI \u00b7 Tableau", tag: "Viz" },
  { name: "RFM Segmentation \u00b7 SMOTE", tag: "Analytics" },
  { name: "Fraud Detection \u00b7 Churn Prediction", tag: "ML" },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function SkillRow({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="group flex items-center justify-between border-b border-white/5 py-3 transition-all duration-150 hover:translate-x-[5px] hover:text-white cursor-default">
      <span className="text-[15px] text-zinc-300 transition-colors duration-150 group-hover:text-white">
        {name}
      </span>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-zinc-700">{tag}</span>
        <span
          aria-hidden
          className="font-mono text-[11px] text-zinc-700 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        >
          &rarr;
        </span>
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
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {/* Column 1 */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              PRODUCT &amp; STRATEGY
            </p>
            {COL1.map((s) => (
              <SkillRow key={s.name} name={s.name} tag={s.tag} />
            ))}
          </div>

          {/* Column 2 */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              AI ORCHESTRATION
            </p>
            {COL2.map((s) => (
              <SkillRow key={s.name} name={s.name} tag={s.tag} />
            ))}
          </div>

          {/* Column 3 */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              TECHNICAL FLUENCY
            </p>
            {COL3.map((s) => (
              <SkillRow key={s.name} name={s.name} tag={s.tag} />
            ))}
          </div>
        </motion.div>

        {/* Currently deepening strip */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.1 }}
          className="mt-10 rounded-xl border border-white/5 bg-zinc-900 px-6 py-4"
        >
          <span className="font-mono text-[13px] text-zinc-400">
            <span className="text-[11px] uppercase text-zinc-600">CURRENTLY DEEPENING &rarr;</span>
            &nbsp;&nbsp;Product Management (JTBD &middot; OKRs) &middot; LLM fine-tuning &middot; Azerbaijani NLP
          </span>
        </motion.div>
      </div>
    </section>
  )
}
