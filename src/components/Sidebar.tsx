import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
const carsTypes = [
  'Sport (10)',
  'SUV (12)',
  'MPV (16)',
  'Sedan (20)',
  'Coupe (14)',
  'Hatchback (15)'
]
const carsCapacity = ['2 Person (10)', '4 Person (14)', '6 Person (12)', '8 or More (16)']
export function Sidebar() {
  return (
    <aside className='-translate-x-64 lg:translate-x-0 w-64 bg-white border-2 h-full px-4 py-2'>
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
