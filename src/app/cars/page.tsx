import { CarCard } from '@/components/CarCard'
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/Sidebar'
import { LocationPicker } from '@/components/LocationPicker'
import { cars } from '@/database/cars'

export default function Page() {
  return (
    <div className='grid grid-flow-col grid-cols-[20%_80%] h-full'>
      {/* <> */}
      <Sidebar />
      <div className='p-2'>
        <div className='flex justify-center'>
          <LocationPicker />
        </div>
        <section className='grid grid-cols-3 gap-8'>
          {cars.map((car) => (
            <CarCard
              key={car.id}
              {...car}
            />
          ))}
        </section>
        <Button className='mx-auto block mt-4'>Show more Car</Button>
      </div>
      {/* </> */}
    </div>
  )
}
