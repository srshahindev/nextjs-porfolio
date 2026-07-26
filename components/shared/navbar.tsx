'use client'

import { NavLinks } from '@/constants'
import { Button } from '../ui/button'
import { PhoneForwarded } from 'lucide-react'

export const Navbar = () => {
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
    <nav className='animate-gradient-x relative hidden overflow-hidden rounded-full bg-gradient-to-r from-rose-500 via-slate-800 to-teal-500 p-[1px] shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-black/40 min-[950px]:block'>
      <div className='bg-bgPrimary/95 flex items-center justify-between gap-x-4 rounded-full py-1.5 pr-2 pl-6 backdrop-blur-xl'>
        {/* Navigation Links */}
        <div className='flex items-center gap-x-1'>
          {NavLinks.map(link => (
            <a
              key={link.label}
              href={`#${link.href}`}
              className='group relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white'
              onClick={e => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <Button asChild variant='custom' className='ml-2 rounded-full px-5'>
          <a
            href='#contact'
            className='group flex items-center gap-x-2'
            onClick={e => handleScroll(e, 'contact')}
          >
            <span>Request a</span>
            <PhoneForwarded
              size={16}
              className='transition-transform group-hover:-rotate-12'
            />
          </a>
        </Button>
      </div>
    </nav>
  )
}
