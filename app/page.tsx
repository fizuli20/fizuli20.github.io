import { ScrollProgress } from "@/components/scroll-progress"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { MetricsTicker } from "@/components/metrics-ticker"
import { About } from "@/components/about"
import { Ventures } from "@/components/ventures"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <MetricsTicker />
        <About />
        <Ventures />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
