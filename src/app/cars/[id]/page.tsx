import { cars } from '@/database/cars'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { CarGallery } from '@/components/CarGallery'
import { CarDetail } from '@/components/CarDetail'
import { CarReviews } from '@/components/CarReviews'
import { LocationPicker } from '@/components/LocationPicker'

export default function Page({ params }: { params: { id: string } }) {
  const car = cars.find((car) => car.id === Number(params.id))

  if (!car) {
    return (
      <Alert variant='destructive'>
        <AlertDescription>{"This car doesn't exist"}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className='space-y-5 w-full p-4'>
      <div className='grid xl:grid-flow-col justify-center gap-5 mx-auto'>
        <CarGallery />
        <div className='max-w-4xl space-y-4'>
          <LocationPicker />
          <CarDetail car={car} />
        </div>
      </div>
      <CarReviews comments={car.comments} />
    </div>
  )
}
