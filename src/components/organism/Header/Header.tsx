'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DotsThreeOutlineVertical } from 'phosphor-react'
import React, { useState } from 'react'

import DropDownMenu from '@/components/molecules/DropDownMenu/DropDownMenu'
import { Separator } from '@/components/ui/separator'

export default function Header() {
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const handleToggleDropdown = () => setIsDrop(!isDrop)

  return (
    <header className="relative flex w-full select-none items-center justify-between bg-primary-500">
      <div className="flex w-full items-center justify-between px-4 py-4">
        <Link href={'/'}>
          <h1 className="text-xs font-normal uppercase text-primary-100 sm-3:text-sm">
            Lucas Maclean
          </h1>{' '}
        </Link>
        <section className="relative flex items-center justify-center">
          <DotsThreeOutlineVertical
            size={18}
            weight="fill"
            onClick={handleToggleDropdown}
            className="cursor-pointer text-primary-100 duration-300 hover:scale-110"
          />

          <DropDownMenu isDrop={isDrop} />
        </section>
      </div>

      <div className="absolute bottom-0 flex w-full items-center justify-center">
        <Image
          alt="Tag Icon"
          src={'/header.png'}
          width={1440}
          height={40}
          className="w-full sm-3:hidden"
        />
        <Separator className="hidden flex-1 bg-primary-100 opacity-20 sm-3:inline-block" />
        <Image
          alt="Tag Icon"
          src={'/tag.png'}
          width={1440}
          height={40}
          className="-mt-2 hidden w-5 sm-3:inline-block"
        />
        <Separator className="hidden flex-1 bg-primary-100 opacity-20 sm-3:inline-block" />
      </div>
    </header>
  )
}
