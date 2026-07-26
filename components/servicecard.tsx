import * as motion from 'motion/react-client'

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number // স্ট্যাগার্ড (staggered) অ্যানিমেশনের জন্য ইনডেক্স পাস করছি
}

export const ServiceCard = ({
  title,
  description,
  icon,
  index
}: ServiceProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // একটার পর একটা কার্ড ভেসে উঠবে
      viewport={{ once: true, amount: 0.2 }}
      className='group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]'
    >
      {/* Subtle hover gradient background */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-br from-teal-500/5 via-transparent to-rose-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>

      <div className='flex flex-col gap-6'>
        {/* Icon Wrapper (আইকনটিকে একটি সুন্দর গ্লোয়িং বক্সে রাখা হয়েছে) */}
        <div className='flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-800 text-teal-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500/10 group-hover:text-teal-300 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]'>
          {icon}
        </div>

        {/* Text Content */}
        <div>
          <h3 className='mb-3 text-xl font-bold tracking-wide text-slate-100 transition-colors duration-300 group-hover:text-white'>
            {title}
          </h3>
          <p className='text-sm leading-relaxed text-slate-400'>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
