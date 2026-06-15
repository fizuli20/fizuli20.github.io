"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Atom, ScanLine, Warehouse } from "lucide-react"
import { SectionLabel } from "./about"

type Project = {
  category: string
  badge: string
  name: string
  description: string
  metrics: string
  link?: { label: string; href: string }
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    category: "CLIMATE TECH \u00b7 CO-FOUNDER & CHIEF AI OFFICER",
    badge: "EmpowerMe Graduate \u00b7 2 Active Incubations",
    name: "Carboryn",
    description:
      "Co-building a circular mineralization venture that turns industrial residue and captured CO\u2082 into useful materials. As Chief AI Officer, I lead AI and data systems while contributing to product strategy, financial modeling, website development, and business-development validation.",
    metrics: "1st of 100+ \u00b7 EmpowerMe graduate \u00b7 Startup School 4 + 5th Tusi active",
    link: { label: "Case study", href: "/work/carboryn" },
    featured: true,
  },
  {
    category: "ROBOTICS + RPA \u00b7 CO-FOUNDER & CEO",
    badge: "SabahHub Incubated \u00b7 Near Graduation",
    name: "HyperAutomation",
    description:
      "Leading a digital-to-physical warehouse automation platform connecting RPA workflows with AGV/AMR execution. Selected for SabahHub incubation and earned an opportunity through PASHA Hackathon to test the product at Bravo.",
    metrics: "SabahHub incubated \u00b7 Bravo test opportunity \u00b7 Seeking investment",
    link: { label: "Case study", href: "/work/hyperautomation" },
  },
  {
    category: "INFRASTRUCTURE \u00b7 CO-FOUNDER",
    badge: "1st Place \u00b7 AZN 1,500",
    name: "Milli Cloud Security",
    description:
      "Co-built a cloud security and infrastructure concept addressing emerging national data-center needs, winning 1st place at the AzCON Future Tech Hackathon and an AZN 1,500 prize.",
    metrics: "AzCON Hackathon \u00b7 AZN 1,500 \u00b7 Holberton AZ",
  },
  {
    category: "FINTECH AI \u00b7 CO-FOUNDER & CEO",
    badge: "ABB 6th Incubation \u00b7 Selected",
    name: "LedgerLens",
    description:
      "Leading an early-stage AI assistant for turning informal SME financial records into structured, reviewable credit-onboarding data. Newly selected for ABB's 6th Incubation and preparing for deep expert-led validation.",
    metrics: "AI document intelligence \u00b7 Pre-validation \u00b7 ABB selected",
    link: { label: "Case study", href: "/work/ledgerlens" },
  },
  {
    category: "MACROECONOMIC RESEARCH \u00b7 UNIVERSITY RESEARCHER",
    badge: "4-Notebook Research Project",
    name: "Azerbaijan Economy Analysis",
    description:
      "Analyzed Azerbaijan's economy from 2005\u20132024 across oil dependence, purchasing power, and diversification. OLS modeling found Brent explains 50.9% of GDP variance; a March 2026 Hormuz escalation scenario modeled a potential +$2.35B/month revenue effect.",
    metrics: "R\u00b2=0.509 \u00b7 p<0.001 \u00b7 +$2.35B/month model",
    link: { label: "Visit", href: "https://github.com/fizuli20" },
  },
  {
    category: "FINTECH \u00b7 CO-FOUNDER",
    badge: "$400 Aspire Seed Fund",
    name: "FinVeda",
    description:
      "Building a financial wellness and AI coaching concept for young users. Awarded $400 in Seed Fund support by Aspire Institute after selection as 1 of 40 founders from 1,800+ global applications.",
    metrics: "$400 seed fund \u00b7 1 of 40 / 1,800+ \u00b7 AI coaching",
    link: { label: "Visit", href: "https://fin-veda-eight.vercel.app" },
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  const cardRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || reduce) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.article
      ref={cardRef}
      variants={itemVariants}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-surface relative flex flex-col rounded-xl border border-white/[0.06] bg-zinc-900 p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-zinc-800 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Inner glow overlay — cursor-following radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] rounded-xl transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 30%, transparent 70%)`,
        }}
      />

      <div className="relative z-[2] flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600">
            {project.category}
          </span>
          <span
            className={`font-mono text-[11px] rounded-full border px-3 py-0.5 ${
              project.badge.startsWith("1st")
                ? "border-white/20 bg-white/5 text-zinc-100 border-l-2 border-l-white/40"
                : "border-white/10 bg-white/[0.02] text-zinc-400"
            }`}
          >
            {project.badge}
          </span>
        </div>

        <h3 className="mt-3 text-[20px] font-semibold text-white">
          {project.name}
        </h3>

        <p className="mt-2 max-w-[65ch] text-[14px] leading-[1.6] text-zinc-400">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/5 pt-4 mt-4">
          <span className="font-mono text-[13px] text-zinc-500">
            {project.metrics}
          </span>
          {project.link && (
            project.link.href.startsWith("http") ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-mono text-[13px] text-zinc-600 transition-colors duration-200 hover:text-white"
              >
                {project.link.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            ) : (
              <Link
                href={project.link.href}
                prefetch
                className="group inline-flex items-center gap-1 font-mono text-[13px] text-zinc-500 transition-colors duration-200 hover:text-white"
              >
                {project.link.label}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            )
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Ventures() {
  return (
    <section
      id="case-studies"
      aria-label="Selected work"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel label="FLAGSHIP CASE STUDIES" />
        <h2
          className="mt-2 text-white"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Follow the thinking behind the ventures.
        </h2>

        <hr className="mt-8 border-white/5" />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link
            href="/work/carboryn"
            prefetch
            className="case-gateway carboryn-gateway glass-surface group relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.03] p-7 transition-all duration-700 hover:-translate-y-1 hover:border-white/[0.28] hover:bg-white/[0.055] md:p-8 lg:col-span-2"
          >
            <div aria-hidden className="carboryn-grid pointer-events-none absolute inset-0 opacity-35 transition-opacity duration-700 group-hover:opacity-65" />
            <div aria-hidden className="carboryn-orbit pointer-events-none absolute -bottom-24 right-[8%] h-72 w-72 rounded-full border border-dashed border-white/[0.14]">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_22px_rgba(255,255,255,0.7)]" />
            </div>
            <div aria-hidden className="carboryn-reaction pointer-events-none absolute bottom-[24%] right-[12%] hidden items-center gap-3 font-mono text-[12px] text-zinc-600 md:flex">
              <span>CaO</span>
              <span className="h-px w-12 bg-gradient-to-r from-white/10 to-white/45" />
              <span>CO2</span>
              <ArrowRight size={13} />
              <span className="text-zinc-300">CaCO3</span>
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/25" />
                    <span className="relative h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.6)]" />
                  </span>
                  Case study 01
                </div>
                <Atom size={18} className="text-zinc-600 transition-colors duration-500 group-hover:text-white" />
              </div>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-600">
                Climate tech · Chief AI Officer · Pilot pathway
              </p>
              <h3 className="mt-3 text-[40px] font-semibold tracking-[-0.05em] text-white md:text-[58px]">
                Carboryn
              </h3>
              <p className="mt-4 max-w-[54ch] text-[14px] leading-[1.7] text-zinc-400">
                Turning industrial residue and captured carbon into useful
                mineral products, backed by a measurable data layer.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500 transition-colors duration-500 group-hover:text-white">
                Open climate-tech dossier
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/work/ledgerlens"
            prefetch
            className="case-gateway ledger-gateway glass-surface group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.03] p-7 transition-all duration-700 hover:-translate-y-1 hover:border-white/[0.28] hover:bg-white/[0.055] md:p-8"
          >
            <div aria-hidden className="ledger-grid pointer-events-none absolute inset-0 opacity-35 transition-opacity duration-700 group-hover:opacity-65" />
            <div aria-hidden className="case-gateway-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_0_28px_rgba(255,255,255,0.5)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/25" />
                    <span className="relative h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.6)]" />
                  </span>
                  Case study 02
                </div>
                <ScanLine size={18} className="text-zinc-600 transition-colors duration-500 group-hover:text-white" />
              </div>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-600">
                Fintech AI · ABB selected · Pre-validation
              </p>
              <h3 className="mt-3 text-[40px] font-semibold tracking-[-0.05em] text-white md:text-[54px]">
                LedgerLens
              </h3>
              <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.7] text-zinc-400">
                From informal SME financial records to a trust-aware AI
                assistant for credit onboarding.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500 transition-colors duration-500 group-hover:text-white">
                Open validation dossier
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/work/hyperautomation"
            prefetch
            className="case-gateway hyper-gateway glass-surface group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.03] p-7 transition-all duration-700 hover:-translate-y-1 hover:border-white/[0.28] hover:bg-white/[0.055] md:p-8"
          >
            <div aria-hidden className="warehouse-grid pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-60" />
            <div aria-hidden className="warehouse-route pointer-events-none absolute bottom-[22%] right-[8%] h-[42%] w-[54%] rounded-[26px] border border-dashed border-white/[0.13]" />
            <div aria-hidden className="warehouse-unit pointer-events-none absolute bottom-[28%] right-[44%] h-5 w-8 rounded-md border border-white/25 bg-white/[0.06] shadow-[0_0_24px_rgba(255,255,255,0.18)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/25" />
                    <span className="relative h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.6)]" />
                  </span>
                  Case study 03
                </div>
                <Warehouse size={18} className="text-zinc-600 transition-colors duration-500 group-hover:text-white" />
              </div>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-600">
                RPA + Robotics · SabahHub · Investment stage
              </p>
              <h3 className="mt-3 text-[40px] font-semibold tracking-[-0.05em] text-white md:text-[54px]">
                HyperAutomation
              </h3>
              <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.7] text-zinc-400">
                Connecting digital warehouse workflows to physical robot
                execution without replacing existing systems.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500 transition-colors duration-500 group-hover:text-white">
                Open execution dossier
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-24">
          <SectionLabel label="SELECTED WORK" />
          <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white">
            More products, research, and ventures.
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
