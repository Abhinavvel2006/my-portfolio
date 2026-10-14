import { profile } from '../data/portfolio'
import Icon from '../components/Icon'
import { CopyEmail, PageHeading, SocialLinks } from '../components/ui'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="Good things start with hello"
        title={
          <>
            Let’s make
            <br />
            something great<span>.</span>
          </>
        }
      >
        Have a project, an opportunity, or a question? I’d love to hear from you.
      </PageHeading>
      <section className="contact-layout">
        <div className="contact-information">
          <p className="availability">
            <span /> Open to conversations
          </p>
          <h2>
            A new idea.
            <br />A new connection.
          </h2>
          <p>
            I’m always happy to talk about development, collaborate on a project, or explore
            opportunities to learn and build.
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-method-icon">
                <Icon name="mail" />
              </span>
              <div>
                <span>DROP ME A LINE</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <CopyEmail />
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-method-icon">
                <Icon name="phone" />
              </span>
              <div>
                <span>GIVE ME A CALL</span>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-method-icon">
                <Icon name="pin" />
              </span>
              <div>
                <span>BASED IN</span>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>
          <div className="contact-social">
            <p>Find me around the internet</p>
            <SocialLinks labels />
          </div>
        </div>
        <ContactForm recipient={profile.email} />
      </section>
    </div>
  )
}
