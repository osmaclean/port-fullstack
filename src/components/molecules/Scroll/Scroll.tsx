import Image from 'next/image'
import React from 'react'

export default function Scroll() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-1 w-1 rounded-full bg-primary-100 opacity-40"
        ></div>
      ))}
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
