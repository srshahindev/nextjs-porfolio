'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { PROJECTS_DATA } from '@/constants'
import { PortfolioCard } from './portfoliocard'

export const PortFolio = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section className='relative py-18' id='project'>
      {/* Section Header */}
      <div className='pb-12'>
        <div className='flex items-center justify-center gap-1 md:gap-3'>
          <h2 className='text-lg font-semibold md:text-2xl'>
            Crafting Ideas into Code
          </h2>
          <div className='bg-coralColor w-8 pb-[2px] md:w-20' />
          <h2 className='text-lg md:text-2xl'>✅</h2>
        </div>
        <p className='text-tealColor mx-auto max-w-4xl px-0 pt-2 md:px-10 md:text-center'>
          A curated showcase of my latest projects, demonstrating creativity,
          experimentation, and skill.
        </p>
      </div>

      {/* Stacking Container */}
      <div
        ref={containerRef}
        className='relative flex flex-col items-center gap-10 pb-20'
      >
        {PROJECTS_DATA.map((project, index) => {
          const targetScale = 1 - (PROJECTS_DATA.length - index) * 0.05

          return (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              progress={scrollYProgress}
              range={[index * (1 / PROJECTS_DATA.length), 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}
