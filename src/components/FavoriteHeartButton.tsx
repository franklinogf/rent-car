'use client'
import { Button } from '@/components/ui/button'
import { HeartIcon } from '@/lib/Icons'
import { useState } from 'react'

export function FavoriteHeartButton() {
  const [favorited, setFavorited] = useState(false)
  const isFavorited = favorited ? 'stroke-0 fill-red-500' : 'stroke-1 fill-none'
  return (
    <Button
      onClick={() => setFavorited(!favorited)}
      variant='ghost'
      className='rounded-full p-2'
    >
      <HeartIcon className={isFavorited} />
    </Button>
  )
}
