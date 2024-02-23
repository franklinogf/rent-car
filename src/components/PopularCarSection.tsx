import { Button } from '@/components/ui/button'
import { CarCard } from '@/components/CarCard'

export function ViewAll() {
  return (
    <div className='flex justify-between items-center px-10'>
      <h2 className=' font-semibold'>Popular Car</h2>
      <Button
        variant='outline'
        className='text-primary'
      >
        View All
      </Button>
    </div>
  )
}
export default function PopularSection() {
  return (
    <section className='mt-4'>
      <ViewAll />
      <div className='mt-3 grid grid-cols-4 gap-x-5 px-10'>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </section>
  )
}
