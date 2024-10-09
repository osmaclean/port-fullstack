'use client'

import {
  ArrowLeft,
  ArrowRight,
  BellRinging,
  Code,
  Database,
  DesktopTower,
  Gear,
  HandCoins,
  Layout,
  Palette,
  ShieldCheck,
} from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

export default function AllServices() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-primary-100 py-4 text-primary-500 sm-3:gap-4 md-3:gap-12">
      <div className="flex w-full items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowRight size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <DesktopTower
          size={20}
          className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7"
        />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Desenvolvimento de Aplicativos da Web
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Criação de aplicativos interativos da Web usando estruturas e
            bibliotecas como React.js, Next.js, Vite no front-end e Node.js,
            Python no back-end.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowLeft size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <Palette size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Prototipagem
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Desenvolvimento de protótipos de baixa e média fidelidade para
            validar o fluxo e a experiência do usuário no aplicativo.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowRight size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <Gear size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Testes e Garantia de Qualidade
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Escrever e executar testes unitários, testes de integração e testes
            de ponta a ponta testes para garantir a qualidade e a estabilidade
            do software com tecnologias Playwright, Jest, Vitest e Cypress.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowLeft size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <Layout size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-right text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Desenvolvimento da Interface do Usuário (UI/UX)
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Projeto e desenvolvimento de interfaces de usuário intuitivas e
            fáceis de usar de baixa e média qualidade, intuitivas e garantindo
            uma boa experiência do usuário (UX).
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowRight size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <ShieldCheck
          size={20}
          className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7"
        />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Autenticação e Autorização de Usuários
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Implementação de sistemas de login e controle de acesso ou outros
            métodos de autenticação e autorização.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowLeft size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <Database size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-right text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Gerenciamento de Banco de Dados
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Design, implementação e manutenção de bancos de dados relacionais e
            não relacionais para armazenar, persistir e gerenciar dados de
            aplicativos.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowRight size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <BellRinging
          size={20}
          className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7"
        />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Serviço de Notificação
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Envia notificações push, e-mails ou mensagens SMS aos usuários sobre
            eventos ou atualizações importantes.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[880px]">
        <ArrowLeft size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <HandCoins size={20} className="sm-3:h-6 sm-3:w-6 md-3:h-7 md-3:w-7" />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-right text-sm font-bold text-primary-500 sm-3:text-base md-3:text-lg">
            Serviço de Pagamento
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Processos de pagamento e transações financeiras, integrando-se com
            provedores de pagamento, como gateways bancários.
          </span>
        </div>
      </div>

      <Image
        alt="Services Section Background"
        aria-label="Services Section Background"
        src={'/bg-services.png'}
        className="absolute bottom-0 right-0 -mr-4 w-14"
        width={42}
        height={115}
      />
    </section>
  )
}
