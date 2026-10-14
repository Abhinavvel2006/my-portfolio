import { useEffect, useRef } from 'react'
import { Button, Tags } from './ui'
import Icon from './Icon'
import ProjectPreview from './ProjectPreview'

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    dialog.querySelector('button')?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
      if (previousFocus?.isConnected) previousFocus.focus()
    }
  }, [])
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="dialog-content">
        <button
          type="button"
          className="icon-button dialog-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          <Icon name="close" />
        </button>
        <ProjectPreview kind={project.preview} title={project.title} />
        <div className="dialog-body">
          <p className="eyebrow">
            {project.type}
            {project.status && ` · ${project.status}`}
          </p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.details}</p>
          <Tags items={project.technologies} />
          <h3>What’s inside</h3>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" size={16} />
                {feature}
              </li>
            ))}
          </ul>
          <div className="dialog-actions">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon="arrow-up-right"
              >
                Visit website
              </Button>
            )}
            {project.sourceUrl && (
              <Button
                href={project.sourceUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                icon="github"
              >
                View source
              </Button>
            )}
            <Button href="#/contact" variant="ghost" onClick={onClose}>
              Talk about this project
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
