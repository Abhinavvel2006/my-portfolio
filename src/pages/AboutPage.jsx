import { education, skillGroups } from '../data/portfolio'
import {
  Button,
  CallToAction,
  PageHeading,
  Portrait,
  SectionHeading,
  SkillCard,
} from '../components/ui'
import Icon from '../components/Icon'

export default function AboutPage() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="The person behind the projects"
        title={
          <>
            A builder.
            <br />
            Always a learner<span>.</span>
          </>
        }
      >
        A little about my journey, what I care about, and what comes next.
      </PageHeading>
      <section className="about-story">
        <div className="about-photo">
          <Portrait />
          <div className="about-photo-caption">
            <Icon name="coffee" />
            <span>Code, curiosity & a little cricket.</span>
          </div>
        </div>
        <div className="about-story-copy">
          <p className="eyebrow">Hey again. I’m Abhinav.</p>
          <h2>
            Turning curiosity
            <br />
            into something useful.
          </h2>
          <p>
            I’m pursuing a B.Sc. in Computer Science at Scott Christian College, Nagercoil
            (2024–2027). Alongside college, I build full-stack web applications and explore mobile
            development.
          </p>
          <p>
            My journey includes six months of full-stack development training, a mobile app
            development internship at Topgrade Innovations, and a MERN Stack internship. Each
            experience has helped me connect theory with practical, hands-on work.
          </p>
          <p>
            I care about clean, maintainable code and interfaces that are easy to use. I’m
            constantly exploring new technologies, including AI, and finding better ways to solve
            problems.
          </p>
          <div className="about-values">
            <span>
              <Icon name="check" size={16} /> Keep it thoughtful
            </span>
            <span>
              <Icon name="check" size={16} /> Learn by doing
            </span>
          </div>
          <Button href="#/resume" variant="secondary" icon="file">
            Explore my resume
          </Button>
        </div>
      </section>
      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="Education & experience"
          title="Learning, one chapter at a time."
        />
        <div className="timeline">
          {education.map((item, index) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-icon">
                <Icon name={item.icon} size={21} />
              </span>
              <div className="timeline-date">
                <span>0{index + 1}</span>
                <strong>{item.date}</strong>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading
          number="02"
          eyebrow="Technical skills"
          title="A toolkit that keeps growing."
        />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </section>
      <CallToAction />
    </div>
  )
}
