'use client'

import { stacksKleitow } from '@/mock/stacks.mock'
import { ArrowRight } from 'phosphor-react'
import React, { Fragment } from 'react'
import Image from 'next/image'

export default function Works() {
  return (
    <section className="flex w-full pb-6 flex-col gap-6 items-center justify-center border-t-[1px] border-primary-100">
      <div className="overflow-hidden w-full flex gap-4 whitespace-nowrap">
        <div className="items-center min-w-full justify-center gap-2 animate-loop-scroll flex">
          {Array.from({ length: 40 }).map((_, i) => (
            <Fragment key={i}>
              <span className="text-xl text-primary-300 opacity-40 mt-1 font-bold rotate-180 flex items-center justify-center">
                WORKS
              </span>
              <Image
                alt="Tag Icon"
                aria-label="Tag Icon"
                src={'/tag.png'}
                width={29}
                height={19}
                className="w-4"
              />
              <span className="text-xl font-bold text-primary-100 justify-center mb-[2px] flex items-center">
                WORKS
              </span>
              <Image
                alt="Tag Icon"
                aria-label="Tag Icon"
                src={'/tag.png'}
                width={29}
                height={19}
                className="w-4"
              />
            </Fragment>
          ))}
        </div>
      </div>

      <section className="w-full px-4">
        <div className="border border-primary-300 w-full h-96">
          <div className="border-b border-primary-300 w-full p-4 flex flex-col items-start justify-center gap-4">
            <h1 className="text-2xl font-bold w-1/2 leading-5 text-primary-100 uppercase">
              Kleitow Moreira
            </h1>

            <div className="w-full h-48 relative group">
              <Image
                alt="Project Kleitow Moreira Image"
                aria-label="Project Kleitow Moreira Image"
                src={'/project1st.png'}
                width={1220}
                height={625}
                className="w-full h-full object-cover"
              />
              <div className="w-[60%] hidden group-hover:flex group-hover:animate-hover-card items-center justify-center flex-col absolute left-0 h-full top-0">
                <div className="w-full relative h-full bg-primary-100 p-1">
                  <Image
                    alt="Arrow Card Up"
                    aria-label="Arrow Card Up"
                    src={'/arrowCardLeft.png'}
                    width={28}
                    height={28}
                    className="w-5 absolute top-1 left-1"
                  />
                  <section className="flex items-center justify-center gap-2 w-full pt-1 flex-col">
                    <h1 className="text-base font-extrabold uppercase">
                      stacks
                    </h1>

                    <div className="flex items-center gap-2 pb-2 flex-wrap justify-center w-full">
                      {stacksKleitow.map((stack, index) => (
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

                    <h1 className="text-base font-extrabold uppercase">
                      links
                    </h1>

                    <div className="flex justify-center items-center gap-4">
                      <Image
                        alt="Github Icon"
                        aria-label="Github Icon"
                        src="/github.png"
                        width={56}
                        height={56}
                        className="w-5"
                      />
                      <Image
                        alt="WebSite Icon"
                        aria-label="WebSite Icon"
                        src="/website.png"
                        width={56}
                        height={56}
                        className="w-4"
                      />
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
        </div>
      </section>
    </section>
  )
}
