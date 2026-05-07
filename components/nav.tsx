"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[#0a0a0a]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5"
          aria-label="Fizuli Hasanov — home"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-1 ring-[var(--color-border)] transition-all group-hover:ring-[var(--color-accent)]">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-[15px] tracking-tight text-foreground">
              Fizuli Hasanov
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
              Architect of Value
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--color-accent)] px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] md:inline-flex"
          >
            Hire me &rarr;
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-card)] hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-medium text-white"
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
