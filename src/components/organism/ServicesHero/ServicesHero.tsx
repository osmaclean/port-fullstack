import { heathergreen } from '@/app/layout'
import React from 'react'

export default function ServicesHero() {
  return (
    <>
      <div className="flex w-full overflow-hidden items-start justify-center text-primary-100">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 px-4">
          <h1 className={`${heathergreen.className} uppercase text-5xl`}>
            Services and Microservices
          </h1>
          <p className="font-normal text-xs">
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
