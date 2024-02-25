import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Car() {
  return (
    <article className='bg-blue-400 text-white relative p-4 w-full max-w-md h-[365px]'>
      <div className='grid grid-cols w-80 gap-5'>
        <h2 className='font-bold text-2xl max-w-60'>The Best Platform for Car Rental</h2>
        <p className='font-light text-sm max-w-60'>
          Ease of doing a carretal safety and rellably. Of course at low price.
        </p>
        <Button className='w-32 text-base'>Rental Car</Button>
      </div>
      <Image
        className='bottom-0 left-1/2 -translate-x-1/2 lg:-translate-x-1/3 absolute w-48 lg:w-56'
        alt='previewCar1'
        src='/cars/car4.png'
        width={250}
        height={100}
        // style={{ height: 'auto', width: 'auto' }}
      />
    </article>
  )
}

export function PreviewCarSection() {
  return (
    <section className='w-full flex flex-col justify-center gap-y-5 lg:flex-row lg:justify-center lg:gap-x-5 mx-auto place-items-center'>
      <Car />
      <Car />
    </section>
  )
}
