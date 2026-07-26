import { NavLink, Project } from '@/types'

export const NavLinks: NavLink[] = [
  { label: 'Home', href: 'hero' },
  { label: 'Work', href: 'work' },
  { label: 'Services', href: 'service' },
  { label: 'Projects', href: 'project' },
  { label: 'Blog', href: 'blog' }
]

export const Logos: string[] = [
  '/jswhite.svg',
  '/jswhite.svg',
  '/tswhite.svg',
  '/tswhite.svg',
  '/nextjswhite.svg',
  '/nextjswhite.svg',
  '/reactwhite.svg',
  '/reactwhite.svg',
  '/nodewhite.svg',
  '/nodewhite.svg',
  '/dockerwhite.svg',
  '/dockerwhite.svg',
  '/postgreswhite.svg',
  '/postgreswhite.svg',
  '/tailwindwhite2.svg',
  '/tailwindwhite2.svg',
  '/mysqlwhite.svg',

  '/csswhite.svg',
  '/csswhite.svg',
  '/bootstrapwhite.svg',
  '/bootstrapwhite.svg',
  '/mongowhite.svg',
  '/mongowhite.svg',
  '/vscodewhite.svg',
  '/vscodewhite.svg',
  '/vercelwhite.svg',
  '/prisma.svg',
  '/prisma.svg'
]

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Developer Portfolio',
    description:
      "A meta-project: my own portfolio website, the one you're on right now. The main challenge was to create an engaging and performant platform that elegantly presents my body of work. I handled every aspect of this project, from UI/UX design and development to final deployment.",
    liveLink: '/',
    githubLink: '/',
    tags: [
      'NextJs',
      'typescript',
      'ReactJs',
      'tailwind',
      'framer-motion',
      'Threejs',
      'shadcn'
    ],
    imageSrc: '/portfolio.png',
    imageAlt: 'portfolio project'
  },
  {
    id: 2,
    title: 'Bajitpur Friends Property Alliance',
    description:
      'A production-ready organization management system developed for Bajitpur Friends Property Alliance. The platform streamlines member management, authentication, and monthly/one-time contribution tracking through a modern, secure, and responsive web application built with Next.js, Prisma, and PostgreSQL.',
    liveLink: 'https://www.bfpabd.com',
    githubLink: '#',
    tags: [
      'NextJs',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Authentication',
      'Vercel'
    ],
    imageSrc: '/bfpabd.png',
    imageAlt: 'Bajitpur Friends Property Alliance'
  },

  {
    id: 3,
    title: 'Vivid Collective',
    description:
      'A modern business website for an event production company, showcasing services, portfolio, and contact information. Built with Next.js and Sanity CMS to provide an intuitive content management experience, responsive design, and SEO-friendly architecture.',
    liveLink: 'https://vividcollective.co.uk',
    githubLink: '#',
    tags: [
      'NextJs',
      'TypeScript',
      'Sanity CMS',
      'Tailwind CSS',
      'Responsive Design',
      'SEO',
      'Vercel'
    ],
    imageSrc: '/vivid.png',
    imageAlt: 'Vivid Collective project'
  },

  {
    id: 4,
    title: 'Sobdhokotha',
    description:
      'A modern blog platform focused on delivering a clean reading experience with a responsive interface. Built using Next.js and TypeScript with performance, simplicity, and user experience as the primary goals.',
    liveLink: '#',
    githubLink: '#',
    tags: [
      'NextJs',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Responsive Design'
    ],
    imageSrc: '/sobdhokotha.png',
    imageAlt: 'Sobdhokotha blog platform'
  }
]
