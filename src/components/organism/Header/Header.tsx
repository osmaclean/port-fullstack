'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DotsThreeOutlineVertical } from 'phosphor-react'
import React from 'react'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-primary-500 relative ">
      <div className="py-4 px-4 flex w-full items-center justify-between">
        <Link href={'/'}>
          <h1 className="font-normal text-xs uppercase text-primary-100">
            Lucas Maclean
          </h1>{' '}
        </Link>
        <DotsThreeOutlineVertical
          size={18}
          weight="fill"
          className="text-primary-100 cursor-pointer"
        />
      </div>

      <div className="w-full absolute bottom-0 flex items-center justify-center">
        <Image
          alt="Tag Icon"
          src={'/header.png'}
          width={280}
          height={8}
          className="w-full"
        />
      </div>
    </header>
  )
}
