import { motion, useReducedMotion } from 'framer-motion'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="section-y">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          kicker="Experience"
          title="Work so far."
          text="Only the roles and responsibilities I can state directly."
        />
        <div className="section-follow grid gap-4">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              className="panel grid gap-6 p-6 sm:p-8 lg:grid-cols-[240px_1fr]"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <div>
                <p className="text-sm text-muted">{item.period}</p>
                <p className="mt-2 text-sm text-muted">{item.location}</p>
              </div>
              <div>
                <h3 className="text-3xl text-ink">{item.role}</h3>
                <p className="mt-2 text-lg text-accent">{item.company}</p>
                {item.meta ? <p className="mt-2 text-sm text-muted">Batch: {item.meta}</p> : null}
                {item.points.length > 0 ? (
                  <ul className="mt-5 grid gap-2 text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-muted">
                    Virtual internship details are limited to the program name, batch, and duration above.
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
