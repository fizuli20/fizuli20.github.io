import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/components/og-card"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "Carboryn — case study by Fizuli Hasanov"

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Case study · Fizuli Hasanov",
    title: "Carboryn",
    subtitle: "Industrial residue and captured carbon into mineral products",
    tags: ["Co-Founder & Product Strategy Lead", "1st of 100+", "Pilot pathway"],
  })
}
