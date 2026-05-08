"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { id: "work", label: "01\u00b7Work" },
  { id: "experience", label: "02\u00b7Experience" },
  { id: "skills", label: "03\u00b7Skills" },
  { id: "awards", label: "04\u00b7Awards" },
  { id: "contact", label: "05\u00b7Connect" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-white/5 bg-black/90 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ top: "1px" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[52px] max-w-[1120px] items-center justify-between px-6 md:px-10 lg:px-16"
      >
        {/* Left — monogram */}
        <a
          href="#top"
          className="font-mono text-[14px] text-zinc-500 transition-colors duration-150 hover:text-zinc-100"
        >
          FH
        </a>

        {/* Center — links with layoutId underline */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                className={`font-mono text-[13px] transition-colors duration-150 ${
                  active === l.id ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {l.label}
              </a>
              {active === l.id && !reduce && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] w-full bg-[#2563eb]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {active === l.id && reduce && (
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2563eb]" />
              )}
            </li>
          ))}
        </ul>

        {/* Right — availability + CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse-blue"
            />
            <span className="font-mono text-[12px] text-zinc-500">
              Available &middot; Summer 2026
            </span>
          </div>

          <MagneticLink
            href="#contact"
            className="hidden rounded-full border border-white/10 px-4 py-1.5 font-mono text-[13px] text-zinc-400 transition-all duration-200 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white md:inline-flex"
          >
            Hire me &rarr;
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
                className="mt-2 block rounded-md border border-white/10 px-4 py-3 text-center font-mono text-[13px] text-zinc-400 transition-all duration-200 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white"
              >
                Hire me &rarr;
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
