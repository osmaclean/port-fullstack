'use client'

import { DotsThreeOutlineVertical } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const handleToggleDropdown = () => setIsDrop(!isDrop)

  return (
    <header className="flex w-full select-none items-center justify-between bg-primary-500 relative ">
      <div className="py-4 px-4 flex w-full items-center justify-between">
        <Link href={'/'}>
          <h1 className="font-normal text-xs uppercase text-primary-100">
            Lucas Maclean
          </h1>{' '}
        </Link>
        <section className="flex items-center justify-center relative">
          <DotsThreeOutlineVertical
            size={18}
            weight="fill"
            onClick={handleToggleDropdown}
            className="text-primary-100 cursor-pointer duration-300 hover:scale-110"
          />

          <nav
            className={`bg-primary-100 shadow-sm shadow-primary-500 select-none absolute -bottom-[136px] rounded-md right-4 p-2 min-w-20 ${isDrop ? 'flex' : 'hidden'}`}
          >
            <ul className="flex flex-col w-full items-center justify-center gap-2">
              <li>
                <Link
                  href={'/home'}
                  className="border-t border-b border-primary-100 duration-500 hover:border-b-primary-500 hover:rounded-[3px] px-[2px] text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={'/about-me'}
                  className="border-t border-b border-primary-100 duration-500 hover:border-b-primary-500 hover:rounded-[3px] px-[2px] text-sm"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href={'/services'}
                  className="border-t border-b border-primary-100 duration-500 hover:border-b-primary-500 hover:rounded-[3px] px-[2px] text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={'/contact'}
                  className="border-t border-b border-primary-100 duration-500 hover:border-b-primary-500 hover:rounded-[3px] px-[2px] text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      <div className="w-full absolute bottom-0 flex items-center justify-center">
        <Image
          alt="Tag Icon"
          src={'/header.png'}
          width={1440}
          height={40}
          className="w-full"
        />
      </div>
    </header>
  )
}
