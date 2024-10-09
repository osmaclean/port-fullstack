import Scroll from '@/components/molecules/Scroll/Scroll'
import AllJobs from '@/components/organism/AllJobs/AllJobs'
import JobsHero from '@/components/organism/JobsHero/JobsHero'

export default function Page() {
  return (
    <section className="flex w-full flex-col items-center justify-center pt-8">
      <JobsHero />
      <Scroll />
      <AllJobs />
    </section>
  )
}
