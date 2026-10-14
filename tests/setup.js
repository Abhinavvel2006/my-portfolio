import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// jsdom has no browser layout or native dialog top layer.
HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute('open', '')
  this.querySelector('[autofocus]')?.focus()
}
HTMLDialogElement.prototype.close = function () {
  this.removeAttribute('open')
}

beforeEach(() => {
  window.history.replaceState(null, '', '/')
  window.localStorage.clear()
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  })
})

afterEach(() => {
  cleanup()
  document.body.style.overflow = ''
})
