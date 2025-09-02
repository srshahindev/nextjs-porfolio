import { ContactSection } from '@/components/contact'
import { HeroSection } from '@/components/hero'
import { PortFolio } from '@/components/portfolio'
import { Services } from '@/components/services'
import { Footer } from '@/components/shared/footer'
import { Header } from '@/components/shared/header'
import { TeachStack } from '@/components/techstack'

export default function Home() {
  return (
    <div className='relative mx-auto w-full max-w-7xl px-6'>
      <Header />
      <HeroSection />
      <TeachStack />
      <Services />
      <PortFolio />
      <ContactSection />
      <Footer />
    </div>
  )
}
