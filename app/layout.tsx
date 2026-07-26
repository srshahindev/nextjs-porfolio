import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorEffect from '@/components/cursor-effect'
import { SplashScreen } from '@/components/shared/SplashScreen'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: {
    default: 'Shahinur Rahman - Full Stack Developer',
    template: `%s | Shahinur Rahman`
  },
  description: 'Shahinur Rahman - Full Stack Developer',
  icons: {
    icon: '/programmer.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <CursorEffect />
        <main className='bg-bgPrimary relative text-white'>
          <div className='absolute inset-0 [background-image:linear-gradient(rgba(168,85,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.01)_1px,transparent_1px)] [background-size:100px_100px]'></div>
          <SplashScreen>{children}</SplashScreen>
        </main>
      </body>
    </html>
  )
}
