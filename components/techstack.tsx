import * as motion from 'motion/react-client'

import { SkillProgress } from './skillprogress'
import { SkilSphere } from './skillsphere'
import SecondaryTitle from './SecondaryTitle'

export const TeachStack = () => {
  return (
    <section className='pt-12'>
      <SecondaryTitle
        title='Tools That Power My Work'
        description='These are the technologies I rely on every day to write clean code,
          design smooth interfaces, and deliver production-ready solutions'
      />
      <div className='-mt-32 flex flex-col items-center justify-center gap-0 md:mt-0 md:flex-row md:justify-between md:gap-12 lg:-mt-40'>
        <motion.div
          className='flex-1/3'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <SkilSphere />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='hover:border-coralColor -mt-24 flex w-full flex-2/3 flex-col gap-8 rounded-md border border-transparent bg-slate-800 p-8 shadow-md md:mt-0 md:p-10'
        >
          <div className='flex w-full flex-col gap-8 md:gap-16 lg:flex-row'>
            <SkillProgress progressName='HTML/CSS' progressValue={97} />
            <SkillProgress
              progressName='Javascript/Typescript'
              progressValue={90}
            />
          </div>
          <div className='flex w-full flex-col gap-8 md:gap-16 lg:flex-row'>
            <SkillProgress progressName='Node/Express' progressValue={82} />
            <SkillProgress progressName='React Js' progressValue={91} />
          </div>
          <div className='flex w-full flex-col gap-8 md:gap-16 lg:flex-row'>
            <SkillProgress progressName='Next.js' progressValue={95} />
            <SkillProgress
              progressName='Tailwind/Bootstrap'
              progressValue={96}
            />
          </div>
          <div className='flex w-full flex-col gap-8 md:gap-16 lg:flex-row'>
            <SkillProgress progressName='Prisma' progressValue={90} />
            <SkillProgress progressName='UI/UX' progressValue={79} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
