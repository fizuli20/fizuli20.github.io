const METRICS: Array<{ label: string; value: string }> = [
  { label: "GPA", value: "96.3 / 100" },
  { label: "DIM Score", value: "Top 3 / 20,000+" },
  { label: "Hackathons", value: "2× 1st Place" },
  { label: "Elevvo", value: "Outstanding / 2,000+" },
  { label: "ROC-AUC", value: "0.91" },
  { label: "PR-AUC", value: "0.87" },
  { label: "RFM Revenue", value: "$7.45M" },
  { label: "TikTok Reach", value: "2.1M+ Views" },
  { label: "Aspire Leaders", value: "9,988 / 54,337" },
  { label: "GenAI Scholarship", value: "100%" },
  { label: "Active Incubations", value: "2" },
]

function Row() {
  return (
    <ul className="flex shrink-0 items-center">
      {METRICS.map((m, i) => (
        <li
          key={`${m.label}-${i}`}
          className="flex shrink-0 items-center gap-3 px-7 font-mono text-[12px] tracking-[0.04em]"
        >
          <span className="uppercase text-[var(--color-muted-foreground)]">{m.label}</span>
          <span className="text-foreground">{m.value}</span>
          <span aria-hidden className="ml-7 h-1 w-1 rounded-full bg-[#2a2a2a]" />
        </li>
      ))}
    </ul>
  )
}

export function MetricsTicker() {
  return (
    <div
      aria-label="Career metrics"
      className="relative isolate overflow-hidden border-y border-[var(--color-border)] bg-[#0f0f0f]"
    >
      <div className="flex h-10 items-center">
        <div className="flex animate-marquee items-center" aria-hidden={false}>
          <Row />
          <Row />
        </div>
      </div>
      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent"
      />
    </div>
  )
}
