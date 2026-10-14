export default function About() {
  const experience = [
    {
      icon: 'fas fa-briefcase',
      title: 'BSc Computer Science',
      date: '2024 - 2027',
      description:
        'Pursuing computer science education covering programming, data structures, algorithms, and web development fundamentals.',
    },
    {
      icon: 'fas fa-certificate',
      title: 'Full Stack Development Certification',
      date: '6 Months',
      description:
        'Completed training in HTML, CSS, JavaScript, jQuery, Bootstrap, Python, MySQL, Git, GitHub, and practical projects.',
    },
    {
      icon: 'fas fa-certificate',
      title: 'Network Systems Certification',
      date: '5 Days',
      description:
        'Gained knowledge of web technologies, network systems, troubleshooting, and IT support.',
    },
    {
      icon: 'fas fa-certificate',
      title: 'MERN Stack Internship Certification',
      date: '1 Month',
      description:
        'Gained hands-on experience with React.js, Node.js, Express.js, MongoDB, responsive interfaces, authentication, and REST APIs.',
    },
  ]

  const skillGroups = [
    {
      title: 'Languages',
      skills: [['JavaScript', 90], ['Python', 85], ['Java', 80], ['VB.NET', 75]],
    },
    {
      title: 'Front-End',
      skills: [['HTML', 95], ['CSS', 92], ['React', 88]],
    },
    {
      title: 'Back-End',
      skills: [['Node.js', 85], ['Express.js', 82]],
    },
    {
      title: 'Database',
      skills: [['MongoDB', 84], ['MySQL', 80]],
    },
    {
      title: 'Frameworks & Tools',
      skills: [['Git & GitHub', 90], ['VS Code', 95], ['REST APIs', 85]],
    },
  ]

  return (
    <main>
      <section className="about-section">
        <div className="container">
          <h1 className="page-title">About Me</h1>

          <div className="about-content">
            <div className="about-text">
              <h2>Hi, I'm Abhinav</h2>
              <p>
                I'm a student and aspiring software developer with knowledge
                of full-stack development. I'm pursuing my BSc in Computer
                Science (2024–2027) while gaining practical experience
                through certifications and internships.
              </p>

              <h3>My Journey</h3>
              <p>
                My journey in technology started with a passion for creating
                solutions. I've completed full-stack development training,
                gained experience through a network systems internship, and
                completed a MERN Stack internship. I'm dedicated to learning
                new development techniques and building a strong foundation
                in full-stack web applications.
              </p>

              <h3>What I Do</h3>
              <ul className="about-list">
                <li>
                  <strong>Full Stack Development:</strong> Building complete
                  web applications with modern technologies.
                </li>
                <li>
                  <strong>Programming Languages:</strong> Python, Java,
                  JavaScript, and VB.NET.
                </li>
                <li>
                  <strong>Problem Solving:</strong> Tackling problems with
                  efficient and maintainable solutions.
                </li>
                <li>
                  <strong>Database Management:</strong> Working with MySQL
                  and MongoDB for data storage and retrieval.
                </li>
              </ul>

              <h3>My Philosophy</h3>
              <p>
                I believe in writing clean, maintainable code and creating
                user-focused designs. Every project is an opportunity to
                learn something new, including emerging technologies in AI.
              </p>
            </div>

            <div className="about-image">
              <img
                src={`${import.meta.env.BASE_URL}image/profile.jpg`}
                alt="Abhinav"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>

          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.title}>
                <div className="exp-icon">
                  <i className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p className="exp-date">{item.date}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-skills">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>

          <div className="skills-matrix">
            {skillGroups.map((group) => (
              <div className="skill-column" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-bars">
                  {group.skills.map(([name, level]) => (
                    <div className="skill-item" key={name}>
                      <span>{name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
