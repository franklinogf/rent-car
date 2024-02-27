import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CarRating } from '@/components/CarDetail'

export default function BoxComment({ rating, name }: { rating: number; name: string }) {
  const [firstName, secondName] = name.split(' ')
  let initials = firstName.charAt(0)
  if (secondName) {
    initials += secondName.charAt(0)
  }
  return (
    <article className='w-full flex gap-x-5'>
      <div>
        <Avatar>
          <AvatarImage />
          <AvatarFallback className='bg-primary/50'>{initials}</AvatarFallback>
        </Avatar>
      </div>
      <div className='grid space-y-4'>
        <div className='flex justify-between items-center w-full'>
          <div className='grid'>
            <h5 className='font-bold text-xl'>{name}</h5>
            <h6 className='text-gray-500 text-xs'>CEO at Bukalapak</h6>
          </div>
          <div className='grid'>
            <span>{new Date().toDateString()}</span>
            <CarRating
              rating={rating}
              withReviews={false}
            />
          </div>
        </div>
        <div>
          <p className='text-pretty'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam adipisci, ab
            praesentium odio a inventore aliquam doloribus temporibus consectetur nemo, maiores
            laborum nobis fugit molestiae autem quia? Maiores, ab ipsa!
          </p>
        </div>
      </div>
    </article>
  )
}
