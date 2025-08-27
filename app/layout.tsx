import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: {
    default: 'Shahinur Rahman - Full Stack Developer',
    template: `%s | Shahinur Rahman`
  },
  description: 'Shahinur Rahman - Full Stack Developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <main className='bg-bgPrimary h-full text-white'>{children}</main>
      </body>
    </html>
  )
}
