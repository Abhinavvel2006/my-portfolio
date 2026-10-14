import { useRef, useState } from 'react'
import { createEmailLink, emptyForm, openEmailDraft, validateContact } from '../utils/contact'
import { Button } from './ui'
import Icon from './Icon'

export default function ContactForm({ recipient, onPrepareEmail = openEmailDraft }) {
  const [form, setForm] = useState({ ...emptyForm })
  const [errors, setErrors] = useState({})
  const [draft, setDraft] = useState('')
  const formRef = useRef(null)
  function change(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
    setDraft('')
  }
  function submit(event) {
    event.preventDefault()
    const nextErrors = validateContact(form)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      formRef.current.elements.namedItem(firstError)?.focus()
      return
    }
    const link = createEmailLink(form, recipient)
    setDraft(link)
    onPrepareEmail(link)
  }
  function field(name, label, props = {}) {
    const Element = name === 'message' ? 'textarea' : 'input'
    return (
      <div className={`form-field field-${name}`} key={name}>
        <label htmlFor={`contact-${name}`}>
          {label} <span aria-hidden="true">*</span>
        </label>
        <Element
          id={`contact-${name}`}
          name={name}
          value={form[name]}
          onChange={change}
          required
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          {...props}
        />
        {errors[name] && (
          <p className="field-error" id={`${name}-error`}>
            {errors[name]}
          </p>
        )}
      </div>
    )
  }
  return (
    <form className="contact-form" ref={formRef} onSubmit={submit} noValidate>
      <div className="form-header">
        <h2>Let’s start a conversation.</h2>
        <p>Tell me a little about what you have in mind.</p>
      </div>
      <div className="form-grid">
        {field('name', 'Your name', {
          autoComplete: 'name',
          maxLength: 100,
          placeholder: 'Your name',
        })}
        {field('email', 'Email address', {
          type: 'email',
          autoComplete: 'email',
          maxLength: 254,
          placeholder: 'you@example.com',
        })}
        {field('subject', 'What’s this about?', {
          maxLength: 160,
          placeholder: 'A project, an opportunity, or just hello',
        })}
        {field('message', 'Your message', {
          rows: 6,
          maxLength: 4000,
          placeholder: 'Share your idea…',
        })}
      </div>
      <Button type="submit" icon="arrow-up-right" className="form-submit">
        Open email draft
      </Button>
      <p className="form-note">
        <Icon name="mail" size={15} /> Opens your email app with a draft. You review and send it
        there.
      </p>
      {draft && (
        <div className="draft-status" role="status">
          <Icon name="check" size={19} />
          <div>
            Your draft is ready. Finish sending it in your email app.
            <br />
            <a href={draft}>Open the email draft again</a> if the app did not open.
          </div>
        </div>
      )}
    </form>
  )
}
