import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'

interface BlogProps {
  title: string
  description: string
  imageSrc: string
  category: string
  date: string
  readTime: string
  link: string
  index: number
}

export const BlogCard = ({
  title,
  description,
  imageSrc,
  category,
  date,
  readTime,
  link,
  index
}: BlogProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-500/50 hover:shadow-2xl'
    >
      {/* Blog Thumbnail Image */}
      <div className='relative h-48 w-full overflow-hidden'>
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 to-transparent'></div>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className='object-cover transition-transform duration-700 ease-in-out group-hover:scale-110'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        {/* Category Badge */}
        <span className='absolute top-4 left-4 z-20 rounded-full bg-teal-500/90 px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase shadow-lg backdrop-blur-md'>
          {category}
        </span>
      </div>

      {/* Blog Content */}
      <div className='flex flex-1 flex-col justify-between p-6'>
        <div>
          {/* Date & Read Time */}
          <div className='mb-3 flex items-center gap-4 text-xs font-medium text-slate-400'>
            <div className='flex items-center gap-1.5'>
              <CalendarDays size={14} className='text-teal-400' />
              <span>{date}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Clock size={14} className='text-rose-400' />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className='mb-3 line-clamp-2 text-xl font-bold tracking-wide text-slate-100 transition-colors duration-300 group-hover:text-teal-400'>
            {title}
          </h3>

          {/* Description */}
          <p className='line-clamp-3 text-sm leading-relaxed text-slate-400'>
            {description}
          </p>
        </div>

        {/* Read More Link */}
        <div className='mt-6'>
          <Link
            href={link}
            className='inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-teal-400'
          >
            Read Article
            <ArrowRight
              size={16}
              className='transition-transform duration-300 group-hover:translate-x-1'
            />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
