'use client'

import 'react-toastify/dist/ReactToastify.css'

import { ArrowRight } from '@phosphor-icons/react'
import { Fragment, useCallback, useState } from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify'

import { InputProps } from '@/@types/interface'
import Input from '@/components/molecules/Input/Input'

const inputContent: InputProps[] = [
  {
    htmlFor: 'name',
    label: 'Name*',
    type: 'text',
    name: 'name',
    placeholder: 'Lucas Maclean',
  },
  {
    htmlFor: 'email',
    label: 'E-mail*',
    type: 'email',
    name: 'email',
    placeholder: 'maclean@maclean.com',
  },
  {
    htmlFor: 'phone',
    label: 'Phone',
    type: 'tel',
    name: 'phone',
    placeholder: 'Ex: (11) 97777-7777',
  },
  {
    htmlFor: 'topic',
    label: 'Topic*',
    type: 'text',
    name: 'topic',
    placeholder: 'Ex: Server Development',
  },
]

export default function ContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: '',
    email: '',
    topic: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const notify = useCallback((message: string, type: 'success' | 'error') => {
    toast[type](message, {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      theme: 'dark',
      transition: Zoom,
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('https://formspree.io/f/mrbzlzev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        notify('Form submitted successfully!', 'success')
        setFormData({
          name: '',
          email: '',
          topic: '',
          phone: '',
          message: '',
        })
      } else {
        notify('Failed to submit form. Please try again later.', 'error')
      }
    } catch (error) {
      notify('An error occurred. Please try again later.', 'error')
    }
  }

  return (
    <div className="flex w-full items-center justify-center bg-primary-100">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start justify-center gap-4 bg-primary-100 px-4 py-6 sm-2:px-10 md-1:px-16 md-3:px-28 md-4:max-w-[760px]"
      >
        <ToastContainer />
        {inputContent.map((content, index) => (
          <Fragment key={index}>
            <Input
              content={content}
              onChange={handleChange}
              value={formData[content.name] || ''}
            />
          </Fragment>
        ))}

        <label
          htmlFor="message"
          className="flex w-full flex-col items-start justify-center gap-1 font-medium text-primary-500 md-3:text-lg"
        >
          Message*
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Your message here..."
            onChange={handleChange}
            value={formData.message || ''}
            className="w-full resize-y bg-primary-500 px-4 py-1 text-sm text-primary-100 shadow-sm shadow-primary-500 placeholder:text-primary-300 md-3:text-base"
          />
        </label>

        <button
          type="submit"
          className="group relative mt-1 w-24 cursor-pointer overflow-hidden border-2 border-primary-200 px-2 shadow-md shadow-primary-300 md-3:w-32"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 py-[2px] text-xs font-bold text-primary-500 duration-500 group-hover:text-primary-300 sm-3:text-sm md-3:text-base">
            Send
            <ArrowRight size={16} className="md-3:h-5 md-3:w-5" />
          </span>
          <span className="absolute left-0 top-0 h-full w-full bg-primary-200 duration-500 group-hover:-translate-x-full"></span>
          <span className="absolute left-0 top-0 h-full w-full bg-primary-200 duration-500 group-hover:translate-x-full"></span>

          <span className="absolute left-0 top-0 h-full w-full bg-primary-200 delay-300 duration-500 group-hover:-translate-y-full"></span>
          <span className="absolute left-0 top-0 h-full w-full bg-primary-200 delay-300 duration-500 group-hover:translate-y-full"></span>
        </button>
      </form>
    </div>
  )
}
