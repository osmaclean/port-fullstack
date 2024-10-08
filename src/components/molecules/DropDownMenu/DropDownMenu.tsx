import Link from 'next/link'
import { Fragment } from 'react'

import { DropDownMenuProps, NavInfosProps } from '@/@types/interface'
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

export default function DropDownMenu({ isDrop }: DropDownMenuProps) {
  return (
    <>
      <nav
        className={`absolute -bottom-52 right-4 z-30 min-w-24 select-none rounded-sm bg-primary-100 p-2 shadow-sm shadow-primary-500 ${isDrop ? 'flex' : 'hidden'}`}
      >
        <ul className="flex w-full flex-col items-center justify-center gap-2">
          {navInfos.map((item, index) => (
            <Fragment key={index}>
              <li>
                <Link
                  href={item.href}
                  className="border-b border-t border-primary-100 px-[2px] text-sm duration-500 hover:rounded-[3px] hover:border-b-primary-500"
                >
                  {item.label}
                </Link>
              </li>

              {index !== navInfos.length - 1 && (
                <Separator className="w-8 bg-primary-300 opacity-70" />
              )}
            </Fragment>
          ))}
        </ul>
      </nav>
    </>
  )
}
