import type { Metadata } from 'next'
import { Crimson_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/organism/Header/Header'
import Footer from '@/components/organism/Footer/Footer'
import localFont from 'next/font/local'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-crimsonPro',
})

const heathergreen = localFont({
  src: '../../public/fonts/Heathergreen.ttf',
  variable: '--font-heathergreen',
})

export const metadata: Metadata = {
  title: 'Lucas Maclean',
  description: 'Personal Portfólio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${heathergreen.className && crimsonPro.className} bg-primary-500`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
