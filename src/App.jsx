import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDialog from './components/ProjectDialog'
import { BackToTop, Button } from './components/ui'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import { useRoute } from './hooks/useRoute'
import { useTheme } from './hooks/useTheme'

const titles = {
  home: 'Full Stack Developer',
  about: 'About',
  projects: 'Projects',
  resume: 'Résumé',
  contact: 'Contact',
  'not-found': 'Page not found',
}

export default function App() {
  const route = useRoute()
  const [theme, toggleTheme] = useTheme()
  const [selectedProject, setSelectedProject] = useState(null)
  const main = useRef(null)
  const previousRoute = useRef(route)
  useEffect(() => {
    document.title = `Abhinav — ${titles[route]}`
    if (previousRoute.current !== route) {
      setSelectedProject(null)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      main.current?.focus({ preventScroll: true })
      previousRoute.current = route
    }
  }, [route])
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          main.current?.focus()
        }}
      >
        Skip to content
      </a>
      <Navbar route={route} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" ref={main} tabIndex={-1} key={route} className="main-content">
        {route === 'home' && <HomePage onSelectProject={setSelectedProject} />}
        {route === 'about' && <AboutPage />}
        {route === 'projects' && <ProjectsPage onSelectProject={setSelectedProject} />}
        {route === 'resume' && <ResumePage />}
        {route === 'contact' && <ContactPage />}
        {route === 'not-found' && (
          <section className="container not-found">
            <p className="eyebrow">404 / A little detour</p>
            <h1>This page wandered off.</h1>
            <p>Let’s get you back to the projects.</p>
            <Button href="#/home">Back to home</Button>
          </section>
        )}
      </main>
      <Footer />
      <BackToTop />
      {selectedProject && (
        <ProjectDialog
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
