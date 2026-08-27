"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "./section-label"

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
    date: "AUG 2026 \u2014 PRESENT",
    current: true,
    role: "Head of Sales & Business Development",
    company: "Mentioned",
    location: "Baku, Azerbaijan (Hybrid)",
    keyWin:
      "Leading sales and BD for an AI visibility monitoring product tracking brand presence across ChatGPT, Gemini, Claude, and Perplexity",
    bullets: [
      "Own outbound, pipeline, and commercial strategy for a generative-engine-optimization SaaS moving from free scans to paid tiers.",
      "Translate a technical AI-visibility product into a buyer-facing story for brands that need to know whether AI assistants recommend them.",
    ],
    tags: ["Sales", "Business Development", "GEO", "B2B SaaS"],
  },
  {
    date: "AUG 2026 \u2014 PRESENT",
    current: true,
    role: "Co-Founder & CSO",
    company: "EarthXLab",
    location: "Baku, Azerbaijan",
    keyWin:
      "Co-founding a satellite-imagery education platform born out of the Vistar Excellence Program",
    bullets: [
      "Set strategy for a planetary-science platform where learners compare before-and-after satellite imagery, record observations, and earn mission certificates.",
      "Drive positioning for both independent learners and the educator channel, plus the evidence and sourcing methodology the product is built on.",
    ],
    tags: ["Strategy", "EdTech", "Satellite Imagery", "Go-to-Market"],
  },
  {
    date: "JUL 2026 \u2014 PRESENT",
    current: true,
    role: "Vistar Trainee",
    company: "Vistar Excellence Program",
    location: "Baku, Azerbaijan (On-site)",
    keyWin:
      "Selected for the space-technology excellence program run by IDDA, Azercosmos, Israel Aerospace Industries, and Holon Institute of Technology",
    bullets: [
      "Train across space technology, satellite data, and entrepreneurship with mentors from Israel Aerospace Industries and Holon Institute of Technology.",
      "Incubated EarthXLab inside the program, taking it from concept to a live product.",
    ],
    tags: ["Space Tech", "Entrepreneurship", "Azercosmos", "IAI"],
  },
  {
    date: "JUL 2026 \u2014 PRESENT",
    current: true,
    role: "Co-Founder & CEO",
    company: "AISE",
    location: "Baku, Azerbaijan (Hybrid)",
    keyWin:
      "Selected for ABB Innovation's 6th Incubation Program \u00b7 running a concierge pilot",
    bullets: [
      "Lead an Azerbaijan-focused, candidate-side HRTech platform built around one metric: application-to-interview conversion.",
      "Drive ABB incubation discovery \u2014 mapping candidate pain points, recruiter workflows, and platform gaps into an evidence-led roadmap.",
    ],
    tags: ["CEO", "HRTech", "Product Strategy", "ABB Innovation"],
  },
  {
    date: "APR 2026 \u2014 PRESENT",
    current: true,
    role: "Co-Founder & Product Strategy Lead",
    company: "Carboryn.az",
    location: "Baku, Azerbaijan (Remote)",
    keyWin:
      "1st place of 100+ university teams at GreenTech III \u00b7 EmpowerMe graduate",
    bullets: [
      "Own product strategy for a circular mineralization venture converting industrial residue and captured CO\u2082 into useful materials.",
      "Contribute financial modeling, AI and data systems, website development, and business-development validation.",
    ],
    tags: ["Product Strategy", "Climate Tech", "Financial Modeling"],
  },
  {
    date: "JUN 2026 \u2014 JUL 2026",
    role: "Business Analyst Mentee",
    company: "Deloitte",
    location: "Baku, Azerbaijan (On-site)",
    keyWin:
      "1 of 4 BHOS students nominated \u00b7 Strategy, Risk & Transactions \u2014 Sustainability & Climate Change Advisory \u00b7 received a Letter of Recommendation",
    bullets: [
      "Supported enterprise clients developing long-term decarbonization and net-zero roadmaps.",
      "Assisted in climate risk assessments and ESG data collection for corporate sustainability reporting.",
      "Researched market trends, green regulations, and environmental impacts to inform strategy definition.",
    ],
    tags: ["Strategy Research", "Sustainability", "ESG", "Climate Risk"],
  },
  {
    date: "APR 2026 \u2014 JUL 2026",
    role: "Founder",
    company: "HyperAutomation.az",
    location: "Baku, Azerbaijan (Hybrid)",
    keyWin:
      "Selected for SABAH.HUB's 9th incubation cohort \u00b7 PASHA Hackathon finalist \u00b7 paused after the cohort concluded",
    bullets: [
      "Built an AI-driven warehouse automation platform targeting logistics inefficiencies in retail supply chains, connecting RPA workflows to AGV/AMR execution.",
      "Completed structured mentorship, product design sprints, and an investor-facing demo day through SABAH.HUB Cohort 9.",
      "Earned an opportunity through PASHA Hackathon 6.0 to test the product at Bravo.",
    ],
    tags: ["RPA", "Robotics", "SABAH.HUB", "Supply Chain"],
  },
  {
    date: "FEB 2026 \u2014 MAR 2026",
    role: "Data Analyst Intern",
    company: "Elevvo Pathways",
    location: "Cairo, Egypt (Remote)",
    keyWin:
      "Outstanding Contributor \u00b7 recognized among 2,000+ international participants",
    bullets: [
      "Recognized as an Outstanding Contributor among 2,000+ international participants for analytics work that exceeded the project brief.",
      "Surfaced $7.45M in top-segment revenue from an RFM model on 95,000+ customers; delivered a direct prioritization framework.",
      "Built an executive Power BI dashboard: 13M revenue, 1.47M profit, ~25K orders with regional drill-downs.",
    ],
    tags: ["pandas", "Power BI", "RFM", "BigQuery"],
  },
  {
    date: "JAN 2026 \u2014 MAR 2026",
    role: "Undergraduate Research Fellow",
    company: "Baku Higher Oil School",
    location: "Baku, Azerbaijan",
    keyWin:
      "Econometric research on Azerbaijan's hydrocarbon dependence, supervised by the Head of the Business Administration Department",
    bullets: [
      "Built a Python econometric framework analyzing Azerbaijan's structural oil dependence (R\u00b2\u22480.51, historical correlation 0.71) and domestic purchasing power from 2005 to 2024.",
      "Engineered a March 2026 geopolitical stress scenario modeling transmission channels \u2014 BTC pipeline isolation against imported inflation vectors \u2014 to evaluate national economic resilience.",
    ],
    tags: ["Python", "Econometrics", "OLS", "Scenario Modeling"],
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
          Building, leading, and validating from zero to one.
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
