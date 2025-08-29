import { CodeXml, Palette, Settings, Zap } from 'lucide-react'
import { ServiceCard } from './servicecard'

export const Services = () => {
  return (
    <section className='mt-12 lg:-mt-20'>
      <div>
        <div className='flex items-center justify-center gap-1 md:gap-3'>
          <h2 className='text-lg font-semibold md:text-2xl'>
            Services I Provide
          </h2>
          <div className='w-8 bg-rose-400 pb-[2px] md:w-20' />
          <h2 className='text-lg md:text-2xl'>🖨️</h2>
        </div>
        <p className='mx-auto max-w-4xl px-0 pt-2 text-slate-500 md:px-10 md:text-center'>
          These are the services I specialize in, designed to help you bring
          your ideas to life with modern web solutions.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
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
