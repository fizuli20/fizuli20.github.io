import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/components/og-card"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Fizuli Hasanov — Founder & CEO · Innovation & Venture Building"

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Baku · Azerbaijan",
    title: "Fizuli Hasanov",
    subtitle: "Founder & CEO · Innovation & Venture Building",
    tags: ["Presidential Scholar · Top 3 of 20,000+", "Aspire (HBS) Seed Fund", "3 Active Ventures"],
  })
}
