"use client"

import { motion, useReducedMotion } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function SectionLabel({ label }: { label: string }) {
  const reduce = useReducedMotion()

  return (
    <div className="flex items-center gap-3">
      <motion.p
        initial={reduce ? undefined : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
        className="font-mono text-[10px] uppercase tracking-[0.11em] text-zinc-600"
      >
        {label}
      </motion.p>
      <motion.div
        initial={reduce ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.1 }}
        className="h-px w-10 origin-left bg-white/20"
      />
    </div>
  )
}
