import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { projects } from '../data/projects'
import PlaceholderPreview from './PlaceholderPreview'

export default function ProjectModal({ project, onClose, onSelect }) {
  const closeRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [project.id])

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const index = projects.findIndex((item) => item.id === project.id)
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onSelect(projects[(index + 1) % projects.length])
      if (event.key === 'ArrowLeft') onSelect(projects[(index - 1 + projects.length) % projects.length])
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [onClose, onSelect, project.id])

  const index = projects.findIndex((item) => item.id === project.id)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const showImage = project.hasImage && !failed

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#070b14]/75 backdrop-blur-sm"
        aria-label="Close project details"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="panel relative z-10 max-h-[100dvh] w-full overflow-y-auto sm:max-h-[92dvh] sm:max-w-5xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-card/90 px-4 py-3 backdrop-blur-md sm:px-6">
          <p className="kicker">
            Project {project.number} / {String(projects.length).padStart(2, '0')}
          </p>
          <div className="flex items-center gap-2">
            <button type="button" className="btn btn-ghost min-h-11 px-3" onClick={() => onSelect(previous)}>
              <ArrowLeft size={16} aria-hidden="true" />
              <span className="sr-only">Previous project</span>
            </button>
            <button type="button" className="btn btn-ghost min-h-11 px-3" onClick={() => onSelect(next)}>
              <ArrowRight size={16} aria-hidden="true" />
              <span className="sr-only">Next project</span>
            </button>
            <button ref={closeRef} type="button" className="btn btn-inverse min-h-11 px-3" onClick={onClose}>
              <X size={16} aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>

        <div className="bg-[#070b14]">
          {showImage ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              className="max-h-[70vh] w-full object-contain object-top"
              onError={() => setFailed(true)}
            />
          ) : (
            <PlaceholderPreview project={project} />
          )}
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="kicker">{project.category}</p>
            <h2 id="project-dialog-title" className="display mt-3 text-5xl text-ink sm:text-6xl">
              {project.name}
            </h2>
            <p className="mt-2 text-muted">{project.subtitle}</p>
            <p className="mt-6 text-base leading-8 text-muted">{project.description}</p>
            <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] text-ink uppercase">Key features</h3>
            <ul className="mt-4 grid gap-2 text-muted">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {project.workflow ? (
              <>
                <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] text-ink uppercase">How it works</h3>
                <ol className="mt-4 grid gap-3">
                  {project.workflow.map((step, stepIndex) => (
                    <li key={step} className="flex gap-3 text-muted">
                      <span className="display text-2xl text-accent">{String(stepIndex + 1).padStart(2, '0')}</span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </>
            ) : null}
          </div>
          <aside className="h-fit rounded-[1.5rem] border border-line bg-bg/40 p-5">
            <p className="kicker">Technology stack</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              {project.github ? (
                <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.live ? (
                <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
                  Live Demo <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </div>,
    document.body,
  )
}
