import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import Image from 'next/image'

export function Car() {
  return (
    <article className='bg-[#54A6FF] w-[640px] h-[360px] text-white relative mx-auto p-4'>
      <div className='grid grid-cols w-80 gap-5'>
        <h2 className='font-bold text-2xl'>The Best Platform for Car Rental</h2>
        <p className='font-light text-base'>
          Ease of doing a carretal safety and rellably. Of course at low price.
        </p>
        <Button className='w-32 text-base'>Rental Car</Button>
      </div>
      <Image
        className='bottom-0 left-36 absolute'
        alt='previewCar1'
        src='/cars/car2.png'
        width={320}
        height={116}
      />
    </article>
  )
}

export default function PreviewCar({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        'w-full flex flex-col justify-center gap-y-5 xl:flex-row lg:justify-evenly',
        className
      )}
    >
      <Car />
      <Car />
    </section>
  )
}
