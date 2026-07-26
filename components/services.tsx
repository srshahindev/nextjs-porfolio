import { CodeXml, Palette, Settings, Zap } from 'lucide-react'
import { ServiceCard } from './servicecard'
import SecondaryTitle from './SecondaryTitle'

const servicesData = [
  {
    title: 'Web Development',
    description:
      'Modern, responsive websites and full-stack applications using MERN & Next.js.',
    icon: <CodeXml size={32} />
  },
  {
    title: 'UI/UX & Front-End',
    description:
      'Clean, accessible, and interactive interfaces with Tailwind CSS & shadcn/ui.',
    icon: <Palette size={32} />
  },
  {
    title: 'API & Backend',
    description:
      'Secure APIs and back-end systems built with Node.js, Express, and databases.',
    icon: <Settings size={32} />
  },
  {
    title: 'Performance Tuning',
    description:
      'Fast loading, SEO-friendly, and production-ready applications for better UX.',
    icon: <Zap size={32} />
  }
]

export const Services = () => {
  return (
    <section className='pb-16 md:py-24' id='service'>
      <SecondaryTitle
        title='Services I Provide'
        description='These are the services I specialize in, designed to help you bring your ideas to life with modern web solutions.'
      />

      {/* Grid Layout */}
      <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  )
}
