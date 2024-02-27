import { cars } from '@/database/cars'
import { ShowCars } from '@/components/ShowCars'
const popularCars = cars.slice(0, 4)

export function PopularCars() {
  return (
    <section className='mt-4'>
      <ShowCars
        title='Popular Car'
        link='#'
        cars={popularCars}
      />
    </section>
  )
}
