'use client'

import Image from 'next/image'
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
    <section className="bg-primary-100 py-8 relative overflow-hidden text-primary-500 w-full gap-2 flex items-center justify-center flex-col">
      <div className="flex items-center flex-col justify-center">
        <h2 className="uppercase textShadow text-xl text-primary-500 font-bold shadow-current">
          What Do I Do
        </h2>
        <p className=" textShadow text-sm z-10 -m-2 text-primary-500 font-light shadow-current">
          Services and Solutions
        </p>
      </div>

      <div className="w-[60%] bg-primary-500 h-[1px]"></div>

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

      <button className="cursor-pointer relative group overflow-hidden shadow-md shadow-primary-300 border-2 px-2 w-24 mt-1 border-primary-200">
        <span className="font-bold flex items-center justify-center gap-2 text-primary-500 text-xs py-[2px] relative z-10 group-hover:text-primary-300 duration-500">
          View All
          <ArrowRight size={16} />
        </span>
        <span className="absolute top-0 left-0 w-full bg-primary-200 duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-primary-200 duration-500 group-hover:translate-x-full h-full"></span>

        <span className="absolute top-0 left-0 w-full bg-primary-200 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-primary-200 duration-500 group-hover:translate-y-full h-full"></span>
      </button>

      <Image
        alt="Services Section Background"
        aria-label="Services Section Background"
        src={'/bg-services.png'}
        className="w-16 -mr-4 absolute bottom-0 right-0"
        width={42}
        height={115}
      />
    </section>
  )
}
