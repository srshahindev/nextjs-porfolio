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
    <div className='hover:border-coralColor flex h-full flex-col justify-between rounded-xl border border-transparent bg-slate-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105'>
      <div className='flex flex-col gap-3'>
        <div className='text-tealColor text-4xl'>{icon}</div>
        <h3 className='text-xl font-bold tracking-wide text-white'>{title}</h3>
        <p className='text-textColor text-[15px]'>{description}</p>
      </div>
    </div>
  )
}
