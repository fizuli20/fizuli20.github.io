"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { id: "case-studies", label: "Case Studies" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Connect" },
]

function MagneticLink({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode
  href: string
  className: string
  onClick?: () => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 18 })
  const springY = useSpring(y, { stiffness: 180, damping: 18 })
  const reduce = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.28)
    y.set((e.clientY - centerY) * 0.28)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function Nav() {
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 16)

    const sections = links.map((l) => document.getElementById(l.id))
    const scrollPos = window.scrollY + 120

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if (section && section.offsetTop <= scrollPos) {
        setActive(links[i].id)
        return
      }
    }
    setActive("")
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ top: "1px" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between gap-5 px-5 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-12"
      >
        {/* Left — personal logo + wordmark */}
        <a
          href="#top"
          aria-label="Fizuli Hasanov — Home"
          className="group flex items-center gap-2.5 rounded-full border border-transparent py-1 pr-3 transition-all duration-500 hover:border-white/[0.08] hover:bg-white/[0.025] lg:justify-self-start"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_14px_38px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-all duration-500 group-hover:bg-white/[0.085] group-hover:ring-white/25 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_16px_44px_rgba(0,0,0,0.4),0_0_28px_rgba(255,255,255,0.08)]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_15%,rgba(255,255,255,0.18),transparent_42%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
            <Image
              src="/personal-logo.png"
              alt=""
              fill
              sizes="40px"
              priority
              className="object-contain opacity-95 transition-opacity duration-500 group-hover:opacity-100"
              style={{ transform: "scale(2.05)", objectPosition: "50% 32%" }}
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="font-mono text-[12px] font-semibold tracking-[0.18em] text-white transition-colors duration-500">
              FIZULI HASANOV
            </span>
            <span className="mt-1.5 flex items-center gap-2 font-mono text-[9px] tracking-[0.26em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
              <span
                aria-hidden
                className="h-px w-5 bg-gradient-to-r from-white/50 to-transparent"
              />
              AI &middot; INNOVATION &middot; PRODUCT STRATEGY
            </span>
          </span>
        </a>

        {/* Center — links with layoutId underline */}
        <ul className="glass-surface hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-2xl lg:flex lg:justify-self-center">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                className={`relative z-10 block rounded-full px-3.5 py-2 font-mono text-[12px] transition-colors duration-300 ${
                  active === l.id ? "text-white" : "text-zinc-500 hover:text-zinc-100"
                }`}
              >
                {l.label}
              </a>
              {active === l.id && !reduce && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="absolute inset-0 rounded-full border border-white/[0.12] bg-white/[0.095] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_24px_rgba(255,255,255,0.06)]"
                  transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
                />
              )}
              {active === l.id && reduce && (
                <div className="absolute inset-0 rounded-full border border-white/[0.12] bg-white/[0.095]" />
              )}
            </li>
          ))}
        </ul>

        {/* Right — availability + CTA */}
        <div className="flex items-center gap-4 lg:justify-self-end">
          <div className="hidden items-center gap-2 whitespace-nowrap xl:flex">
            <span
              aria-hidden
              className="h-2 w-2 shrink-0 rounded-full bg-white animate-pulse-silver"
            />
            <span className="font-mono text-[11px] leading-none text-zinc-500">
              AI Innovation &middot; Product Strategy &middot; Venture Building
            </span>
          </div>

          <MagneticLink
            href="#contact"
            className="hidden whitespace-nowrap rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[12px] leading-none text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_38px_rgba(0,0,0,0.32)] transition-all duration-500 hover:border-white/25 hover:bg-white/[0.09] hover:text-white md:inline-flex"
          >
            Connect &rarr;
          </MagneticLink>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-sm lg:hidden">
          <ul className="mx-auto flex max-w-[1120px] flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-mono text-[13px] text-zinc-400 transition-colors duration-150 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md border border-white/10 px-4 py-3 text-center font-mono text-[13px] text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                Connect &rarr;
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
