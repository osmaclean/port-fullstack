'use client'

import { ArrowRight } from 'phosphor-react'
import { heathergreen } from '@/app/layout'
import Image from 'next/image'
import React from 'react'
import Scroll from '@/components/molecules/Scroll/Scroll'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Hero() {
  return (
    <section className="flex flex-col w-full items-center py-8 gap-8 justify-center select-none">
      <div className="flex items-center justify-center w-full px-4 sm-2:px-10">
        <Separator className="bg-primary-100 opacity-20 animate-bounce" />
      </div>

      <section className="px-4 flex w-full flex-col items-center justify-center sm-2:px-10">
        <div className="flex items-center w-full justify-between -mt-4">
          <h1
            className={`textShadowHero w-[60%] uppercase font-normal text-7xl text-primary-100 ${heathergreen.className}`}
          >
            desenvolvedor fullstack
          </h1>
          <Image
            alt="Image Hero Logo"
            aria-label="Image Hero Logo"
            src={'/logoHero.png'}
            width={1440}
            height={8}
            className="w-16 mt-6 sm-1.1:w-28"
          />
        </div>

        <div className="flex items-start justify-center w-full gap-2 pt-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={'/about-me'}
              className="cursor-pointer relative group overflow-hidden border-2 px-2 w-28 mt-1 border-primary-100"
            >
              <span className="font-bold flex items-center justify-between gap-2 text-primary-500 text-xs py-[2px] relative z-10 group-hover:text-primary-100 duration-500">
                Sobre mim
                <ArrowRight size={16} />
              </span>
              <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 group-hover:translate-x-full h-full"></span>

              <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-primary-100 duration-500 group-hover:translate-y-full h-full"></span>
            </Link>

            <Link
              href={'/contact'}
              className="cursor-pointer relative group overflow-hidden border-2 px-2 w-28 mt-1 border-primary-100"
            >
              <span className="font-bold flex items-center justify-between gap-2 text-primary-500 text-xs py-[2px] relative z-10 group-hover:text-primary-100 duration-500">
                Contato
                <ArrowRight size={16} />
              </span>
              <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 group-hover:translate-x-full h-full"></span>

              <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-primary-100 duration-500 group-hover:translate-y-full h-full"></span>
            </Link>
          </div>

          <span className="text-xs flex-1 text-primary-100 text-end">
            É ótimo ver você aqui! Tenho 27 anos e estou trabalhando nessa área
            há 2 anos. Eu amo pensar em como vou resolver um problema.
          </span>
        </div>
      </section>

      <div className="flex items-center justify-center w-full px-4 sm-2:px-10">
        <Separator className="bg-primary-100 opacity-20 animate-bounce" />
      </div>

      <Scroll />
    </section>
  )
}
