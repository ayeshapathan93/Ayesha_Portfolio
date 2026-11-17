import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../data/personalInfo'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import ResumeLink from './ResumeLink'

const ids = navLinks.map((link) => link.id)

export default function Navbar() {
  const active = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-3 right-0 left-0 z-50 px-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between gap-3 rounded-full px-3 py-2 transition sm:px-4 ${
          scrolled || open ? 'glass shadow-[var(--shadow)]' : 'bg-transparent'
        }`}
      >
        <a href="#home" className="px-2 text-sm font-semibold tracking-[0.16em] text-ink">
          <span className="sm:hidden">AP.</span>
          <span className="hidden sm:inline">
            AYESHA PATHAN <span className="text-muted">/ AP.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`rounded-full px-3 py-2 text-[13px] transition ${
                  isActive ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ResumeLink className="btn btn-primary px-3 text-sm whitespace-nowrap sm:px-4" />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="glass mx-auto mt-3 max-w-[1180px] rounded-[1.75rem] p-4 xl:hidden"
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-base ${
                    active === link.id ? 'bg-ink text-bg' : 'text-ink hover:bg-card'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
