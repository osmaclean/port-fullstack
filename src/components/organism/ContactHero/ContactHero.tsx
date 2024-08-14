import { heathergreen } from '@/app/layout'
import React from 'react'

export default function ContactHero() {
  return (
    <>
      <div className="flex w-full overflow-hidden items-start justify-center text-primary-100">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 px-4">
          <h1 className={`${heathergreen.className} uppercase text-5xl`}>
            Contact
          </h1>
          <p className="font-normal text-xs">
            To learn more about my work or discuss a possible collaboration,
            please don't hesitate to get in touch. I'm happy to chat!
          </p>
        </div>
      </div>
    </>
  )
}
