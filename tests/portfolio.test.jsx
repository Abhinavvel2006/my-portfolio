import { act, fireEvent, render, screen, within, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { StrictMode } from 'react'
import App from '../src/App'
import Navbar from '../src/components/Navbar'
import ProjectsPage from '../src/pages/ProjectsPage'
import ProjectDialog from '../src/components/ProjectDialog'
import ContactForm from '../src/components/ContactForm'
import ResumePage from '../src/pages/ResumePage'
import { profile, projects } from '../src/data/portfolio'
import { readRoute } from '../src/hooks/useRoute'

function changeRoute(route) {
  act(() => {
    window.history.pushState(null, '', `/#/${route}`)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  })
}

describe('React navigation', () => {
  it('navigates between pages without leaving the React app and keeps active navigation accurate', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Building ideas.')
    changeRoute('about')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Always a learner')
    const mainNav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(mainNav).getByText('About').getAttribute('aria-current')).toBe('page')
    changeRoute('projects')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('My work.')
    expect(document.activeElement.id).toBe('main-content')
    changeRoute('contact')
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeTruthy()
    expect(document.title).toBe('Abhinav — Contact')
  })

  it('supports the original HTML and query URLs, subdirectories, and unknown routes', () => {
    expect(
      readRoute({ hash: '', search: '?page=resume', pathname: '/my-portfolio/react.html' }),
    ).toBe('resume')
    expect(readRoute({ hash: '', search: '', pathname: '/my-portfolio/projects.html' })).toBe(
      'projects',
    )
    expect(readRoute({ hash: '#/home', search: '?page=resume', pathname: '/projects.html' })).toBe(
      'home',
    )
    expect(readRoute({ hash: '', search: '', pathname: '/my-portfolio/' })).toBe('home')
    expect(readRoute({ hash: '#/missing', search: '', pathname: '/' })).toBe('not-found')
    render(<App />)
    changeRoute('missing')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('This page wandered off.')
  })

  it('opens the mobile navigation, closes on Escape, and closes after selecting a destination', async () => {
    render(<Navbar route="home" theme="dark" onToggleTheme={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    expect(
      screen.getByRole('button', { name: 'Close navigation menu' }).getAttribute('aria-expanded'),
    ).toBe('true')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(
      screen.getByRole('button', { name: 'Open navigation menu' }).getAttribute('aria-expanded'),
    ).toBe('false')
    expect(document.activeElement.getAttribute('aria-label')).toBe('Open navigation menu')
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    fireEvent.click(screen.getByRole('link', { name: 'Projects' }))
    expect(
      screen.getByRole('button', { name: 'Open navigation menu' }).getAttribute('aria-expanded'),
    ).toBe('false')
    await waitFor(() => expect(window.location.hash).toBe('#/projects'))
  })
})

describe('Theme preferences', () => {
  it('switches themes and restores the saved preference on a fresh mount', () => {
    const app = render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('abhinav-theme')).toBe('light')
    app.unmount()
    render(<App />)
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  it('remains usable when browser storage is disabled', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})

describe('Project exploration', () => {
  it('combines a category filter and a case-insensitive technology search, then recovers from empty results', () => {
    render(<ProjectsPage onSelectProject={vi.fn()} />)
    expect(screen.getAllByRole('article')).toHaveLength(6)
    fireEvent.click(screen.getByRole('button', { name: /Mobile apps/ }))
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(screen.getByRole('heading', { name: 'QuickEats Mobile App' })).toBeTruthy()
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: ' PYTHON ' } })
    expect(screen.queryAllByRole('article')).toHaveLength(0)
    expect(screen.getByRole('heading', { name: 'No projects found.' })).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }))
    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getByRole('searchbox').value).toBe('')
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'fLaSk' } })
    expect(screen.getAllByRole('article')).toHaveLength(2)
    fireEvent.click(screen.getByRole('button', { name: 'Clear search' }))
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })

  it('opens a named project dialog, closes on Escape, and restores focus and page scrolling', async () => {
    render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    const trigger = screen.getByRole('button', { name: `View details for ${projects[0].title}` })
    trigger.focus()
    fireEvent.click(trigger)
    const dialog = await screen.findByRole('dialog', { name: projects[0].title })
    expect(dialog.open).toBe(true)
    expect(within(dialog).getByText('Student applications and enrollment')).toBeTruthy()
    expect(document.body.style.overflow).toBe('hidden')
    fireEvent(dialog, new Event('cancel', { cancelable: true }))
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    expect(document.activeElement).toBe(trigger)
    expect(document.body.style.overflow).toBe('')
  })

  it('offers real supplied destinations only and closes through its close button', () => {
    const onClose = vi.fn()
    render(<ProjectDialog project={projects.find((p) => p.id === 'portfolio')} onClose={onClose} />)
    expect(screen.getByRole('link', { name: 'View source' }).getAttribute('href')).toBe(
      profile.repository,
    )
    expect(screen.queryByRole('link', { name: 'Visit website' })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Close project details' }))
    expect(onClose).toHaveBeenCalledOnce()
  })
})

describe('Contact form', () => {
  it('rejects blank and invalid input, announces field errors, and focuses the first invalid field', () => {
    const onPrepareEmail = vi.fn()
    render(<ContactForm recipient={profile.email} onPrepareEmail={onPrepareEmail} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open email draft' }))
    expect(screen.getByText('Please enter your name.')).toBeTruthy()
    expect(screen.getByText('Please enter a valid email address.')).toBeTruthy()
    expect(document.activeElement).toBe(screen.getByRole('textbox', { name: 'Your name' }))
    expect(
      screen.getByRole('textbox', { name: 'Email address' }).getAttribute('aria-invalid'),
    ).toBe('true')
    expect(onPrepareEmail).not.toHaveBeenCalled()
    fireEvent.change(screen.getByRole('textbox', { name: 'Your name' }), {
      target: { value: '    ' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Open email draft' }))
    expect(screen.getByText('Please enter your name.')).toBeTruthy()
  })

  it('prepares an encoded email draft and retains the message without claiming it was sent', () => {
    const onPrepareEmail = vi.fn()
    render(<ContactForm recipient={profile.email} onPrepareEmail={onPrepareEmail} />)
    fireEvent.change(screen.getByRole('textbox', { name: 'Your name' }), {
      target: { value: ' Abhinav & Team ' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: 'Email address' }), {
      target: { value: 'hello@example.com' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: 'What’s this about?' }), {
      target: { value: 'React & Flutter? #collab' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: 'Your message' }), {
      target: { value: 'Hello!\nCan we build this together? தமிழ்' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Open email draft' }))
    const url = onPrepareEmail.mock.calls[0][0]
    const params = new URLSearchParams(url.split('?')[1])
    expect(url.startsWith(`mailto:${profile.email}?`)).toBe(true)
    expect(params.get('subject')).toBe('React & Flutter? #collab')
    expect(params.get('body')).toContain('Name: Abhinav & Team')
    expect(params.get('body')).toContain('தமிழ்')
    expect(screen.getByRole('textbox', { name: 'Your message' }).value).toContain('Hello!')
    expect(screen.getByRole('status').textContent).toContain('Finish sending it in your email app.')
    expect(
      screen.getByRole('link', { name: 'Open the email draft again' }).getAttribute('href'),
    ).toBe(url)
  })
})

describe('Résumé assets', () => {
  it('links download and open actions to the original public PDF and loads its preview on request', async () => {
    render(<ResumePage />)
    const download = screen.getByRole('link', { name: 'Download PDF' })
    expect(download.getAttribute('href')).toContain('MyResume.pdf')
    expect(download.getAttribute('download')).toBe('Abhinav_Resume.pdf')
    expect(screen.getByRole('link', { name: 'Open original PDF' }).getAttribute('href')).toBe(
      download.getAttribute('href'),
    )
    expect(screen.queryByTitle('Abhinav’s original résumé PDF')).toBeNull()
    const details = document.querySelector('details')
    details.open = true
    fireEvent(details, new Event('toggle'))
    await waitFor(() =>
      expect(screen.getByTitle('Abhinav’s original résumé PDF').getAttribute('src')).toBe(
        download.getAttribute('href'),
      ),
    )
  })
})
