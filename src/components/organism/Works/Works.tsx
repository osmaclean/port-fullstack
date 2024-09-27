'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import React, { Fragment } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Scroll from '@/components/molecules/Scroll/Scroll'
import WorkCard from '@/components/molecules/WorkCard/WorkCard'

import { WorkProjectCard } from '../../../mock/projects.mock'

export default function Works() {
  return (
    <section className="flex w-full select-none flex-col items-center justify-center gap-6 border-t-[1px] border-primary-100 pb-6">
      <div className="flex w-full gap-4 overflow-hidden whitespace-nowrap">
        <div className="flex min-w-full animate-loop-scroll items-center justify-center gap-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <Fragment key={i}>
              <span className="mt-1 flex rotate-180 items-center justify-center text-xl font-bold uppercase text-primary-300 opacity-40 md-1:text-2xl">
                projetos
              </span>
              <Image
                alt="Tag Icon"
                aria-label="Tag Icon"
                src={'/tag.png'}
                width={29}
                height={19}
                className="w-4 md-1:w-5"
              />
              <span className="mb-[2px] flex items-center justify-center text-xl font-bold uppercase text-primary-100 md-1:text-2xl">
                projetos
              </span>
              <Image
                alt="Tag Icon"
                aria-label="Tag Icon"
                src={'/tag.png'}
                width={29}
                height={19}
                className="w-4 md-1:w-5"
              />
            </Fragment>
          ))}
        </div>
      </div>

      <section className="md-4:px-32 lg-1:px-44 lg-2:max-w-[800px] lg-2:px-0 w-full px-4 sm-1:px-10 md-1:px-16">
        <div className="flex w-full flex-col items-center justify-center border border-b-0 border-primary-300 sm-3:hidden sm-3:flex-row sm-3:flex-wrap sm-3:border-b">
          {WorkProjectCard.map((card, index) => (
            <WorkCard card={card} key={index} />
          ))}
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          spaceBetween={14}
          pagination={{ type: 'progressbar' }}
          className="!z-10 !hidden sm-3:!flex"
        >
          {WorkProjectCard.map((card, index) => (
            <SwiperSlide
              key={index}
              className="lg-1:min-h-[400px] group relative z-10 min-h-72 md-2:min-h-96 md-3:w-full"
            >
              <Image
                src={card.imgProject}
                alt={`${card.title} Image`}
                aria-label={`${card.title} Image`}
                width={1000}
                height={1000}
                className="lg-1:min-h-[400px] absolute -z-10 min-h-72 w-full object-cover md-2:min-h-96 md-3:max-h-[720px]"
              />
              <div className="absolute bottom-0 hidden w-full flex-col items-start justify-center gap-2 bg-primary-600 p-4 group-hover:flex">
                <h1 className="font-bold uppercase text-primary-100 md-2:text-xl">
                  {card.title}
                </h1>

                <div className="flex w-full flex-wrap items-center justify-start gap-2">
                  {card.labels.map((label, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 px-2 text-xs font-medium uppercase text-primary-500 md-2:text-sm"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="relative left-0 h-full min-w-[155px] max-w-[155px] bg-primary-100 px-1 py-2">
                  <Image
                    alt="Arrow Card Up"
                    aria-label="Arrow Card Up"
                    src={'/arrowCardLeft.png'}
                    width={28}
                    height={28}
                    className="absolute left-1 top-1 w-5"
                  />
                  <section className="flex h-full flex-col items-center justify-center gap-2">
                    <h1 className="text-base font-extrabold uppercase md-2:text-lg">
                      stacks
                    </h1>

                    <div className="flex w-full flex-wrap items-center justify-center gap-2 px-2 pb-2">
                      {card.stacks.map((stack, index) => (
                        <Image
                          key={index}
                          alt={stack.alt}
                          aria-label={stack.ariaLabel}
                          src={stack.imgPath}
                          width={56}
                          height={56}
                          className="w-5 md-2:w-6"
                        />
                      ))}
                    </div>

                    <div className="h-[1px] w-[80%] bg-primary-500"></div>

                    <h1 className="text-base font-extrabold uppercase md-2:text-lg">
                      links
                    </h1>

                    <div className="flex items-center justify-center gap-4">
                      {card.title !== 'Convert3D Pro' &&
                        card.title !== 'Kleitow Moreira' &&
                        card.title !== 'Mar de Rosas' && (
                          <Image
                            alt="Github Icon"
                            aria-label="Github Icon"
                            src="/github.png"
                            width={56}
                            height={56}
                            className="w-5 md-2:w-6"
                          />
                        )}
                      <Link href={card.href} target="_blank">
                        <Image
                          alt="WebSite Icon"
                          aria-label="WebSite Icon"
                          src="/website.png"
                          width={56}
                          height={56}
                          className="w-4 md-2:w-5"
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
                    className="absolute bottom-1 right-1 w-5"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Link
        href={'/jobs'}
        className="group relative mt-1 w-28 cursor-pointer overflow-hidden border-2 border-primary-200 px-2 shadow-md shadow-primary-300 sm-3:w-32"
      >
        <span className="relative z-10 flex items-center justify-center gap-2 py-[2px] text-xs font-bold uppercase text-primary-500 duration-500 group-hover:text-primary-100 sm-3:text-sm">
          Ver todos
          <ArrowRight size={16} className="sm-3:h-5 sm-3:w-5" />
        </span>
        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 duration-500 group-hover:-translate-x-full"></span>
        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 duration-500 group-hover:translate-x-full"></span>

        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 delay-300 duration-500 group-hover:-translate-y-full"></span>
        <span className="absolute left-0 top-0 h-full w-full bg-primary-200 delay-300 duration-500 group-hover:translate-y-full"></span>
      </Link>

      <Scroll />
    </section>
  )
}
