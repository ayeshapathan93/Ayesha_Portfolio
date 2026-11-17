import { motion, useReducedMotion } from 'framer-motion'
import { skillCategories, skillIntro } from '../data/skills'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

export default function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="section-y">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading kicker="Skills" title={skillIntro.title} text={skillIntro.text} />
        <div className="section-follow grid items-stretch gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.id}
              className="panel relative overflow-hidden p-4 sm:p-5"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div
                className="pointer-events-none absolute -top-14 -right-8 h-32 w-32 rounded-full bg-accent/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="text-xl text-ink">{category.title}</h3>
                <p className="mt-1.5 max-w-sm text-sm text-muted">{category.text}</p>
              </div>
              <ul className="relative mt-4 grid grid-cols-1 gap-2 xl:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-center gap-2.5 rounded-xl border border-line bg-bg/40 px-2.5 py-2 transition hover:-translate-y-1 hover:border-accent/50"
                  >
                    <span className="transition duration-300 group-hover:scale-110">
                      <TechIcon item={item} compact />
                    </span>
                    <span className="text-sm font-medium text-ink">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
