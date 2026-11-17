import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

const HeroCanvas = lazy(() => import('./HeroVisual'))

function CssVisual() {
  return (
    <div className="relative h-full min-h-[320px] w-full" aria-hidden="true">
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_30%,#ffffff,#bfdbfe_26%,#3b82f6_58%,#0b1220_78%)] shadow-[0_30px_80px_rgba(59,130,246,0.35)]" />
      <div className="float-slow absolute top-[18%] right-[12%] h-10 w-10 rounded-2xl bg-accent2/80" />
      <div className="float-delay absolute bottom-[18%] left-[14%] h-8 w-8 rounded-full border border-white/30 bg-accent/70" />
    </div>
  )
}

const chips = [
  { label: 'React.js', className: 'top-8 left-2' },
  { label: 'Node.js', className: 'top-16 right-0' },
  { label: 'Python', className: 'bottom-16 left-0' },
  { label: 'MongoDB', className: 'right-6 bottom-8' },
]

function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [useCanvas, setUseCanvas] = useState(false)
  const words = personalInfo.heroTitle.split(' ')

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches
    setUseCanvas(wide && !reduce && canUseWebGL())
  }, [reduce])

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute top-[-10%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5%] bottom-0 h-72 w-72 rounded-full bg-accent2/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1.5 text-xs font-medium text-ink"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-accent2 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-accent2" />
            </span>
            {personalInfo.availability}
          </motion.p>

          <p className="kicker mt-7">{personalInfo.heroLabel}</p>
          <h1 className="display mt-4 max-w-4xl text-[3.1rem] text-ink sm:text-7xl lg:text-[5.4rem]">
            {words.map((word, index) => {
              const accent = word.startsWith('Matter')
              return (
                <motion.span
                  key={`${word}-${index}`}
                  className={`mr-[0.22em] inline-block ${accent ? 'text-accent italic' : ''}`}
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              )
            })}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{personalInfo.heroText}</p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {personalInfo.roles.map((role) => (
              <li key={role} className="rounded-full border border-line bg-card/80 px-3 py-1.5 text-sm text-ink">
                {role}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href="#projects">
              Explore My Work <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px]">
          <div className="absolute inset-6 rounded-full bg-accent/15 blur-3xl" />
          {useCanvas ? (
            <Suspense fallback={<CssVisual />}>
              <HeroCanvas />
            </Suspense>
          ) : (
            <CssVisual />
          )}
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`glass float-slow absolute hidden rounded-full px-3 py-1.5 text-xs font-medium text-ink md:inline-flex ${chip.className}`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
