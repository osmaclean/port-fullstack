import React from 'react'

import { heathergreen } from '@/app/layout'

export default function ServicesHero() {
  return (
    <>
      <div className="flex w-full items-start justify-center overflow-hidden text-primary-100">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 px-4">
          <h1 className={`${heathergreen.className} text-5xl uppercase`}>
            Services and Microservices
          </h1>
          <p className="text-xs font-normal">
            Discover how custom services and microservices can streamline your
            processes, increase efficiency and productivity for your business
            growth. Below, check out the solutions I offer to meet your specific
            needs.
          </p>
        </div>
      </div>
    </>
  )
}
