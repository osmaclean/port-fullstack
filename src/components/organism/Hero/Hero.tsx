'use client'

import { ArrowRight } from 'phosphor-react'
import { heathergreen } from '@/app/layout'
import Image from 'next/image'
import React from 'react'
import Scroll from '@/components/molecules/Scroll/Scroll'

export default function Hero() {
  return (
    <section className="flex flex-col items-center py-8 gap-4 justify-center">
      <Image
        alt="Image Hero Up"
        aria-label="Image Hero Up"
        src={'/heroUp.png'}
        width={280}
        height={14}
        className="w-full"
      />
      <section className="px-4 flex w-full flex-col items-center justify-center">
        <div className="flex items-center w-full justify-between">
          <h1
            className={`w-[60%] uppercase font-normal text-7xl text-primary-100 ${heathergreen.className}`}
          >
            fullstack developer
          </h1>
          <Image
            alt="Image Hero Logo"
            aria-label="Image Hero Logo"
            src={'/logoHero.png'}
            width={199}
            height={341.57}
            className="w-20"
          />
        </div>

        <div className="flex items-start justify-center w-full gap-2 pt-2">
          <button className="cursor-pointer relative group overflow-hidden border-2 px-2 w-24 mt-1 border-primary-100">
            <span className="font-bold flex items-center justify-center gap-2 text-primary-500 text-xs py-[2px] relative z-10 group-hover:text-primary-100 duration-500">
              About me
              <ArrowRight size={16} />
            </span>
            <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-primary-100 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-primary-100 duration-500 group-hover:translate-y-full h-full"></span>
          </button>

          <span className="text-xs flex-1 text-primary-100 text-end">
            It's great to see you here! I'm 27 years old and have been working
            in this field for 2 years. I love thinking about how I'm going to
            solve a problem.
          </span>
        </div>
      </section>
      <Image
        alt="Image Hero Down"
        aria-label="Image Hero Down"
        src={'/heroDown.png'}
        width={280}
        height={14}
        className="w-full"
      />

      <Scroll />
    </section>
  )
}
