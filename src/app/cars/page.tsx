import { Button } from '@/components/ui/button'
import { LocationPicker } from '@/components/LocationPicker'
import { cars } from '@/database/cars'

import { ShowCars } from '@/components/ShowCars'

export default function Page() {
  return (
    <>
      <div className='flex justify-center'>
        <LocationPicker />
      </div>
      <ShowCars cars={cars} />
      <Button className='mx-auto block mt-4'>Show more Car</Button>
    </>
  )
}
