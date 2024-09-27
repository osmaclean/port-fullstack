import React from 'react'

import Scroll from '@/components/molecules/Scroll/Scroll'
import AllServices from '@/components/organism/AllServices/AllServices'
import ServicesHero from '@/components/organism/ServicesHero/ServicesHero'

export default function Page() {
  return (
    <section className="w-full pt-8">
      <ServicesHero />
      <Scroll />
      <AllServices />
    </section>
  )
}
