import { cn } from '@/lib/utils'

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export const ServiceCard = ({
  title,
  description,
  icon,
  className
}: ServiceProps) => {
  return (
    <div className='flex h-full flex-col justify-between rounded-xl border border-pink-500/40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:from-purple-400/30 hover:to-pink-500/30'>
      <div className='flex flex-col gap-3'>
        <div className='text-4xl text-pink-400'>{icon}</div>
        <h3 className='text-xl font-bold tracking-wide text-rose-400'>
          {title}
        </h3>
        <p className='text-[15px] text-gray-300'>{description}</p>
      </div>
    </div>
  )
}
