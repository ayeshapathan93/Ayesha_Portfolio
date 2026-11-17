import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import PlaceholderPreview from './PlaceholderPreview'
import TiltCard, { TiltMedia } from './TiltCard'

export default function ProjectCard({ project, onOpen, delay = 0 }) {
  const [failed, setFailed] = useState(false)
  const showImage = project.hasImage && !failed

  return (
    <TiltCard delay={delay}>
      <div className="flex h-full flex-col">
        <button
          type="button"
          className="relative block aspect-[16/10] w-full overflow-hidden bg-[#070b14] text-left"
          onClick={() => onOpen(project)}
          aria-label={`View details for ${project.name}`}
        >
          <span className="pointer-events-none absolute top-3 left-3 z-10 rounded-full border border-white/15 bg-[#070b14]/75 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-white uppercase">
            Project {project.number}
          </span>
          <TiltMedia className="absolute inset-0">
            {showImage ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                onError={() => setFailed(true)}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <PlaceholderPreview project={project} compact />
            )}
          </TiltMedia>
        </button>

        <div className="flex flex-1 flex-col p-5">
          <p className="kicker">{project.category}</p>
          <h3 className="mt-3 text-xl text-ink">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex gap-3 pt-5">
            {project.github ? (
              <a
                className="btn btn-ghost min-h-11 flex-1 px-4 text-sm whitespace-nowrap"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : (
              <span
                className="btn btn-ghost min-h-11 flex-1 cursor-not-allowed px-4 text-sm whitespace-nowrap opacity-45"
                aria-disabled="true"
                title="GitHub link not added yet"
              >
                GitHub
              </span>
            )}
            {project.live ? (
              <a
                className="btn btn-ghost min-h-11 flex-1 px-4 text-sm whitespace-nowrap"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                View Project <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <button type="button" className="btn btn-ghost min-h-11 flex-1 px-4 text-sm whitespace-nowrap" onClick={() => onOpen(project)}>
                View Project <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </TiltCard>
  )
}
