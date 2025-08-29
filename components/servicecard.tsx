import { CodeXml } from 'lucide-react'

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const ServiceCard = ({ title, description, icon }: ServiceProps) => {
  return (
    <div className='hover:to-pin-500/40 rounded-lg bg-linear-to-br from-purple-400/25 to-pink-500/25 p-6 shadow-2xl transition duration-300 hover:scale-105 hover:from-purple-400/40'>
      <div className='flex flex-col gap-3'>
        {icon}
        <h3 className='text-2xl font-bold tracking-wider text-rose-400'>
          {title}
        </h3>
        <p className='text-[15px]'>{description}</p>
      </div>
    </div>
  )
}
