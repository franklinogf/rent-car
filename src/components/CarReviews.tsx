import BoxComment from './BoxComments'
import PopularSection from './PopularCarSection'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

export function CarReviews() {
  return (
    <section className='w-full'>
      <Card>
        <CardHeader className='flex flex-row space-y-0'>
          <h3 className='font-bold text-md text-xl'>Reviews</h3>
          <span className='rounded-[10%] px-3 py-1 bg-primary text-white ml-2 text-xs flex items-center'>
            13
          </span>
        </CardHeader>

        <CardContent className='space-y-4'>
          <BoxComment
            name='Franklin Omar Gonzalez'
            rating={1}
          />
          <BoxComment
            name='Darwin Zacarias'
            rating={2}
          />
          <BoxComment
            name='Alam'
            rating={4}
          />
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button
            variant={'outline'}
            className='hover:bg-primary hover:text-white'
          >
            Show All
          </Button>
        </CardFooter>
      </Card>
      <PopularSection />
    </section>
  )
}
