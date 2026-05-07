"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const PILLARS = [
  {
    n: "01",
    title: "Strategic Logic",
    body:
      "Business law, financial modeling, EY Strategy School, Aspire Leaders (Harvard-founded), Hult Prize.",
  },
  {
    n: "02",
    title: "AI Orchestration",
    body:
      "Agentic workflows, prompt engineering, LedgerLens (OCR), AutoFlow AZ (RPA+AGV), GenAI certified.",
  },
  {
    n: "03",
    title: "Technical Fluency",
    body:
      "Python, SQL, Power BI, Tableau, scikit-learn, XGBoost. Production ML on 284K+ transactions. PR-AUC 0.87.",
  },
]

export function About() {
  return (
    <section
      id="about"
      aria-label="About Fizuli Hasanov"
      className="relative border-t border-[var(--color-border)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="00" label="About" />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <h2 className="font-serif text-[32px] leading-[1.1] tracking-tight text-foreground sm:text-[40px]">
              Operator&rsquo;s instincts.
              <br />
              <span className="text-[var(--color-muted)]">Researcher&rsquo;s discipline.</span>
            </h2>

            <p className="mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
              I&rsquo;m a BBA student at Baku Higher Oil School (GPA 96.3/100) and a Presidential
              Scholar &mdash; top 3 of 20,000+ university entrance applicants in Azerbaijan. I move
              between Python pipelines, SQL warehouses, financial models, and pitch rooms &mdash;
              turning raw data into decisions that operators and investors can act on. I&rsquo;ve
              won two 1st-place hackathons in a single week and have two ventures under active
              incubation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[260px] w-[260px] sm:h-[280px] sm:w-[280px]">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full ring-2 ring-[var(--color-accent)]"
                />
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-full border border-[var(--color-border)]"
                />
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Fizuli Hasanov"
                    fill
                    sizes="280px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3"
        >
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className="bg-[var(--color-background)] p-7 transition-colors hover:bg-[var(--color-card)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--color-accent)]">
                  {p.n}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
                  /
                </span>
                <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-muted)]">{p.body}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--color-accent)]">
        {index}
      </span>
      <span aria-hidden className="h-px w-10 bg-[var(--color-border)]" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
        {label}
      </span>
    </div>
  )
}
