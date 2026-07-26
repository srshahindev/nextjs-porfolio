'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, PhoneForwarded } from 'lucide-react'
import { Button } from '../ui/button'
import { NavLinks } from '@/constants'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()

    setIsOpen(false)

    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 300)
  }

  return (
    <div className='hidden items-center gap-3 max-[950px]:flex'>
      <Button asChild variant='primary' size='sm' className='rounded-full'>
        <a
          href='#contact'
          className='flex items-center gap-x-2'
          onClick={e => handleScroll(e, 'contact')}
        >
          Request a
          <PhoneForwarded size={16} />
        </a>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu className='h-7 w-7 cursor-pointer text-slate-200 transition-colors hover:text-white' />
        </SheetTrigger>

        <SheetContent
          side='left'
          className='bg-bgPrimary w-[300px] border-r border-slate-700/50 ring-0 ring-offset-0 sm:w-[350px]'
        >
          <nav className='flex h-full w-full flex-col items-center gap-8 pt-32 text-lg font-medium text-slate-300'>
            {NavLinks.map(link => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={e => handleScroll(e, link.href)}
                className='transition-colors duration-300 hover:text-rose-400'
              >
                {link.label}
              </a>
            ))}
            <a
              href='#contact'
              onClick={e => handleScroll(e, 'contact')}
              className='transition-colors duration-300 hover:text-rose-400'
            >
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
