import Social from '@/components/molecules/Social/Social'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t-[16px] border-l-4 flex flex-col items-center justify-center gap-4 border-r-4 pt-10 border-primary-100">
      <div className="flex justify-center flex-col items-center gap-8">
        <Image
          alt="Maclean Logo"
          aria-label="Maclean Logo"
          src={'/logoHero.png'}
          width={199}
          height={343}
          className="w-8"
        />

        <Social />

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-primary-100 font-medium text-sm text-center">
            (11) 98273-2631 | contatolucasmaclean@gmail.com
          </h1>
          <div className="w-[90%] bg-primary-100 h-[1px]"></div>
        </div>

        <nav className="text-primary-100 text-sm">
          <ul className="flex justify-center items-center gap-2">
            <li className="border-t border-b border-primary-500 hover:border-b-primary-100 duration-300 hover:rounded-bl-sm hover:rounded-br-sm">
              Home
            </li>
            |
            <li className="border-t border-b border-primary-500 hover:border-b-primary-100 duration-300 hover:rounded-bl-sm hover:rounded-br-sm">
              About Me
            </li>
            |
            <li className="border-t border-b border-primary-500 hover:border-b-primary-100 duration-300 hover:rounded-bl-sm hover:rounded-br-sm">
              Services
            </li>
            |
            <li className="border-t border-b border-primary-500 hover:border-b-primary-100 duration-300 hover:rounded-bl-sm hover:rounded-br-sm">
              Contact
            </li>
          </ul>
        </nav>

        <div className="bg-primary-100 text-primary-500 w-full text-xs inline-block px-8 py-1 text-center">
          Designed and built by{' '}
          <span className="text-primary-300">Lucas Maclean</span> with{' '}
          <span className="text-primary-300">Love</span> &{' '}
          <span className="text-primary-300">Coffee</span> | All rights reserved
          ©
        </div>
      </div>
    </footer>
  )
}
