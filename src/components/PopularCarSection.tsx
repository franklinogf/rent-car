import { Button } from '@/components/ui/button'
import { CarCard } from '@/components/CarCard'
import { cars } from '@/database/cars'

export default function PopularSection() {
  return (
    <section className='mt-4'>
      <ViewAll />
      <div className='grid md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 xl:grid-cols-4'>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            {...car}
          />
        ))}
      </div>
    </section>
  )
}

export function ViewAll() {
  return (
    <div className='flex justify-between items-center px-10'>
      <h2 className=' font-semibold'>Popular Car</h2>
      <Button
        variant='outline'
        className='text-primary'
      >
        View All
      </Button>
    </div>
  )
}
