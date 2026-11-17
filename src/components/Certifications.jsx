import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { visibleCertifications } from '../data/certifications'
import CertificateModal from './CertificateModal'
import SectionHeading from './SectionHeading'
import TiltCard, { TiltMedia } from './TiltCard'

function CertificateCard({ certificate, onOpen, delay }) {
  const [failed, setFailed] = useState(false)

  return (
    <TiltCard delay={delay} maxShift={6}>
      <div className="flex h-full flex-col">
        <button
          type="button"
          className="relative block aspect-[4/3] w-full overflow-hidden bg-[#f6f1e7] text-left"
          onClick={() => onOpen(certificate)}
          aria-label={`View certificate: ${certificate.title}`}
        >
          {failed ? (
            <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-[#3f3a32]">
              Certificate image could not be loaded. The file path is {certificate.image}.
            </span>
          ) : (
            <TiltMedia className="absolute inset-3" scale={false}>
              <img
                src={certificate.image}
                alt={certificate.imageAlt}
                loading="lazy"
                decoding="async"
                onError={() => setFailed(true)}
                className="h-full w-full object-contain"
              />
            </TiltMedia>
          )}
        </button>
        <div className="flex flex-1 flex-col p-5">
          {certificate.date ? <p className="kicker">{certificate.date}</p> : null}
          <h3 className={`text-xl text-ink ${certificate.date ? 'mt-3' : ''}`}>{certificate.title}</h3>
          <p className="mt-2 text-sm text-muted">{certificate.issuer}</p>
          {certificate.summary ? (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{certificate.summary}</p>
          ) : null}
          <div className="mt-auto pt-5">
            <button type="button" className="btn btn-ghost w-fit" onClick={() => onOpen(certificate)}>
              View Certificate <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="section-y">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          kicker="Certifications"
          title="Certifications & Achievements"
          text="Course, internship, and participation certificates, shown from the original documents."
        />
        <div className="section-follow grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertifications.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onOpen={setActive}
              delay={Math.min(index * 0.05, 0.2)}
            />
          ))}
        </div>
      </div>
      <CertificateModal
        certificate={active}
        certificates={visibleCertifications}
        onClose={() => setActive(null)}
        onSelect={setActive}
      />
    </section>
  )
}
