"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "./about"

type Role = {
  date: string
  current?: boolean
  role: string
  company: string
  location: string
  keyWin: string
  bullets: string[]
  tags: string[]
}

const ROLES: Role[] = [
  {
    date: "JUN 2026 \u2014 JUL 2026",
    current: true,
    role: "SRT Summer Program Participant",
    company: "Deloitte",
    location: "Baku, Azerbaijan (Hybrid)",
    keyWin:
      "1 of 4 BHOS students nominated for Deloitte's SRT Summer Program",
    bullets: [
      "Support managers with structured sector, company, sustainability, and certification research used to inform strategy definition across telecom, energy, transport, and green infrastructure.",
      "Nominated by Baku Higher Oil School as 1 of 4 students for Deloitte's SRT Summer Program.",
    ],
    tags: ["Strategy Research", "Sustainability", "Benchmarking"],
  },
  {
    date: "MAR 2026 \u2014 PRESENT",
    current: true,
    role: "Business Analyst & Product Discovery Intern",
    company: "Codveda Technologies",
    location: "Remote",
    keyWin:
      "XGBoost PR-AUC 0.87 \u00b7 284,807 real transactions \u00b7 4-tier intervention framework designed",
    bullets: [
      "Spearheaded churn analysis on 2,666 telecom customers \u2014 surfaced international-plan subscribers as 3.8\u00d7 higher risk and translated findings into 5 retention recommendations, including a 3rd-call early-warning trigger (Random Forest ROC-AUC 0.91).",
      "Architected a 4-tier fraud risk-scoring framework across 284,807 real transactions \u2014 defined intervention logic, selected PR-AUC as the primary metric for a 577:1 class imbalance, and achieved XGBoost PR-AUC 0.87.",
      "Quantified $108,623 in high-risk monthly revenue via SQL behavioral scoring; projected $195,522 annual savings from a 15% retention uplift simulation.",
    ],
    tags: ["Python", "scikit-learn", "XGBoost", "SMOTE", "PostgreSQL"],
  },
  {
    date: "FEB \u2014 MAR 2026",
    role: "Data Analyst Intern",
    company: "Elevvo Pathways",
    location: "Remote",
    keyWin:
      "Outstanding Contributor \u00b7 Recognized among 2,000+ international participants",
    bullets: [
      "Recognized as an Outstanding Contributor among 2,000+ international participants for analytics work that exceeded the project brief.",
      "Surfaced $7.45M in top-segment revenue from RFM model on 95,000+ customers; delivered direct prioritization framework.",
      "Built executive Power BI dashboard: 13M revenue, 1.47M profit, ~25K orders with regional drill-downs.",
    ],
    tags: ["pandas", "Power BI", "RFM", "BigQuery"],
  },
  {
    date: "FEB 2026 \u2014 PRESENT",
    role: "Business & Finance Coordinator",
    company: "International Youth Dialogue Platform",
    location: "Baku",
    keyWin:
      "Multi-stakeholder financial planning \u00b7 International dialogue programs across Baku + partner regions",
    bullets: [
      "Oversee financial planning and operational reporting for multi-stakeholder youth platform across Baku and partner regions.",
      "Synthesize program-level metrics for leadership decisions on resource allocation, event ROI, and partnership strategy.",
    ],
    tags: [],
  },
  {
    date: "SEP 2025 \u2014 PRESENT",
    role: "Vice President & Project Manager",
    company: "BHOS Clubs",
    location: "Baku",
    keyWin:
      "4 concurrent leadership roles \u00b7 15\u201340 members each \u00b7 Agile-style pipeline management",
    bullets: [
      "Lead weekly Conversation Club sessions for 30+ members; redesigned curriculum growing attendance through feedback loops.",
      "Manage concurrent project pipelines across Startup, Psychology, and History clubs \u2014 owning scope, milestones, communications.",
    ],
    tags: [],
  },
  {
    date: "OCT 2024 \u2014 AUG 2025",
    role: "Digital Product Growth",
    company: "Content Platform",
    location: "Self-directed",
    keyWin:
      "2.1M+ views \u00b7 70K+ likes \u00b7 11 months \u00b7 Zero paid distribution",
    bullets: [
      "Scaled zero-budget content platform to 2.1M+ views, 70K+ likes, 10K shares via data-driven audience segmentation.",
      "Managed full lifecycle: ideation \u2192 brief \u2192 production \u2192 analytics \u2192 iteration. Grew 38K profile views organically.",
    ],
    tags: [],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel label="EXPERIENCE" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(34px, 4.4vw, 54px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Research and strategy behind practical innovation.
        </h2>

        <hr className="mt-8 border-white/5" />

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-12 border-l border-white/[0.08] pl-6"
        >
          {ROLES.map((role) => (
            <motion.div
              key={role.role + role.company}
              variants={itemVariants}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(1.5rem+4.5px)] top-[22px] h-2 w-2 rounded-full bg-zinc-700" />

              {/* Date */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600">
                  {role.date}
                </span>
                {role.current && (
                  <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                    CURRENT
                  </span>
                )}
              </div>

              {/* Role + Company */}
              <p className="mt-2 text-[15px]">
                <span className="font-semibold text-white">{role.role}</span>
                <span className="text-zinc-400"> &middot; {role.company}</span>
              </p>

              {/* Location */}
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600">
                {role.location}
              </p>

              {/* Key win box */}
              <div className="mt-3 rounded-r-lg border-l-2 border-white/20 bg-white/[0.025] px-4 py-2.5" style={{ borderRadius: "0 8px 8px 0" }}>
                <p className="text-[12px] leading-[1.55] text-zinc-300">{role.keyWin}</p>
              </div>

              {/* Bullets */}
              {role.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] leading-[1.6] text-zinc-400">
                      <span aria-hidden className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-zinc-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              {role.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-zinc-900 px-2.5 py-0.5 font-mono text-[11px] text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
