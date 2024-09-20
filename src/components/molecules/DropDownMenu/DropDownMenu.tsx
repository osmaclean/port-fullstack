import { DropDownMenuProps, NavHeaderInfosProps } from '@/@types/interface'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Fragment } from 'react'

const navInfos: NavHeaderInfosProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About me',
    href: '/about-me',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function DropDownMenu({ isDrop }: DropDownMenuProps) {
  return (
    <>
      <nav
        className={`bg-primary-100 shadow-sm shadow-primary-500 select-none absolute -bottom-[164px] rounded-md right-4 p-2 min-w-20 ${isDrop ? 'flex' : 'hidden'}`}
      >
        <ul className="flex flex-col w-full items-center justify-center gap-2">
          {navInfos.map((item, index) => (
            <Fragment key={index}>
              <li>
                <Link
                  href={item.href}
                  className="border-t border-b border-primary-100 duration-500 hover:border-b-primary-500 hover:rounded-[3px] px-[2px] text-sm"
                >
                  {item.label}
                </Link>
              </li>

              {index !== navInfos.length - 1 && (
                <Separator className="bg-primary-300 opacity-70 w-8" />
              )}
            </Fragment>
          ))}
        </ul>
      </nav>
    </>
  )
}
