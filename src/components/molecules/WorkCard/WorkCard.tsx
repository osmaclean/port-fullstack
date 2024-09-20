import { WorkProjectCardProps } from '@/@types/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WorkCard({ card }: WorkProjectCardProps) {
  return (
    <div className="border-b border-primary-300 w-full max-w-full px-4 sm-0:px-6 sm-2:px-10 py-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl w-full text-left font-bold leading-5 text-primary-100 uppercase">
        {card.title}
      </h1>

      <div className="flex items-center justify-start gap-2 flex-wrap w-full">
        {card.labels.map((label, index) => (
          <span
            key={index}
            className="bg-primary-100 text-primary-500 font-medium px-2 uppercase text-xs"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="w-full h-48 relative group">
        <Image
          alt="Project Kleitow Moreira Image"
          aria-label="Project Kleitow Moreira Image"
          src={card.imgProject}
          width={1220}
          height={625}
          className="w-full h-full object-cover"
        />
        <div className="max-w-36 hidden group-hover:flex group-hover:animate-hover-card items-center justify-center flex-col absolute left-0 h-full top-0">
          <div className="w-full relative h-full left-0 bg-primary-100 p-1">
            <Image
              alt="Arrow Card Up"
              aria-label="Arrow Card Up"
              src={'/arrowCardLeft.png'}
              width={28}
              height={28}
              className="w-5 absolute top-1 left-1"
            />
            <section className="flex items-center justify-center gap-2 w-ful h-full flex-col">
              <h1 className="text-base font-extrabold uppercase">stacks</h1>

              <div className="flex justify-center items-center flex-wrap gap-2 pb-2 w-full px-2">
                {card.stacks.map((stack, index) => (
                  <Image
                    key={index}
                    alt={stack.alt}
                    aria-label={stack.ariaLabel}
                    src={stack.imgPath}
                    width={56}
                    height={56}
                    className="w-5"
                  />
                ))}
              </div>

              <div className="h-[1px] bg-primary-500 w-[80%]"></div>

              <h1 className="text-base font-extrabold uppercase">links</h1>

              <div className="flex justify-center items-center gap-4">
                {card.title !== 'Convert3D Pro' &&
                  card.title !== 'Kleitow Moreira' && (
                    <Image
                      alt="Github Icon"
                      aria-label="Github Icon"
                      src="/github.png"
                      width={56}
                      height={56}
                      className="w-5"
                    />
                  )}
                <Link href={'#'} target="_blank">
                  <Image
                    alt="WebSite Icon"
                    aria-label="WebSite Icon"
                    src="/website.png"
                    width={56}
                    height={56}
                    className="w-4"
                  />
                </Link>
              </div>
            </section>
            <Image
              alt="Arrow Card Down"
              aria-label="Arrow Card Down"
              src={'/arrowCardRight.png'}
              width={28}
              height={28}
              className="w-5 absolute bottom-1 right-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
