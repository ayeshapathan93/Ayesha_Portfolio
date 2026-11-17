import { useState } from 'react'
import { UserRound } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import SectionHeading from './SectionHeading'

function ProfileSlot() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative h-[350px] sm:h-[420px] lg:h-[480px] overflow-hidden border-b border-line bg-[radial-gradient(circle_at_30%_18%,rgba(59,130,246,0.2),transparent_42%),linear-gradient(160deg,var(--bg-2),var(--card))]">
      <img
        src={personalInfo.profileImage}
        alt={visible ? 'Portrait of Ayesha Pathan' : ''}
        className={visible ? 'h-full w-full object-cover' : 'absolute h-px w-px overflow-hidden opacity-0'}
        onLoad={() => setVisible(true)}
        onError={() => setVisible(false)}
      />
      {visible ? null : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="grid h-24 w-24 place-items-center rounded-full border border-dashed border-line text-muted">
            <UserRound size={26} aria-hidden="true" />
          </span>
          <p className="text-sm font-medium text-ink">Profile photo</p>
          <p className="max-w-xs text-xs leading-relaxed text-muted">
            Add your photo at public/images/profile/ayesha-profile.png
          </p>
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
        <div>
          <SectionHeading kicker="About" title={personalInfo.aboutTitle} />
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{personalInfo.aboutText}</p>
          <div className="mt-8">
            <p className="text-sm font-medium tracking-wide text-ink">Technical interests</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {personalInfo.interests.map((interest) => (
                <li key={interest} className="rounded-full border border-line px-3 py-1.5 text-sm text-muted">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <article className="panel overflow-hidden">
          <ProfileSlot />
        </article>
      </div>
    </section>
  )
}
