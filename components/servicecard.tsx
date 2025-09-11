import * as motion from 'motion/react-client'

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const ServiceCard = ({ title, description, icon }: ServiceProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ y: -50, opacity: 0 }}
      className='hover:border-coralColor flex h-full flex-col justify-between rounded-xl border border-transparent bg-slate-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105'
    >
      <div className='flex flex-col gap-3'>
        <div className='text-tealColor text-4xl'>{icon}</div>
        <h3 className='text-xl font-bold tracking-wide text-white'>{title}</h3>
        <p className='text-textColor text-[15px]'>{description}</p>
      </div>
    </motion.div>
  )
}
