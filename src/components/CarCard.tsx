import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { PeopleIcon, SteeringIcon } from '@/lib/Icons'
import { Button } from '@/components/ui/button'
import { FavoriteHeartButton } from '@/components/FavoriteHeartButton'
import { Car } from '@/types/cars'
import Link from 'next/link'

export function CarCard({ id, model, type, image, price, features }: Car) {
  return (
    <Card className='w-full xl:max-w-sm xl:place-self-center mt-2'>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>{model}</CardTitle>
          <FavoriteHeartButton />
        </div>
        <CardDescription>{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-28 relative'>
          <div className='h-28 bg-gradient-to-t from-white absolute z-50 inset-0 to-80%'></div>
          <Image
            className='m-auto'
            alt={model}
            src={image}
            width={232}
            height={72}
          />
        </div>
        <div className='flex justify-evenly'>
          {features.map(({ type, value }) => {
            return (
              <span
                key={type}
                className='flex justify-evenly items-center'
              >
                {type === 'Gear' ? <SteeringIcon /> : <PeopleIcon />}
                {value}
              </span>
            )
          })}
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <span>${price}/day</span>
        <Button asChild>
          <Link href={`/cars/${id}`}>Rent Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
