import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import SectionHeading from './SectionHeading'

const initial = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (values.message.trim().length < 10) {
    errors.message = 'Write a short message, at least 10 characters.'
  }
  return errors
}

const socials = [
  {
    id: 'email',
    label: 'Gmail',
    icon: Mail,
    href: 'mailto:ayeshapathan9325@gmail.com',
  },
  { id: 'github', label: 'GitHub', icon: Github, href: 'https://github.com/ayeshapathan93' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ayesha-pathan-068276213/',
  },
]

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const update = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setNotice('')
      return
    }

    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    const href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setNotice('Your email app should open with this message. It is not sent until you send it from there.')
  }

  return (
    <section id="contact" className="section-y">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div>
          <SectionHeading kicker="Contact" title="Let's Create Something Meaningful." />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Have an opportunity, project idea, or just want to connect? I'd love to hear from you.
          </p>
          <ul className="mt-8 flex items-center gap-3" aria-label="Social links">
            {socials.map((item) => (
              <li key={item.id}>
                <SocialIcon item={item} />
              </li>
            ))}
          </ul>
        </div>

        <form className="panel p-5 sm:p-8" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={values.name} error={errors.name} onChange={update} autoComplete="name" />
            <Field
              label="Email"
              name="email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={update}
              autoComplete="email"
            />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={update} />
          </div>
          <div className="mt-4">
            <Field
              label="Message"
              name="message"
              value={values.message}
              error={errors.message}
              onChange={update}
              multiline
            />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn btn-primary">
              Open in email <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <p className="max-w-xs text-xs leading-relaxed text-muted">
              This form prepares an email to {personalInfo.email}. There is no separate mail server behind the site.
            </p>
          </div>
          {notice ? (
            <p className="mt-4 text-sm text-accent2" role="status">
              {notice}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

function SocialIcon({ item }) {
  const Icon = item.icon
  const href = item.href?.trim()
  const className =
    'grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition duration-300'

  if (!href) {
    return (
      <span
        className={`${className} cursor-default opacity-45`}
        role="img"
        aria-label={`${item.label}, link not added yet`}
        title={`${item.label} link not added yet`}
      >
        <Icon size={16} aria-hidden="true" />
      </span>
    )
  }

  return (
    <a
      href={href}
      className={`group relative ${className} hover:border-accent/60 hover:text-accent motion-safe:hover:-translate-y-0.5`}
      aria-label={item.label}
      title={item.label}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <Icon size={16} aria-hidden="true" />
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-full bg-ink px-2.5 py-1 text-[11px] whitespace-nowrap text-bg opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
        {item.label}
      </span>
    </a>
  )
}

function Field({ label, name, value, error, onChange, type = 'text', multiline = false, autoComplete }) {
  const id = `contact-${name}`
  const shared = {
    id,
    name,
    value,
    onChange,
    autoComplete,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? `${id}-error` : undefined,
    className: 'field mt-2',
  }

  return (
    <label className="block text-sm text-ink" htmlFor={id}>
      {label}
      {multiline ? <textarea {...shared} rows={6} /> : <input {...shared} type={type} />}
      {error ? (
        <span id={`${id}-error`} className="mt-2 block text-xs text-[#f87171]">
          {error}
        </span>
      ) : null}
    </label>
  )
}
