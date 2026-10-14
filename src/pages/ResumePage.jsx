import { useState } from 'react'
import {
  education,
  experience,
  profile,
  projects,
  publicAsset,
  skillGroups,
} from '../data/portfolio'
import { Button, PageHeading, Tags } from '../components/ui'
import Icon from '../components/Icon'

export default function ResumePage() {
  const [previewOpen, setPreviewOpen] = useState(false)
  const resumeUrl = publicAsset(profile.resume)
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="Experience, education & what’s next"
        title={
          <>
            My résumé<span>.</span>
          </>
        }
        action={
          <Button href={resumeUrl} download="Abhinav_Resume.pdf" icon="download">
            Download PDF
          </Button>
        }
      >
        A snapshot of my journey in software development.
      </PageHeading>
      <div className="resume-layout">
        <div className="resume-main">
          <section className="resume-section">
            <p className="eyebrow">01 / Profile</p>
            <h2>{profile.fullName}</h2>
            <p className="resume-role">
              B.Sc. Computer Science Student · Aspiring Full Stack Developer
            </p>
            <p>
              Motivated computer science student with practical experience in Python, JavaScript,
              Django, Flask, React, Node.js, and MySQL. Familiar with REST APIs, database
              integration, authentication, CRUD operations, and deployment. Passionate about
              learning new technologies and solving real-world software problems.
            </p>
          </section>
          <section className="resume-section">
            <p className="eyebrow">02 / Practical experience</p>
            <h2>Learning on the job.</h2>
            {experience.map((item) => (
              <article className="resume-item" key={item.title}>
                <div className="resume-item-heading">
                  <h3>{item.title}</h3>
                  <span className="pill">{item.date}</span>
                </div>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
          <section className="resume-section">
            <p className="eyebrow">03 / Project highlights</p>
            <h2>From idea to implementation.</h2>
            {projects.map((project) => (
              <article className="resume-item" key={project.id}>
                <h3>
                  {project.title}
                  {project.status && <span className="inline-status"> · {project.status}</span>}
                </h3>
                <p>{project.description}</p>
                <Tags items={project.technologies} />
              </article>
            ))}
            <Button href="#/projects" variant="ghost" icon="arrow-up-right">
              Explore the projects
            </Button>
          </section>
        </div>
        <aside className="resume-sidebar">
          <section className="resume-side-section">
            <Icon name="graduation" size={25} />
            <h2>Education</h2>
            <h3>{education[0].title}</h3>
            <p>{education[0].organization}</p>
            <span className="pill">{education[0].date}</span>
          </section>
          <section className="resume-side-section">
            <h2>Technical skills</h2>
            {skillGroups.map((group) => (
              <div className="resume-skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </section>
          <section className="resume-side-section">
            <h2>Certifications & training</h2>
            <ul>
              {education.slice(1).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
              <li>Mobile Application Development Internship</li>
            </ul>
          </section>
          <section className="resume-side-section">
            <h2>Beyond the code</h2>
            <p>Problem solving, teamwork, communication, time management, and adaptability.</p>
            <p>
              <strong>Tamil</strong> — Native
              <br />
              <strong>English</strong> — Working proficiency
            </p>
            <p>Coding, learning new technologies, and cricket.</p>
          </section>
          <Button
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon="arrow-up-right"
          >
            Open original PDF
          </Button>
        </aside>
      </div>
      <details
        className="resume-preview"
        onToggle={(event) => setPreviewOpen(event.currentTarget.open)}
      >
        <summary>
          <span>
            <Icon name="file" size={21} /> Preview the original résumé PDF
          </span>
          <Icon name="chevron" size={20} />
        </summary>
        <div>
          <p>
            The PDF is the original file supplied with this portfolio.{' '}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Open it in a new tab
            </a>{' '}
            if your browser cannot display it.
          </p>
          {previewOpen && (
            <iframe
              src={resumeUrl}
              title="Abhinav’s original résumé PDF"
              className="resume-frame"
            />
          )}
        </div>
      </details>
    </div>
  )
}
