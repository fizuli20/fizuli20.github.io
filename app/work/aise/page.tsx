import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleDot,
  BellRing,
  Layers3,
  SearchCheck,
  Sparkles,
  UserCheck,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AISE Case Study | Fizuli Hasanov",
  description:
    "AISE is an Azerbaijan-focused candidate-side HRTech platform combining cross-source vacancy discovery, personalized job matching, and application-conversion tools.",
  alternates: { canonical: "/work/aise" },
  openGraph: {
    title: "AISE Case Study | Fizuli Hasanov",
    description: "A localized candidate-intelligence and application-conversion layer for the Azerbaijani job market, not a generic job aggregator.",
    url: "/work/aise",
    images: ["/profile-photo.jpg"],
  },
}

const validationQuestions = [
  { n: "01", title: "Discovery friction", body: "Where do Azerbaijani candidates lose the most time or miss the most opportunities in the current job-search workflow?" },
  { n: "02", title: "Match quality", body: "What signals — skills, location, salary range, industry — most reliably predict that a candidate will apply and convert to an interview?" },
  { n: "03", title: "CV and letter gap", body: "How much of application failure is due to poor CV or motivation-letter fit versus actual skill mismatch?" },
  { n: "04", title: "Monetization threshold", body: "What combination of free features and premium tiers creates enough perceived value that candidates pay before they receive an offer?" },
]

const productFlow = [
  { icon: SearchCheck, title: "Discover", body: "Aggregate vacancies cross-source across Azerbaijani platforms into one unified feed." },
  { icon: BellRing, title: "Alert", body: "Send instant, personalized alerts when a high-match opportunity goes live." },
  { icon: FileText, title: "Tailor", body: "AI-assisted CV tailoring and motivation-letter generation adapted to each role." },
  { icon: UserCheck, title: "Convert", body: "Track applications, get feedback signals, and improve conversion rate over time." },
]

const roleItems = [
  "Define the product thesis, positioning, and go-to-market strategy for the Azerbaijani candidate market.",
  "Lead ABB incubation discovery — mapping candidate pain points, recruiter workflows, and platform gaps.",
  "Translate real candidate frustrations into a focused MVP scope and measurable pilot KPIs.",
  "Drive team alignment across product, technical, and business workstreams.",
]

const scopeItems = [
  ["In proposed MVP", "Cross-source vacancy aggregation, personalized matching feed, instant alerts, CV tailoring tool, motivation-letter generator."],
  ["Deliberately excluded", "Recruiter-side ATS features, automated applications without candidate review, and claims of guaranteed interview rates."],
  ["Long-term direction", "Candidate reputation layer, employer partnership channel, and salary benchmarking for the Azerbaijani market."],
]

const roadmap = [
  { phase: "Now", title: "Concierge pilot", body: "Manually matching candidates to vacancies to validate demand signal, conversion uplift, and willingness to pay." },
  { phase: "Incubation", title: "ABB validation", body: "Map recruiter and candidate workflows with ABB mentors, test core assumptions, and define data and compliance requirements." },
  { phase: "Next", title: "MVP build", body: "Build the minimum product around validated candidate pain points — starting with discovery and alert features." },
  { phase: "Target", title: "Market launch", body: "Launch in Azerbaijan with free-tier discovery and premium conversion tools, measuring application-to-interview rate as the north-star metric." },
]

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">{eyebrow}</p>
      <h2 className="mt-4 text-white" style={{ fontSize: "clamp(34px, 4.5vw, 58px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02 }}>
        {title}
      </h2>
      {body && <p className="mt-5 max-w-[66ch] text-[15px] leading-[1.75] text-zinc-400">{body}</p>}
    </div>
  )
}

export default function AISECaseStudy() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/70 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-10">
          <Link href="/#case-studies" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-300 hover:text-white">
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Portfolio
          </Link>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
              <span className="relative h-2 w-2 rounded-full bg-white/75 shadow-[0_0_14px_rgba(255,255,255,0.65)]" />
            </span>
            Concierge pilot
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[11px] text-zinc-600">
            MVP planning
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.055),transparent_52%)]" />
        <div aria-hidden className="ledger-grid pointer-events-none absolute inset-0 opacity-45" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[54%] h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_70px_rgba(255,255,255,0.16)]" />
        <div className="relative mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">HRTech AI</span>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">ABB 6th Incubation</span>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Flagship venture case study</p>
            <h1 className="mt-4 text-white" style={{ fontSize: "clamp(72px, 12vw, 148px)", fontWeight: 800, letterSpacing: "-0.065em", lineHeight: 0.88 }}>
              AISE.
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-zinc-300">
              A localized candidate-intelligence and application-conversion layer for the Azerbaijani job market.
            </p>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.75] text-zinc-500">
              Selected through ABB&apos;s competitive 6th Incubation process. Currently in concierge pilot phase.
            </p>
          </div>
          <div className="ledger-terminal glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.025] p-4 backdrop-blur-2xl md:p-5">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.7)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">Candidate match engine</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-700">AISE-01</span>
            </div>
            <div className="grid gap-3 py-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.07] bg-black/30 p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">Input - candidate profile</p>
                <div className="mt-5 space-y-3 font-mono text-[11px] text-zinc-500">
                  <p className="border-b border-dashed border-white/[0.08] pb-2">Skills: Python · SQL · Product</p>
                  <p className="border-b border-dashed border-white/[0.08] pb-2">Location: Baku · Remote OK</p>
                  <p className="border-b border-dashed border-white/[0.08] pb-2">Target: Product · AI roles</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.035] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Output - matched vacancies</p>
                <div className="mt-4 space-y-2 font-mono text-[9px] text-zinc-500">
                  {[["Match score","94%"],["Source","3 platforms"],["Alert sent","Instant"],["CV fit","Tailor"]].map(([label, value], index) => (
                    <div key={label} className="flex items-center justify-between rounded-md border border-white/[0.06] bg-black/20 px-3 py-2">
                      <span>{label}</span>
                      <span className={index === 3 ? "text-zinc-300" : "text-zinc-500"}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 px-4 py-3">
              <div aria-hidden className="ledger-scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Candidate controls every application</p>
            </div>
            <div aria-hidden className="mt-3 flex items-center gap-2">
              {[0,1,2,3,4,5].map((item) => (
                <span key={item} className="ledger-confidence-pulse h-1 flex-1 rounded-full bg-white/10" style={{ animationDelay: item * 180 + "ms" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-3 md:grid-cols-4">
          {[["Role","Co-Founder and CEO"],["Stage","Concierge pilot · MVP planning"],["Program","ABB 6th Incubation"],["North-star metric","Application-to-interview conversion rate"]].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">{label}</p>
              <p className="mt-2 text-[13px] leading-[1.5] text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader eyebrow="01 - Product thesis" title="Not just job boards. A candidate conversion engine." body="The opportunity is not another job aggregator. It is a localized intelligence layer that reduces the gap between a qualified candidate and an interview." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productFlow.map(({ icon: Icon, title, body }, index) => (
              <div key={title} className="edge-lit-card glass-surface group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-500 hover:border-white/[0.17] hover:bg-white/[0.045]">
                <div className="relative z-10 flex items-center justify-between">
                  <Icon size={17} className="text-zinc-500 transition-colors duration-500 group-hover:text-white" />
                  <span className="font-mono text-[9px] text-zinc-700">0{index + 1}</span>
                </div>
                <h3 className="relative z-10 mt-8 text-[18px] font-semibold text-white">{title}</h3>
                <p className="relative z-10 mt-3 text-[13px] leading-[1.65] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Problem hypothesis</p>
              <p className="mt-5 text-[19px] leading-[1.6] text-zinc-300">Azerbaijani job seekers waste significant time navigating fragmented platforms and sending poorly tailored applications — resulting in low interview conversion rates.</p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.38)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Product hypothesis</p>
              <p className="mt-5 text-[19px] leading-[1.6] text-white">A localized candidate-intelligence platform with cross-source discovery, instant alerts, and AI-powered application tools could meaningfully increase interview conversion rates for Azerbaijani candidates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader eyebrow="02 - Current evidence" title="Selection validates the direction. The pilot validates the demand." body="AISE has passed ABB 6th Incubation selection. The concierge pilot is now running to test whether candidates value the matching and conversion tools enough to pay." />
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.035] p-7">
              <div aria-hidden className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit" />
              <CircleDot size={18} className="relative z-10 text-zinc-400" />
              <p className="relative z-10 mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Confirmed today</p>
              <p className="relative z-10 mt-4 text-[28px] font-semibold tracking-[-0.03em] text-white">Selected for ABB 6th Incubation</p>
              <p className="relative z-10 mt-4 text-[14px] leading-[1.7] text-zinc-500">The team is running a concierge pilot while preparing to validate the product with ABB mentors.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[["Product direction","Candidate-side HRTech for the Azerbaijani job market"],["Initial user","Job seekers in Azerbaijan across all career stages"],["Core principle","Candidate controls every application"],["Strategic advantage","Localized, cross-source aggregation with conversion focus"]].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/[0.07] bg-black/25 p-5">
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
          <SectionHeader eyebrow="03 - Incubation agenda" title="The right questions turn a promising idea into a real product." body="The ABB incubation phase should challenge every assumption about candidate behavior and what a paying user actually needs." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {validationQuestions.map((item) => (
              <article key={item.n} className="group rounded-2xl border border-white/[0.07] bg-white/[0.022] p-6 transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-700">{item.n}</span>
                  <span className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent opacity-50 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />
                </div>
                <h3 className="mt-8 text-[20px] font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[28px] border border-white/[0.09] bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-zinc-400" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">What success looks like after incubation</p>
            </div>
            <p className="mt-6 max-w-[72ch] text-[22px] leading-[1.55] tracking-[-0.02em] text-zinc-200">A validated demand signal from the concierge pilot, a clear understanding of which features drive conversion, a defined MVP scope, and proof that candidates value the product enough to pay.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader eyebrow="04 - Product boundaries" title="Build the smallest conversion-improving layer." body="The first version should help candidates discover better opportunities faster and apply with higher confidence." />
          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/[0.08]">
            {scopeItems.map(([label, value], index) => (
              <div key={label} className={"grid gap-4 bg-black/20 px-6 py-6 md:grid-cols-[0.32fr_0.68fr] md:items-start" + (index > 0 ? " border-t border-white/[0.07]" : "")}>
                <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-600">{label}</p>
                <p className="text-[15px] leading-[1.7] text-zinc-300">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader eyebrow="05 - My contribution" title="Co-Founder and CEO" body="My role is to keep the product grounded in a real candidate problem, drive the ABB validation process, and translate learnings into an evidence-led product roadmap." />
          <div className="space-y-3">
            {roleItems.map((item, index) => (
              <div key={item} className="flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.022] p-5">
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
          <SectionHeader eyebrow="06 - Evidence-led roadmap" title="From pilot insight to market product." />
          <div className="relative mt-14 grid gap-4 md:grid-cols-4">
            <div aria-hidden className="absolute left-0 right-0 top-[23px] hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
            {roadmap.map((item, index) => (
              <div key={item.phase} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-black font-mono text-[10px] text-zinc-500 shadow-[0_0_28px_rgba(255,255,255,0.06)]">0{index + 1}</div>
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
            <p className="relative z-10 mt-9 font-mono text-[10px] uppercase tracking-[0.19em] text-zinc-600">Current position</p>
            <h2 className="relative z-10 mt-5 max-w-[16ch] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[62px]">The pilot teaches what no pitch can.</h2>
            <p className="relative z-10 mt-6 max-w-[66ch] text-[15px] leading-[1.75] text-zinc-400">AISE is running its concierge pilot to learn from real candidates before a single line of product code is written.</p>
            <div className="relative z-10 mt-9 flex flex-wrap gap-3">
              <Link href="/#case-studies" className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white">
                Explore other work
              </Link>
              <a href="mailto:hesenovfizuli2020@gmail.com" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition-all duration-300 hover:scale-[1.02]">
                Discuss collaboration
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          <p className="mt-7 text-[11px] leading-[1.7] text-zinc-700">Stage note: product features and roadmap items on this page are working hypotheses refined through ABB incubation and concierge pilot learnings.</p>
        </div>
      </section>
    </main>
  )
}
