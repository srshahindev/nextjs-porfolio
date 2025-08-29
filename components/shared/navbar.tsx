import { NavLinks } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import { PhoneForwarded } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className='animate-gradient-x relative hidden overflow-hidden rounded-full bg-[linear-gradient(90deg,#ec4899,transparent,#8b5cf6,#f97316)] p-[1.2px] min-[950px]:block'>
      <div className='bg-bgPrimary relative flex items-center gap-x-8 rounded-full py-1.5 pr-4 pl-8 backdrop-blur-md'>
        {NavLinks.map(link => (
          <Link
            key={link.label}
            href={link.href}
            className='text-white/80 transition duration-300 hover:text-rose-400'
          >
            {link.label}
          </Link>
        ))}
        <Button asChild variant='primary'>
          <Link href='#contact' className='flex items-center gap-x-2'>
            Request a
            <PhoneForwarded />
          </Link>
        </Button>
      </div>
    </nav>
  )
}
