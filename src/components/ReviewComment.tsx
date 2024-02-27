import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CarRating } from '@/components/CarDetail'
import { CarComment } from '@/types/cars'

export function ReviewComment({ rating, name, body, date }: CarComment) {
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
      <div className='grid space-y-4 w-full'>
        <div className='flex justify-between items-center w-full'>
          <div className='grid'>
            <h5 className='font-bold text-xl'>{name}</h5>
          </div>
          <div className='grid'>
            <span>{date}</span>
            <CarRating
              rating={rating}
              withReviews={false}
            />
          </div>
        </div>
        <div>
          <p className='text-pretty'>{body}</p>
        </div>
      </div>
    </article>
  )
}
