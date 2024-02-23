import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { FaHeart } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'

export default function Header() {
  return (
    <header className='bg-white w-full flex justify-between items-center px-4 shadow py-4'>
      <h1 className='text-primary font-bold'>Rent Car</h1>
      <Input
        className='w-56 rounded-full'
        placeholder='Search something here...'
      />
      <nav className='flex justify-evenly items-center gap-4'>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full'
        >
          <FaHeart className='size-4' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full'
        >
          <IoSettingsSharp className='size-5' />
        </Button>
        <Avatar>
          <AvatarImage />
          <AvatarFallback className='bg-primary/50'>FG</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  )
}
