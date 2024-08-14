'use client'

import {
  Layout,
  ArrowLeft,
  ArrowRight,
  Code,
  DesktopTower,
  Gear,
  Palette,
  ShieldCheck,
  Database,
  BellRinging,
  HandCoins,
} from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

export default function AllServices() {
  return (
    <section className="bg-primary-100 py-4 relative overflow-hidden text-primary-500 w-full gap-2 flex items-center justify-center flex-col">
      <div className="flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowRight size={20} />
        <DesktopTower size={20} />
        <div className="flex flex-col flex-1 items-start justify-start">
          <h3 className="text-sm text-primary-500 font-bold">
            Web Application Development
          </h3>
          <span className="text-xs text-primary-500 font-light">
            Creation of interactive web applications using frameworks and
            libraries such as React.js on the front-end, and Node.js, Python on
            the back-end.
          </span>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex-row-reverse flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowLeft size={20} />
        <Palette size={20} />
        <div className="flex flex-col flex-1 items-end justify-end">
          <h3 className="text-sm text-primary-500 font-bold">Prototyping</h3>
          <span className="text-xs text-right text-primary-500 font-light">
            Development of low and medium fidelity prototypes to validate the
            flow and user experience within the application.
          </span>
        </div>
      </div>

      <div className="w-full flex flex-row-reverse items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowRight size={20} />
        <Gear size={20} />
        <div className="flex flex-col flex-1 items-start justify-start">
          <h3 className="text-sm text-primary-500 font-bold">
            Testing and Quality Assurance
          </h3>
          <span className="text-xs text-primary-500 font-light">
            Writing and executing unit tests, integration tests and end-to-end
            tests to ensure software quality and stability.
          </span>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex-row-reverse flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowLeft size={20} />
        <Layout size={20} />
        <div className="flex flex-col flex-1 items-end justify-end">
          <h3 className="text-sm text-primary-500 font-bold text-right">
            User Interface Development (UI/UX)
          </h3>
          <span className="text-xs text-right text-primary-500 font-light">
            Design and development of low and medium quality user-friendly and
            intuitive user interfaces, ensuring a good user experience (UX).
          </span>
        </div>
      </div>

      <div className="w-full flex flex-row-reverse items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowRight size={20} />
        <ShieldCheck size={20} />
        <div className="flex flex-col flex-1 items-start justify-start">
          <h3 className="text-sm text-primary-500 font-bold">
            User Authentication and Authorization
          </h3>
          <span className="text-xs text-primary-500 font-light">
            Implementation of login and access control systems or other
            authentication and authorization methods.
          </span>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex-row-reverse flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowLeft size={20} />
        <Database size={20} />
        <div className="flex flex-col flex-1 items-end justify-end">
          <h3 className="text-sm text-primary-500 font-bold text-right">
            Database Management
          </h3>
          <span className="text-xs text-right text-primary-500 font-light">
            Design, implementation and maintenance of relational and
            non-relational databases to store and manage application data.
          </span>
        </div>
      </div>

      <div className="w-full flex flex-row-reverse items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowRight size={20} />
        <BellRinging size={20} />
        <div className="flex flex-col flex-1 items-start justify-start">
          <h3 className="text-sm text-primary-500 font-bold">
            Notification Service
          </h3>
          <span className="text-xs text-primary-500 font-light">
            Sends push notifications, emails, or SMS messages to users about
            important events or updates.
          </span>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-2">
        <Code size={16} />
        <div className="w-[45%] bg-primary-500 h-[1px]"></div>
      </div>

      <div className="flex-row-reverse flex items-start py-6 justify-center gap-2 w-full px-4">
        <ArrowLeft size={20} />
        <HandCoins size={20} />
        <div className="flex flex-col flex-1 items-end justify-end">
          <h3 className="text-sm text-primary-500 font-bold text-right">
            Payment Service
          </h3>
          <span className="text-xs text-right text-primary-500 font-light">
            Payment and financial transaction processes, integrating with
            payment providers such as bank gateways.
          </span>
        </div>
      </div>

      <Image
        alt="Services Section Background"
        aria-label="Services Section Background"
        src={'/bg-services.png'}
        className="w-14 -mr-4 absolute bottom-0 right-0"
        width={42}
        height={115}
      />
    </section>
  )
}
