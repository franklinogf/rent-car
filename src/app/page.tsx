import { LocationPicker } from '@/components/LocationPicker'
import { PopularCars } from '@/components/sections/PopularCars'
import { PreviewCarSection } from '@/components/PreviewCar'
import { RecommendedCars } from '@/components/sections/RecommendedCars'

export default function Page() {
  return (
    <div className='px-4 lg:px-10'>
      <div className='mt-4'>
        <PreviewCarSection />
      </div>
      <div className='mt-4 flex justify-center'>
        <LocationPicker />
      </div>
      <PopularCars />
      <RecommendedCars />
    </div>
  )
}
