import { motion, useReducedMotion } from 'framer-motion'
import { education } from '../data/personalInfo'
import SectionHeading from './SectionHeading'

export default function Education() {
  const reduce = useReducedMotion()

  return (
    <section id="education" className="section-y">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          kicker="Education"
          title="Where I studied."
          text="A straight record of the programs and results I can document."
        />
        <ol className="section-follow relative grid gap-4 border-l border-line pl-6 sm:pl-10">
          {education.map((item, index) => (
            <motion.li
              key={item.id}
              className="panel relative p-6 sm:p-8"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <span className="absolute top-8 -left-[1.95rem] h-3 w-3 rounded-full border-2 border-bg bg-accent sm:-left-[2.95rem]" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  {item.period ? <p className="kicker">{item.period}</p> : null}
                  <h3 className={`text-2xl text-ink sm:text-3xl ${item.period ? 'mt-3' : ''}`}>{item.degree}</h3>
                  <p className="mt-2 text-muted">{item.school}</p>
                </div>
                <p className="display text-4xl text-accent">{item.result}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
