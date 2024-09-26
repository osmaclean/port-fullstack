import Image from 'next/image'
import React from 'react'

import { heathergreen } from '@/app/layout'

export default function AboutHero() {
  return (
    <>
      <div className="relative flex w-full items-start justify-center overflow-hidden text-primary-100">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 pl-4">
          <h1 className={`${heathergreen.className} text-5xl uppercase`}>
            About Me
          </h1>
          <p className="text-xs font-normal">
            Full Stack Developer with over a year of experience in web
            development, having worked at companies such as ZeusTech and
            Mecânica Mundial.
          </p>
        </div>
        <div className="-mr-8 flex h-full flex-col items-end justify-center">
          <Image
            alt="Lucas Maclean Image"
            aria-label="Lucas Maclean Image"
            src={'/me.png'}
            width={374}
            height={399}
            className="w-40"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-4 text-primary-100">
        <p className="text-xs font-normal">
          I'm dedicated to creating efficient, scalable and excellent solutions,
          always seeking to improve my skills and follow the best market
          practices.
        </p>
        <p className="text-xs font-normal">
          I'm always ready to face new challenges and contribute to the success
          of the projects I'm involved in.
        </p>
      </div>
    </>
  )
}
