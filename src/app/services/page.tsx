import Scroll from '@/components/molecules/Scroll/Scroll'
import AllServices from '@/components/organism/AllServices/AllServices'
import ServicesHero from '@/components/organism/ServicesHero/ServicesHero'
import React from 'react'

export default function Page() {
  return (
    <section className="pt-8 w-full">
      <ServicesHero />
      <Scroll />
      <AllServices />
    </section>
  )
}
