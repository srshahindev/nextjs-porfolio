import Image from 'next/image'
import { Button } from './ui/button'
import { DownloadCloud } from 'lucide-react'
import { AnimateText } from './animatedtext'

export const HeroSection = () => {
  return (
    <section className=''>
      <div className='pt-16'>
        <div className='space-y-2 text-center'>
          <p className='text-xl font-semibold'>Hey 👋 I'm</p>
          <h1 className='relative text-3xl font-bold md:text-5xl'>
            Shahinur Rahman Shahin
          </h1>
          <p className='text-slate-500'>A passionate</p>
          <AnimateText />
          <p className='text-slate-500'>
            crafting reliable code and smooth user experiences with MERN &
            Next.js.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 p-3'>
          <Image
            src='/profile2.jpg'
            alt='Shahinur Rahman'
            height={180}
            width={180}
            className='rounded-md grayscale transition duration-500 hover:grayscale-0'
            priority={true}
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
