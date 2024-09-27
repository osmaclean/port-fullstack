'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DotsThreeOutlineVertical } from 'phosphor-react'
import React, { Fragment, useState } from 'react'

import { NavInfosProps } from '@/@types/interface'
import DropDownMenu from '@/components/molecules/DropDownMenu/DropDownMenu'
import { Separator } from '@/components/ui/separator'

const navInfos: NavInfosProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Sobre mim',
    href: '/about-me',
  },
  {
    label: 'Trabalhos',
    href: '/jobs',
  },
  {
    label: 'Serviços',
    href: '/services',
  },
  {
    label: 'Contato',
    href: '/contact',
  },
]

export default function Header() {
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const handleToggleDropdown = () => setIsDrop(!isDrop)

  return (
    <header className="relative flex w-full select-none items-center justify-between bg-primary-500">
      <div className="flex w-full items-center justify-between px-4 py-4">
        <Link href={'/'}>
          <h1 className="md-4:text-2xl text-xs font-normal uppercase text-primary-100 sm-3:text-sm md-3:text-lg">
            Lucas Maclean
          </h1>{' '}
        </Link>

        <section className="relative flex items-center justify-center md-3:hidden">
          <DotsThreeOutlineVertical
            size={18}
            weight="fill"
            onClick={handleToggleDropdown}
            className="cursor-pointer text-primary-100 duration-300 hover:scale-110"
          />

          <DropDownMenu isDrop={isDrop} />
        </section>

        <nav className="md-4:text-base hidden text-xs text-primary-100 sm-3:text-sm md-3:flex">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {navInfos.map((item, index) => (
              <Fragment key={index}>
                <li className="border-b border-t border-primary-500 px-1 duration-300 hover:rounded-bl-sm hover:rounded-br-sm hover:border-b-primary-100">
                  <Link href={item.href}>{item.label}</Link>
                </li>
                {item.label !== 'Contato' && (
                  <Separator className="w-1 bg-primary-100" />
                )}
              </Fragment>
            ))}
          </ul>
        </nav>
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
