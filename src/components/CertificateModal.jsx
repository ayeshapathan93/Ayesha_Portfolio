import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

const focusableSelector = 'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'

function Lightbox({ certificate, certificates, onClose, onSelect }) {
  const closeRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const index = certificates.findIndex((item) => item.id === certificate.id)
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onSelect(certificates[(index + 1) % certificates.length])
      if (event.key === 'ArrowLeft') {
        onSelect(certificates[(index - 1 + certificates.length) % certificates.length])
      }
      if (event.key !== 'Tab' || !overlayRef.current) return
      const nodes = [...overlayRef.current.querySelectorAll(focusableSelector)].filter(
        (node) => !node.hasAttribute('disabled'),
      )
      if (nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [certificate.id, certificates, onClose, onSelect])

  const index = certificates.findIndex((item) => item.id === certificate.id)
  const previous = certificates[(index - 1 + certificates.length) % certificates.length]
  const next = certificates[(index + 1) % certificates.length]

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#070b14]/80 backdrop-blur-sm"
        aria-label="Close certificate"
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-dialog-title"
        className="panel relative z-10 flex max-h-[100dvh] w-full flex-col overflow-hidden sm:max-h-[92dvh] sm:max-w-4xl"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p id="certificate-dialog-title" className="truncate text-sm font-medium text-ink">
              {certificate.title}
            </p>
            <p className="truncate text-xs text-muted">
              {certificate.issuer}
              {certificate.date ? ` · ${certificate.date}` : ''}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" className="btn btn-ghost min-h-11 px-3" onClick={() => onSelect(previous)}>
              <ArrowLeft size={16} aria-hidden="true" />
              <span className="sr-only">Previous certificate</span>
            </button>
            <button type="button" className="btn btn-ghost min-h-11 px-3" onClick={() => onSelect(next)}>
              <ArrowRight size={16} aria-hidden="true" />
              <span className="sr-only">Next certificate</span>
            </button>
            <button ref={closeRef} type="button" className="btn btn-inverse min-h-11 px-3" onClick={onClose}>
              <X size={16} aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
        <div className="overflow-auto bg-[#f6f1e7] p-3 sm:p-6">
          <img
            key={certificate.id}
            src={certificate.image}
            alt={certificate.imageAlt}
            className="mx-auto h-auto max-h-[78dvh] w-auto max-w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CertificateModal({ certificate, certificates, onClose, onSelect }) {
  return createPortal(
    <AnimatePresence>
      {certificate ? (
        <Lightbox
          key="certificate-lightbox"
          certificate={certificate}
          certificates={certificates}
          onClose={onClose}
          onSelect={onSelect}
        />
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
