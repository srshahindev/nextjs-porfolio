import Image from 'next/image'
import Link from 'next/link'

export const PortfolioCard = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='group hover:border-coralColor flex max-w-4xl justify-between gap-8 rounded-md border border-transparent bg-slate-800 pt-10 pr-10 pl-10 transition duration-200 *:flex-1 hover:border-1 md:pr-0'>
        <div>
          <h2 className='pb-2 text-2xl font-bold tracking-wider uppercase'>
            Developer Portfolio
          </h2>
          <p className='text-textColor text-justify text-xs leading-loose'>
            A meta-project: my own portfolio website, the one you're on right
            now. The main challenge was to create an engaging and performant
            platform that elegantly presents my body of work. I handled every
            aspect of this project, from UI/UX design and development to final
            deployment.
          </p>
          <div className='flex items-center gap-4 py-3'>
            <Link
              href='/'
              className='border-coralColor hover:bg-coralColor border px-4 py-2 text-sm text-slate-100 transition duration-300'
            >
              Live View
            </Link>
            <Link
              href='/'
              className='border border-rose-400 px-4 py-2 text-sm text-slate-100 transition duration-300 hover:bg-rose-400'
            >
              Github Code
            </Link>
          </div>
          <div className='flex flex-wrap gap-3 py-6'>
            {[
              'NextJs',
              'typescript',
              'ReactJs',
              'tailwind',
              'framer-motion',
              'Threejs',
              'shadcn'
            ].map((item, index) => (
              <span
                key={index}
                className='bg-tealColor rounded-full p-1 px-2 text-[10px] uppercase'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='relative hidden overflow-hidden md:block'>
          <Image
            src='/portfolio.png'
            alt='porfolio project'
            width={600}
            height={600}
            className='absolute -right-12 -bottom-5 rounded-tl-md transition duration-300 group-hover:scale-115 group-hover:-rotate-6'
          />
        </div>
      </div>
    </div>
  )
}
