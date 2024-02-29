'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ArrowsLeftRight, ArrowsUpDown } from '@/lib/Icons'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChangeEvent, useState } from 'react'
import { cn } from '@/lib/utils'
import { Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
export function PickerCity({
  title,
  placeholder,
  items
}: {
  title: string
  placeholder: string
  items: string[]
}) {
  return (
    <div>
      <span className='font-semibold text-xs mb-2'>{title}</span>
      <Select>
        <SelectTrigger className='text-xs text-gray-400 border-none h-6 p-0'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem
              key={`${item}${index}`}
              value={item}
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function PickerTime({ title, placeholder }: { title: string; placeholder: string }) {
  const [time, setTime] = useState<string>('')

  function handleTimeChange(e: ChangeEvent) {
    const input = e.target as HTMLInputElement
    const date = new Date()
    const [hours, minutes] = input.value.split(':')
    date.setHours(Number(hours))
    date.setMinutes(Number(minutes))
    setTime(format(date, 'HH:mm'))
  }
  return (
    <div className='grid place-content-center'>
      <span className='font-semibold text-xs'>{title}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'justify-start text-left font-normal text-xs text-gray-400 border-none h-6 px-4 w-full',
              time === '' && 'text-muted-foreground'
            )}
          >
            {time !== '' ? time : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <input
            value={time}
            onChange={handleTimeChange}
            type='time'
            placeholder='Select your time'
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function Picker({ title }: { title: string }) {
  return (
    <Card className='w-full'>
      <CardHeader className='px-4 py-2'>
        <CardTitle className='text-sm text-black'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex gap-2 px-4 pt-0 pb-3 w-full justify-around'>
        <PickerCity
          title='Locations'
          placeholder='Select your city'
          items={['Brooklyn', 'Bronx', 'Queens']}
        />
        <PickerDate
          title='Date'
          placeholder='Select your date'
        />
        <PickerTime
          title='Time'
          placeholder='Select your time'
        />
      </CardContent>
    </Card>
  )
}

export function LocationPicker() {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2 w-full max-w-4xl lg:flex-row lg:gap-x-8 lg:relative '>
      <Picker title='Pick-Up' />
      <Button className='lg:absolute lg:top-auto shadow-lg rounded-[5%]'>
        <ArrowsLeftRight className='text-white size-5 stroke-2 hidden lg:inline-block' />
        <ArrowsUpDown className='text-white size-5 stroke-2 lg:hidden' />
      </Button>
      <Picker title='Drop-Off' />
    </div>
  )
}

export function PickerDate({ title, placeholder }: { title: string; placeholder: string }) {
  const [date, setDate] = useState<Date>()

  return (
    <div className='grid place-content-center'>
      <span className='font-semibold text-xs'>{title}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'justify-start text-left font-normal text-xs text-gray-400 border-none h-6 px-2',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 size-4' />
            {date ? format(date, 'P') : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
            fromDate={new Date()}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
