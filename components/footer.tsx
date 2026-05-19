"use client"

import { useEffect, useState } from "react"

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Connect", href: "#contact" },
]

function LiveBakuTime() {
  const [time, setTime] = useState("Syncing Baku time")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Baku",
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    })

    const update = () => setTime(formatter.format(new Date()))
    update()
    const interval = window.setInterval(update, 1000)

    return () => window.clearInterval(interval)
  }, [])

  return <span suppressHydrationWarning>{time}</span>
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 md:px-10 lg:px-16">
      <div className="glass-surface edge-lit-card group mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-5 rounded-2xl border border-white/[0.055] bg-zinc-950/55 px-5 py-5 transition-all duration-500 hover:border-white/[0.14] hover:bg-zinc-900/70 md:grid-cols-[1fr_auto_1fr]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.07),transparent_62%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Left */}
        <p className="relative z-10 flex flex-col gap-1 font-mono text-[12px] text-zinc-600 md:flex-row md:items-center md:gap-2">
          <span>F.H &middot; Baku, Azerbaijan</span>
          <span className="hidden text-zinc-700 md:inline"> &middot; </span>
          <span className="text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
            <LiveBakuTime />
          </span>
        </p>

        {/* Center */}
        <nav className="relative z-10 flex flex-wrap items-center justify-start gap-4 md:justify-center">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] text-zinc-700 transition-colors duration-300 hover:text-zinc-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <p className="relative z-10 font-mono text-[12px] text-zinc-700 md:text-right">
          &copy; 2026 Fizuli Hasanov &middot; Live local time
        </p>
      </div>
    </footer>
  )
}
