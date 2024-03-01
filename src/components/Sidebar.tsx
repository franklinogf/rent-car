'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { cars } from '@/database/cars'
import { useFilters } from '@/hooks/useFilters'
import { CarType } from '@/types/cars'
import { Filters } from '@/types/filters'

const carsTypes = [...new Set(cars.map((car) => car.type))]
const carsCapacity = [
  ...new Set(cars.map((car) => car.features.find((f) => f.type === 'Person')?.value) as number[])
]

export function Sidebar() {
  const { setFilters, filters } = useFilters()
  function handleChangePrice(newPrice: number[]) {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        price: newPrice
      }
    })
  }
  return (
    <aside className='hidden lg:block flex-grow-0 w-full bg-white border-r-2 border-t-2 px-4 py-2 max-w-56 '>
      <div className='space-y-8 mt-5'>
        <SidebarMenuSection
          title='type'
          items={carsTypes}
        />
        <SidebarMenuSection
          title='capacity'
          items={carsCapacity}
        />
        <SidebarSection title='price'>
          <Slider
            onValueChange={handleChangePrice}
            value={filters.price}
            max={100}
            min={10}
            step={1}
          />

          <span className='text-sm font-semibold text-gray-700/90 mt-4 block'>
            Max. ${filters.price[0]}
          </span>
        </SidebarSection>
      </div>
    </aside>
  )
}

export function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='space-y-4'>
      <h4 className='uppercase text-gray-500 font-medium text-xs'>{title}</h4>
      {children}
    </div>
  )
}

export function SidebarMenuSection({
  title,
  items
}: {
  title: keyof Exclude<Filters, 'price'>
  items: number[] | CarType[]
}) {
  const { setFilters, filters } = useFilters()
  const handleChange = (type: keyof Exclude<Filters, 'price'>, value: any) => {
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
                checked={filters[title].find((t) => t === item) ? true : false}
                onClick={() => handleChange(title, item)}
                id={`${title}_${index}`}
              />

              <Label
                htmlFor={`${title}_${index}`}
                className='text-gray-700/90 cursor-pointer'
              >
                {item} {title === 'capacity' && 'Person'}
              </Label>
            </div>
          )
        })}
      </div>
    </SidebarSection>
  )
}
