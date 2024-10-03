import Image from 'next/image'
import React from 'react'

import { heathergreen } from '@/app/layout'

export default function AboutHero() {
  return (
    <>
      <div className="relative flex w-full items-start justify-center overflow-hidden text-primary-100 sm-2:px-10 sm-3:items-end md-1:px-16 md-3:items-start md-3:px-28">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 pl-4 sm-2:pl-0">
          <h1
            className={`${heathergreen.className} text-5xl uppercase sm-3:text-[5rem]`}
          >
            Sobre mim
          </h1>
          <p className="text-xs font-normal sm-1:w-[70%] sm-1.1:w-[64%] sm-2:w-[80%] sm-3:w-full sm-3:text-sm md-1:w-[90%] md-3:w-[80%] md-3:text-base">
            Desenvolvedor Full Stack com mais de um ano de experiência em
            desenvolvimento web desenvolvimento web, tendo trabalhado em
            empresas como ZeusTech e Mecânica Mundial.
          </p>
        </div>
        <div className="-mr-8 flex flex-col items-end justify-center sm-3:-mr-0">
          <Image
            alt="Lucas Maclean Image"
            aria-label="Lucas Maclean Image"
            src={'/me.png'}
            width={374}
            height={399}
            className="w-40 sm-1:w-52 sm-3:w-40 md-3:w-60"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-4 text-xs font-normal text-primary-100 sm-1.1:pt-0 sm-2:px-10 sm-2:pt-4 sm-3:text-sm md-1:px-16 md-1:pb-8 md-3:px-28 md-3:text-base">
        <p>
          Dedico-me a criar soluções eficientes, escaláveis e excelentes, sempre
          buscando aprimorar minhas habilidades e seguir as melhores práticas do
          mercado.
        </p>
        <p>
          Estou sempre pronto para enfrentar novos desafios e contribuir para o
          sucesso dos projetos em que estou envolvido.
        </p>
      </div>
    </>
  )
}
