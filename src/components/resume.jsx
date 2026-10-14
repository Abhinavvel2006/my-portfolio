
export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}MyResume.pdf`

  const experience = [
    {
      title: 'MERN Stack Internship',
      duration: '1 Month',
      details: [
        'Hands-on development using MongoDB, Express.js, React.js, and Node.js.',
        'Developed responsive React UI components and RESTful APIs.',
        'Implemented CRUD operations using MongoDB and managed code using Git/GitHub.',
      ],
    },
    {
      title: 'Mobile App Development Internship',
      duration: '2 Months',
      details: [
        'Worked with Flutter and Dart for mobile application development.',
        'Practiced responsive UI design, navigation, and basic application features.',
        'Tested and debugged Android applications using Android Studio.',
      ],
    },
  ]

  const projects = [
    {
      title: 'Student Enrollment System',
      technologies: 'Flask, HTML, CSS, Bootstrap, MySQL, Amazon RDS',
      details: [
        'Developed a web-based student admission and enrollment management system with an admin dashboard.',
        'Implemented student ID generation, application approval, and email notifications.',
        'Deployed the application on Render with Amazon RDS database integration.',
      ],
    },
    {
      title: 'Django E-Commerce Application',
      technologies: 'Django, HTML, CSS, Bootstrap, JavaScript, jQuery, SQLite',
      details: [
        'Built a full-stack e-commerce application with user authentication and CRUD operations.',
        'Integrated a SQLite database and deployed the application on Render.',
      ],
    },
    {
      title: 'Portfolio Website',
      technologies: 'HTML, CSS, JavaScript, Bootstrap, Git',
      details: [
        'Developed a responsive portfolio website to showcase projects and technical skills.',
        'Designed a mobile-friendly interface and published it using GitHub Pages.',
      ],
    },
    {
      title: 'MERN E-Commerce Application',
      technologies: 'MongoDB, Express.js, React.js, Node.js',
      details: [
        'Developing a full-stack e-commerce application as part of a MERN Stack trainee internship.',
        'Working with REST APIs, MongoDB integration, and responsive React interfaces.',
      ],
    },
  ]

  const skillGroups = [
    { title: 'Languages', skills: 'Python, Java, JavaScript' },
    { title: 'Frontend', skills: 'HTML5, CSS3, Bootstrap, React.js' },
    { title: 'Backend', skills: 'Django, Flask, Node.js, Express.js' },
    { title: 'Database', skills: 'MySQL, MongoDB, SQLite' },
    { title: 'Tools', skills: 'Git, GitHub, VS Code, Render' },
  ]

  return (
    <main className="resume-page">
      <section className="container">
        <header className="resume-header">
          <h1 className="page-title">My Resume</h1>
          <p>
            Abhinav V | B.Sc. Computer Science Student |
            Aspiring Full Stack Developer
          </p>

          <div className="resume-actions">
            <a
              href={resumeUrl}
              download="MyResume.pdf"
              className="btn btn-primary"
            >
              <i className="fas fa-download" /> Download Resume
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <i className="fas fa-file-pdf" /> Open PDF
            </a>
          </div>
        </header>

        <div className="resume-layout">
          <div className="resume-main">
            <section className="resume-section">
              <h2>Professional Summary</h2>
              <p>
                Motivated B.Sc. Computer Science student with practical
                experience in full-stack web development using Python,
                JavaScript, Django, Flask, React.js, Node.js, and MySQL.
                Familiar with REST APIs, database integration,
                authentication, CRUD operations, and deployment.
                Passionate about learning new technologies and solving
                real-world software development problems.
              </p>
            </section>

            <section className="resume-section">
              <h2>Experience</h2>

              {experience.map((item) => (
                <article className="resume-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="resume-duration">{item.duration}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            <section className="resume-section">
              <h2>Projects</h2>

              {projects.map((project) => (
                <article className="resume-item" key={project.title}>
                  <h3>{project.title}</h3>
                  <p className="resume-technologies">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </div>

          <aside className="resume-sidebar">
            <section className="resume-section">
              <h2>Technical Skills</h2>

              {skillGroups.map((group) => (
                <div className="resume-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.skills}</p>
                </div>
              ))}
            </section>

            <section className="resume-section">
              <h2>Education</h2>
              <h3>B.Sc. Computer Science</h3>
              <p className="resume-duration">2024–2027</p>
              <p>
                Scott Christian College (Autonomous)
              </p>
              <p>
                Currently pursuing a Bachelor's degree in Computer Science.
              </p>
            </section>

            <section className="resume-section">
              <h2>Certifications</h2>
              <ul>
                <li>Full Stack Web Development course</li>
                <li>MERN Stack Internship</li>
                <li>Mobile Application Development Internship</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>Soft Skills</h2>
              <ul>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>Languages</h2>
              <p>Tamil — Native</p>
              <p>English — Working Proficiency</p>
            </section>

            <section className="resume-section">
              <h2>Hobbies</h2>
              <p>Coding, learning new technologies, and cricket.</p>
            </section>
          </aside>
        </div>

        <section className="resume-pdf-section">
          <h2 className="section-title">Resume PDF Preview</h2>
          <iframe
            src={resumeUrl}
            title="My Resume PDF"
            className="resume-pdf-frame"
          />
        </section>
      </section>
    </main>
  )
}
