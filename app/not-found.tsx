import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Page not found | Fizuli Hasanov",
  robots: { index: false, follow: true },
}

const destinations = [
  { label: "Case studies", href: "/#case-studies", note: "AISE, FVeda, Carboryn" },
  { label: "Experience", href: "/#experience", note: "Current and past roles" },
  { label: "Connect", href: "/#contact", note: "Start a conversation" },
]

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-black px-6 py-24 text-white md:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60svh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),rgba(255,255,255,0.04)_38%,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1120px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
          Error 404 &middot; Page not found
        </p>

        <h1
          className="mt-6 uppercase text-white"
          style={{
            fontSize: "clamp(56px, 11vw, 132px)",
            fontWeight: 800,
            letterSpacing: "-0.055em",
            lineHeight: 0.92,
          }}
        >
          Not found
        </h1>

        <hr className="mt-8 max-w-[120px] border-white/10" />

        <p className="mt-6 max-w-[58ch] text-[14px] leading-[1.7] text-zinc-400">
          This page does not exist, or it has been retired. Everything current
          lives on the main portfolio.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.16] bg-white/[0.035] px-5 py-2.5 text-[13px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_44px_rgba(0,0,0,0.36)] transition-all duration-500 hover:border-white/50 hover:bg-white hover:text-black"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to portfolio
          </Link>
          <a
            href="mailto:hesenovfizuli2020@gmail.com"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.04] px-5 py-2.5 text-[13px] text-zinc-300 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.1] hover:text-zinc-100"
          >
            Report a broken link
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-16 grid gap-3 border-t border-white/[0.07] pt-8 sm:grid-cols-3">
          {destinations.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group rounded-xl border border-white/[0.07] bg-white/[0.022] px-5 py-4 transition-all duration-500 hover:border-white/[0.18] hover:bg-white/[0.045]"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700 transition-colors duration-500 group-hover:text-zinc-500">
                {d.note}
              </p>
              <p className="mt-2 flex items-center gap-2 text-[15px] font-semibold text-white">
                {d.label}
                <ArrowUpRight
                  size={14}
                  className="text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
