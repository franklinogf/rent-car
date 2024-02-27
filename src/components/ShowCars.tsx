import { CarCard } from '@/components/CarCard'
import { type Car } from '@/types/cars'
import { Button } from '@/components/ui/button'

export function ShowCars({ cars, title, link }: { cars: Car[]; title?: string; link?: string }) {
  return (
    <div>
      {title || link ? (
        <ViewAll
          title={title}
          link={link}
        />
      ) : null}
      <div className='grid md:grid-cols-2 md:gap-x-5 xl:grid-cols-4'>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            {...car}
          />
        ))}
      </div>
    </div>
  )
}

export function ViewAll({ title, link }: { title?: string; link?: string }) {
  return (
    <div className='flex justify-between items-center w-full'>
      {title && <h2 className='font-semibold'>{title}</h2>}
      {link && (
        <Button
          variant='outline'
          className='text-primary ml-auto'
        >
          View All
        </Button>
      )}
    </div>
  )
}
