import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Logo } from './logo'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { CgArrowTopRight } from 'react-icons/cg'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='py-6'>
      <div className='flex flex-col items-center justify-between gap-12 py-12 md:flex-row'>
        <div className='flex flex-2/3 items-center justify-start'>
          <div className='space-y-12 rounded-lg border border-purple-500/60 bg-slate-800/30 from-pink-400/30 to-purple-500/30 p-8 hover:bg-linear-to-br md:w-2/3'>
            <div className='flex flex-col gap-6'>
              <h2 className='text-xl font-semibold'>Let's Talk</h2>
              <p>
                Have a project in mind? Let's create something amazing together.
              </p>
              <a href='#' className='flex items-center gap-2'>
                srshahin111@gmail.com <CgArrowTopRight />
              </a>
            </div>
            <Button variant='primary'>Back to top</Button>
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
              <BsLinkedin size={24} />
              <BsGithub size={24} />
            </div>
            <hr className='border-slate-700' />
          </div>
          <div className='space-y-4'>
            <h3>Navigation</h3>
            <div className='flex flex-col gap-3 text-slate-400'>
              {NavLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='font-light transition duration-300 hover:text-rose-400'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className='border-slate-600' />
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div className='pt-6'>
          <p className='text-sm font-light tracking-wider text-slate-500'>
            &copy; 2025 Shahinur Rahman. All right reserved.
          </p>
          <div className='mt-4 flex gap-4 rounded border border-slate-600 px-2 py-2 text-xs text-slate-300'>
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
          </div>
        </div>
        <p className='flex items-center gap-2 text-xs text-slate-500'>
          Made with <Heart size={16} stroke='red' fill='red' /> in Kishoreganj,
          Bangladesh
        </p>
      </div>
    </footer>
  )
}
