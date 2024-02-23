import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function PreviewCar() {
  return (
    <>
      <section className='bg-[#54A6FF] w-[640px] h-[360px] text-white rounded'>
        <div className='grid grid-cols w-80 p-3 gap-5'>
          <h2 className='font-bold text-2xl'>
            The Best Platform for Car Rental
          </h2>
          <p className='font-light text-base'>
            Ease of doing a carretal safety and rellably. Of course at low
            price.
          </p>
          <Button
            variant='outline'
            className='rounded text-center w-32 py-5 text-base'
          >
            Rental Car
          </Button>
        </div>
        <div className='flex justify-center'>
          <Image
            alt='previewCar1'
            src='/cars/car1.png'
            width={320}
            height={116}
          />
        </div>
      </section>
    </>
  )
}
