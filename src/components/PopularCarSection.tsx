import { Button } from './ui/Button'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiSteeringWheel } from 'react-icons/gi'

export function CarCard() {
  return (
    <article className='w-[304px] bg-[#c1d4df] px-2 py-5'>
      <div className='flex justify-between font-bold text-xl'>
        <h3>Koenigsegg</h3>
        <CiHeart className='size-8' />
      </div>
      <span className='text-[#90A3BF]'>Sport</span>
      <Image
        className='m-auto py-16'
        alt='PopularCar'
        src='/cars/car3.png'
        width={232}
        height={72}
      />
      <div className='flex justify-evenly'>
        <span className='flex justify-evenly items-center'>
          <GiSteeringWheel className='mr-1' />
          Manual
        </span>
        <span className='flex justify-evenly items-center '>
          <FaPeopleGroup className='mr-1' />
          People
        </span>
      </div>
      <div className='grid grid-cols-2 m-3 items-center'>
        <span>$99.00/day</span>
        <Button>Rent Now</Button>
      </div>
    </article>
  )
}
export default function PopularSection() {
  return (
    <section className='ml-56 mb-56'>
      <CarCard />
    </section>
  )
}
