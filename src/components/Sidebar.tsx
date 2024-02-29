'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { cars } from '@/database/cars'
import { Car, CarFeaturePerson } from '@/types/cars'
import { useState } from 'react'

const carsTypes = [...new Set(cars.map((car) => car.type))]
const carsCapacity = [
  ...new Set(cars.map((car) => car.features.find((f) => f.type === 'Person')?.value + ' Persons'))
]

interface Filters {
  type: typeof carsTypes
  capacity: CarFeaturePerson['value'][]
  price: Car['price'][]
}
export function Sidebar() {
  const [filters, setFilters] = useState<Filters>({
    type: [],
    capacity: [],
    price: [100]
  })

  function handleChangePrice(price: number[]) {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        price
      }
    })
  }
  const handleChangeChecked = (type: Exclude<keyof Filters, 'price'>) => (e: Event) => {
    if (e.target) {
      const value = (e.target as HTMLButtonElement).value
      setFilters((prevFilters) => {
        const filterExists = prevFilters[type].find((f) => f === value)
        const newFilters = filterExists
          ? prevFilters[type].filter((f) => f !== value)
          : [...prevFilters[type], value]

        return {
          ...prevFilters,
          [type]: newFilters
        }
      })
    }
  }

  return (
    <aside className='hidden lg:block flex-grow-0 w-full bg-white border-r-2 border-t-2 px-4 py-2 max-w-56 '>
      <div className='space-y-8 mt-5'>
        <SidebarMenuSection
          title='type'
          items={carsTypes}
          onChecked={handleChangeChecked}
          filters={filters}
        />
        <SidebarMenuSection
          onChecked={handleChangeChecked}
          filters={filters}
          title='capacity'
          items={carsCapacity}
        />
        <SidebarSection title='price'>
          <Slider
            onValueChange={handleChangePrice}
            value={filters.price}
            max={100}
            step={1}
          />
          ${filters.price}
          <span className='text-sm font-semibold text-gray-700/90 mt-4 block'>Max. $100.00</span>
        </SidebarSection>
      </div>
    </aside>
  )
}

export function SidebarSection({
  title,
  children
}: {
  title: keyof Filters
  children: React.ReactNode
}) {
  return (
    <div className='space-y-4'>
      <h4 className='uppercase text-gray-500 font-medium text-xs'>{title}</h4>
      {children}
    </div>
  )
}

export function SidebarMenuSection({
  title,
  items,
  onChecked,
  filters
}: {
  title: Exclude<keyof Filters, 'price'>
  items: string[]
  onChecked: any
  filters: Filters
}) {
  return (
    <SidebarSection title={title}>
      <div className='space-y-4'>
        {items.map((item, index) => {
          return (
            <div
              key={`${title}_${index}`}
              className='flex items-center space-x-2'
            >
              <Checkbox
                checked={filters[title].find((f) => f === item) ? true : false}
                onClick={onChecked(title)}
                value={item}
                id={`${title}_${index}`}
              />
              <Label
                htmlFor={`${title}_${index}`}
                className='text-gray-700/90 cursor-pointer'
              >
                {item}
              </Label>
            </div>
          )
        })}
      </div>
    </SidebarSection>
  )
}
