import { HeroSection } from '@/components/hero'
import { Header } from '@/components/shared/header'
import { TeachStack } from '@/components/techstack'

export default function Home() {
  return (
    <div className='relative mx-auto w-full max-w-7xl px-6'>
      <Header />
      <HeroSection />
      <TeachStack />
    </div>
  )
}
