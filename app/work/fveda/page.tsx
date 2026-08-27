import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Check,
  CircleDot,
  Gauge,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react"

export const metadata: Metadata = {
  title: "FVeda Case Study | Fizuli Hasanov",
  description:
    "FVeda is a live financial-education product where 18-27 year-olds learn investing by trading real market prices with paper money, coached by an AI that is architecturally forbidden from giving advice.",
  alternates: {
    canonical: "/work/fveda",
  },
  openGraph: {
    title: "FVeda Case Study | Fizuli Hasanov",
    description:
      "Real markets. Paper money. Real skill. A shipped investing-education product built solo on a $400 seed grant.",
    url: "/work/fveda",
  },
}

const principles = [
  {
    icon: Gauge,
    title: "Remove the risk",
    body: "Real live prices and real mechanics — spreads, limit orders, cost basis, market hours — but paper money. Mistakes cost nothing and teach everything.",
  },
  {
    icon: ShieldCheck,
    title: "Teach judgment",
    body: "The coach explains how to decide and refuses to say what to buy. That is a pedagogical stance before it is a legal one.",
  },
  {
    icon: Sparkles,
    title: "Habit over hype",
    body: "Daily insights, streaks, five-minute lessons. Small consistent actions — the opposite of the trade-more casino loop.",
  },
]

const surfaces = [
  { icon: LineChart, title: "Invest", body: "A paper trading floor: $10,000 of paper cash across 23 real assets at live prices, with market and limit orders, a simulated spread, and lifetime realized P&L." },
  { icon: GraduationCap, title: "Learn", body: "21 written lessons across 5 tracks, each ending in a quiz whose per-answer explanations are the actual lesson. Plus 31 rotating daily insights." },
  { icon: Bot, title: "Coach", body: "A streaming AI coach that knows your portfolio, holdings, and progress — and is prevented at two independent layers from ever recommending a trade." },
  { icon: Wallet, title: "Budget", body: "Real income and expense tracking with category and trend breakdowns across five currencies. Free forever, with no upsell, as a deliberate trust anchor." },
  { icon: LayoutDashboard, title: "Dashboard", body: "A first-run checklist, streak, portfolio and lesson summaries, and a deep link straight to whichever lesson you have not finished yet." },
  { icon: CircleDot, title: "Account", body: "Local-first by default. An optional cloud account uploads existing local data on first sign-in and syncs in the background from then on." },
]

const engineering = [
  ["Cost discipline as a design constraint", "The coach tries two strong, independent free models before any paid provider is considered, so the running cost of an AI feature stays near zero regardless of usage."],
  ["Correctness where money is involved", "Cross-device sync is a real merge, not last-write-wins. Cash, holdings, and realized P&L are re-derived by replaying the entire merged trade log, so two devices can never silently drop each other's trades."],
  ["Staying inside a free tier on purpose", "A shared server-side price cache means market-data call volume stays flat as users are added, rather than scaling with them."],
  ["Tests where mistakes are expensive", "76 tests cover the money math, the coach guardrail's true and false positives, budget aggregation, and sync merging. Changes to money math or the guardrail require tests in the same commit."],
]

const roleItems = [
  "Own the product end to end — positioning, scope, pedagogy, design system, and every shipping decision.",
  "Draw and defend the scope boundary at six surfaces, refusing feature expansion until real usage data justifies it.",
  "Set the teach-don't-advise rule as an architectural constraint rather than a guideline, and keep it inviolable.",
  "Deliberately defer monetization, instrumenting willingness-to-pay signals instead of building a paywall early.",
]

const scopeItems = [
  ["Shipped and live", "All six surfaces, live market data with real candlestick charts, the guarded streaming coach, cloud accounts with merge-based sync, and a full retention loop of email and web push driven by a daily job."],
  ["Deliberately excluded", "No social feed, no multiple portfolios, no native app, and no billing code — none of it until real usage data justifies the complexity."],
  ["Written and waiting", "Three further lesson tracks are fully written behind the Free/Plus boundary, ready to unlock the moment retention justifies charging."],
]

const roadmap = [
  { phase: "Now", title: "Get it in front of users", body: "Ship the live product to a standing cohort of 63 survey respondents — the built-in day-one test audience." },
  { phase: "Measure", title: "Instrument the funnel", body: "Track signup to first trade to day-2 to day-7, and watch where people drop out and what they ask the coach." },
  { phase: "Then", title: "Fix activation", body: "Use the drop-off data to shorten the path to a first paper trade, rather than guessing at onboarding improvements." },
  { phase: "Only after", title: "Turn on Plus", body: "Unlock the written tracks behind a real paywall once retention — not intuition — says people will pay." },
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

export default function FVedaCaseStudy() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/70 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-10">
          <Link href="/#case-studies" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-300 hover:text-white">
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Portfolio
          </Link>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
              <span className="relative h-2 w-2 rounded-full bg-white/75 shadow-[0_0_14px_rgba(255,255,255,0.65)]" />
            </span>
            Live product
          </div>
          <a
            href="https://fveda.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          >
            fveda.site
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.055),transparent_52%)]" />
        <div aria-hidden className="aise-grid pointer-events-none absolute inset-0 opacity-40" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[54%] h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_70px_rgba(255,255,255,0.16)]" />
        <div className="relative mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">FinTech &middot; EdTech</span>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">Live product</span>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">$400 Aspire Seed Fund</span>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Flagship venture case study</p>
            <h1 className="mt-4 text-white" style={{ fontSize: "clamp(72px, 12vw, 148px)", fontWeight: 800, letterSpacing: "-0.065em", lineHeight: 0.88 }}>
              FVeda.
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-zinc-300">
              Real markets. Paper money. Real skill. Investing education for
              skeptical 18-27 year-olds, taught by doing rather than by lecture.
            </p>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.75] text-zinc-500">
              Built and shipped solo on a $400 Aspire Institute seed grant. Live
              at fveda.site, now entering pre-launch validation.
            </p>
          </div>
          <div className="aise-terminal glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.025] p-4 backdrop-blur-2xl md:p-5">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.7)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">Paper trading floor</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-700">LIVE PRICES</span>
            </div>
            <div className="grid gap-3 py-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.07] bg-black/30 p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700">Starting position</p>
                <div className="mt-5 space-y-3 font-mono text-[11px] text-zinc-500">
                  <p className="border-b border-dashed border-white/[0.08] pb-2">Paper cash: $10,000</p>
                  <p className="border-b border-dashed border-white/[0.08] pb-2">Assets: 23 real tickers</p>
                  <p className="border-b border-dashed border-white/[0.08] pb-2">Risk to user: none</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.035] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">Real mechanics taught</p>
                <div className="mt-4 space-y-2 font-mono text-[9px] text-zinc-500">
                  {[["Order types", "Market / limit"], ["Spread", "Simulated"], ["Cost basis", "Replayed"], ["Charts", "Real candles"]].map(([label, value], index) => (
                    <div key={label} className="flex items-center justify-between rounded-md border border-white/[0.06] bg-black/20 px-3 py-2">
                      <span>{label}</span>
                      <span className={index === 3 ? "text-zinc-300" : "text-zinc-500"}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 px-4 py-3">
              <div aria-hidden className="aise-scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">The coach never tells you what to buy</p>
            </div>
            <div aria-hidden className="mt-3 flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <span key={item} className="aise-confidence-pulse h-1 flex-1 rounded-full bg-white/10" style={{ animationDelay: item * 180 + "ms" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-3 md:grid-cols-4">
          {[["Role", "Founder · solo build"], ["Stage", "Live · pre-launch validation"], ["Funding", "$400 Aspire Institute seed grant"], ["North-star metric", "Day-7 retention"]].map(([label, value]) => (
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
            eyebrow="01 - Product thesis"
            title="Two walls keep young adults out of markets: fear and noise."
            body="Markets look like a casino where one wrong move is catastrophic, and the loudest voices sell certainty. A paper portfolio moving on real prices teaches risk in a way no article can — that feeling is the lesson."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, body }, index) => (
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
              <p className="mt-5 text-[19px] leading-[1.6] text-zinc-300">Young adults are told to start investing but are blocked by fear of catastrophic loss and by an information environment optimized to make them trade more.</p>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.38)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Product hypothesis</p>
              <p className="mt-5 text-[19px] leading-[1.6] text-white">A zero-risk simulator running on real prices, paired with a coach that refuses to give tips, can build genuine investing judgment where lectures and finfluencers fail.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="02 - What is shipped"
            title="Six surfaces. Scope held deliberately fixed."
            body="Everything below is built, tested, and live — not planned. The scope boundary is the product decision I defend hardest."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {surfaces.map(({ icon: Icon, title, body }, index) => (
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
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[["23", "Real assets across crypto, stocks, and ETFs"], ["21", "Written lessons across five tracks"], ["31", "Rotating daily insights"], ["76", "Tests guarding money math and the guardrail"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/[0.07] bg-black/25 p-5">
                <p className="font-mono text-[34px] font-bold tracking-[-0.05em] text-white">{value}</p>
                <p className="mt-2 text-[13px] leading-[1.6] text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="03 - The one non-negotiable"
            title="The coach teaches. It is architecturally forbidden from advising."
            body="Ask it whether to buy something and it redirects you into the concept, then invites you to simulate the trade in your paper portfolio. This is enforced at two independent layers, not asked for politely in a prompt."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="glass-surface relative overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.035] p-7">
              <div aria-hidden className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-white/[0.12] animate-contact-orbit" />
              <ShieldCheck size={18} className="relative z-10 text-zinc-400" />
              <p className="relative z-10 mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Why it is load-bearing</p>
              <p className="relative z-10 mt-4 text-[28px] font-semibold tracking-[-0.03em] text-white">Unlicensed financial advice is a real regulatory line</p>
              <p className="relative z-10 mt-4 text-[14px] leading-[1.7] text-zinc-500">So the rule is treated as inviolable. The guardrail is only ever extended to close a real gap — never loosened for convenience.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[["Layer one", "The system prompt establishes the teach-don't-advise stance"], ["Layer two", "A server-side guardrail scans every reply against forbidden patterns"], ["Streaming-safe", "The guardrail re-checks the accumulating buffer on every chunk, so a violation cannot slip through mid-stream"], ["On a match", "The stream aborts and the entire visible message is replaced with a safe rewrite"]].map(([label, value]) => (
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
          <SectionHeader
            eyebrow="04 - Decisions behind the build"
            title="The interesting choices were about constraint, not features."
            body="Each of these is a product decision that happens to be expressed in architecture."
          />
          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/[0.08]">
            {engineering.map(([label, value], index) => (
              <div key={label} className={"grid gap-4 bg-black/20 px-6 py-6 md:grid-cols-[0.34fr_0.66fr] md:items-start" + (index > 0 ? " border-t border-white/[0.07]" : "")}>
                <p className="text-[15px] font-semibold leading-[1.5] text-white">{label}</p>
                <p className="text-[15px] leading-[1.7] text-zinc-400">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeader
            eyebrow="05 - Scope discipline"
            title="What is in, what is out, and what is waiting."
          />
          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/[0.08]">
            {scopeItems.map(([label, value], index) => (
              <div key={label} className={"grid gap-4 bg-black/20 px-6 py-6 md:grid-cols-[0.32fr_0.68fr] md:items-start" + (index > 0 ? " border-t border-white/[0.07]" : "")}>
                <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-600">{label}</p>
                <p className="text-[15px] leading-[1.7] text-zinc-300">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[28px] border border-white/[0.09] bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-zinc-400" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Monetization stance</p>
            </div>
            <p className="mt-6 max-w-[72ch] text-[22px] leading-[1.55] tracking-[-0.02em] text-zinc-200">There is no billing code in the product. A Free/Plus boundary is drawn in the interface and a waitlist measures willingness to pay — but the paywall does not get built until retention proves someone should be charged.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="06 - My contribution"
            title="Founder"
            body="A solo build, which means every decision on this page — pedagogy, scope, design system, and the refusal to monetize early — is one I owned and have to defend."
          />
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
          <SectionHeader eyebrow="07 - What happens next" title="The build is done. The learning has not started." />
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
            <h2 className="relative z-10 mt-5 max-w-[16ch] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[62px]">Retention is the only question left.</h2>
            <p className="relative z-10 mt-6 max-w-[66ch] text-[15px] leading-[1.75] text-zinc-400">FVeda is shipped and live. What it needs now is not more building — it is real users, a measured funnel, and an honest day-7 number.</p>
            <div className="relative z-10 mt-9 flex flex-wrap gap-3">
              <a
                href="https://fveda.site"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Try FVeda
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link href="/#case-studies" className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white">
                Explore other work
              </Link>
              <a href="mailto:hesenovfizuli2020@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[11px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white">
                Discuss collaboration
              </a>
            </div>
          </div>
          <p className="mt-7 text-[11px] leading-[1.7] text-zinc-700">Stage note: FVeda is a live product in pre-launch validation. Feature descriptions reflect what is shipped today; retention and willingness-to-pay claims are explicitly not yet made, because the data does not exist yet.</p>
        </div>
      </section>
    </main>
  )
}
