import React from 'react'

import { heathergreen } from '@/app/layout'

export default function ContactHero() {
  return (
    <>
      <div className="flex w-full items-start justify-center overflow-hidden text-primary-100">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 px-4">
          <h1 className={`${heathergreen.className} text-5xl uppercase`}>
            Contact
          </h1>
          <p className="text-xs font-normal">
            To learn more about my work or discuss a possible collaboration,
            please don't hesitate to get in touch. I'm happy to chat!
          </p>
        </div>
      </div>
    </>
  )
}
