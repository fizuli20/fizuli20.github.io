import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/components/og-card"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "FVeda — case study by Fizuli Hasanov"

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Case study · Fizuli Hasanov",
    title: "FVeda",
    subtitle: "Real markets. Paper money. Real skill.",
    tags: ["Founder", "Live product", "$400 Aspire Seed Fund"],
  })
}
