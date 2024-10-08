import React from 'react'

import Scroll from '@/components/molecules/Scroll/Scroll'
import ContactForm from '@/components/organism/ContactForm/ContactForm'
import ContactHero from '@/components/organism/ContactHero/ContactHero'

export default function Page() {
  return (
    <section className="flex w-full flex-col items-center justify-center pt-8">
      <ContactHero />
      <Scroll />
      <ContactForm />
    </section>
  )
}
