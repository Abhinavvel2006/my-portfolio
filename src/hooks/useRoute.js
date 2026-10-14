import { useEffect, useState } from 'react'
import { navigation } from '../data/portfolio'

const knownRoutes = new Set(navigation.map((item) => item.id))

export function readRoute(location = window.location) {
  const hash = location.hash.replace(/^#\/?/, '').replace(/\/$/, '')
  if (hash) return knownRoutes.has(hash) ? hash : 'not-found'
  const queryRoute = new URLSearchParams(location.search).get('page')
  if (queryRoute) return knownRoutes.has(queryRoute) ? queryRoute : 'not-found'
  const file = location.pathname
    .split('/')
    .pop()
    .replace(/\.html$/, '')
  if (knownRoutes.has(file)) return file
  return ['index', 'react', ''].includes(file) ? 'home' : 'not-found'
}

export function useRoute() {
  const [route, setRoute] = useState(readRoute)
  useEffect(() => {
    const update = () => setRoute(readRoute())
    window.addEventListener('hashchange', update)
    window.addEventListener('popstate', update)
    return () => {
      window.removeEventListener('hashchange', update)
      window.removeEventListener('popstate', update)
    }
  }, [])
  return route
}
