import { cars } from '@/database/cars'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FavoriteHeartButton } from '@/components/FavoriteHeartButton'
import { Button } from '@/components/ui/button'
import { CarGallery } from '@/components/CarGallery'

export default function Page({ params }: { params: { id: string } }) {
  const car = cars.find((car) => car.id === Number(params.id))

  if (!car)
    return (
      <Alert variant='destructive'>
        <AlertDescription>{"This car doesn't exist"}</AlertDescription>
      </Alert>
    )

  return (
    <div className='grid xl:grid-flow-col justify-center gap-5 mx-auto'>
      <CarGallery />
      <Card className='w-full'>
        <CardHeader>
          <div className='flex justify-between items-center'>
            <CardTitle>{car.model}</CardTitle>
            <FavoriteHeartButton />
          </div>
          <CardDescription>Estrellas TODO</CardDescription>
        </CardHeader>
        <CardContent className='text-gray-500 space-y-8'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni deleniti minima!
            Natus itaque, harum quia, incidunt, exercitationem explicabo blanditiis commodi nihil
            dolorum dolor delectus temporibus.
          </p>
          <div className='grid grid-cols-2'>
            {car.features.map((feature) => (
              <div
                key={feature.type}
                className='flex gap-4 justify-center'
              >
                <span>{feature.type}</span>
                <span className='font-semibold text-gray-600'>{feature.value}</span>
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <span className='text-black font-bold text-xl'>${car.price.toFixed(2)}/ </span>
              <span className='text-sm'>day</span>
            </div>
            <div>
              <Button>Rent Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
