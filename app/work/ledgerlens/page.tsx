import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleDot,
  FileScan,
  Flag,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "LedgerLens Case Study | Fizuli Hasanov",
  description:
    "LedgerLens is an early-stage AI assistant for turning informal SME financial records into structured, reviewable data for credit onboarding.",
  alternates: {
    canonical: "/work/ledgerlens",
  },
  openGraph: {
    title: "LedgerLens Case Study | Fizuli Hasanov",
    description:
      "An early-stage AI assistant for structuring informal SME financial records for human-reviewed credit onboarding.",
    url: "/work/ledgerlens",
    images: ["/profile-photo.jpg"],
  },
}

const validationQuestions = [
  {
    n: "01",
    title: "Workflow reality",
    body: "Where do informal SME records create the most friction inside the current credit-onboarding workflow?",
  },
  {
    n: "02",
    title: "Data reality",
    body: "Which ledger formats, languages, handwriting patterns, and document qualities are representative enough for a credible pilot?",
  },
  {
    n: "03",
    title: "Trust threshold",
    body: "What extraction confidence, human-review rate, and risk signals would make the tool useful to a credit officer?",
  },
  {
    n: "04",
    title: "Pilot design",
    body: "What controlled scope, compliance conditions, and KPIs would make a low-risk ABB pilot meaningful?",
  },
]

const productFlow = [
  {
    icon: FileScan,
    title: "Capture",
    body: "Accept a photographed handwritten ledger, scan, or PDF.",
  },
  {
    icon: ScanLine,
    title: "Structure",
    body: "Extract dates, amounts, balances, and notes into reviewable rows.",
  },
  {
    icon: ShieldCheck,
    title: "Review",
    body: "Show low-confidence fields so a human can correct them before use.",
  },
  {
    icon: Flag,
    title: "Assist",
    body: "Surface unusual patterns as risk signals, never automatic truth.",
  },
]

const roleItems = [
  "Own the product thesis, positioning, and venture direction.",
  "Lead ABB expert discovery, workflow mapping, and validation design.",
  "Translate banking needs into a focused MVP scope and measurable pilot.",
  "Coordinate the product, ML, design, and business workstreams.",
]

const scopeItems = [
  ["In proposed MVP", "Upload, OCR, structured table, confidence scores, human correction, summary, risk flags, export."],
  ["Deliberately excluded", "Automatic credit decisions, claims of fraud proof, and deep bank-system integration before validation."],
  ["Long-term direction", "Cross-check ledger data with consented banking and other verified financial sources."],
]

const roadmap = [
  {
    phase: "Now",
    title: "Pre-validation",
    body: "Refine the product thesis, prepare discovery questions, and define the assumptions that ABB experts must challenge.",
  },
  {
    phase: "Incubation",
    title: "Expert validation",
    body: "Map the real workflow, test problem severity, review compliance constraints, and narrow the first use case.",
  },
  {
    phase: "Next",
    title: "Evidence-led prototype",
    body: "Build or revise the MVP around validated needs and benchmark it on representative ledger samples.",
  },
  {
    phase: "Target",
    title: "Controlled pilot",
    body: "Agree on a low-risk test with human review and measure usefulness, accuracy, time saved, and trust.",
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

export default function LedgerLensCaseStudy() {
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
            Pre-validation
          </div>
          <a
            href="https://ledgerlenss.vercel.app/ocr"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          >
            Prototype
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.055),transparent_52%)]" />
        <div aria-hidden className="ledger-grid pointer-events-none absolute inset-0 opacity-45" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[54%] h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_70px_rgba(255,255,255,0.16)]" />
        <div aria-hidden className="ledger-orbit pointer-events-none absolute right-[4%] top-[14%] hidden h-56 w-56 rounded-full border border-dashed border-white/[0.08] lg:block">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
        </div>
        <div aria-hidden className="ledger-data-rail pointer-events-none absolute bottom-[18%] left-[4%] hidden h-px w-[36%] bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block">
          <span className="ledger-data-packet absolute left-0 top-1/2 h-1.5 w-8 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                Fintech AI
              </span>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                ABB 6th Incubation · Selected
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
                letterSpacing: "-0.065em",
                lineHeight: 0.88,
              }}
            >
              Ledger
              <br />
              Lens.
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-zinc-300">
              An early-stage AI assistant designed to help banks turn
              handwritten and informal SME financial records into structured,
              reviewable data for credit onboarding.
            </p>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.75] text-zinc-500">
              Newly selected through ABB&apos;s competitive incubation process.
              The next phase is deep validation with ABB experts before the
              product thesis, workflow, and pilot scope are finalized.
            </p>
          </div>

          <div className="ledger-terminal glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.025] p-4 backdrop-blur-2xl md:p-5">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.7)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  AI-assisted ledger structuring
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-700">LL-01</span>
            </div>
            <div className="grid gap-3 py-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.07] bg-black/30 p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">
                  Input · unstructured
                </p>
                <div className="mt-5 space-y-3 rotate-[-1.5deg] font-mono text-[11px] italic text-zinc-500">
                  <p className="border-b border-dashed border-white/[0.08] pb-2">12 May · cash sales · 860</p>
                  <p className="border-b border-dashed border-white/[0.08] pb-2">inventory purchase · 340</p>
                  <p className="border-b border-dashed border-white/[0.08] pb-2">outstanding balance · verify</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.035] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                  Output · human-reviewable
                </p>
                <div className="mt-4 space-y-2 font-mono text-[9px] text-zinc-500">
                  {[
                    ["Date", "12 May"],
                    ["Revenue", "AZN 860"],
                    ["Expense", "AZN 340"],
                    ["Confidence", "Review"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-md border border-white/[0.06] bg-black/20 px-3 py-2"
                    >
                      <span>{label}</span>
                      <span className={index === 3 ? "text-zinc-300" : "text-zinc-500"}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 px-4 py-3">
              <div aria-hidden className="ledger-scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                Human review required · no automated credit decision
              </p>
            </div>
            <div aria-hidden className="mt-3 flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <span
                  key={item}
                  className="ledger-confidence-pulse h-1 flex-1 rounded-full bg-white/10"
                  style={{ animationDelay: `${item * 180}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-3 md:grid-cols-4">
          {[
            ["Role", "Co-Founder & CEO"],
            ["Stage", "Newly selected · Pre-validation"],
            ["Program", "ABB 6th Incubation"],
            ["Next milestone", "Expert-led problem validation"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">
                {label}
              </p>
              <p className="mt-2 text-[13px] leading-[1.5] text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="01 · Product thesis"
            title="Not just OCR. A trust-aware onboarding assistant."
            body="The initial idea began with handwriting recognition. The stronger product thesis is broader: help credit officers structure informal SME financial records, review uncertainty, and notice patterns that deserve attention before a decision."
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Problem hypothesis
              </p>
              <p className="mt-5 text-[19px] leading-[1.6] text-zinc-300">
                Some micro and small businesses maintain financial records in
                handwritten or informal formats. Turning those records into
                useful bank data may require slow, manual interpretation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.38)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Product hypothesis
              </p>
              <p className="mt-5 text-[19px] leading-[1.6] text-white">
                A localized, human-in-the-loop AI assistant could reduce
                transcription work and improve the quality of the information
                package reviewed during SME credit onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div aria-hidden className="ledger-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="02 · Current evidence"
            title="Selection is validation of potential, not validation of the product."
            body="LedgerLens has passed a highly competitive selection process for ABB's 6th Incubation Program. That is meaningful early validation of the team's direction. It does not yet prove the workflow, accuracy, adoption, or commercial model."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.035] p-7">
              <div aria-hidden className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit" />
              <CircleDot size={18} className="relative z-10 text-zinc-400" />
              <p className="relative z-10 mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                Confirmed today
              </p>
              <p className="relative z-10 mt-4 text-[28px] font-semibold tracking-[-0.03em] text-white">
                Selected for ABB&apos;s 6th Incubation Program
              </p>
              <p className="relative z-10 mt-4 text-[14px] leading-[1.7] text-zinc-500">
                The team is waiting for incubation to begin and preparing to
                validate the product deeply with ABB experts.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Product direction", "AI-powered SME credit onboarding assistant"],
                ["Initial user", "SME credit officer or branch employee"],
                ["Core principle", "Human review before information is used"],
                ["Strategic advantage", "Localized workflow and language focus"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-black/25 p-5"
                >
                  <Check size={14} className="text-zinc-600" />
                  <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">{label}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-zinc-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="03 · Incubation agenda"
            title="The most important product work starts with questions."
            body="The incubation phase should challenge the assumptions in the pitch, expose the real operating constraints, and turn the broad opportunity into a narrow, testable product."
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

          <div className="mt-12 rounded-[28px] border border-white/[0.09] bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-zinc-400" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                What success looks like after incubation
              </p>
            </div>
            <p className="mt-6 max-w-[72ch] text-[22px] leading-[1.55] tracking-[-0.02em] text-zinc-200">
              A validated problem definition, a clearly prioritized user
              workflow, representative data access, measurable pilot criteria,
              and an MVP scope that ABB experts believe is worth testing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="04 · Product boundaries"
            title="Build the smallest trustworthy assistant."
            body="The first version should help a human work faster and with better visibility. It should not pretend to replace credit judgment or prove that a ledger is truthful."
          />

          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/[0.08]">
            {scopeItems.map(([label, value], index) => (
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

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="05 · My contribution"
            title="Co-Founder & CEO"
            body="My role is to keep the product grounded in a real banking problem, align the team around evidence, and turn the incubation opportunity into a disciplined validation and execution process."
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

      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.07),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="06 · Evidence-led roadmap"
            title="From selected idea to validated product."
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
            <Layers3 size={18} className="relative z-10 text-zinc-500" />
            <p className="relative z-10 mt-9 font-mono text-[10px] uppercase tracking-[0.19em] text-zinc-600">
              Current position
            </p>
            <h2 className="relative z-10 mt-5 max-w-[16ch] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[62px]">
              The idea earned a place. Now the evidence must earn the product.
            </h2>
            <p className="relative z-10 mt-6 max-w-[66ch] text-[15px] leading-[1.75] text-zinc-400">
              LedgerLens is entering its most important stage: learning from
              ABB experts, challenging assumptions, and deciding what deserves
              to be built next.
            </p>
            <div className="relative z-10 mt-9 flex flex-wrap gap-3">
              <a
                href="https://ledgerlenss.vercel.app/ocr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition-all duration-300 hover:scale-[1.02]"
              >
                View current prototype
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            Stage note: product features, targets, and pilot metrics on this
            page are proposed hypotheses unless explicitly described as
            confirmed. They will be refined through the ABB incubation process.
          </p>
        </div>
      </section>
    </main>
  )
}
