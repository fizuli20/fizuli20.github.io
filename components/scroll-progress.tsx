"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.4)] z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
