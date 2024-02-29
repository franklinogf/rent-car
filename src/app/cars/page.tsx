'use client'
import { Button } from '@/components/ui/button'
import { LocationPicker } from '@/components/LocationPicker'
import { ShowCars } from '@/components/ShowCars'
import { Sidebar } from '@/components/Sidebar'
import { useEffect, useState } from 'react'
import { cars as initialCars } from '@/database/cars'
import { type Filters } from '@/types/filters'
import { Car } from '@/types/cars'

export default function Page() {
  const [cars] = useState(initialCars)
  const [filters, setFilters] = useState<Filters>({
    type: [],
    capacity: [],
    price: [100]
  })

  function filterCars(cars: Car[]) {
    return cars.filter((car) => {
      return (
        car.price <= filters.price[0] &&
        (filters.type.length === 0 || filters.type.includes(car.type)) &&
        (filters.capacity.length === 0 ||
          filters.capacity.includes(
            car.features.find((feature) => feature.type === 'Person')?.value as number
          ))
      )
    })
  }
  const filteredCars = filterCars(cars)
  return (
    <div className='lg:flex h-full'>
      <Sidebar onChangeFilters={setFilters} />
      <div className='w-full p-4'>
        <div className='flex justify-center'>
          <LocationPicker />
        </div>
        <ShowCars cars={filteredCars} />
        <Button className='mx-auto block mt-4'>Show more Cars</Button>
      </div>
    </div>
  )
}
