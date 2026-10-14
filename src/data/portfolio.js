// Edit this file to update content across the entire portfolio.
export const profile = {
  name: 'Abhinav',
  fullName: 'Abhinav V',
  role: 'Full Stack Developer',
  introduction:
    'Computer science student, developer, and a curious builder. I turn ideas into thoughtful web and mobile experiences.',
  email: 'aadilabhinav33@gmail.com',
  phone: '+91 7708332208',
  phoneHref: 'tel:+917708332208',
  location: 'Tamil Nadu, India',
  github: 'https://github.com/Abhinavvel2006',
  linkedin: 'https://www.linkedin.com/in/abhinavvel2006',
  repository: 'https://github.com/Abhinavvel2006/my-portfolio',
  image: 'image/profile.jpg',
  resume: 'MyResume.pdf',
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Résumé' },
  { id: 'contact', label: 'Contact' },
]

export const projects = [
  {
    id: 'enrollment',
    number: '01',
    title: 'Student Enrollment System',
    category: 'web',
    type: 'Full stack application',
    preview: 'enrollment',
    description:
      'Making student admissions easier, from the first application to the final approval.',
    technologies: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'Amazon RDS'],
    details:
      'A web-based admission and enrollment management system with an admin dashboard, student ID generation, application status management, and email notifications. Deployed on Render with an Amazon RDS database.',
    features: [
      'Student applications and enrollment',
      'Admin approval and application status',
      'Student ID generation',
      'Email notifications',
    ],
  },
  {
    id: 'django-commerce',
    number: '02',
    title: 'Django E-Commerce',
    category: 'web',
    type: 'E-commerce website',
    preview: 'commerce',
    description: 'An end-to-end shopping experience with products, authentication, and a cart.',
    technologies: ['Python', 'Django', 'JavaScript', 'SQLite'],
    details:
      'A full-stack e-commerce application built with Django. Includes product management, a shopping cart, user authentication, and CRUD operations, with a responsive interface and deployment on Render.',
    features: [
      'Product browsing and management',
      'User authentication',
      'Shopping cart',
      'Database-backed CRUD operations',
    ],
    liveUrl: 'https://wbuy.onrender.com/',
  },
  {
    id: 'quickeats',
    number: '03',
    title: 'QuickEats Mobile App',
    category: 'mobile',
    type: 'Mobile application',
    preview: 'mobile',
    description: 'A food-ordering app that brings menus, carts, and order summaries together.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Razorpay'],
    details:
      'A food-ordering mobile app project with menu browsing, cart management, order summaries, and payment integration. Built while learning mobile application development with Flutter and Dart.',
    features: ['Menu browsing', 'Cart management', 'Order summaries', 'Payment integration'],
  },
  {
    id: 'buildsmart',
    number: '04',
    title: 'BuildSmart Constructions',
    category: 'web',
    type: 'Business website',
    preview: 'construction',
    description: 'A responsive web presence for a construction business, built with Flask.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'Render'],
    details:
      'A construction company website developed with Flask, with responsive layouts for its services and business information. One of my first hands-on projects deploying a Python web application.',
    features: [
      'Responsive business pages',
      'Construction service information',
      'Flask application',
      'Render deployment',
    ],
    liveUrl: 'https://my-project-1c9m.onrender.com/',
  },
  {
    id: 'portfolio',
    number: '05',
    title: 'Personal Portfolio',
    category: 'web',
    type: 'React website',
    preview: 'portfolio',
    description: 'The place where my projects, learning, and development journey come together.',
    technologies: ['React', 'Vite', 'CSS', 'JavaScript'],
    details:
      'A component-based portfolio with accessible navigation, responsive layouts, persistent theme preferences, project filters, and an email draft form. Designed to make it easy to explore my work on any device.',
    features: [
      'Reusable React components',
      'Responsive layouts and light/dark themes',
      'Searchable and filterable projects',
      'Résumé download and email draft form',
    ],
    sourceUrl: profile.repository,
  },
  {
    id: 'mern-commerce',
    number: '06',
    title: 'MERN E-Commerce',
    category: 'web',
    type: 'Full stack application',
    preview: 'mern',
    status: 'In progress',
    description: 'Exploring the JavaScript stack through a full-stack shopping application.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    details:
      'An e-commerce application being developed as part of a MERN Stack trainee internship, working with REST APIs, MongoDB integration, and responsive React interfaces.',
    features: [
      'React user interface',
      'REST API development',
      'MongoDB integration',
      'Full-stack JavaScript practice',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Interfaces that feel good to use.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: 'The logic behind the experience.',
    items: ['Python', 'Django', 'Flask', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: 'database',
    description: 'Data with a solid foundation.',
    items: ['MySQL', 'MongoDB', 'SQLite', 'Amazon RDS'],
  },
  {
    title: 'Mobile & tools',
    icon: 'terminal',
    description: 'From the first commit to deployment.',
    items: ['Flutter', 'Dart', 'Java', 'VB.NET', 'Git', 'GitHub', 'VS Code', 'Render'],
  },
]

export const education = [
  {
    title: 'B.Sc. Computer Science',
    organization: 'Scott Christian College, Nagercoil',
    date: '2024 – 2027',
    description:
      'Studying programming, data structures, algorithms, and the foundations of web development.',
    icon: 'graduation',
  },
  {
    title: 'Full Stack Development',
    organization: 'G-TEC Education',
    date: '6-month certification',
    description:
      'Practical training in HTML, CSS, JavaScript, jQuery, Bootstrap, Python, MySQL, and Git, supported by hands-on projects.',
    icon: 'code',
  },
  {
    title: 'MERN Stack Internship',
    organization: 'Development internship',
    date: '1 month',
    description:
      'Built responsive React interfaces, REST APIs, authentication, and MongoDB CRUD operations.',
    icon: 'layers',
  },
  {
    title: 'Network Systems Certification',
    organization: 'Technical training',
    date: '5 days',
    description: 'Hands-on learning in web technologies, network troubleshooting, and IT support.',
    icon: 'network',
  },
]

export const experience = [
  {
    title: 'MERN Stack Internship',
    date: '1 month',
    details: [
      'Developed responsive React UI components and RESTful APIs.',
      'Practiced authentication and MongoDB CRUD operations.',
      'Managed application code with Git and GitHub.',
    ],
  },
  {
    title: 'Mobile App Development Internship',
    date: 'Ongoing',
    details: [
      'Learning Flutter and Dart for mobile applications.',
      'Practicing responsive interfaces, navigation, and application features.',
      'Testing and debugging Android applications with Android Studio.',
    ],
  },
]

export const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
