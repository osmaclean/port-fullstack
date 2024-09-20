import { heathergreen } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

export default function AboutHero() {
  return (
    <>
      <div className="flex w-full relative overflow-hidden items-start justify-center text-primary-100">
        <div className="flex flex-1 flex-col items-start justify-center gap-4 pl-4">
          <h1 className={`${heathergreen.className} uppercase text-5xl`}>
            About Me
          </h1>
          <p className="font-normal text-xs">
            Full Stack Developer with over a year of experience in web
            development, having worked at companies such as ZeusTech and
            Mecânica Mundial.
          </p>
        </div>
        <div className="flex flex-col  -mr-8 items-end justify-center h-full">
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

      <div className="flex flex-col items-center justify-center px-4 text-primary-100 pt-4 gap-4">
        <p className="font-normal text-xs">
          I'm dedicated to creating efficient, scalable and excellent solutions,
          always seeking to improve my skills and follow the best market
          practices.
        </p>
        <p className="font-normal text-xs">
          I'm always ready to face new challenges and contribute to the success
          of the projects I'm involved in.
        </p>
      </div>
    </>
  )
}
