import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SecondaryTitle from '../SecondaryTitle'
import { BlogCard } from './BlogCard'
import { Button } from '../ui/button'

// ডামি ব্লগ ডেটা (আপনি পরবর্তীতে এগুলো ডাইনামিক করতে পারবেন)
const blogsData = [
  {
    title: 'How to build scalable applications with Next.js 15 and Prisma',
    description:
      'Learn the best practices and architectural patterns for building large-scale, production-ready web applications using the latest Next.js features and Prisma ORM.',
    imageSrc:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop', // ডামি ইমেজ
    category: 'Development',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    link: '#' // ব্লগের আসল লিঙ্ক দিন
  },
  {
    title: 'Mastering Tailwind CSS: Tips for cleaner and faster styling',
    description:
      'Stop writing messy classes. Discover advanced Tailwind CSS techniques, custom configurations, and component abstractions for a cleaner codebase.',
    imageSrc:
      'https://images.unsplash.com/photo-1618477388954-7852f32655cb?q=80&w=600&auto=format&fit=crop',
    category: 'Design',
    date: 'Jul 02, 2026',
    readTime: '4 min read',
    link: '#'
  },
  {
    title: 'Why I choose PostgreSQL over MongoDB for enterprise apps',
    description:
      'An in-depth comparison between SQL and NoSQL databases, and why PostgreSQL remains the undisputed king for complex, relational data structures.',
    imageSrc:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop',
    category: 'Database',
    date: 'Jun 20, 2026',
    readTime: '7 min read',
    link: '#'
  }
]

export const Blogs = () => {
  return (
    <section className='py-16 md:py-24' id='blogs'>
      <SecondaryTitle
        title='Latest Insights & Articles'
        description='I write about web development, design trends, and my personal journey in the tech world. Read my latest thoughts below.'
      />

      {/* Blogs Grid */}
      <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {blogsData.map((blog, index) => (
          <BlogCard
            key={index}
            index={index}
            title={blog.title}
            description={blog.description}
            imageSrc={blog.imageSrc}
            category={blog.category}
            date={blog.date}
            readTime={blog.readTime}
            link={blog.link}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className='mt-14 flex justify-center'>
        <Button
          asChild
          variant='outline'
          className='group rounded-full border-slate-600 bg-slate-800/50 px-8 py-6 text-slate-200 transition-all hover:bg-slate-700 hover:text-white'
        >
          <Link href='#' className='flex items-center gap-x-2 text-base'>
            <span>View All Articles</span>
            <ArrowUpRight
              size={18}
              className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            />
          </Link>
        </Button>
      </div>
    </section>
  )
}
