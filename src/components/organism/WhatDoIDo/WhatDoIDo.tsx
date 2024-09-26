'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Code,
  DesktopTower,
  Gear,
  Palette,
} from 'phosphor-react'
import React from 'react'

export default function WhatDoIDo() {
  return (
    <section className="md-2:gap-6 relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-primary-100 py-8 text-primary-500">
      <div className="flex flex-col items-center justify-center">
        <h2 className="textShadow md-2:text-4xl text-xl font-bold uppercase text-primary-500 shadow-current sm-3:text-3xl">
          O que faço
        </h2>
        <p className="textShadow md-2:m-0 z-10 -m-1 text-sm font-light uppercase text-primary-500 shadow-current sm-3:text-base">
          Serviços e Soluções
        </p>
      </div>

      <div className="h-[1px] w-[60%] bg-primary-500"></div>

      <div className="md-1:px-16 flex w-full items-start justify-center gap-2 px-4 py-6 sm-2:px-10">
        <ArrowRight size={20} className="md-2:h-7 md-2:w-7 sm-3:h-6 sm-3:w-6" />
        <DesktopTower
          size={20}
          className="md-2:h-7 md-2:w-7 sm-3:h-6 sm-3:w-6"
        />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="md-2:text-lg text-sm font-bold text-primary-500 sm-3:text-base">
            Desenvolvimento de aplicativos Web
          </h3>
          <span className="md-2:text-base text-xs font-light text-primary-500 sm-3:text-sm">
            Criação de aplicativos interativos da Web usando estruturas e
            bibliotecas, como React.js no front-end e Node.js, Python no no
            back-end.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-5 sm-3:w-5" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="md-1:px-16 flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6 sm-2:px-10">
        <ArrowLeft size={20} className="md-2:h-7 md-2:w-7 sm-3:h-6 sm-3:w-6" />
        <Palette size={20} className="md-2:h-7 md-2:w-7 sm-3:h-6 sm-3:w-6" />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="md-2:text-lg text-sm font-bold text-primary-500 sm-3:text-base">
            Prototipagem
          </h3>
          <span className="md-2:text-base text-right text-xs font-light text-primary-500 sm-3:text-sm">
            Desenvolvimento de protótipos de baixa e média fidelidade para
            validar o fluxo e a experiência do usuário no aplicativo.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-5 sm-3:w-5" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="md-1:px-16 flex w-full items-start justify-center gap-2 px-4 py-6 sm-2:px-10">
        <ArrowRight size={20} className="md-2:h-7 md-2:w-7 sm-3:h-6 sm-3:w-6" />
        <Gear size={20} className="md-2:h-7 md-2:w-7 sm-3:h-6 sm-3:w-6" />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="md-2:text-lg text-sm font-bold text-primary-500 sm-3:text-base">
            Testes e Garantia de Qualidade
          </h3>
          <span className="md-2:text-base text-xs font-light text-primary-500 sm-3:text-sm">
            Escrever e executar testes unitários, testes de integração e testes
            de ponta a ponta para garantir a qualidade e a estabilidade do
            software.
          </span>
        </div>
      </div>

      <Link
        href={'/services'}
        className="group relative mt-1 w-28 cursor-pointer overflow-hidden border-2 border-primary-200 px-2 shadow-md shadow-primary-300 sm-3:w-32"
      >
        <span className="relative z-10 flex items-center justify-center gap-2 py-[2px] text-xs font-bold uppercase text-primary-500 duration-500 group-hover:text-primary-300 sm-3:text-sm">
          Ver todos
          <ArrowRight size={16} className="sm-3:h-5 sm-3:w-5" />
        </span>
        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 duration-500 group-hover:-translate-x-full"></span>
        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 duration-500 group-hover:translate-x-full"></span>

        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 delay-300 duration-500 group-hover:-translate-y-full"></span>
        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 delay-300 duration-500 group-hover:translate-y-full"></span>
      </Link>

      <Image
        alt="Services Section Background"
        aria-label="Services Section Background"
        src={'/bg-services.png'}
        className="absolute bottom-0 right-0 -mr-4 w-16"
        width={42}
        height={115}
      />
    </section>
  )
}
