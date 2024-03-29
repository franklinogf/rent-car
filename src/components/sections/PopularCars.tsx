import { cars } from '@/database/cars'
import { ShowCars } from '@/components/ShowCars'

export function PopularCars() {
  const popularCars = cars.sort(() => Math.random() - 0.5).slice(0, 4)
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
