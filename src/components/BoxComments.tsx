'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { CarRating } from './CarDetail'

export default function BoxComment() {
  return (
    <section className='w-full'>
      <div className=''>
        <span className='font-bold text-md'>Reviews</span>
        <span className='rounded-[10%] px-3 py-1 bg-primary text-white mx-2 text-xs'>
          13
        </span>
      </div>
      <div className='my-5'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <Avatar>
              <AvatarImage />
              <AvatarFallback className='bg-primary/50'>FG</AvatarFallback>
            </Avatar>
            <div className='grid grid-col px-5'>
              <span className='font-bold text-xl my-2'>Alex Stanton</span>
              <span className='text-gray-500 text-xs'>CEO at Bukalapak</span>
            </div>
          </div>
          <div className='grid grid-col'>
            <span>DATE</span>
            <CarRating rating={4} />
          </div>
        </div>
        <div className='my-5'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni
            nobis optio, quod nemo voluptatibus facere molestiae explicabo
            commodi odit, eum architecto sunt nam ipsum repudiandae doloribus
            illo officia veniam!
          </span>
        </div>
      </div>
    </section>
  )
}
