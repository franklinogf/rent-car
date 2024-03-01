import { PopularCars } from '@/components/sections/PopularCars'
import { PreviewCars } from '@/components/sections/PreviewCars'
import { RecommendedCars } from '@/components/sections/RecommendedCars'

export default function Page() {
  return (
    <div className='p-4 lg:px-10 space-y-8'>
      <PreviewCars />
      <PopularCars />
      <RecommendedCars />
    </div>
  )
}
