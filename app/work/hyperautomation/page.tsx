import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Check,
  CircleDot,
  Cpu,
  Flag,
  Layers3,
  Network,
  PlugZap,
  Radio,
  ScanLine,
  Warehouse,
} from "lucide-react"

export const metadata: Metadata = {
  title: "HyperAutomation Case Study | Fizuli Hasanov",
  description:
    "HyperAutomation is an early-stage digital-to-physical warehouse automation platform connecting existing workflows with robot execution.",
  alternates: {
    canonical: "/work/hyperautomation",
  },
  openGraph: {
    title: "HyperAutomation Case Study | Fizuli Hasanov",
    description:
      "An early-stage platform connecting digital warehouse workflows with physical robot execution.",
    url: "/work/hyperautomation",
    images: ["/profile-photo.jpg"],
  },
}

const productFlow = [
  {
    icon: Boxes,
    title: "Receive",
    body: "Listen for tasks from existing ERP, WMS, email, or RPA workflows.",
  },
  {
    icon: Network,
    title: "Translate",
    body: "Turn digital requests into structured physical-execution commands.",
  },
  {
    icon: Cpu,
    title: "Execute",
    body: "Coordinate compatible AGV, AMR, scanner, and warehouse hardware.",
  },
  {
    icon: Radio,
    title: "Synchronize",
    body: "Return live status and operational data to the systems teams already use.",
  },
]

const evidence = [
  {
    title: "SabahHub selection",
    body: "Selected through a competitive incubation process in April 2026 and now approaching program graduation.",
  },
  {
    title: "Bravo test opportunity",
    body: "PASHA Hackathon networking created an opportunity to explore product testing with Bravo. A completed test or pilot is not claimed.",
  },
  {
    title: "Defined product direction",
    body: "The team has framed the integration architecture, target use cases, business model, and an initial execution roadmap.",
  },
  {
    title: "Founder-led execution",
    body: "A five-person team is developing the concept with a clear Co-Founder & CEO owner for product and venture direction.",
  },
]

const validationQuestions = [
  {
    n: "01",
    title: "Where is the real bottleneck?",
    body: "Identify the highest-friction warehouse workflow before deciding which task should be automated first.",
  },
  {
    n: "02",
    title: "What must integrate?",
    body: "Map Bravo's relevant systems, data availability, hardware constraints, and operational approval requirements.",
  },
  {
    n: "03",
    title: "What is a safe first test?",
    body: "Define a controlled environment, human override, failure handling, and a narrow physical task with low operational risk.",
  },
  {
    n: "04",
    title: "What proves value?",
    body: "Agree on measurable outcomes such as task time, error rate, idle time, integration effort, and operator trust.",
  },
]

const investmentUse = [
  ["Integration layer", "Build and harden the task engine, APIs, MQTT messaging, monitoring, and system connectors."],
  ["Physical prototype", "Assemble or integrate a testable robot workflow with the required sensors and safety controls."],
  ["Controlled validation", "Prepare the Bravo testing opportunity around a narrow workflow and measurable success criteria."],
  ["Commercial readiness", "Turn pilot learning into deployment requirements, pricing evidence, and an enterprise rollout plan."],
]

const roleItems = [
  "Own the product thesis, venture strategy, positioning, and investment narrative.",
  "Lead partner discovery and translate warehouse pain points into a focused first deployment.",
  "Align software, robotics, operations, and business workstreams around measurable evidence.",
  "Move the venture from incubation learning toward a fundable, testable product.",
]

const roadmap = [
  {
    phase: "April 2026",
    title: "Selected",
    body: "Entered SabahHub incubation through a competitive selection process.",
  },
  {
    phase: "Now",
    title: "Graduate & focus",
    body: "Complete incubation, narrow the first workflow, and refine the technical and commercial plan.",
  },
  {
    phase: "Next",
    title: "Fund & build",
    body: "Secure investment to build the final testable system and required integration layer.",
  },
  {
    phase: "Target",
    title: "Controlled test",
    body: "Use the Bravo opportunity to measure operational value before proposing a broader deployment.",
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

export default function HyperAutomationCaseStudy() {
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
            Near incubation graduation
          </div>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          >
            Investment stage
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </header>

      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.055),transparent_52%)]" />
        <div aria-hidden className="warehouse-grid pointer-events-none absolute inset-0 opacity-45" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[56%] h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent shadow-[0_0_70px_rgba(255,255,255,0.14)]" />

        <div className="relative mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                Robotics + RPA
              </span>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                SabahHub · Selected April 2026
              </span>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Flagship venture case study
            </p>
            <h1
              className="mt-4 text-white"
              style={{
                fontSize: "clamp(54px, 9vw, 126px)",
                fontWeight: 800,
                letterSpacing: "-0.067em",
                lineHeight: 0.88,
              }}
            >
              Hyper
              <br />
              Automation.
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-zinc-300">
              An early-stage digital-to-physical warehouse automation platform
              designed to connect existing business workflows with robot
              execution.
            </p>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.75] text-zinc-500">
              The venture is approaching SabahHub incubation graduation. A
              PASHA Hackathon connection created an opportunity to explore
              testing at Bravo; the immediate goal is to secure investment and
              build the final testable system.
            </p>
          </div>

          <div className="warehouse-console glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.025] p-4 backdrop-blur-2xl md:p-5">
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.7)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  Digital-to-physical bridge
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-700">HA-01</span>
            </div>

            <div className="relative z-10 mt-4 grid gap-3">
              {[
                ["DIGITAL REQUEST", "ERP · WMS · EMAIL · RPA", "01"],
                ["TASK ENGINE", "API · MQTT · ORCHESTRATION", "02"],
                ["PHYSICAL EXECUTION", "AGV · AMR · SCANNER", "03"],
              ].map(([label, value, index]) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-black/25 px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">{label}</p>
                      <p className="mt-1.5 font-mono text-[10px] text-zinc-400">{value}</p>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-700">{index}</span>
                  </div>
                  {index === "02" && (
                    <span aria-hidden className="warehouse-command absolute bottom-0 left-0 h-px w-12 bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.6)]" />
                  )}
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-3 overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 p-4">
              <div aria-hidden className="warehouse-route absolute inset-4 rounded-xl border border-dashed border-white/[0.12]" />
              <div className="relative flex h-24 items-end justify-between px-4 pb-2">
                {[0, 1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="warehouse-node h-2 w-2 rounded-full bg-white/50"
                    style={{ animationDelay: `${item * 420}ms` }}
                  />
                ))}
                <span className="warehouse-unit absolute bottom-8 left-4 h-5 w-8 rounded-md border border-white/30 bg-white/[0.08] shadow-[0_0_26px_rgba(255,255,255,0.2)]" />
              </div>
              <p className="relative font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                Proposed execution route · human-supervised
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-3 md:grid-cols-4">
          {[
            ["Role", "Co-Founder & CEO"],
            ["Stage", "Near incubation graduation"],
            ["Program", "SabahHub · April 2026"],
            ["Next milestone", "Investment-backed testable build"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4"
            >
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
            title="Plug into the warehouse. Do not replace it."
            body="Many automation systems improve either digital workflows or physical movement. HyperAutomation's thesis is to create the bridge between them, connecting the software a warehouse already uses with compatible physical automation."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productFlow.map(({ icon: Icon, title, body }, index) => (
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
                Problem hypothesis
              </p>
              <p className="mt-5 text-[19px] leading-[1.6] text-zinc-300">
                Warehouse teams may have digital task systems and physical
                automation that operate as separate layers, leaving people to
                coordinate the gap.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.38)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Product hypothesis
              </p>
              <p className="mt-5 text-[19px] leading-[1.6] text-white">
                A vendor-agnostic orchestration layer could connect those
                systems and make warehouse automation easier to deploy,
                monitor, and expand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div aria-hidden className="warehouse-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="02 · Current evidence"
            title="Strong access signals. Product validation is still ahead."
            body="Incubation and partner access matter because they create better conditions for learning. They do not yet prove product performance, customer adoption, deployment economics, or commercial demand."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.035] p-7">
              <div aria-hidden className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit" />
              <CircleDot size={18} className="relative z-10 text-zinc-400" />
              <p className="relative z-10 mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Confirmed today
              </p>
              <p className="relative z-10 mt-4 text-[28px] font-semibold tracking-[-0.03em] text-white">
                SabahHub incubated with a Bravo testing opportunity
              </p>
              <p className="relative z-10 mt-4 text-[14px] leading-[1.7] text-zinc-500">
                The opportunity emerged through PASHA Hackathon networking. It
                is the next validation door, not a completed pilot result.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {evidence.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.07] bg-black/25 p-5"
                >
                  <Check size={14} className="text-zinc-600" />
                  <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">{item.title}</p>
                  <p className="mt-2 text-[13px] leading-[1.65] text-zinc-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="03 · Proposed architecture"
            title="One coordination layer between tasks and movement."
            body="The pitch architecture uses APIs and MQTT messaging to translate digital tasks into physical actions and return operational status. The exact integrations, hardware, and safety controls must be refined through a real test environment."
          />

          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-5 md:p-8">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              {[
                { icon: Layers3, label: "Existing systems", value: "ERP · WMS · Email · RPA" },
                { icon: PlugZap, label: "Integration bridge", value: "API · MQTT · Task engine" },
                { icon: Warehouse, label: "Physical layer", value: "AGV · AMR · Scanners" },
              ].map(({ icon: Icon, label, value }, index) => (
                <div key={label} className="contents">
                  <div className="rounded-2xl border border-white/[0.07] bg-black/25 p-5">
                    <Icon size={16} className="text-zinc-500" />
                    <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">{label}</p>
                    <p className="mt-2 text-[14px] text-zinc-300">{value}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden items-center gap-1 lg:flex">
                      {[0, 1, 2].map((item) => (
                        <span
                          key={item}
                          className="warehouse-node h-1.5 w-1.5 rounded-full bg-white/40"
                          style={{ animationDelay: `${item * 300 + index * 500}ms` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <ScanLine size={15} className="text-zinc-500" />
              <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-600">
                Architecture boundary
              </p>
            </div>
            <p className="mt-5 max-w-[74ch] text-[15px] leading-[1.7] text-zinc-400">
              This is the proposed system direction from the pitch deck, not a
              claim that every integration or physical workflow is already
              production-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="04 · Bravo validation agenda"
            title="Turn access into a disciplined test."
            body="The strongest next move is not a broad deployment. It is a controlled test that exposes the real operating constraints and proves whether the integration thesis creates measurable value."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {validationQuestions.map((item) => (
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
            eyebrow="05 · Why investment matters"
            title="Capital should buy the next layer of evidence."
            body="The immediate funding purpose is to move from a well-framed architecture and valuable partner access to a testable product. The final capital requirement and commercial terms are still being refined."
          />

          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/[0.08]">
            {investmentUse.map(([label, value], index) => (
              <div
                key={label}
                className={`grid gap-4 bg-black/20 px-6 py-6 md:grid-cols-[0.32fr_0.68fr] md:items-start ${
                  index > 0 ? "border-t border-white/[0.07]" : ""
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-600">{label}</p>
                <p className="text-[15px] leading-[1.7] text-zinc-300">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="06 · My contribution"
            title="Co-Founder & CEO"
            body="My role is to convert access, technical ambition, and incubation learning into a focused product strategy and a credible path from build to validation."
          />

          <div className="space-y-3">
            {roleItems.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.022] p-5"
              >
                <span className="font-mono text-[10px] text-zinc-700">0{index + 1}</span>
                <p className="text-[15px] leading-[1.7] text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.07),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="07 · Evidence-led roadmap"
            title="From incubated concept to tested infrastructure."
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

      <section className="px-6 pb-28 pt-10 md:px-10 md:pb-36 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="contact-console glass-surface relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-white/[0.025] p-7 md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit" />
            <Flag size={18} className="relative z-10 text-zinc-500" />
            <p className="relative z-10 mt-9 font-mono text-[10px] uppercase tracking-[0.19em] text-zinc-600">
              Current position
            </p>
            <h2 className="relative z-10 mt-5 max-w-[17ch] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[62px]">
              The access exists. Now the product must earn deployment.
            </h2>
            <p className="relative z-10 mt-6 max-w-[66ch] text-[15px] leading-[1.75] text-zinc-400">
              HyperAutomation is moving from incubation toward a testable
              product. The next chapter is investment-backed building,
              disciplined partner validation, and evidence from a controlled
              warehouse workflow.
            </p>
            <div className="relative z-10 mt-9 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Discuss the venture
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                Explore other work
              </Link>
            </div>
          </div>

          <p className="mt-7 text-[11px] leading-[1.7] text-zinc-700">
            Stage note: architecture, product capabilities, target markets,
            business model, pricing, and pilot metrics are proposed hypotheses
            unless explicitly described as confirmed. They must be refined
            through funded product development and controlled validation.
          </p>
        </div>
      </section>
    </main>
  )
}
