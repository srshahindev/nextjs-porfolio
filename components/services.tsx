import { CodeXml, Palette, Settings, Zap } from 'lucide-react'
import { ServiceCard } from './servicecard'
import SecondaryTitle from './SecondaryTitle'

export const Services = () => {
  return (
    <section className='mt-12 lg:-mt-20'>
      <SecondaryTitle
        title='Services I Provide'
        description='These are the services I specialize in, designed to help you bring
          your ideas to life with modern web solutions.'
      />
      <div className='grid grid-cols-1 gap-8 py-6 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
        <ServiceCard
          title='Web Development'
          description='Modern, responsive websites and full-stack applications using MERN & Next.js.'
          icon={<CodeXml size={48} />}
        />
        <ServiceCard
          title='UI/UX & Front-End'
          description='Clean, accessible, and interactive interfaces with Tailwind CSS & shadcn.'
          icon={<Palette size={48} />}
        />
        <ServiceCard
          title='API & Backend'
          description='Secure APIs and back-end systems built with Node.js, Express, and databases.'
          icon={<Settings size={48} />}
        />
        <ServiceCard
          title='Performance Tuning'
          description='Fast loading, SEO-friendly, and production-ready applications for better user experience.'
          icon={<Zap size={48} />}
        />
      </div>
    </section>
  )
}
