"use client"

import { motion } from "framer-motion"
import { Layers, BarChart2, Cpu } from "lucide-react"
import { SectionLabel } from "./about"

type Category = {
  icon: React.ReactNode
  label: string
  skills: string[]
}

const CATEGORIES: Category[] = [
  {
    icon: <Layers size={18} />,
    label: "Product & Strategy",
    skills: [
      "Business Analysis",
      "Agile / Scrum",
      "Backlog Management",
      "User Story Writing",
      "Stakeholder Management",
      "Financial Modeling",
      "Scenario Analysis",
      "Go-to-Market Strategy",
      "Requirements Documentation",
    ],
  },
  {
    icon: <BarChart2 size={18} />,
    label: "Data & ML",
    skills: [
      "Python (pandas · NumPy · scikit-learn · XGBoost)",
      "SQL (PostgreSQL · BigQuery)",
      "Power BI",
      "Tableau",
      "RFM Segmentation",
      "Cohort Retention",
      "OLS Regression",
      "PR-AUC / ROC-AUC",
      "SMOTE",
      "Fraud Detection",
      "Churn Prediction",
    ],
  },
  {
    icon: <Cpu size={18} />,
    label: "AI & Ventures",
    skills: [
      "Generative AI (Holberton certified)",
      "Prompt Engineering",
      "Agentic Workflows",
      "RPA Design",
      "Document AI / OCR",
      "AI Product Ownership",
      "Rapid Prototyping",
      "Hackathon Product Strategy",
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skillset"
      className="relative border-t border-[var(--color-border)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" label="Skillset" />
        <h2 className="mt-6 max-w-2xl font-serif text-[32px] leading-[1.1] tracking-tight text-foreground sm:text-[40px]">
          The full stack &mdash; product, data, AI.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <motion.article
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[#2a2a2a]"
            >
              <header className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[#111] text-[var(--color-accent)]">
                  {c.icon}
                </span>
                <h3 className="font-serif text-xl text-foreground">{c.label}</h3>
              </header>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-1.5 font-mono text-[11px] tracking-[0.02em] text-[var(--color-muted)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-[#2a2a2a] bg-[#0c0c0c] px-5 py-4"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Currently deepening
          </span>
          <span aria-hidden className="h-3 w-px bg-[var(--color-border)]" />
          <p className="text-[13px] text-[var(--color-muted)]">
            Product Management frameworks (JTBD, OKRs) &middot; LLM fine-tuning &middot; Arabic
            (beginner)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
