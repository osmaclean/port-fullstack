import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Crimson_Pro } from 'next/font/google'
import localFont from 'next/font/local'

import Footer from '@/components/organism/Footer/Footer'
import Header from '@/components/organism/Header/Header'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-crimsonPro',
})

export const heathergreen = localFont({
  src: '../../public/fonts/Heathergreen.ttf',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#2d3032]">
      <head>
        <title>Lucas Maclean</title>
      </head>
      <body
        className={`${crimsonPro.className} m-auto max-w-[1440px] bg-primary-500`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
