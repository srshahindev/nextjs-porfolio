import { Logo } from './logo'
import { Navbar } from './navbar'

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <div>Search</div>
    </header>
  )
}
