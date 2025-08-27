import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, PhoneForwarded } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavLinks } from '@/constants'

export const MobileNav = () => {
  return (
    <div className='hidden items-center gap-2 max-[950px]:flex'>
      <Button asChild variant='primary' size='sm'>
        <Link href='#contact' className='flex items-center gap-x-2'>
          Request a
          <PhoneForwarded />
        </Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent
          side='left'
          className='bg-bgPrimary border-0 ring-0 ring-offset-0'
        >
          <nav>
            <div className='flex h-screen w-full flex-col items-center gap-8 pt-32 text-xl text-white *:transition *:duration-300 *:hover:text-rose-400'>
              {NavLinks.map(link => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href='#contact'>Contact</Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
