import { Button } from './ui/Button'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiSteeringWheel } from 'react-icons/gi'

export function CarCard() {
  return (
    <article className='w-[304px] h-[388px] bg-[#c1d4df] relative bg-gradient-to-t from-white hover:bg-neutral-300'>
      <div className='flex justify-between font-bold text-xl'>
        <h3>Koenigsegg</h3>
        <CiHeart className='size-8' />
      </div>
      <p className='text-[#90A3BF]'>Sport</p>
      <Image
        className='m-auto py-16'
        alt='PopularCar'
        src='/cars/car3.png'
        width={232}
        height={72}
      />
      <div className='flex justify-evenly'>
        <p>
          <GiSteeringWheel />
          Manual
        </p>
        <p>
          <FaPeopleGroup />
          People
        </p>
      </div>
      <div className='grid grid-cols-2 m-3'>
        <p>$99.00/day</p>
        <Button>Rent Now</Button>
      </div>
    </article>
  )
}
export default function PopularSection() {
  return (
    <section>
      <CarCard />
    </section>
  )
}
