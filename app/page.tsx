import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Bento } from "@/components/bento"
import { About } from "@/components/about"
import { Ventures } from "@/components/ventures"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Bento />
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
