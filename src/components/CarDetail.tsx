import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FavoriteHeartButton } from '@/components/FavoriteHeartButton'
import { Button } from '@/components/ui/button'
import { Car } from '@/types/cars'

export function CarRating({
  rating,
  withReviews = true
}: {
  rating: number
  withReviews?: boolean
}) {
  const filledStars = Math.floor(rating)
  const isDecimalFilledStars = rating - filledStars > 0
  const emptyStars = isDecimalFilledStars ? 5 - filledStars - 1 : 5 - filledStars
  const fill = Math.round((rating - filledStars) * 100)
  const empty = 100 - fill

  return (
    <span className='flex items-center gap-x-1'>
      {Array(filledStars)
        .fill(null)
        .map((r, index) => (
          <svg
            key={index}
            className='size-4 text-secondary'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
        ))}
      {isDecimalFilledStars && (
        <svg
          className='size-4'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 22 20'
        >
          <defs>
            <linearGradient id='grad'>
              <stop
                offset={`${fill}%`}
                style={{ stopColor: 'hsl(var(--secondary))' }}
              />
              <stop
                offset={`${empty}%`}
                style={{ stopColor: '#d1d5db' }}
              />
            </linearGradient>
          </defs>
          <path
            fill='url(#grad)'
            d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z'
          />
        </svg>
      )}
      {Array(emptyStars)
        .fill(null)
        .map((r, index) => (
          <svg
            key={index}
            className='size-4 text-gray-300'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 22 20'
          >
            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
          </svg>
        ))}
      {withReviews && <span className='ms-1 text-sm font-medium text-gray-500'>0 Reviews</span>}
    </span>
  )
}
export function CarDetail({ car }: { car: Car }) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle>{car.model}</CardTitle>
          <FavoriteHeartButton />
        </div>
        <CardDescription>
          <CarRating rating={3.1} />
        </CardDescription>
      </CardHeader>
      <CardContent className='text-gray-500 space-y-8'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni deleniti minima!
          Natus itaque, harum quia, incidunt, exercitationem explicabo blanditiis commodi nihil
          dolorum dolor delectus temporibus.
        </p>
        <div className='grid grid-cols-2'>
          {car.features.map((feature) => (
            <div
              key={feature.type}
              className='flex gap-4 justify-center'
            >
              <span>{feature.type}</span>
              <span className='font-semibold text-gray-600'>{feature.value}</span>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <span className='text-black font-bold text-xl'>${car.price.toFixed(2)}/ </span>
            <span className='text-sm'>day</span>
          </div>
          <div>
            <Button>Rent Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
