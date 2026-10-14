import { useEffect, useRef, useState } from 'react'
import { profile, publicAsset } from '../data/portfolio'
import Icon from './Icon'

export function Button({
  href,
  variant = 'primary',
  icon = 'arrow',
  children,
  className = '',
  ...props
}) {
  const Element = href ? 'a' : 'button'
  return (
    <Element
      className={`button button-${variant} ${className}`}
      {...(href ? { href } : { type: 'button' })}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} size={18} />}
    </Element>
  )
}

export function Tags({ items, className = '' }) {
  return (
    <ul className={`tags ${className}`} aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function SectionHeading({ number, eyebrow, title, children, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number && <span>{number} /</span>} {eyebrow}
        </p>
        <h2>{title}</h2>
        {children && <p className="section-description">{children}</p>}
      </div>
      {action}
    </div>
  )
}

export function PageHeading({ eyebrow, title, children, action }) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-heading-row">
        <h1>{title}</h1>
        {action}
      </div>
      {children && <p>{children}</p>}
    </header>
  )
}

export function SocialLinks({ labels = false }) {
  return (
    <div className={`social-links ${labels ? 'social-links-labeled' : ''}`}>
      {[
        ['github', 'GitHub', profile.github],
        ['linkedin', 'LinkedIn', profile.linkedin],
      ].map(([icon, label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} profile (opens in a new tab)`}
        >
          <Icon name={icon} size={19} />
          {labels && <span>{label}</span>}
        </a>
      ))}
    </div>
  )
}

export function Portrait({ className = '', loading = 'lazy' }) {
  return (
    <div className={`portrait ${className}`}>
      <img
        src={publicAsset(profile.image)}
        alt="Abhinav outdoors with his cricket trophies"
        width="3024"
        height="4032"
        loading={loading}
      />
    </div>
  )
}

export function SkillCard({ group, index }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <Icon name={group.icon} size={25} />
        <span>0{index + 1}</span>
      </div>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <Tags items={group.items} />
    </article>
  )
}

export function CallToAction() {
  return (
    <section className="cta-panel">
      <div>
        <p className="eyebrow">Good things start with a conversation</p>
        <h2>
          Have an idea?
          <br />
          Let’s build it together.
        </h2>
      </div>
      <Button href="#/contact" className="cta-button" icon="arrow-up-right">
        Let’s talk
      </Button>
      <span className="cta-decoration" aria-hidden="true">
        ↗
      </span>
    </section>
  )
}

export function CopyEmail({ compact = false }) {
  const [message, setMessage] = useState('')
  const timeout = useRef()
  useEffect(() => () => window.clearTimeout(timeout.current), [])
  async function copy() {
    window.clearTimeout(timeout.current)
    try {
      await navigator.clipboard.writeText(profile.email)
      setMessage('Email address copied.')
    } catch {
      setMessage('Could not copy. You can select and copy the email address.')
    }
    timeout.current = window.setTimeout(() => setMessage(''), 4000)
  }
  return (
    <span className="copy-email">
      <button
        type="button"
        className={compact ? 'icon-button' : 'text-button'}
        onClick={copy}
        aria-label="Copy email address"
      >
        <Icon name={message === 'Email address copied.' ? 'check' : 'copy'} size={16} />
        {!compact && 'Copy email'}
      </button>
      <span className="copy-status" role="status">
        {message}
      </span>
    </span>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 550)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  if (!visible) return null
  return (
    <button
      type="button"
      className="back-to-top icon-button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant'
            : 'smooth',
        })
      }
    >
      <Icon name="arrow-up" size={20} />
    </button>
  )
}
