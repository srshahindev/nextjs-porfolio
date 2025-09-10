import { NavLinks } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import { PhoneForwarded } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className='animate-gradient-x relative hidden overflow-hidden rounded-full bg-[linear-gradient(90deg,#ff6b6b,transparent,#00adb5)] p-[1.5px] min-[950px]:block'>
      <div className='bg-bgPrimary relative flex items-center gap-x-8 rounded-full py-1.5 pr-4 pl-8 backdrop-blur-md'>
        {NavLinks.map(link => (
          <Link
            key={link.label}
            href={link.href}
            className='hover:text-coralColor text-white transition duration-300'
          >
            {link.label}
          </Link>
        ))}
        <Button asChild variant='custom'>
          <Link href='#contact' className='flex items-center gap-x-2'>
            Request a
            <PhoneForwarded />
          </Link>
        </Button>
      </div>
    </nav>
  )
}
