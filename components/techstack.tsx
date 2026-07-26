import * as motion from 'motion/react-client'
import { SkillProgress } from './skillprogress'
import { SkilSphere } from './skillsphere'
import SecondaryTitle from './SecondaryTitle'

export const TeachStack = () => {
  return (
    <section className='py-16 md:py-24' id='work'>
      <SecondaryTitle
        title='Tools That Power My Work'
        description='These are the technologies I rely on every day to write clean code, design smooth interfaces, and deliver production-ready solutions.'
      />

      {/* Grid Layout for perfectly responsive side-by-side design */}
      <div className='mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8'>
        {/* Left Side: 3D Sphere (Takes 5 columns on large screen) */}
        <motion.div
          className='flex w-full justify-center lg:col-span-5'
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SkilSphere />
        </motion.div>

        {/* Right Side: Progress Bars (Takes 7 columns on large screen) */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className='group flex w-full flex-col gap-8 rounded-2xl border border-slate-700/60 bg-slate-800/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-slate-500/50 lg:col-span-7 lg:p-10'
        >
          {/* Inner Grid for Progress bars (1 col on mobile, 2 cols on tablet/desktop) */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-10'>
            <SkillProgress progressName='HTML/CSS' progressValue={97} />
            <SkillProgress
              progressName='Javascript/Typescript'
              progressValue={90}
            />
            <SkillProgress progressName='Node/Express' progressValue={82} />
            <SkillProgress progressName='React Js' progressValue={91} />
            <SkillProgress progressName='Next.js' progressValue={95} />
            <SkillProgress
              progressName='Tailwind/Bootstrap'
              progressValue={96}
            />
            <SkillProgress progressName='Prisma' progressValue={90} />
            <SkillProgress progressName='UI/UX' progressValue={79} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
