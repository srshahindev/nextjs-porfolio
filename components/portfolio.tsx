import { PortfolioCard } from './portfoliocard'

export const PortFolio = () => {
  return (
    <section className='py-18'>
      <div className='pb-12'>
        <div className='flex items-center justify-center gap-1 md:gap-3'>
          <h2 className='text-lg font-semibold md:text-2xl'>
            Crafting Ideas into Code
          </h2>
          <div className='bg-coralColor w-8 pb-[2px] md:w-20' />
          <h2 className='text-lg md:text-2xl'>✅</h2>
        </div>
        <p className='text-tealColor mx-auto max-w-4xl px-0 pt-2 md:px-10 md:text-center'>
          A curated showcase of my latest projects, demonstrating creativity,
          experimentation, and skill.
        </p>
      </div>
      {/* todo portfolio card */}
      <div className='flex flex-col justify-between'>
        <PortfolioCard />
        {/* <PortfolioCard />
        <PortfolioCard /> */}
      </div>
    </section>
  )
}
