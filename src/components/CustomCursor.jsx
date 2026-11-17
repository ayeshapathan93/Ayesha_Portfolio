import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const reduce = useReducedMotion()
  const [point, setPoint] = useState({ x: -100, y: -100 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduce)
  }, [reduce])

  useEffect(() => {
    if (!enabled) return undefined
    const move = (event) => setPoint({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[65] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 mix-blend-difference md:block"
      style={{ left: point.x, top: point.y }}
    />
  )
}
