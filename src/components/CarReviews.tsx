import { ReviewComment } from './ReviewComment'
import { PopularCars } from '@/components/sections/PopularCars'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { type Car } from '@/types/cars'
import { Alert, AlertTitle } from './ui/alert'

export function CarReviews({ comments }: { comments?: Car['comments'] }) {
  return (
    <section className='w-full'>
      <Card>
        {comments && (
          <CardHeader className='flex flex-row space-y-0'>
            <h3 className='font-bold text-md text-xl'>Reviews</h3>
            <span className='rounded-[10%] px-3 py-1 bg-primary text-white ml-2 text-xs flex items-center'>
              {comments.length}
            </span>
          </CardHeader>
        )}

        <CardContent className='space-y-4'>
          {comments ? (
            comments.map((comment) => (
              <ReviewComment
                key={comment.id}
                {...comment}
              />
            ))
          ) : (
            <Alert className='mt-5 border-secondary'>
              <AlertTitle className='text-center text-bold text-xl'>No comments yet</AlertTitle>
            </Alert>
          )}
        </CardContent>

        {comments && (
          <CardFooter className='flex justify-center'>
            <Button
              variant='outline'
              className='hover:bg-primary hover:text-white'
            >
              Show All
            </Button>
          </CardFooter>
        )}
      </Card>
      <PopularCars />
    </section>
  )
}
