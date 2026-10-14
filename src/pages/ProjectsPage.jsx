import { useMemo, useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Icon from '../components/Icon'
import { Button, CallToAction, PageHeading } from '../components/ui'

const categories = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Web development' },
  { id: 'mobile', label: 'Mobile apps' },
]

export default function ProjectsPage({ onSelectProject }) {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const search = query.toLocaleLowerCase().trim()
    return projects.filter(
      (project) =>
        (category === 'all' || project.category === category) &&
        `${project.title} ${project.description} ${project.technologies.join(' ')}`
          .toLocaleLowerCase()
          .includes(search),
    )
  }, [category, query])
  function reset() {
    setQuery('')
    setCategory('all')
  }
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="Ideas, turned into something real"
        title={
          <>
            My work<span>.</span>
          </>
        }
      >
        A collection of web and mobile projects, built with curiosity and a hands-on approach.
      </PageHeading>
      <div className="project-controls">
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {categories.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
              <span>
                {item.id === 'all'
                  ? projects.length
                  : projects.filter((project) => project.category === item.id).length}
              </span>
            </button>
          ))}
        </div>
        <div className="project-search">
          <Icon name="search" size={18} />
          <label className="sr-only" htmlFor="project-search">
            Search projects
          </label>
          <input
            type="search"
            id="project-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or technology"
          />
          {query && (
            <button
              type="button"
              className="icon-button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              <Icon name="close" size={16} />
            </button>
          )}
        </div>
      </div>
      <p className="results-count" role="status">
        Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        {query.trim() && ` for “${query.trim()}”`}
      </p>
      {filtered.length ? (
        <div className="project-grid all-projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Icon name="search" size={32} />
          <h2>No projects found.</h2>
          <p>Try another technology or explore all my projects.</p>
          <Button onClick={reset} variant="secondary" icon="close">
            Clear filters
          </Button>
        </div>
      )}
      <div className="projects-cta">
        <CallToAction />
      </div>
    </div>
  )
}
