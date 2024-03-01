'use client'
import { Button } from '@/components/ui/button'
import { ShowCars } from '@/components/ShowCars'
import { Sidebar } from '@/components/Sidebar'
import { cars } from '@/database/cars'
import { useFilters } from '@/hooks/useFilters'

export default function Page() {
  const { filterCars } = useFilters()
  const filteredCars = filterCars(cars)

  return (
    <div className='lg:flex h-full'>
      <Sidebar />
      <div className='w-full p-4'>
        <ShowCars cars={filteredCars} />
        <Button className='mx-auto block mt-4'>Show more Cars</Button>
      </div>
    </div>
  )
}
