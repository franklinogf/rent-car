import { CarCard } from './PopularCarSection'
import { Button } from './ui/button'

export default function RecomendationSection() {
  return (
    <section className='mt-4 items-center'>
      <h2 className='px-10 font-semibold'>Recomendation Car</h2>
      <div className='mt-3 grid grid-cols-4 gap-x-5 px-10'>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <Button className='mx-auto block'>Show more Car</Button>
    </section>
  )
}
