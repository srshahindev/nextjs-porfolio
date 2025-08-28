'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export const AnimateText = () => {
  const [index, setIndex] = useState(0)

  const roles = [
    'Full Stack Developer (MERN/Next.js)',
    'Frontend Engineer (Next.js & React)',
    'UI/UX Driven Web Developer'
  ]

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(prev => (prev + 1) % roles.length)
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [roles.length])

  return (
    <div className='flex h-15 items-center justify-center overflow-hidden md:h-9'>
      <AnimatePresence mode='wait'>
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className='block text-xl font-semibold text-rose-400 md:text-2xl'
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
