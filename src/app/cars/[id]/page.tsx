import { cars } from '@/database/cars'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { CarGallery } from '@/components/CarGallery'
import { CarDetail } from '@/components/CarDetail'
import BoxComment from '@/components/BoxComments'

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
    <div className='grid xl:grid-flow-col justify-center gap-5 mx-auto'>
      <CarGallery />
      <CarDetail car={car} />
      <BoxComment />
    </div>
  )
}
