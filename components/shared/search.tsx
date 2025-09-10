import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { NavLinks } from '@/constants'
import { ArrowRight, SearchIcon } from 'lucide-react'
import Link from 'next/link'

export const Search = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className='group relative hidden overflow-hidden rounded-lg p-[1.5px] min-[950px]:block'>
            <div className='from-tealColor to-coralColor absolute inset-0 animate-spin rounded bg-linear-to-l [animation-duration:_4s] group-hover:hidden'></div>
            <button className='bg-bgPrimary hover:bg-tealColor relative cursor-pointer rounded-sm px-4 py-2 text-white transition duration-300'>
              ctrl+k
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className='w-[450px] border-1 border-neutral-500/25 bg-neutral-500/20 p-6 text-white ring-0 backdrop-blur-md'>
          <DialogTitle className='font-normal'>Search</DialogTitle>
          <div className='border-b border-neutral-500/25 pt-1.5 pb-5'>
            <div className='flex items-center gap-2 rounded-sm bg-slate-800 px-3 py-2.5'>
              <SearchIcon size={18} />
              <input
                type='text'
                placeholder='Search here...'
                className='border-0 placeholder:font-light focus:outline-0 focus-visible:outline-0'
              />
            </div>
          </div>
          <div>
            <p className='pb-3 text-sm text-neutral-400'>Quick Navigation</p>
            <div className='flex flex-col gap-3'>
              {NavLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='flex items-center justify-between rounded-sm bg-slate-800 px-4 py-2 transition duration-300 hover:bg-slate-500'
                >
                  {link.label}
                  <ArrowRight size={16} />
                </Link>
              ))}
              <Link
                href='#contact'
                className='flex items-center justify-between rounded-sm bg-slate-800 px-4 py-2 transition duration-300 hover:bg-slate-500'
              >
                Contact
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
