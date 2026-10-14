const paths = {
  arrow: ['M5 12h14', 'm13 6 6 6-6 6'],
  'arrow-up-right': ['M7 17 17 7', 'M7 7h10v10'],
  'arrow-down': ['M12 4v16', 'm5 13 7 7 7-7'],
  'arrow-up': ['M12 20V4', 'm5 11 7-7 7 7'],
  chevron: ['m9 5 7 7-7 7'],
  code: ['m8 6-6 6 6 6', 'm16 6 6 6-6 6', 'm14 3-4 18'],
  github: [
    'M9 19c-4.3 1.3-4.3-2.2-6-2.7',
    'M9 22v-3.4c0-1 .1-1.6-.5-2.1-3-.4-6.2-1.5-6.2-6.7 0-1.5.5-2.7 1.4-3.6-.1-.4-.6-1.7.1-3.5 0 0 1.1-.4 3.7 1.4a13 13 0 0 1 6.7 0C16.8 2.3 18 2.7 18 2.7c.7 1.8.3 3.1.1 3.5.9.9 1.4 2.1 1.4 3.6 0 5.2-3.2 6.3-6.2 6.7.5.5.7 1.3.7 2.3V22',
  ],
  linkedin: ['M4 9v12', 'M4 3v.01', 'M9 21V9h5v2c1-3 6-3 6 2v8', 'M14 21v-7'],
  sun: [
    'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8',
    'M12 2v2',
    'M12 20v2',
    'M2 12h2',
    'M20 12h2',
    'm4.9 4.9 1.4 1.4',
    'm17.7 17.7 1.4 1.4',
    'm19.1 4.9-1.4 1.4',
    'm6.3 17.7-1.4 1.4',
  ],
  moon: ['M21 12.7A9 9 0 0 1 11.3 3 9 9 0 1 0 21 12.7Z'],
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  close: ['m6 6 12 12', 'M6 18 18 6'],
  mail: ['M3 5h18v14H3z', 'm3 5 9 8 9-8'],
  phone: ['M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2A18 18 0 0 1 3 5c0-1 1-2 2-2Z'],
  pin: ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z', 'M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6'],
  download: ['M12 3v12', 'm7 10 5 5 5-5', 'M4 16v5h16v-5'],
  file: ['M14 2H5v20h14V7Z', 'M14 2v6h5', 'M8 12h8', 'M8 16h8'],
  search: ['M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15', 'm16 16 5 5'],
  layout: ['M3 3h18v18H3z', 'M3 9h18', 'M9 9v12'],
  server: ['M3 3h18v7H3z', 'M3 14h18v7H3z', 'M7 6.5h.01', 'M7 17.5h.01'],
  database: [
    'M20 6c0 2-3.6 4-8 4s-8-2-8-4 3.6-4 8-4 8 2 8 4Z',
    'M4 6v12c0 2 3.6 4 8 4s8-2 8-4V6',
    'M4 12c0 2 3.6 4 8 4s8-2 8-4',
  ],
  terminal: ['M3 4h18v16H3z', 'm7 8 4 4-4 4', 'M13 16h4'],
  graduation: ['m2 9 10-5 10 5-10 5Z', 'M6 11v6c4 3 8 3 12 0v-6', 'M22 9v8'],
  layers: ['m12 3 10 5-10 5L2 8Z', 'm2 12 10 5 10-5', 'm2 16 10 5 10-5'],
  network: ['M9 2h6v6H9z', 'M2 16h6v6H2z', 'M16 16h6v6h-6z', 'M12 8v4', 'M5 16v-4h14v4'],
  check: ['m5 12 4 4 10-10'],
  copy: ['M8 8h13v13H8z', 'M16 8V3H3v13h5'],
  spark: ['m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z'],
  clock: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18', 'M12 7v5l3 2'],
  coffee: [
    'M4 8h12v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z',
    'M16 8h2a4 4 0 0 1 0 8h-2',
    'M7 2v3',
    'M12 2v3',
  ],
}

export default function Icon({ name, size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {(paths[name] || paths.code).map((d, i) => (
        <path d={d} key={i} />
      ))}
    </svg>
  )
}
