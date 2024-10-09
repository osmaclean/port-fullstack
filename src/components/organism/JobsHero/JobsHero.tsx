import React from 'react'

import { heathergreen } from '@/app/layout'

export default function JobsHero() {
  return (
    <>
      <div className="flex w-full items-start justify-center overflow-hidden px-4 pb-4 text-primary-100 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <div className="flex flex-1 select-none flex-col items-start justify-center gap-4">
          <h1
            className={`${heathergreen.className} text-5xl uppercase sm-3:text-[5rem] md-4:text-[7rem]`}
          >
            Trabalho e Projetos
          </h1>
          <p className="text-xs font-normal sm-3:text-sm md-3:text-base">
            Como desenvolvedor full stack, transformo ideias em realidade
            digital. Confira alguns dos projetos que desenvolvi, combinando
            front-end, back-end, banco de dados e foco total na experiência do
            usuário. Cada linha de código é escrita com paixão e comprometimento
            para entregar resultados eficientes e inovadores.
          </p>
        </div>
      </div>
    </>
  )
}
