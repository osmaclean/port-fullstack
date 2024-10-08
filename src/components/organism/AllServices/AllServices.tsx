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
            Web Application Development
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Creation of interactive web applications using frameworks and
            libraries such as React.js on the front-end, and Node.js, Python on
            the back-end.
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
            Prototyping
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Development of low and medium fidelity prototypes to validate the
            flow and user experience within the application.
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
            Testing and Quality Assurance
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Writing and executing unit tests, integration tests and end-to-end
            tests to ensure software quality and stability.
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
            User Interface Development (UI/UX)
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Design and development of low and medium quality user-friendly and
            intuitive user interfaces, ensuring a good user experience (UX).
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
            User Authentication and Authorization
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Implementation of login and access control systems or other
            authentication and authorization methods.
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
            Database Management
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Design, implementation and maintenance of relational and
            non-relational databases to store and manage application data.
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
            Notification Service
          </h3>
          <span className="text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Sends push notifications, emails, or SMS messages to users about
            important events or updates.
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
            Payment Service
          </h3>
          <span className="text-right text-xs font-light text-primary-500 sm-3:text-sm md-3:text-base">
            Payment and financial transaction processes, integrating with
            payment providers such as bank gateways.
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
