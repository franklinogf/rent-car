import { CarCard } from '@/components/CarCard'
import { type Car } from '@/types/cars'
export function ShowCars({ cars }: { cars: Car[] }) {
  return (
    <div className='grid md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 xl:grid-cols-4'>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          {...car}
        />
      ))}
    </div>
  )
}
