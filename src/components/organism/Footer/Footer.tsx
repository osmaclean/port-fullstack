import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

import { NavInfosProps } from '@/@types/interface'
import Social from '@/components/molecules/Social/Social'
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

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4 border-l-4 border-r-4 border-t-[16px] border-primary-100 pt-10">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-8 md-3:flex-row md-3:gap-28 md-4:px-32">
          <Link href={'/'}>
            <Image
              alt="Maclean Logo"
              aria-label="Maclean Logo"
              src={'/logoHero.png'}
              width={199}
              height={343}
              className="w-8 md-3:w-20"
            />
          </Link>

          <Social />
        </div>

        <Separator className="hidden w-[80%] bg-primary-100 opacity-50 md-3:flex md-4:w-full" />

        <div className="flex w-full flex-col items-center justify-center gap-8 md-3:flex-row md-4:justify-between md-4:px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="px-4 text-center text-sm font-medium text-primary-100 sm-3:text-base">
              (11) 98273-2631 | contatolucasmaclean@gmail.com
            </h1>
            <div className="h-[1px] w-[90%] bg-primary-100 md-3:hidden"></div>
          </div>

          <nav className="text-xs text-primary-100 sm-3:text-sm md-4:text-base">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {navInfos.map((item, index) => (
                <Fragment key={index}>
                  <li className="border-b border-t border-primary-500 px-1 duration-300 hover:rounded-bl-sm hover:rounded-br-sm hover:border-b-primary-100">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                  {item.label !== 'Contato' && <span>|</span>}
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>

        <div className="inline-block w-full bg-primary-100 px-8 py-1 text-center text-xs text-primary-500 lg-2:text-sm">
          Projetado e criado por{' '}
          <span className="text-primary-300">Lucas Maclean</span> com{' '}
          <span className="text-primary-300">Amor</span> &{' '}
          <span className="text-primary-300">Café</span> | © Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  )
}
