export const emptyForm = { name: '', email: '', subject: '', message: '' }

export function validateContact(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  return errors
}

export function createEmailLink(values, recipient) {
  const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
  return `mailto:${recipient}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
}

export function openEmailDraft(url) {
  // The visitor reviews and sends the draft in their own email application.
  window.location.assign(url)
}
