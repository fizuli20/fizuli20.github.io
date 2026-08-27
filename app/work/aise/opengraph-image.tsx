import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/components/og-card"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "AISE — case study by Fizuli Hasanov"

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Case study · Fizuli Hasanov",
    title: "AISE",
    subtitle: "Candidate intelligence for the Azerbaijani job market",
    tags: ["Co-Founder & CEO", "ABB 6th Incubation", "Concierge pilot"],
  })
}
