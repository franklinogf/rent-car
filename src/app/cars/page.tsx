'use client'
import { Button } from '@/components/ui/button'
import { LocationPicker } from '@/components/LocationPicker'
import { cars } from '@/database/cars'

import { ShowCars } from '@/components/ShowCars'
import { Sidebar } from '@/components/Sidebar'
import { useState } from 'react'
import { Car, CarFeaturePerson } from '@/types/cars'

export default function Page() {
  const [filteredCars, setFilteredCars] = useState(cars)
  const [filters, setFilters] = useState([])

  // function handleChangeFilters(
  //   type: string,
  //   items: Car['type'][] | CarFeaturePerson['value'][]
  // ): void {
  //   console.log('type filter', type)
  // }

  return (
    <div className='lg:flex h-full'>
      <Sidebar />
      <div className='w-full p-4'>
        <div className='flex justify-center'>
          <LocationPicker />
        </div>
        <ShowCars cars={filteredCars} />
        <Button className='mx-auto block mt-4'>Show more Car</Button>S
      </div>
    </div>
  )
}
