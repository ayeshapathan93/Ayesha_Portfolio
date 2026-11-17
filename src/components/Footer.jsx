import { navLinks, personalInfo } from '../data/personalInfo'

const socials = [
  { label: 'GitHub', href: personalInfo.github },
  { label: 'LinkedIn', href: personalInfo.linkedin },
  { label: 'Email', href: `mailto:${personalInfo.email}` },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-ink">AYESHA PATHAN</p>
          <p className="mt-3 max-w-sm text-muted">Software developer. Information Technology, 2023–2026.</p>
          <p className="mt-6 text-sm text-muted">Designed with creativity. Built with code.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="text-sm text-muted transition hover:text-ink" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-ink"
              {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-muted sm:px-8">
        © {year} Ayesha Pathan. All rights reserved.
      </div>
    </footer>
  )
}
