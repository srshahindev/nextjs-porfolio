import { Logo } from './logo'
import { MobileNav } from './mobilenav'
import { Navbar } from './navbar'
import { Search } from './search'

export const Header = () => {
  return (
    <header className='flex w-full items-center justify-between pt-4'>
      <Logo />
      <Navbar />
      <Search />
      <MobileNav />
    </header>
  )
}
