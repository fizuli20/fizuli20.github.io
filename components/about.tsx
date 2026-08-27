"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { SectionLabel } from "./section-label"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    n: "01",
    title: "Venture Building & Strategy",
    body: "Zero-to-one execution: market validation, business modeling, partnerships, investor pitching, and go-to-market. Led ventures through ABB Innovation, SABAH.HUB, and EmpowerMe incubation programs.",
  },
  {
    n: "02",
    title: "AI-Enabled Products",
    body: "Rapid AI prototyping, prompt engineering, document AI, and RPA. Built FVeda's guarded AI coach and HyperAutomation's warehouse automation layer.",
  },
  {
    n: "03",
    title: "Technical Fluency",
    body: "Python, SQL, Power BI, Tableau, scikit-learn, and XGBoost. Applied analytics across churn, fraud, RFM, e-commerce, retention, and macroeconomic research.",
  },
]

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
              style={{ fontSize: 25, fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              I build ideas into products, pilots, and companies.
            </h2>

            {/* Para 1 — what the work is */}
            <p className="mt-5 max-w-[65ch] text-[14px] leading-[1.7] text-zinc-400">
              My work sits at the intersection of innovation, technology,
              business strategy, and venture building &mdash; leading
              early-stage projects from zero to one, validating markets,
              building partnerships, pitching, and turning concepts into
              something people can actually use.
            </p>

            {/* Para 2 — credentials */}
            <p className="mt-4 max-w-[65ch] text-[14px] leading-[1.7] text-zinc-400">
              So far: Presidential Scholar, Aspire (HBS) Seed Fund winner,
              Global Youth in Development Fellow, 1st place at the AzCON
              Future Tech Hackathon, 1st place at the GreenTech III Startup
              Competition, and many more hackathons, demo days, and
              challenges.
            </p>

            {/* Para 3 — now + invitation */}
            <p className="mt-4 max-w-[65ch] text-[14px] leading-[1.7] text-zinc-400">
              Currently building and scaling ventures across AI, HRTech,
              climate tech, EdTech, FinTech, automation, and consumer
              technology. Always interested in ambitious people building
              things that matter.
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
                      <p className="mt-1 text-[13px] leading-[1.65] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
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
                <h3 className="mt-3 text-[22px] font-semibold text-white">
                  Founder &middot; Strategy &amp; Innovation
                </h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-[13px] leading-[1.7] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  Building ideas into products, pilots, and companies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
