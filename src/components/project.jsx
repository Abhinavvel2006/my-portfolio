
const projects = [
  {
    title: 'Student Enrollment System',
    category: 'Full Stack Development',
    description:
      'A student admission and enrollment management system with an admin dashboard, student ID generation, application status management, Flask, Python, and MySQL.',
    technologies: ['Python', 'Flask', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Django E-Commerce Website',
    category: 'Web Development',
    description:
      'An e-commerce website with product management, shopping cart functionality, and online payment integration.',
    technologies: ['Python', 'Django', 'MySQL', 'Stripe'],
  },
  {
    title: 'Construction Management Website',
    category: 'Web Development',
    description:
      'A construction-related website developed using Flask and deployed online.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS'],
  },
  {
    title: 'QuickEats Mobile App',
    category: 'Mobile Development',
    description:
      'A food-ordering mobile app project with menu browsing, cart management, order summaries, and payment integration.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Razorpay'],
  },
]

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="container">
        <h1 className="page-title">My Projects</h1>
        <p className="projects-intro">
          Explore my web development and application projects.
        </p>

        <div className="projects-grid compact-projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <i className="fas fa-laptop-code" />
              </div>

              <div className="project-details">
                <span className="project-category">
                  {project.category}
                </span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="skills-list">
                  {project.technologies.map((technology) => (
                    <span className="skill-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
