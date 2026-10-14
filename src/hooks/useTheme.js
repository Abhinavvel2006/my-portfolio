import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('abhinav-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('abhinav-theme', theme)
    } catch {
      /* Browsing can continue without storage. */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#101411' : '#f7f8f2')
  }, [theme])
  return [theme, () => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))]
}
