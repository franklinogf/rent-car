'use client'
import { Button } from '@/components/ui/button'
import { LocationPicker } from '@/components/LocationPicker'
import { ShowCars } from '@/components/ShowCars'
import { Sidebar } from '@/components/Sidebar'
import { useEffect, useState } from 'react'
import { cars } from '@/database/cars'
import { type Filters } from '@/types/filters'
import { Car } from '@/types/cars'

export default function Page() {
  const [filteredCars, setFilteredCars] = useState(cars)
  const [carFilters, setCarFilters] = useState<Filters>({
    type: [],
    capacity: [],
    price: [100]
  })
  function handleChangePrice(price: number[]) {
    setCarFilters((prevFilters) => {
      return {
        ...prevFilters,
        price
      }
    })
  }
  function handleChangeType(e: Event) {
    if (e.target) {
      const value = (e.target as HTMLButtonElement).value
      setCarFilters((prevFilters) => {
        const filterExists = prevFilters.type.find((f) => f === value)
        const newFilters = filterExists
          ? prevFilters.type.filter((f) => f !== value)
          : [...prevFilters.type, value]

        return {
          ...prevFilters,
          type: newFilters
        }
      })
    }
  }
  function onChangeCapacity(e: Event) {
    if (e.target) {
      const value = Number((e.target as HTMLButtonElement).value)
      setCarFilters((prevFilters) => {
        const filterExists = prevFilters.capacity.find((f) => f === value)
        const newFilters = filterExists
          ? prevFilters.capacity.filter((f) => f !== value)
          : [...prevFilters.capacity, value]

        return {
          ...prevFilters,
          capacity: newFilters
        }
      })
    }
  }

  useEffect(() => {
    let carsState: Car[] = cars

    if (carFilters.type.length > 0) {
      carsState = carsState.filter((car) => carFilters.type.includes(car.type))
    }

    if (carFilters.capacity.length > 0) {
      carsState = carsState.filter((car) =>
        carFilters.capacity.includes(
          car.features.find((feature) => feature.type === 'Person')?.value as number
        )
      )
    }
    carsState = carsState.filter((car) => car.price <= carFilters.price[0])

    setFilteredCars(carsState)
  }, [carFilters])

  return (
    <div className='lg:flex h-full'>
      <Sidebar
        onChangeCapacity={onChangeCapacity}
        onChangeType={handleChangeType}
        onChangePrice={handleChangePrice}
        filters={carFilters}
      />
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
