'use client'

import { InputProps } from '@/@types/interface'
import { ArrowRight } from '@phosphor-icons/react'
import { Fragment, useCallback, useState } from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import Input from '@/components/molecules/Input/Input'
import 'react-toastify/dist/ReactToastify.css'

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
    <form
      onSubmit={handleSubmit}
      className="bg-primary-100 w-full px-4 py-6 flex flex-col items-start justify-center gap-4"
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
        className="flex flex-col w-full items-start justify-center gap-1 text-primary-500 font-medium"
      >
        Message*
        <textarea
          name="message"
          id="message"
          rows={7}
          placeholder="Your message here..."
          onChange={handleChange}
          value={formData.message || ''}
          className="placeholder:text-primary-300 text-sm bg-primary-500 shadow-sm shadow-primary-500 text-primary-100 px-4 py-1 w-full resize-y"
        ></textarea>
      </label>

      <button
        type="submit"
        className="cursor-pointer relative group overflow-hidden shadow-md shadow-primary-300 border-2 px-2 w-24 mt-1 border-primary-200"
      >
        <span className="font-bold flex items-center justify-center gap-2 text-primary-500 text-xs py-[2px] relative z-10 group-hover:text-primary-300 duration-500">
          Send
          <ArrowRight size={16} />
        </span>
        <span className="absolute top-0 left-0 w-full bg-primary-200 duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-primary-200 duration-500 group-hover:translate-x-full h-full"></span>

        <span className="absolute top-0 left-0 w-full bg-primary-200 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-primary-200 duration-500 group-hover:translate-y-full h-full"></span>
      </button>
    </form>
  )
}
