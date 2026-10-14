import { useEffect, useRef, useState } from 'react'
import { navigation, profile } from '../data/portfolio'
import Icon from './Icon'

export default function Navbar({ route, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const header = useRef(null)
  const toggle = useRef(null)
  useEffect(() => {
    setOpen(false)
  }, [route])
  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const onClick = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
    }
  }, [open])
  return (
    <header className="site-header" ref={header}>
      <div className="container nav-bar">
        <a className="brand" href="#/home" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">
            <Icon name="code" size={20} />
          </span>
          {profile.name}
          <span className="brand-dot">.</span>
        </a>
        <nav
          aria-label="Main navigation"
          id="main-navigation"
          className={`nav-links ${open ? 'is-open' : ''}`}
        >
          {navigation.map((item) => (
            <a
              href={`#/${item.id}`}
              key={item.id}
              aria-current={route === item.id ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </button>
          <a className="nav-contact" href="#/contact">
            Let’s talk <Icon name="arrow-up-right" size={17} />
          </a>
          <button
            ref={toggle}
            type="button"
            className="icon-button menu-toggle"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="main-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
