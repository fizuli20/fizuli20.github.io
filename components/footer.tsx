const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Connect", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-4 md:grid-cols-3">
        {/* Left */}
        <p className="font-mono text-[12px] text-zinc-600">
          F.H &middot; Baku, Azerbaijan &middot; UTC+4
        </p>

        {/* Center */}
        <nav className="flex items-center justify-center gap-4">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] text-zinc-700 transition-colors duration-150 hover:text-zinc-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <p className="font-mono text-[12px] text-zinc-700 md:text-right">
          &copy; 2026 Fizuli Hasanov &middot; Last updated May 2026
        </p>
      </div>
    </footer>
  )
}
