import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
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
      <span className='font-semibold mb-2'>{title}</span>
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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex gap-2'>
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
    <div className='flex justify-center items-center'>
      <Picker title='Pick-Up' />
      <Button>S</Button>
      <Picker title='Drop-Off' />
    </div>
  )
}
