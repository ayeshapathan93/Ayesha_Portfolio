import { Download } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function ResumeLink({ className = '', icon = true, children = 'Download Resume' }) {
  return (
    <a
      className={className}
      href={personalInfo.resumePath}
      download={personalInfo.resumeFileName}
    >
      {icon ? <Download size={16} aria-hidden="true" /> : null}
      {children}
    </a>
  )
}
