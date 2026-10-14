import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )

    window.location.href =
      `mailto:aadilabhinav33@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="contact-page">
      <section className="container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="contact-intro">
          Have a project, opportunity, or question? I'd love to hear from you.
        </p>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out through any of these channels.</p>

            <div className="contact-item">
              <i className="fas fa-envelope" />
              <div>
                <h3>Email</h3>
                <a href="mailto:aadilabhinav33@gmail.com">
                  aadilabhinav33@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+917708332208">+91 7708332208</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-github" />
              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Abhinavvel2006"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Abhinavvel2006
                </a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-linkedin" />
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/abhinavvel2006"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>

            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Enter your name"
            />

            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="Enter your email"
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message..."
            />

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane" /> Prepare Email
            </button>

            <p className="form-note">
              This opens your default email application with your message
              prepared. It does not send automatically.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
