import { ImageResponse } from "next/og"

// Server-only. Imported by the opengraph-image route files, which each supply
// their own copy — Next does not cascade a parent opengraph-image into nested
// segments, so every route that wants a card needs its own.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

export function renderOgCard({
  eyebrow,
  title,
  subtitle,
  tags,
}: {
  eyebrow: string
  title: string
  subtitle: string
  tags: string[]
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.16), rgba(255,255,255,0.04) 42%, transparent 72%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: "#71717a",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: title.length > 14 ? 88 : 108,
              letterSpacing: -5,
              lineHeight: 1,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              width: 140,
              height: 2,
              marginTop: 36,
              backgroundColor: "rgba(255,255,255,0.22)",
            }}
          />

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#d4d4d8",
              maxWidth: 940,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {tags.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 21,
                color: "#a1a1aa",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    OG_SIZE
  )
}
