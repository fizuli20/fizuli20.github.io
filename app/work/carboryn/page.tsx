import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BarChart3,
  Check,
  CircleDot,
  Database,
  Factory,
  FlaskConical,
  Layers3,
  Leaf,
  LineChart,
  Radio,
  Recycle,
  Scale,
  ShieldCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Carboryn Case Study | Fizuli Hasanov",
  description:
    "Carboryn is a circular materials venture developing a measurable pathway from industrial residue and captured carbon to useful mineral products.",
  alternates: {
    canonical: "/work/carboryn",
  },
  openGraph: {
    title: "Carboryn Case Study | Fizuli Hasanov",
    description:
      "A circular materials venture connecting mineralization chemistry with measurable product and data strategy.",
    url: "/work/carboryn",
    images: ["/profile-photo.jpg"],
  },
}

const circularFlow = [
  {
    icon: Factory,
    title: "Source",
    body: "Identify calcium-rich industrial residue that may become useful feedstock instead of disposal waste.",
  },
  {
    icon: FlaskConical,
    title: "React",
    body: "Combine recovered calcium with a controlled CO2 stream through established mineralization chemistry.",
  },
  {
    icon: Scale,
    title: "Measure",
    body: "Track batch-level mass gain and process signals to build a traceable evidence layer.",
  },
  {
    icon: Recycle,
    title: "Reuse",
    body: "Develop the mineralized output as a lower-impact input for construction-material supply chains.",
  },
]

const evidenceCards = [
  {
    status: "Established chemistry",
    title: "0.79 kg CO2 / kg CaO",
    body: "The theoretical maximum follows from the molecular masses in the reaction CaO + CO2 to CaCO3.",
  },
  {
    status: "Internal measurement",
    title: "Sensor-backed prototype",
    body: "An ESP32 and precision load cell have been used to observe mass-gain signals. Calibration, controls, and independent validation remain necessary.",
  },
  {
    status: "Competitive recognition",
    title: "1st of 100+ teams",
    body: "Carboryn placed first in the GreenTech III Alternative Energy and Clean Environment category.",
  },
  {
    status: "Venture development",
    title: "Three incubation programs",
    body: "Graduated from EmpowerMe and currently active in Startup School 4 and the 5th Tusi Incubation Program.",
  },
]

const roleItems = [
  {
    icon: Database,
    title: "AI and data architecture",
    body: "Shape the intelligent measurement, automation, evidence, and future reporting layers around the physical process.",
  },
  {
    icon: Layers3,
    title: "Digital product execution",
    body: "Built the current Carboryn website and translated a complex industrial thesis into a clear partner-facing experience.",
  },
  {
    icon: LineChart,
    title: "Product and financial strategy",
    body: "Develop product positioning, pilot economics, business-model assumptions, and the path from technical evidence to commercial value.",
  },
  {
    icon: BarChart3,
    title: "Business-development validation",
    body: "Support partner discovery, challenge market assumptions, and define what an industrial pilot must prove before scale.",
  },
]

const pilotQuestions = [
  {
    n: "01",
    title: "Feedstock reality",
    body: "What is the composition, variability, recoverable calcium, and processing requirement of a real industrial waste stream?",
  },
  {
    n: "02",
    title: "Repeatable mineralization",
    body: "Can the process achieve consistent carbonation performance beyond a small laboratory signal?",
  },
  {
    n: "03",
    title: "Material performance",
    body: "Does the resulting mineral product meet the quality, safety, and performance requirements of a real construction use case?",
  },
  {
    n: "04",
    title: "Verified economics",
    body: "Do measured operating costs, partner requirements, and product value support a credible commercial model?",
  },
]

const roadmap = [
  {
    phase: "Completed",
    title: "Concept & recognition",
    body: "Built the initial prototype, won GreenTech III, and graduated from EmpowerMe.",
  },
  {
    phase: "Now",
    title: "Incubate & refine",
    body: "Use Startup School 4 and 5th Tusi to strengthen product, finance, and partner strategy.",
  },
  {
    phase: "Next",
    title: "Characterize feedstock",
    body: "Secure representative residue and quantify its composition, recovery pathway, and processing constraints.",
  },
  {
    phase: "Target",
    title: "Controlled pilot",
    body: "Prove repeatable mineralization, sensor-backed evidence, and material performance with an industrial partner.",
  },
]

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-white"
        style={{
          fontSize: "clamp(34px, 4.5vw, 58px)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1.02,
        }}
      >
        {title}
      </h2>
      {body && (
        <p className="mt-5 max-w-[66ch] text-[15px] leading-[1.75] text-zinc-400">
          {body}
        </p>
      )}
    </div>
  )
}

export default function CarborynCaseStudy() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/70 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-10">
          <Link
            href="/#case-studies"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Portfolio
          </Link>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
              <span className="relative h-2 w-2 rounded-full bg-white/75 shadow-[0_0_14px_rgba(255,255,255,0.65)]" />
            </span>
            Pilot pathway active
          </div>
          <a
            href="https://eco-concrete.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          >
            Venture website
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.13),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.055),transparent_52%)]" />
        <div aria-hidden className="carboryn-grid pointer-events-none absolute inset-0 opacity-55" />
        <div aria-hidden className="carboryn-orbit pointer-events-none absolute -right-28 top-[12%] hidden h-[420px] w-[420px] rounded-full border border-dashed border-white/[0.1] lg:block">
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_28px_rgba(255,255,255,0.7)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                Climate tech + material intelligence
              </span>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                1st of 100+ teams
              </span>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Flagship venture case study
            </p>
            <h1
              className="mt-4 text-white"
              style={{
                fontSize: "clamp(62px, 10vw, 136px)",
                fontWeight: 800,
                letterSpacing: "-0.067em",
                lineHeight: 0.88,
              }}
            >
              Carbo
              <br />
              ryn.
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-zinc-300">
              A circular materials venture developing a measurable pathway
              from industrial residue and captured carbon to useful mineral
              products.
            </p>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.75] text-zinc-500">
              As Co-Founder & Chief AI Officer, I lead the AI and data
              direction while contributing to product strategy, financial
              modeling, digital execution, and business-development
              validation.
            </p>
          </div>

          <div className="glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.025] p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <Atom size={14} className="text-zinc-500" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  Mineralization pathway
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-700">CRB-01</span>
            </div>

            <div className="mt-5 rounded-2xl border border-white/[0.08] bg-black/25 p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-700">
                Established reaction
              </p>
              <div className="carboryn-reaction mt-7 flex items-center justify-between gap-2 font-mono text-[20px] text-zinc-400 md:text-[24px]">
                <span>CaO</span>
                <span className="text-zinc-700">+</span>
                <span>CO2</span>
                <ArrowRight size={18} className="text-zinc-600" />
                <span className="text-white">CaCO3</span>
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.07] bg-black/25 p-4">
                <Scale size={14} className="text-zinc-600" />
                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">
                  Chemistry ceiling
                </p>
                <p className="mt-2 text-[25px] font-semibold tracking-[-0.04em] text-white">
                  0.79
                </p>
                <p className="mt-1 font-mono text-[9px] text-zinc-600">
                  kg CO2 / kg CaO
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                <Radio size={14} className="text-zinc-600" />
                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">
                  Data layer
                </p>
                <p className="mt-2 text-[14px] font-medium text-zinc-300">
                  Batch-level process signal
                </p>
                <div aria-hidden className="carbon-signal absolute bottom-0 left-0 h-px w-16 bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-white/[0.08] bg-black/25 px-4 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                Evidence before adjectives · pilot validation required
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-3 md:grid-cols-4">
          {[
            ["Role", "Co-Founder & Chief AI Officer"],
            ["Recognition", "1st of 100+ teams"],
            ["Programs", "EmpowerMe graduate · 2 active"],
            ["Next milestone", "Controlled industrial pilot"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">{label}</p>
              <p className="mt-2 text-[13px] leading-[1.5] text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="01 · Product thesis"
            title="Stop managing carbon. Start manufacturing with it."
            body="Carboryn's thesis is to close the loop between two industrial problems: calcium-rich residue that may otherwise be discarded and captured CO2 that needs a durable, useful destination."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {circularFlow.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                className="edge-lit-card glass-surface group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-500 hover:border-white/[0.17] hover:bg-white/[0.045]"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <Icon size={17} className="text-zinc-500 transition-colors duration-500 group-hover:text-white" />
                  <span className="font-mono text-[9px] text-zinc-700">0{index + 1}</span>
                </div>
                <h3 className="relative z-10 mt-8 text-[18px] font-semibold text-white">{title}</h3>
                <p className="relative z-10 mt-3 text-[13px] leading-[1.65] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Physical product
              </p>
              <p className="mt-5 text-[19px] leading-[1.6] text-zinc-300">
                Develop waste-derived calcium carbonate as a useful,
                lower-impact material input.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.38)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Intelligent product layer
              </p>
              <p className="mt-5 text-[19px] leading-[1.6] text-white">
                Build traceable batch data that can support process control,
                quality assurance, partner reporting, and future independent
                verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div aria-hidden className="carboryn-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="02 · Evidence framework"
            title="Every number should carry its evidence status."
            body="The strongest version of Carboryn separates established chemistry, internal measurements, modeled impact, and future targets. That makes the venture more credible to industrial partners and investors."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {evidenceCards.map((item) => (
              <article
                key={item.title}
                className="glass-surface rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="flex items-center gap-2">
                  <Check size={13} className="text-zinc-600" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-700">
                    {item.status}
                  </p>
                </div>
                <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-zinc-500">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-white/[0.09] bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={16} className="text-zinc-400" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Credibility boundary
              </p>
            </div>
            <p className="mt-6 max-w-[75ch] text-[20px] leading-[1.55] tracking-[-0.02em] text-zinc-200">
              Sensor-backed mass gain can support process visibility, but it
              does not replace material characterization, lifecycle assessment,
              or independent carbon verification.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="03 · My contribution"
            title="Co-Founder & Chief AI Officer"
            body="I work across the intelligent product layer and the venture strategy around it, helping the team convert technical work into evidence, digital products, and a credible commercial pathway."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {roleItems.map(({ icon: Icon, title, body }, index) => (
              <div key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.022] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-700">0{index + 1}</span>
                  <Icon size={14} className="text-zinc-600" />
                </div>
                <h3 className="mt-8 text-[18px] font-semibold text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="04 · Pilot validation"
            title="Move from a laboratory signal to an industrial reference case."
            body="The next phase should prove the venture under controlled, representative conditions. A Norm Cement pathway is being explored, but no completed industrial pilot is claimed."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {pilotQuestions.map((item) => (
              <article
                key={item.n}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.022] p-6 transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-700">{item.n}</span>
                  <span className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent opacity-50 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />
                </div>
                <h3 className="mt-8 text-[20px] font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="05 · Incubation path"
            title="Three programs, one increasingly rigorous venture."
            body="Each program should sharpen a different part of the company: commercialization discipline, technical validation, partner access, and the execution plan required for an industrial pilot."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Graduate", "EmpowerMe", "Completed commercialization, feasibility, business-model, and impact development."],
              ["Active", "Startup School 4", "Currently refining venture strategy and the pathway from evidence to scale."],
              ["Active", "5th Tusi Incubation", "Currently developing the venture within an additional incubation and partner network."],
            ].map(([status, title, body]) => (
              <div key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                <div className="flex items-center gap-2">
                  <CircleDot size={13} className="text-zinc-600" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-700">{status}</p>
                </div>
                <h3 className="mt-8 text-[20px] font-semibold text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.07),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="06 · Evidence-led roadmap"
            title="From recognized concept to industrial proof."
          />

          <div className="relative mt-14 grid gap-4 md:grid-cols-4">
            <div aria-hidden className="absolute left-0 right-0 top-[23px] hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
            {roadmap.map((item, index) => (
              <div key={item.phase} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-black font-mono text-[10px] text-zinc-500 shadow-[0_0_28px_rgba(255,255,255,0.06)]">
                  0{index + 1}
                </div>
                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-700">{item.phase}</p>
                <h3 className="mt-2 text-[17px] font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="contact-console glass-surface relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-white/[0.025] p-7 md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit" />
            <Leaf size={18} className="relative z-10 text-zinc-500" />
            <p className="relative z-10 mt-9 font-mono text-[10px] uppercase tracking-[0.19em] text-zinc-600">
              Current position
            </p>
            <h2 className="relative z-10 mt-5 max-w-[17ch] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[62px]">
              The chemistry is known. The industrial system must now be proven.
            </h2>
            <p className="relative z-10 mt-6 max-w-[68ch] text-[15px] leading-[1.75] text-zinc-400">
              Carboryn is building toward the point where feedstock, process,
              material performance, sensor evidence, and commercial value can
              be tested together.
            </p>
            <div className="relative z-10 mt-9 flex flex-wrap gap-3">
              <a
                href="https://eco-concrete.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Visit Carboryn
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/carboryn-az"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                Follow on LinkedIn
              </a>
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                Explore other work
              </Link>
            </div>
          </div>

          <p className="mt-7 text-[11px] leading-[1.7] text-zinc-700">
            Stage note: modeled emissions reductions, market sizes, pricing,
            unit economics, and pilot milestones remain hypotheses or targets
            unless explicitly described as established chemistry, internal
            measurement, or confirmed recognition.
          </p>
        </div>
      </section>
    </main>
  )
}
