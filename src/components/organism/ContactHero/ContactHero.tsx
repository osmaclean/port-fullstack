import React from 'react'

import { heathergreen } from '@/app/layout'

export default function ContactHero() {
  return (
    <>
      <div className="flex w-full items-start justify-center overflow-hidden text-primary-100 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 px-4">
          <h1
            className={`${heathergreen.className} text-5xl uppercase sm-3:text-[5rem] md-4:text-[7rem]`}
          >
            Contato
          </h1>
          <p className="text-xs font-normal sm-3:text-sm md-3:text-base">
            Para saber mais sobre meu trabalho ou discutir uma possível
            colaboração, não hesite em entrar em contato. Tenho certeza de que
            podemos criar muitas soluções juntos!
          </p>
        </div>
      </div>
    </>
  )
}
