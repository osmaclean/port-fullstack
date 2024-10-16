'use client'

import { DotOutline } from '@phosphor-icons/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { allEducations } from '@/mock/education.mock'
import { allStacks } from '@/mock/stacks.mock'

export default function AboutNav() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="flex w-full select-none flex-col items-center justify-center gap-8 bg-primary-100 p-4 sm-2:px-10 md-1:px-24 md-3:px-40 md-4:px-56 lg-1:px-72">
      <nav className="w-full lg-2:max-w-[520px]">
        <ul className="flex w-full items-center justify-between text-sm uppercase sm-3:text-base md-3:text-lg">
          {['stacks', 'experiência', 'educação'].map((item, index) => (
            <li
              key={index}
              onClick={() => handleActiveIndex(index)}
              className={`${
                activeIndex === index
                  ? `rounded-[3px] border-b-primary-500 text-primary-500`
                  : 'text-primary-300'
              } cursor-pointer border-b border-t border-primary-100 px-1 duration-300 hover:rounded-[3px] hover:border-b-primary-500 hover:text-primary-500`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {activeIndex === 0 && (
        <div className="grid w-full grid-cols-4 gap-4 md-3:gap-8 md-3:py-4 lg-2:max-w-[612px]">
          {allStacks.map((stack, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center duration-700 hover:translate-y-1"
            >
              <Image
                alt={stack.alt}
                aria-label={stack.ariaLabel}
                src={stack.imgPath}
                width={56}
                height={56}
                className="w-6 md-3:w-8"
              />
              <span className="invisible absolute break-words rounded-md bg-primary-500 px-2 py-[2px] text-center font-bold opacity-0 duration-700 group-hover:visible group-hover:-translate-y-10 group-hover:text-xs group-hover:text-primary-100 group-hover:opacity-100 md-3:group-hover:text-sm">
                {stack.title}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeIndex === 1 && (
        <div className="flex w-full flex-col items-start justify-center text-primary-500 lg-2:max-w-[524px]">
          <div className="flex w-full items-start justify-start gap-1">
            <DotOutline size={24} weight="fill" className="text-primary-500" />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-sm font-bold text-primary-500 sm-3:text-base">
                Desenvolvedor Full-stack
              </h2>
              <p className="text-xs font-bold leading-3 text-primary-300 sm-3:text-sm">
                ZeusTech | 02/2023 - Atual | Freelancer
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1 px-1">
            <DotOutline size={14} className="text-primary-300" />
            <DotOutline size={14} className="text-primary-300" />
            <DotOutline size={14} className="text-primary-300" />
          </div>
          <div className="flex w-full items-start justify-start gap-1">
            <DotOutline size={24} weight="fill" className="text-primary-500" />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-sm font-bold text-primary-500 sm-3:text-base">
                Professor Particular
              </h2>
              <p className="text-xs font-bold leading-3 text-primary-300 sm-3:text-sm">
                Superprof | 05/2023 - Atual | Autônomo
              </p>
            </div>
          </div>
        </div>
      )}

      {activeIndex === 2 && (
        <div className="flex w-full flex-col items-start justify-center text-primary-500 lg-2:max-w-[524px]">
          {allEducations.map((education, index) => (
            <Fragment key={index}>
              <div className="flex w-full items-start justify-start gap-1">
                <DotOutline
                  size={24}
                  weight="fill"
                  className="text-primary-500"
                />
                <div className="flex flex-1 flex-col items-start justify-center">
                  <h2 className="mt-[1px] text-sm font-bold text-primary-500 sm-3:text-base">
                    {education.name}
                  </h2>
                  <p className="text-xs font-bold text-primary-300 sm-3:text-sm">
                    {`(${education.hours}h) | ${education.company}`}
                  </p>
                </div>
              </div>
              {index !== allEducations.length - 1 && (
                <div className="flex w-full flex-col items-start justify-start px-1">
                  <DotOutline size={14} className="text-primary-300" />
                  <DotOutline size={14} className="text-primary-300" />
                  <DotOutline size={14} className="text-primary-300" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
