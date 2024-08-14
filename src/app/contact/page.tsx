import Scroll from '@/components/molecules/Scroll/Scroll'
import ContactForm from '@/components/organism/ContactForm/ContactForm'
import ContactHero from '@/components/organism/ContactHero/ContactHero'
import React from 'react'

export default function Page() {
  return (
    <section className="pt-8 w-full">
      <ContactHero />
      <Scroll />
      <ContactForm />
    </section>
  )
}
