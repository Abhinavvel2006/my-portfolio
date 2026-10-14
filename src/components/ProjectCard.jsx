import Icon from './Icon'
import ProjectPreview from './ProjectPreview'
import { Tags } from './ui'

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <button
        type="button"
        className="project-visual-button"
        onClick={() => onSelect(project)}
        aria-label={`View details for ${project.title}`}
      >
        <ProjectPreview kind={project.preview} title={project.title} />
        <span className="project-visual-arrow">
          <Icon name="arrow-up-right" size={23} />
        </span>
      </button>
      <div className="project-meta">
        <span>{project.type}</span>
        {project.status ? (
          <span className="project-status">{project.status}</span>
        ) : (
          <span>{project.number}</span>
        )}
      </div>
      <h3>
        <button type="button" onClick={() => onSelect(project)}>
          {project.title}
          <Icon name="arrow-up-right" size={20} />
        </button>
      </h3>
      <p>{project.description}</p>
      <Tags items={project.technologies.slice(0, 4)} />
    </article>
  )
}
