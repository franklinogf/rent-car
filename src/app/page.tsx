import FooterSection from '@/components/FooterSection'
import PopularSection from '@/components/PopularCarSection'
import PreviewCar from '@/components/PreviewCar'
import RecomendationSection from '@/components/RecomendationSection'

export default function Page() {
  return (
    <>
      <div className='mt-4'>
        <PreviewCar />
      </div>
      <PopularSection />
      <RecomendationSection />
      <FooterSection />
    </>
  )
}
