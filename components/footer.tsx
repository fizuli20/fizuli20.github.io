import Image from "next/image"
import { Github } from "lucide-react"

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[#0a0a0a] px-5 py-10 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-1 ring-[var(--color-border)]">
            <Image
              src="/logo.png"
              alt="Fizuli Hasanov logo"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
            Fizuli Hasanov &middot; Baku &middot; UTC+4
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
            Last updated May 2026
          </span>
          <a
            href="https://github.com/fizuli20/fizuli20.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-foreground"
          >
            <Github size={12} />
            Source
          </a>
        </div>
      </div>
    </footer>
  )
}
