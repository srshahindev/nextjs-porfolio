'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform, MotionValue } from 'framer-motion'
import { Project } from '@/types'

interface PortfolioCardProps {
  project: Project
  index: number
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

export const PortfolioCard = ({
  project,
  index,
  progress,
  range,
  targetScale
}: PortfolioCardProps) => {
  const { title, description, liveLink, githubLink, tags, imageSrc, imageAlt } =
    project

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className='sticky top-24 flex w-full items-center justify-center pb-10'>
      <motion.div
        style={{
          scale,
          top: `calc(90px + ${index * 30}px)`
        }}
        className='group relative flex w-full max-w-5xl origin-top flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-500/50 md:flex-row md:p-12'
      >
        {/* Left Content Area */}
        <div className='flex w-full flex-col justify-center md:w-[50%]'>
          <div className='mb-6'>
            <h2 className='bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl'>
              {title}
            </h2>
            <p className='mt-4 text-justify text-sm leading-relaxed text-slate-400 sm:text-base'>
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className='mb-8 flex flex-wrap gap-2'>
            {tags.map((item, tagIndex) => (
              <span
                key={tagIndex}
                className='rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-teal-300 uppercase backdrop-blur-sm'
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex flex-wrap items-center gap-4'>
            {/* Live View Button */}
            <Link
              href={liveLink}
              target='_blank'
              className='to-coralColor flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-rose-500/40'
            >
              <span>Live Preview</span>
              {/* External Link Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </Link>

            {/* Github Button */}
            <Link
              href={githubLink}
              target='_blank'
              className='flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/50 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-700'
            >
              {/* Github Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
              <span>Source Code</span>
            </Link>
          </div>
        </div>

        {/* Right Image Area */}
        <div className='relative mt-10 hidden w-full items-center justify-center md:mt-0 md:flex md:w-[50%]'>
          {/* Subtle Glow behind the image */}
          <div className='absolute inset-0 z-0 bg-gradient-to-tr from-rose-500/20 to-teal-500/20 blur-2xl filter transition-all duration-500 group-hover:blur-3xl'></div>

          <div className='relative z-10 h-[300px] w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-rotate-2 sm:h-[350px]'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
