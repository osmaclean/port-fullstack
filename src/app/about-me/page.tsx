import Scroll from '@/components/molecules/Scroll/Scroll'
import AboutHero from '@/components/organism/AboutHero/AboutHero'
import AboutNav from '@/components/organism/AboutNav/AboutNav'

export default function Page() {
  return (
    <section className="w-full pt-8">
      <AboutHero />
      <Scroll />
      <AboutNav />
    </section>
  )
}
