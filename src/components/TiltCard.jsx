import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useCardTilt, useFinePointer } from '../hooks/useCardTilt'

const TiltContext = createContext({
  shiftX: 0,
  shiftY: 0,
  active: false,
  enabled: false,
})

export function useTiltMotion() {
  return useContext(TiltContext)
}

export function TiltMedia({ children, className = '', scale = true }) {
  const { shiftX, shiftY, active, enabled } = useTiltMotion()
  const transform = !enabled
    ? undefined
    : `translate3d(${shiftX}px, ${shiftY}px, 0) scale(${scale ? (active ? 1.06 : 1.02) : 1})`

  return (
    <div
      className={className}
      style={
        transform
          ? { transform, transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }
          : undefined
      }
    >
      {children}
    </div>
  )
}

export default function TiltCard({ children, className = '', delay = 0, maxTilt = 7, maxShift = 8 }) {
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const enabled = Boolean(fine && !reduce)
  const { tilt, onPointerMove, onPointerLeave } = useCardTilt({ maxTilt, maxShift, enabled })

  return (
    <motion.div
      className="h-full"
      style={{ perspective: '1100px' }}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        className={`panel h-full overflow-hidden ${className}`}
        onPointerMove={enabled ? onPointerMove : undefined}
        onPointerLeave={enabled ? onPointerLeave : undefined}
        animate={{
          rotateX: enabled ? tilt.rotateX : 0,
          rotateY: enabled ? tilt.rotateY : 0,
          scale: enabled && tilt.active ? 1.028 : 1,
        }}
        whileTap={reduce || enabled ? undefined : { scale: 0.985 }}
        transition={
          reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 22, mass: 0.42 }
        }
        style={{
          transformStyle: 'preserve-3d',
          boxShadow:
            enabled && tilt.active
              ? '0 26px 50px rgba(0, 0, 0, 0.38), 0 0 34px rgba(59, 130, 246, 0.2)'
              : 'var(--shadow)',
        }}
      >
        <TiltContext.Provider
          value={{
            shiftX: enabled ? tilt.shiftX : 0,
            shiftY: enabled ? tilt.shiftY : 0,
            active: Boolean(enabled && tilt.active),
            enabled,
          }}
        >
          {children}
        </TiltContext.Provider>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
          style={{
            opacity: enabled && tilt.active ? 1 : 0,
            transition: 'opacity 0.35s ease',
            background: `radial-gradient(380px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.42), rgba(255,255,255,0.08) 28%, transparent 54%)`,
            mixBlendMode: 'soft-light',
          }}
        />
      </motion.article>
    </motion.div>
  )
}
