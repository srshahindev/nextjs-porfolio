import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      href='/'
      className='text-2xl transition duration-300 hover:text-rose-400 md:text-3xl'
    >
      𝔖𝔥𝔞𝔥𝔦𝔫𝔲𝔯
    </Link>
  )
}
