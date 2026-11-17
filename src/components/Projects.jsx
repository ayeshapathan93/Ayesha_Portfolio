import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section-y">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          kicker="Projects"
          title="Things I've Built"
          text="From practical business solutions to intelligent applications, here's a selection of projects I've worked on."
        />
        <div className="section-follow grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} delay={Math.min(index * 0.05, 0.2)} />
          ))}
        </div>
      </div>
      {active ? <ProjectModal project={active} onClose={() => setActive(null)} onSelect={setActive} /> : null}
    </section>
  )
}
