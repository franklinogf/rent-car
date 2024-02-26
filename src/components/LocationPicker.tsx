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

export function PickerSelect({
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
export function Picker({ title }: { title: string }) {
  return (
    <Card className='w-full'>
      <CardHeader className='px-4 py-2'>
        <CardTitle className='text-sm text-black'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex gap-2 px-4 pt-0 pb-3 w-full justify-around'>
        <PickerSelect
          title='Locations'
          placeholder='Select your city'
          items={['Brooklyn', 'Bronx', 'Queens']}
        />
        <PickerSelect
          title='Date'
          placeholder='Select your date'
          items={['Brooklyn', 'Bronx', 'Queens']}
        />
        <PickerSelect
          title='Time'
          placeholder='Select your time'
          items={['Brooklyn', 'Bronx', 'Queens']}
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
