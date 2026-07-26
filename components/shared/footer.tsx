'use client'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Logo } from './logo'
import { NavLinks } from '@/constants'
import { CgArrowTopRight } from 'react-icons/cg'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'

export const Footer = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <footer className='py-6'>
      <div className='flex flex-col items-center justify-between gap-12 py-12 md:flex-row'>
        <div className='flex flex-2/3 items-center justify-start'>
          <div className='hover:border-coralColor space-y-12 rounded-lg border border-transparent bg-slate-800 p-8 hover:bg-linear-to-br md:w-2/3'>
            <div className='flex flex-col gap-6'>
              <h2 className='text-xl font-semibold'>Let's Talk</h2>
              <p>
                Have a project in mind? Let's create something amazing together.
              </p>
              <a
                href='mailto://srshahin111@gmail.com'
                className='flex items-center gap-2'
              >
                srshahin111@gmail.com <CgArrowTopRight />
              </a>
            </div>
            <Button variant='custom' asChild>
              <a href='#hero' onClick={e => handleScroll(e, 'hero')}>
                Back to Top
              </a>
            </Button>
          </div>
        </div>
        <div className='flex flex-1/3 items-center gap-12'>
          <div className='flex flex-col gap-8'>
            <Logo />
            <p className='text-slate-400'>
              Building digital products, brands, and experiences that people
              love.
            </p>
            <div className='flex items-center gap-4'>
              <a href='https://github.com/srshaheen' target='_blank'>
                <BsGithub size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/shahinur-rahman-shahin/'
                target='_blank'
              >
                <BsLinkedin size={24} />
              </a>
            </div>
            <hr className='border-slate-700' />
          </div>
          <div className='space-y-4'>
            <h3>Navigation</h3>
            <div className='flex flex-col gap-3 text-slate-400'>
              {NavLinks.map(link => (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  onClick={e => handleScroll(e, link.href)}
                  className='font-light transition duration-300 hover:text-rose-400'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className='border-slate-600' />
      <div className='flex flex-col items-center justify-between gap-8 pt-6 md:flex-row'>
        <div className=''>
          <p className='text-textColor text-sm font-light tracking-wider'>
            &copy; 2025 Shahinur Rahman. All right reserved.
          </p>
          {/* <div className='mt-4 flex gap-4 rounded border border-slate-600 px-2 py-2 text-xs text-slate-300'>
            <p className='flex items-center gap-3'>
              <span className='block h-2 w-2 rounded-full bg-green-500'></span>
              Performance: 98
            </p>
            <p>
              <span></span>
              Security: A+
            </p>
            <p>
              <span></span>
              Uptime: 99.9%
            </p>
          </div> */}
        </div>
        <p className='text-textColor flex items-center gap-2 text-xs'>
          Made with <Heart size={16} stroke='red' fill='red' /> in Kishoreganj,
          Bangladesh
        </p>
      </div>
    </footer>
  )
}
