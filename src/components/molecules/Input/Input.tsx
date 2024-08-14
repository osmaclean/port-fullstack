'use client'

import { InputContentProps } from '@/@types/interface'
import React from 'react'

export default function Input({ content, onChange, value }: InputContentProps) {
  const handlePhoneMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '')

    if (value.length > 11) value = value.slice(0, 11)

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
    value = value.replace(/(\d)(\d{4})$/, '$1-$2')

    event.target.value = value

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <label
      htmlFor={content.htmlFor}
      className="flex flex-col w-full items-start justify-center gap-1 text-primary-500 font-medium"
    >
      {content.label}

      <input
        type={content.type}
        name={content.name}
        placeholder={content.placeholder}
        onChange={content.type === 'tel' ? handlePhoneMask : onChange}
        required={content.type !== 'tel'}
        autoComplete="off"
        value={value}
        className="placeholder:text-primary-300 text-sm bg-primary-500 shadow-sm shadow-primary-500 text-primary-100 px-4 py-1 w-full"
      />
    </label>
  )
}
