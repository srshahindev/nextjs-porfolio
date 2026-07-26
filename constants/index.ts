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
    title: 'E-Commerce Application',
    description:
      'A feature-rich e-commerce store with modern UI, shopping cart, user authentication, and online payment integration.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
    tags: ['NextJs', 'Redux', 'Tailwind', 'Stripe'],
    imageSrc: '/bfpabd.png',
    imageAlt: 'ecommerce project'
  }
]
