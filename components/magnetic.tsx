"use client"

import { useRef } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

/**
 * Anchor that drifts toward the cursor. Shared by the nav and the hero,
 * which each carried their own copy of this before.
 */
export function MagneticLink({
  children,
  href,
  className,
  onClick,
  download,
}: {
  children: React.ReactNode
  href: string
  className: string
  onClick?: () => void
  download?: boolean | string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 18 })
  const springY = useSpring(y, { stiffness: 180, damping: 18 })
  const reduce = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.28)
    y.set((e.clientY - centerY) * 0.28)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      download={download || undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}
