import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { HeartIcon } from '@/lib/Icons'

export default function Header() {
  return (
    <header className='bg-white w-full flex justify-between items-center px-4 shadow py-4'>
      <nav>
        <Button
          variant='ghost'
          asChild
          className='text-primary font-bold'
        >
          <Link href='/'>
            <Logo />
          </Link>
        </Button>
      </nav>
      <nav className='flex justify-evenly items-center gap-4'>
        <Button
          variant='ghost'
          asChild
        >
          <Link href='/cars'>All Cars</Link>
        </Button>
      </nav>
      <nav className='flex justify-evenly items-center gap-4'>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full'
        >
          <HeartIcon />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full'
        >
          <HeartIcon />
        </Button>
        <Avatar>
          <AvatarImage />
          <AvatarFallback className='bg-primary/50'>FG</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  )
}
