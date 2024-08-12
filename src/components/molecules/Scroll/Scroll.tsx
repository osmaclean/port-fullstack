import Image from 'next/image'
import React from 'react'

export default function Scroll() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6">
      <div className="h-1 w-1 bg-primary-100 opacity-40 rounded-full"></div>
      <div className="h-1 w-1 bg-primary-100 opacity-40 rounded-full"></div>
      <div className="h-1 w-1 bg-primary-100 opacity-40 rounded-full"></div>
      <div className="h-1 w-1 bg-primary-100 opacity-40 rounded-full"></div>
      <Image
        alt="Image Scroll Down"
        aria-label="Image Scroll Down"
        src={'/scrollDown.png'}
        width={48}
        height={48}
        className="w-6 animate-spin"
      />
    </div>
  )
}
