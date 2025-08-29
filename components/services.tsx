import { CodeXml, Palette, Settings } from 'lucide-react'
import { ServiceCard } from './servicecard'

export const Services = () => {
  return (
    <section className='-mt-16'>
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
      <div className='flex items-center justify-between gap-12 py-6'>
        <ServiceCard
          title='Web Development'
          description='I build modern, responsive, and scalable websites using MERN & Next.js. From landing pages to full-stack apps, I ensure performance, clean code, and a smooth user experience.'
          icon={<CodeXml size={48} />}
        />
        <ServiceCard
          title='UI/UX & Front-End'
          description='I craft pixel-perfect, user-friendly interfaces with Tailwind CSS, shadcn, and modern design practices. My focus is on accessibility, responsiveness, and interactive experiences.'
          icon={<Palette size={48} />}
        />
        <ServiceCard
          title='API & Backend'
          description='I develop secure and efficient back-end systems with Node.js, Express, and databases like MongoDB & PostgreSQL. I also integrate APIs and authentication systems such as Clerk & JWT.'
          icon={<Settings size={48} />}
        />
      </div>
    </section>
  )
}
