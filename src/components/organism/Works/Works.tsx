'use client'

import { WorkProjectCard } from '../../../mock/projects.mock'
import React, { Fragment } from 'react'
import Image from 'next/image'
import WorkCard from '@/components/molecules/WorkCard/WorkCard'
import Scroll from '@/components/molecules/Scroll/Scroll'

export default function Works() {
  return (
    <section className="flex w-full pb-6 flex-col gap-6 items-center justify-center border-t-[1px] border-primary-100">
      <div className="overflow-hidden w-full flex gap-4 whitespace-nowrap">
        <div className="items-center min-w-full justify-center gap-2 animate-loop-scroll flex">
          {Array.from({ length: 40 }).map((_, i) => (
            <Fragment key={i}>
              <span className="text-xl text-primary-300 opacity-40 mt-1 font-bold rotate-180 flex items-center justify-center">
                WORKS
              </span>
              <Image
                alt="Tag Icon"
                aria-label="Tag Icon"
                src={'/tag.png'}
                width={29}
                height={19}
                className="w-4"
              />
              <span className="text-xl font-bold text-primary-100 justify-center mb-[2px] flex items-center">
                WORKS
              </span>
              <Image
                alt="Tag Icon"
                aria-label="Tag Icon"
                src={'/tag.png'}
                width={29}
                height={19}
                className="w-4"
              />
            </Fragment>
          ))}
        </div>
      </div>

      <section className="w-full px-4">
        <div className="border border-b-0 border-primary-300 w-full">
          {WorkProjectCard.map((card, index) => (
            <WorkCard key={index} card={card} />
          ))}
        </div>
      </section>

      <Scroll />
    </section>
  )
}
