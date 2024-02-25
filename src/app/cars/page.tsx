import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/Sidebar'
import { LocationPicker } from '@/components/LocationPicker'
import { cars } from '@/database/cars'

import { ShowCars } from '@/components/ShowCars'

export default function Page() {
  return (
    <div className='lg:flex h-full'>
      <Sidebar />
      <div className='px-5 py-2'>
        <div className='flex justify-center'>
          <LocationPicker />
        </div>
        <ShowCars cars={cars} />
        <Button className='mx-auto block mt-4'>Show more Car</Button>
      </div>
    </div>
  )
}
