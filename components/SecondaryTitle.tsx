import * as motion from 'motion/react-client'

interface Props {
  title: string
  description: string
}

export default function SecondaryTitle({ title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className='flex items-center justify-center gap-1 md:gap-3'>
        <h2 className='text-lg font-bold text-white md:text-2xl'>{title}</h2>
        <div className='bg-coralColor w-8 pb-[2px] md:w-20' />
        <h2 className='text-lg md:text-2xl'>🧑‍💻</h2>
      </div>
      <p className='text-tealColor mx-auto max-w-4xl px-0 pt-2 md:px-10 md:text-center'>
        {description}
      </p>
    </motion.div>
  )
}
