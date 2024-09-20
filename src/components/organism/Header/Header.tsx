'use client'

import { DotsThreeOutlineVertical } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DropDownMenu from '@/components/molecules/DropDownMenu/DropDownMenu'

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

          <DropDownMenu isDrop={isDrop} />
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
