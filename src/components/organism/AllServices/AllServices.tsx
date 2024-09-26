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
    <section className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-primary-100 py-4 text-primary-500">
      <div className="flex w-full items-start justify-center gap-2 px-4 py-6">
        <ArrowRight size={20} />
        <DesktopTower size={20} />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500">
            Web Application Development
          </h3>
          <span className="text-xs font-light text-primary-500">
            Creation of interactive web applications using frameworks and
            libraries such as React.js on the front-end, and Node.js, Python on
            the back-end.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6">
        <ArrowLeft size={20} />
        <Palette size={20} />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-sm font-bold text-primary-500">Prototyping</h3>
          <span className="text-right text-xs font-light text-primary-500">
            Development of low and medium fidelity prototypes to validate the
            flow and user experience within the application.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 px-4 py-6">
        <ArrowRight size={20} />
        <Gear size={20} />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500">
            Testing and Quality Assurance
          </h3>
          <span className="text-xs font-light text-primary-500">
            Writing and executing unit tests, integration tests and end-to-end
            tests to ensure software quality and stability.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6">
        <ArrowLeft size={20} />
        <Layout size={20} />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-right text-sm font-bold text-primary-500">
            User Interface Development (UI/UX)
          </h3>
          <span className="text-right text-xs font-light text-primary-500">
            Design and development of low and medium quality user-friendly and
            intuitive user interfaces, ensuring a good user experience (UX).
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 px-4 py-6">
        <ArrowRight size={20} />
        <ShieldCheck size={20} />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500">
            User Authentication and Authorization
          </h3>
          <span className="text-xs font-light text-primary-500">
            Implementation of login and access control systems or other
            authentication and authorization methods.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6">
        <ArrowLeft size={20} />
        <Database size={20} />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-right text-sm font-bold text-primary-500">
            Database Management
          </h3>
          <span className="text-right text-xs font-light text-primary-500">
            Design, implementation and maintenance of relational and
            non-relational databases to store and manage application data.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full items-start justify-center gap-2 px-4 py-6">
        <ArrowRight size={20} />
        <BellRinging size={20} />
        <div className="flex flex-1 flex-col items-start justify-start">
          <h3 className="text-sm font-bold text-primary-500">
            Notification Service
          </h3>
          <span className="text-xs font-light text-primary-500">
            Sends push notifications, emails, or SMS messages to users about
            important events or updates.
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2">
        <Code size={16} />
        <div className="h-[1px] w-[45%] bg-primary-500"></div>
      </div>

      <div className="flex w-full flex-row-reverse items-start justify-center gap-2 px-4 py-6">
        <ArrowLeft size={20} />
        <HandCoins size={20} />
        <div className="flex flex-1 flex-col items-end justify-end">
          <h3 className="text-right text-sm font-bold text-primary-500">
            Payment Service
          </h3>
          <span className="text-right text-xs font-light text-primary-500">
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
