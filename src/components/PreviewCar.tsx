import { Button } from '@/components/ui/button'
import clsx from 'clsx'
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
        className='bottom-0 left-36 absolute'
        alt='previewCar1'
        src='/cars/car3.png'
        width={300}
        height={268}
        // style={{ height: 'auto', width: 'auto' }}
      />
    </article>
  )
}

export function PreviewCarSection() {
  return (
    <section className='w-full flex flex-col justify-center gap-y-5 lg:flex-row lg:justify-center lg:gap-x-5'>
      <Car />
      <Car />
    </section>
  )
}
