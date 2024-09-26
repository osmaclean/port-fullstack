'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import React from 'react'

import { heathergreen } from '@/app/layout'
import Scroll from '@/components/molecules/Scroll/Scroll'
import { Separator } from '@/components/ui/separator'

export default function Hero() {
  return (
    <section className="md-1:px-16 flex w-full select-none flex-col items-center justify-center gap-8 px-4 py-8 sm-2:px-10">
      <div className="flex w-full items-center justify-center">
        <Separator className="animate-bounce bg-primary-100 opacity-20" />
      </div>

      <section className="flex w-full flex-col items-center justify-center">
        <div className="-mt-4 flex w-full items-center justify-between">
          <h1
            className={`textShadowHero md-2:text-9xl w-[60%] text-7xl font-normal uppercase text-primary-100 sm-3:text-8xl ${heathergreen.className}`}
          >
            desenvolvedor fullstack
          </h1>
          <Image
            alt="Image Hero Logo"
            aria-label="Image Hero Logo"
            src={'/logoHero.png'}
            width={1440}
            height={8}
            className="md-1:w-28 md-2:w-36 mt-6 w-16 sm-1.1:w-28 sm-3:w-24"
          />
        </div>

        <div className="md-2:gap-4 flex w-full items-start justify-center gap-2 pt-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={'/about-me'}
              className="md-2:w-[132px] group relative mt-1 w-28 cursor-pointer overflow-hidden border-2 border-primary-100 px-2"
            >
              <span className="md-2:text-base relative z-10 flex items-center justify-between gap-2 py-[2px] text-xs font-bold text-primary-500 duration-500 group-hover:text-primary-100 sm-3:text-sm">
                Sobre mim
                <ArrowRight size={16} className="md-2:w-5 md-2:h-5" />
              </span>
              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 duration-500 group-hover:-translate-x-full"></span>
              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 duration-500 group-hover:translate-x-full"></span>

              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 delay-300 duration-500 group-hover:-translate-y-full"></span>
              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 delay-300 duration-500 group-hover:translate-y-full"></span>
            </Link>

            <Link
              href={'/contact'}
              className="md-2:w-[132px] group relative mt-1 w-28 cursor-pointer overflow-hidden border-2 border-primary-100 px-2"
            >
              <span className="md-2:text-base relative z-10 flex items-center justify-between gap-2 py-[2px] text-xs font-bold text-primary-500 duration-500 group-hover:text-primary-100 sm-3:text-sm">
                Contato
                <ArrowRight size={16} className="md-2:w-5 md-2:h-5" />
              </span>
              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 duration-500 group-hover:-translate-x-full"></span>
              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 duration-500 group-hover:translate-x-full"></span>

              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 delay-300 duration-500 group-hover:-translate-y-full"></span>
              <span className="absolute left-0 top-0 h-full w-full bg-primary-100 delay-300 duration-500 group-hover:translate-y-full"></span>
            </Link>
          </div>

          <span className="md-2:text-base flex-1 text-end text-xs text-primary-100 sm-3:text-sm">
            É ótimo ver você aqui! Tenho 27 anos e estou trabalhando nessa área
            há 2 anos. Eu amo pensar em como vou resolver um problema.
          </span>
        </div>
      </section>

      <div className="flex w-full items-center justify-center">
        <Separator className="animate-bounce bg-primary-100 opacity-20" />
      </div>

      <Scroll />
    </section>
  )
}
