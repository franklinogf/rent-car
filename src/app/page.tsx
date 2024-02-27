import { LocationPicker } from '@/components/LocationPicker'
import { PopularCars } from '@/components/sections/PopularCars'
import { PreviewCars } from '@/components/sections/PreviewCars'
import { RecommendedCars } from '@/components/sections/RecommendedCars'

export default function Page() {
  return (
    <div className='p-4 lg:px-10'>
      <div className='mt-4'>
        <PreviewCars />
      </div>
      <div className='mt-4 flex justify-center'>
        <LocationPicker />
      </div>
      <PopularCars />
      <RecommendedCars />
    </div>
  )
}
