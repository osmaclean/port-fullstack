'use client'

import { allStacks } from '@/mock/stacks.mock'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { DotOutline } from '@phosphor-icons/react'
import { allEducations } from '@/mock/education.mock'

export default function AboutNav() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="bg-primary-100 select-none w-full flex flex-col items-center justify-center gap-8 p-4">
      <nav className="w-full">
        <ul className="flex w-full uppercase text-sm items-center justify-between">
          {['stacks', 'experience', 'education'].map((item, index) => (
            <li
              key={index}
              onClick={() => handleActiveIndex(index)}
              className={`${
                activeIndex === index
                  ? `text-primary-500 border-b-primary-500 rounded-[3px]`
                  : 'text-primary-300'
              } cursor-pointer border-t border-b border-primary-100 duration-300 hover:text-primary-500 hover:border-b-primary-500 hover:rounded-[3px] px-1`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {activeIndex === 0 && (
        <div className="grid grid-cols-4 w-full gap-4">
          {allStacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col hover:translate-y-1 duration-700 items-center justify-center group"
            >
              <Image
                alt={stack.alt}
                aria-label={stack.ariaLabel}
                src={stack.imgPath}
                width={56}
                height={56}
                className="w-6"
              />
              <span className="absolute invisible break-words opacity-0 px-2 py-[2px] text-center font-bold bg-primary-500 rounded-md group-hover:opacity-100 group-hover:text-primary-100 group-hover:text-xs group-hover:-translate-y-10 duration-700 group-hover:visible">
                {stack.title}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeIndex === 1 && (
        <div className="text-primary-500 w-full flex flex-col items-start justify-center">
          <div className="flex items-start w-full justify-start gap-1">
            <DotOutline size={24} weight="fill" className="text-primary-500" />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-primary-500 font-bold text-sm">
                Full Stack Developer
              </h2>
              <p className="text-primary-300 font-bold text-xs leading-3">
                ZeusTech | 02/2023 - Atual | Freelancer
              </p>
            </div>
          </div>
          <div className="flex flex-col px-1 items-start w-full justify-start gap-1">
            <DotOutline size={14} className="text-primary-300" />
            <DotOutline size={14} className="text-primary-300" />
            <DotOutline size={14} className="text-primary-300" />
          </div>
          <div className="flex items-start w-full justify-start gap-1">
            <DotOutline size={24} weight="fill" className="text-primary-500" />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-primary-500 font-bold text-sm">
                Private Teacher
              </h2>
              <p className="text-primary-300 font-bold text-xs leading-3">
                Superprof | 05/2023 - Atual | Autônomo
              </p>
            </div>
          </div>
        </div>
      )}

      {activeIndex === 2 && (
        <div className="text-primary-500 w-full flex flex-col items-start justify-center">
          {allEducations.map((education, index) => (
            <Fragment key={index}>
              <div className="flex items-start w-full justify-start gap-1">
                <DotOutline
                  size={24}
                  weight="fill"
                  className="text-primary-500"
                />
                <div className="flex flex-col flex-1 items-start justify-center">
                  <h2 className="text-primary-500 font-bold text-sm mt-[1px]">
                    {education.name}
                  </h2>
                  <p className="text-primary-300 font-bold text-xs">
                    {`(${education.hours}h) | ${education.company}`}
                  </p>
                </div>
              </div>
              {index !== allEducations.length - 1 && (
                <div className="flex flex-col px-1 items-start w-full justify-start">
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
