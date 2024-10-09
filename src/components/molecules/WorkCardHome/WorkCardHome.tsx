import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { WorkProjectCardHomeProps } from '@/@types/interface'
import { Separator } from '@/components/ui/separator'

export default function WorkCardHome({ card }: WorkProjectCardHomeProps) {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-center gap-4 border-b border-primary-300 px-4 py-8 sm-0:px-6 sm-2:px-10 sm-3:min-h-[350px] sm-3:max-w-[300px] sm-3:border-transparent">
      <h1 className="w-full text-left text-2xl font-bold uppercase leading-5 text-primary-100">
        {card.title}
      </h1>

      <div className="flex w-full flex-wrap items-center justify-start gap-2">
        {card.labels.map((label, index) => (
          <span
            key={index}
            className="bg-primary-100 px-2 text-xs font-medium uppercase text-primary-500"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="group relative h-48 w-full">
        <Image
          alt="Project Kleitow Moreira Image"
          aria-label="Project Kleitow Moreira Image"
          src={card.imgProject}
          width={1220}
          height={625}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 hidden h-full max-w-36 flex-col items-center justify-center group-hover:flex group-hover:animate-hover-card">
          <div className="relative left-0 h-full w-full bg-primary-100 p-1">
            <Image
              alt="Arrow Card Up"
              aria-label="Arrow Card Up"
              src={'/arrowCardLeft.png'}
              width={28}
              height={28}
              className="absolute left-1 top-1 w-5"
            />
            <section className="flex h-full w-full flex-col items-center justify-center gap-2">
              <h1 className="text-base font-extrabold uppercase">stacks</h1>

              <div className="flex w-full flex-wrap items-center justify-center gap-2 px-2 pb-2">
                {card.stacks.map((stack, index) => (
                  <Image
                    key={index}
                    alt={stack.alt}
                    aria-label={stack.ariaLabel}
                    src={stack.imgPath}
                    width={56}
                    height={56}
                    className="w-5"
                  />
                ))}
              </div>

              <div className="h-[1px] w-[80%] bg-primary-500"></div>

              <h1 className="text-base font-extrabold uppercase">links</h1>

              <div className="flex items-center justify-center gap-4">
                {card.title !== 'Convert3D Pro' &&
                  card.title !== 'Kleitow Moreira' &&
                  card.title !== 'Mar de Rosas' && (
                    <Link href={card.github || '#'} target="_blank">
                      <Image
                        alt="Github Icon"
                        aria-label="Github Icon"
                        src="/github.png"
                        width={56}
                        height={56}
                        className="w-5"
                      />
                    </Link>
                  )}
                <Link href={card.website} target="_blank">
                  <Image
                    alt="WebSite Icon"
                    aria-label="WebSite Icon"
                    src="/website.png"
                    width={56}
                    height={56}
                    className="w-4"
                  />
                </Link>
              </div>
            </section>
            <Image
              alt="Arrow Card Down"
              aria-label="Arrow Card Down"
              src={'/arrowCardRight.png'}
              width={28}
              height={28}
              className="absolute bottom-1 right-1 w-5"
            />
          </div>
        </div>
      </div>

      <Separator className="hidden w-full bg-primary-300 sm-3:inline-block" />
    </div>
  )
}
