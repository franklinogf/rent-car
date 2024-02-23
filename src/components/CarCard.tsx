import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { HeartIcon, PeopleIcon, SteeringIcon } from '@/lib/Icons'
import { Button } from '@/components/ui/button'

export function CarCard() {
  return (
    <Card className='w-full mt-2'>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>Koenigsegg</CardTitle>
          <HeartIcon />
        </div>
        <CardDescription>Sport</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-28 relative'>
          <div className='h-28 bg-gradient-to-t from-white absolute z-50 inset-0 to-80%'></div>
          <Image
            className='m-auto'
            alt='PopularCar'
            src='/cars/car3.png'
            width={232}
            height={72}
          />
        </div>
        <div className='flex justify-evenly'>
          <span className='flex justify-evenly items-center'>
            <SteeringIcon />
            Manual
          </span>
          <span className='flex justify-evenly items-center '>
            <PeopleIcon />
            People
          </span>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <span>$99.00/day</span>
        <Button>Rent Now</Button>
      </CardFooter>
    </Card>
  )
}