import { Filters } from '@/types/filters'
import { Dispatch, SetStateAction, createContext, useState } from 'react'

interface FiltersContextType {
  filters: Filters
  setFilters: Dispatch<SetStateAction<Filters>>
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: { type: [], capacity: [], price: [100] },
  setFilters: () => {}
})

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    type: [],
    capacity: [],
    price: [100]
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  )
}
