import Image from 'next/image'
import { Button } from './ui/button'
import { DownloadCloud } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section>
      <div className='pt-16'>
        <div className='space-y-2 text-center'>
          <p className='text-xl font-semibold'>Hey 👋 I'm</p>
          <h1 className='text-5xl font-bold tracking-wide'>Shahinur Rahman</h1>
          <p className='text-slate-500'>A passionate</p>
          <p className='text-2xl font-semibold text-rose-400'>
            Full Stack Developer
          </p>
          <p className='text-slate-500'>
            specialized in building stunning pixel-perfect interactive
            websites/applications.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 p-3'>
          <Image
            src='/profile2.jpg'
            alt='Shahinur Rahman'
            height={180}
            width={180}
            className='rounded-md grayscale transition duration-500 hover:grayscale-0'
          />
          <Button variant='primary' size='sm' className='cursor-pointer'>
            Resume
            <DownloadCloud />
          </Button>
        </div>
      </div>
    </section>
  )
}
