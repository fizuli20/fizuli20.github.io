import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/components/og-card"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "HyperAutomation — case study by Fizuli Hasanov"

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Case study · Fizuli Hasanov",
    title: "HyperAutomation",
    subtitle: "Digital warehouse workflows connected to robot execution",
    tags: ["Founder", "SABAH.HUB Cohort 9", "Paused"],
  })
}
