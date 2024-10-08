'use client'

import React from 'react'

import { InputContentProps } from '@/@types/interface'

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
      className="flex w-full flex-col items-start justify-center gap-1 font-medium text-primary-500 md-3:text-lg"
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
        className="w-full bg-primary-500 px-4 py-1 text-sm text-primary-100 shadow-sm shadow-primary-500 placeholder:text-primary-300 md-3:text-base"
      />
    </label>
  )
}
