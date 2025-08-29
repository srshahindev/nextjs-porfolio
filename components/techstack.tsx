import { SkillProgress } from './skillprogress'
import { SkilSphere } from './skillsphere'

export const TeachStack = () => {
  return (
    <section className='pt-12'>
      <div>
        <div className='flex items-center justify-center gap-1 md:gap-3'>
          <h2 className='text-lg font-semibold md:text-2xl'>
            Tools That Power My Work
          </h2>
          <div className='w-8 bg-rose-400 pb-[2px] md:w-20' />
          <h2 className='text-lg md:text-2xl'>🧑‍💻</h2>
        </div>
        <p className='mx-auto max-w-4xl px-0 pt-2 text-slate-500 md:px-10 md:text-center'>
          These are the technologies I rely on every day to write clean code,
          design smooth interfaces, and deliver production-ready solutions
        </p>
      </div>
      <div className='-mt-32 flex flex-col items-center justify-center gap-0 md:mt-0 md:flex-row md:justify-between md:gap-12 lg:-mt-40'>
        <div className='flex-1/3'>
          <SkilSphere />
        </div>
        <div className='-mt-24 flex w-full flex-2/3 flex-col gap-8 rounded-md border border-purple-400 bg-slate-700/40 from-pink-500/10 to-purple-400/10 p-8 shadow-md hover:bg-linear-to-bl md:mt-0 md:p-10'>
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
        </div>
      </div>
    </section>
  )
}
