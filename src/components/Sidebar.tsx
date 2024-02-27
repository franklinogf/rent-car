import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { cars } from '@/database/cars'

const carsTypes = [...new Set(cars.map((car) => car.type))]
const carsCapacity = [
  ...new Set(cars.map((car) => car.features.find((f) => f.type === 'Person')?.value + ' Persons'))
]

export function Sidebar() {
  return (
    <aside className='hidden lg:block flex-grow-0 w-full bg-white border-r-2 border-t-2 px-4 py-2 max-w-56 '>
      <SidebarMenu />
    </aside>
  )
}

export function SidebarMenu() {
  return (
    <div className='space-y-8 mt-5'>
      <SidebarMenuSection
        title='Type'
        items={carsTypes}
      />
      <SidebarMenuSection
        title='Capacity'
        items={carsCapacity}
      />
      <SidebarSection title='Price'>
        <Slider
          defaultValue={[30]}
          max={100}
          step={1}
        />
        <span className='text-sm font-semibold text-gray-700/90 mt-4 block'>Max. $100.00</span>
      </SidebarSection>
    </div>
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

export function SidebarMenuSection({ title, items }: { title: string; items: string[] }) {
  return (
    <SidebarSection title={title}>
      <div className='space-y-4'>
        {items.map((item, index) => {
          return (
            <div
              key={`${title}_${index}`}
              className='flex items-center space-x-2'
            >
              <Checkbox id={`${title}_${index}`} />
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
