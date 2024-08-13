import { Crimson_Pro } from 'next/font/google'
import Header from '@/components/organism/Header/Header'
import Footer from '@/components/organism/Footer/Footer'
import localFont from 'next/font/local'
import './globals.css'

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
    <html lang="en">
      <head>
        <title>Lucas Maclean</title>
      </head>
      <body className={`${crimsonPro.className} bg-primary-500`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
