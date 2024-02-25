import { LocationPicker } from '@/components/LocationPicker'
import PopularSection from '@/components/PopularCarSection'
import { PreviewCarSection } from '@/components/PreviewCar'
import RecomendationSection from '@/components/RecomendationSection'

export default function Page() {
  return (
    <div className='px-4 lg:px-10'>
      <div className='mt-4'>
        <PreviewCarSection />
      </div>
      <div className='mt-4 flex justify-center'>
        <LocationPicker />
      </div>
      <PopularSection />
      <RecomendationSection />
    </div>
  )
}
