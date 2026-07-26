'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        // Premium Loader Screen
        <motion.div
          key='loader'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#0f172a] backdrop-blur-xl'
        >
          <div className='relative flex items-center justify-center'>
            {/* Outer Ring (Teal) */}
            <div
              className='absolute h-40 w-40 animate-spin rounded-full border-[2px] border-transparent border-t-teal-400 border-b-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]'
              style={{ animationDuration: '3s' }}
            ></div>

            {/* Middle Ring (Rose) */}
            <div
              className='absolute h-32 w-32 animate-spin rounded-full border-[2px] border-transparent border-r-rose-400 border-l-rose-400 shadow-[0_0_20px_rgba(251,113,133,0.2)]'
              style={{ animationDuration: '2s', animationDirection: 'reverse' }}
            ></div>

            {/* Inner Ring (Purple) */}
            <div
              className='absolute h-24 w-24 animate-spin rounded-full border-[2px] border-transparent border-t-purple-500 border-b-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
              style={{ animationDuration: '1.5s' }}
            ></div>

            {/* Center Logo (SR) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex h-16 w-16 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/80 shadow-[0_0_30px_rgba(45,212,191,0.3)] backdrop-blur-md'
            >
              <span className='bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text text-xl font-black tracking-wider text-transparent'>
                SR
              </span>
            </motion.div>

            {/* Background Ambient Glow */}
            <div className='absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-tr from-teal-500/20 via-rose-500/10 to-purple-500/20 blur-3xl'></div>
          </div>
        </motion.div>
      ) : (
        // Main Website Content (Smooth Entry)
        <motion.div
          key='content'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
