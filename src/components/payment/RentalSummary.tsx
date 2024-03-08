import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { CarRating } from '@/components/CarDetail'
import { Car } from '@/types/cars'

export function RentalSummary({
  image,
  model,
  subtotal,
  tax,
  total
}: {
  image: Car['image']
  model: Car['model']
  subtotal: number
  tax: number
  total: number
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Summary</CardTitle>
        <CardDescription>
          Prices will change depending on the length of the rental and the price of your rental car.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex gap-x-4 items-center'>
          <div
            className='w-36 h-24 rounded-xl relative'
            style={{ backgroundImage: `url('/images/bg2.png')` }}
          >
            <Image
              className='w-full h-auto max-w-32 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
              src={image}
              alt={`Foto del carro ${model}`}
              width='0'
              height='0'
              sizes='100%'
            />
          </div>
          <div className='space-y-3'>
            <h4 className='text-4xl font-bold'>{model}</h4>
            <CarRating
              rating={5}
              amountOfReviews={4}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className='space-y-5 w-full'>
          <article className='flex justify-between'>
            <span className='text-muted-foreground font-semibold'>Subtotal</span>
            <span className='font-bold'>${subtotal.toFixed(2)}</span>
          </article>
          <article className='flex justify-between'>
            <span className='text-muted-foreground font-semibold'>Tax</span>
            <span className='font-bold'>${tax.toFixed(2)}</span>
          </article>
          <article className='flex justify-between'>
            <div className='flex flex-col'>
              <span className='font-semibold text-xl'>Total Rental Price</span>
              <span className='text-muted-foreground text-sm'>
                Overall price and includes rental discount
              </span>
            </div>
            <div>
              <span className='text-3xl font-bold'>${total.toFixed(2)}</span>
            </div>
          </article>
        </div>
      </CardFooter>
    </Card>
  )
}
