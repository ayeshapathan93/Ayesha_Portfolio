import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({ kicker, title, text, align = 'left' }) {
  const reduce = useReducedMotion()
  const classes = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <motion.div
      className={`max-w-3xl ${classes}`}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="display mt-3 text-5xl text-ink sm:text-6xl md:text-7xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p> : null}
    </motion.div>
  )
}
