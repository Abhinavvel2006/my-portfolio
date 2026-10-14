import { profile, projects, skillGroups } from '../data/portfolio'
import {
  Button,
  CallToAction,
  Portrait,
  SectionHeading,
  SkillCard,
  SocialLinks,
} from '../components/ui'
import Icon from '../components/Icon'
import ProjectCard from '../components/ProjectCard'

export default function HomePage({ onSelectProject }) {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="availability">
            <span /> Open to opportunities
          </p>
          <p className="hero-intro">
            Hey, I’m {profile.name} <span aria-hidden="true">✳</span>
          </p>
          <h1>
            Building ideas.
            <br />
            Crafting <span>experiences.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-buttons">
            <Button href="#/projects" icon="arrow-up-right">
              Explore my work
            </Button>
            <Button href="#/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
          <div className="hero-social">
            <SocialLinks />
            <span className="hero-social-divider" />
            <span>
              <Icon name="pin" size={15} /> {profile.location}
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-orbit" aria-hidden="true" />
          <span className="hero-star" aria-hidden="true">
            ✳
          </span>
          <div className="hero-photo-card">
            <div className="photo-card-top">
              <span>THE PERSON BEHIND THE CODE</span>
              <Icon name="arrow-up-right" size={19} />
            </div>
            <Portrait className="hero-portrait" loading="eager" />
            <div className="photo-card-bottom">
              <div>
                <strong>{profile.fullName}</strong>
                <span>Developer. Student. Builder.</span>
              </div>
              <span className="photo-signature">a.</span>
            </div>
          </div>
          <div className="hero-floating-note">
            <span className="floating-icon">
              <Icon name="code" size={20} />
            </span>
            <div>
              <strong>Always in build mode</strong>
              <span>Web · Mobile · What’s next</span>
            </div>
          </div>
        </div>
        <div className="hero-footnotes">
          <div>
            <span>BASED IN</span>
            <strong>Tamil Nadu, India</strong>
          </div>
          <div>
            <span>STUDYING AT</span>
            <strong>Scott Christian College</strong>
          </div>
          <a href="#/projects">
            <span>SCROLL INTO MY WORLD</span>
            <Icon name="arrow-down" size={22} />
          </a>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          number="01"
          eyebrow="Selected work"
          title="A few things I’ve built."
          action={
            <Button href="#/projects" variant="ghost" icon="arrow-up-right">
              All projects
            </Button>
          }
        >
          Real projects. New challenges. A little more learning with every build.
        </SectionHeading>
        <div className="project-grid featured-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      </section>

      <section className="about-teaser">
        <div className="container about-teaser-grid">
          <div>
            <p className="eyebrow">02 / A little about me</p>
            <h2>
              Curiosity is
              <br />
              my favorite tool<span>.</span>
            </h2>
          </div>
          <div>
            <p>
              I’m a computer science student who learns by building. From Python backends to React
              interfaces and mobile apps, I enjoy connecting the pieces to make something useful.
            </p>
            <p>When I’m away from the keyboard, you’ll probably find me on a cricket field.</p>
            <Button href="#/about" variant="ghost" icon="arrow-up-right">
              More about my journey
            </Button>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading number="03" eyebrow="My toolkit" title="The tools behind the ideas.">
          A growing collection of technologies I use to bring projects to life.
        </SectionHeading>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </section>
      <div className="container cta-container">
        <CallToAction />
      </div>
    </>
  )
}
