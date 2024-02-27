import { ShowCars } from '@/components/ShowCars'
import { cars } from '@/database/cars'

export function RecommendedCars() {
  const recommendedCars = cars.slice(0, 8)
  return (
    <section className='mt-8'>
      <ShowCars
        title='Recommended cars'
        cars={recommendedCars}
      />
    </section>
  )
}
