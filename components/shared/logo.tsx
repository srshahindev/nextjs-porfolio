import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      href='/'
      className='text-tealColor hover:text-coralColor text-2xl font-bold transition duration-300 md:text-3xl'
    >
      𝔖𝔥𝔞𝔥𝔦𝔫𝔲𝔯
    </Link>
  )
}
