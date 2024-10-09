'use client'

import { Code } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { StackProps } from '@/@types/interface'
import {
  stacksConvert3D,
  stacksIgnite,
  stacksKleitow,
  stacksMar,
} from '@/mock/stacks.mock'

export default function AllJobs() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-primary-100 py-4 text-primary-500">
      <div className="flex w-full select-none flex-col items-center justify-center gap-2 px-4 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <h1 className="w-full text-base font-bold uppercase text-primary-500 sm-3:text-lg md-3:text-2xl">
          Kleytow Moreira - Artista 3D
        </h1>

        <div className="flex w-full items-center justify-start gap-2 text-xs font-medium uppercase text-primary-100">
          <span className="bg-primary-500 px-2">fullstack</span>
          <span className="bg-primary-500 px-2">node.js</span>
          <span className="bg-primary-500 px-2">react.js</span>
        </div>

        <Image
          src={'/projects/project1st.png'}
          alt="Kleytow Moreira Project Image"
          width={1220}
          height={625}
        />

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          Este projeto foi desenvolvido ao longo de 3 meses para o artista 3D
          Kleytow Moreira, visando criar uma aplicação para o portfólio e um
          blog.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          Além de destacar suas criações impressionantes, a aplicação oferece ao
          cliente uma aplicação eficiente para gerir o seu portfólio e blog com
          a implementação de um CMS (Content Management System/Sistema de Gestão
          de Conteúdo) personalizado que permite ao artista criar e gerenciar
          suas próprias postagens.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O deploy foi realizado na DigitalOcean, garantindo estabilidade e
          desempenho de alta qualidade.
        </p>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Tecnologias Utilizadas:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            {stacksKleitow.map((item: StackProps, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={item.imgPath}
                    alt={item.alt}
                    aria-label={item.ariaLabel}
                    width={56}
                    height={56}
                    className="w-6 md-3:w-8"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Links:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            <Link
              href={'https://github.com/DVisioun/cleiton-port-front'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="Github Icon"
                aria-label="Github Icon"
                src="/github.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>

            <Link
              href={'https://www.kleytowmoreira.art/'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="WebSite Icon"
                aria-label="WebSite Icon"
                src="/website.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full select-none flex-col items-center justify-center gap-2 px-4 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <h1 className="w-full text-base font-bold uppercase text-primary-500 sm-3:text-lg md-3:text-2xl">
          Convert3D Pro
        </h1>

        <div className="flex w-full items-center justify-start gap-2 text-xs font-medium uppercase text-primary-100">
          <span className="bg-primary-500 px-2">fullstack</span>
          <span className="bg-primary-500 px-2">php</span>
          <span className="bg-primary-500 px-2">react.js</span>
        </div>

        <Image
          src={'/projects/project3th.png'}
          alt="Convert 3D Pro Project Image"
          width={1220}
          height={625}
        />

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O projeto Convert 3D é uma plataforma desenvolvida para conversão de
          arquivos personalizados, voltada para profissionais da construção
          civil, como engenheiros estruturais, projetistas, arquitetos e
          modeladores de BIM (Building Information Modeling).
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O objetivo principal era facilitar o trabalho desses profissionais,
          oferecendo uma solução simples e eficiente para a conversão de
          ficheiros 3D utilizados em projetos arquitetônicos e estruturais.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O deploy da aplicação foi através do FileZilla em um servidor
          dedicado, garantindo segurança e desempenho.
        </p>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Tecnologias Utilizadas:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            {stacksConvert3D.map((item: StackProps, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={item.imgPath}
                    alt={item.alt}
                    aria-label={item.ariaLabel}
                    width={56}
                    height={56}
                    className="w-6 md-3:w-8"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Links:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            <Link
              href={'https://convert3dpro.com/'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="WebSite Icon"
                aria-label="WebSite Icon"
                src="/website.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full select-none flex-col items-center justify-center gap-2 px-4 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <h1 className="w-full text-base font-bold uppercase text-primary-500 sm-3:text-lg md-3:text-2xl">
          Mar de Rosas
        </h1>

        <div className="flex w-full items-center justify-start gap-2 text-xs font-medium uppercase text-primary-100">
          <span className="bg-primary-500 px-2">front-end</span>
          <span className="bg-primary-500 px-2">tailwind</span>
          <span className="bg-primary-500 px-2">react.js</span>
        </div>

        <Image
          src={'/projects/project2nd.png'}
          alt="Mar de Rosas Project Image"
          width={1220}
          height={625}
        />

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O projeto Mar de Rosas é uma landing page desenvolvida para uma
          plataforma de apostas e sorteios, com foco em captar clientes e
          promover a interação através de uma interface intuitiva e responsiva.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O objetivo principal era criar uma experiência fluida para os
          utilizadores, garantindo o acesso a informações e funcionalidades
          essenciais de forma clara, direta e adaptada a qualquer dispositivo.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O deploy da aplicação foi através do LiteSpeed em um servidor
          dedicado, garantindo segurança e desempenho.
        </p>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Tecnologias Utilizadas:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            {stacksMar.map((item: StackProps, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={item.imgPath}
                    alt={item.alt}
                    aria-label={item.ariaLabel}
                    width={56}
                    height={56}
                    className="w-6 md-3:w-8"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Links:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            <Link
              href={'https://confirme.omarderosas.com.br/'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="WebSite Icon"
                aria-label="WebSite Icon"
                src="/website.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full select-none flex-col items-center justify-center gap-2 px-4 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <h1 className="w-full text-base font-bold uppercase text-primary-500 sm-3:text-lg md-3:text-2xl">
          Mecânica Mundial
        </h1>

        <div className="flex w-full items-center justify-start gap-2 text-xs font-medium uppercase text-primary-100">
          <span className="bg-primary-500 px-2">front-end</span>
          <span className="bg-primary-500 px-2">tailwind</span>
          <span className="bg-primary-500 px-2">react.js</span>
        </div>

        <Image
          src={'/projects/project4th.png'}
          alt="Mecânica Mundial Project Image"
          width={1220}
          height={625}
        />

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O projeto Mecânica Mundial é uma landing page desenvolvida para uma
          mecânica automotiva de Belo Horizonte, com foco em captar clientes e
          promover a interação através de uma interface intuitiva e responsiva.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O objetivo principal era criar uma experiência fluida para os
          utilizadores, garantindo o acesso a informações e funcionalidades
          essenciais de forma clara, direta e adaptada a qualquer dispositivo.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O deploy da aplicação foi através da Vercel, garantindo segurança e
          desempenho.
        </p>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Tecnologias Utilizadas:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            {stacksMar.map((item: StackProps, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={item.imgPath}
                    alt={item.alt}
                    aria-label={item.ariaLabel}
                    width={56}
                    height={56}
                    className="w-6 md-3:w-8"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Links:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            <Link
              href={'https://github.com/Mecanica-Mundial/mecanica-mundial'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="Github Icon"
                aria-label="Github Icon"
                src="/github.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>

            <Link
              href={'https://mecanica-mundial.vercel.app/'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="WebSite Icon"
                aria-label="WebSite Icon"
                src="/website.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full select-none flex-col items-center justify-center gap-2 px-4 sm-2:px-10 md-1:min-h-[280px] md-1:items-center md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <h1 className="w-full text-base font-bold uppercase text-primary-500 sm-3:text-lg md-3:text-2xl">
          Ignite Timer
        </h1>

        <div className="flex w-full flex-wrap items-center justify-start gap-2 text-xs font-medium uppercase text-primary-100">
          <span className="bg-primary-500 px-2">front-end</span>
          <span className="bg-primary-500 px-2">styled components</span>
          <span className="bg-primary-500 px-2">react.js</span>
        </div>

        <Image
          src={'/projects/project5th.png'}
          alt="Ignite Timer Project Image"
          width={1220}
          height={625}
        />

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          Projeto construído com o conceito de pomodoro, onde aprimorei minhas
          skills em StyledComponents, TypeScript, React.js e Vite.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          Utilizei algumas bibliotecas para o meu auxílio no desenvolvimento,
          como: Immer (Uma forma de trabalhar com imutabilidade de uma forma
          mais simples), React Hook Forms (Realizando algumas validações
          utilizando o hook form resolvers) e também a biblioteca Zod para
          validação das informações no formulário.
        </p>

        <p className="w-full text-xs sm-3:text-sm md-3:text-base">
          O deploy da aplicação foi através da Vercel, garantindo segurança e
          desempenho.
        </p>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Tecnologias Utilizadas:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            {stacksIgnite.map((item: StackProps, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={item.imgPath}
                    alt={item.alt}
                    aria-label={item.ariaLabel}
                    width={56}
                    height={56}
                    className="w-6 md-3:w-8"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="w-full font-semibold text-primary-600 sm-3:text-lg md-3:text-xl">
            Links:
          </h1>

          <div className="flex w-full items-center justify-start gap-4 py-2">
            <Link
              href={'https://github.com/osmaclean/igniteTimer'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="Github Icon"
                aria-label="Github Icon"
                src="/github.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>

            <Link
              href={'https://ignite-timer-seven-chi.vercel.app/'}
              target="_blank"
              className="duration-300 hover:scale-95 hover:opacity-70"
            >
              <Image
                alt="WebSite Icon"
                aria-label="WebSite Icon"
                src="/website.png"
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
