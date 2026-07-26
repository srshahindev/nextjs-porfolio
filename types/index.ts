export interface NavLink {
  label: string
  href: string
}

export interface Project {
  id: number | string
  title: string
  description: string
  liveLink: string
  githubLink: string
  tags: string[]
  imageSrc: string
  imageAlt: string
}
