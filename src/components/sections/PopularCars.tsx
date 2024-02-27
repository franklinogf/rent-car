import { Button } from '@/components/ui/button'
import { cars } from '@/database/cars'
import { ShowCars } from '../ShowCars'

export function PopularCars() {
  return (
    <section className='mt-4'>
      <ViewAll />
      <ShowCars cars={cars} />
    </section>
  )
}

export function ViewAll() {
  return (
    <div className='flex justify-between items-center'>
      <h2 className='font-semibold'>Popular Car</h2>
      <Button
        variant='outline'
        className='text-primary'
      >
        View All
      </Button>
    </div>
  )
}
