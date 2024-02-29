import { createContext } from 'react'

interface CarsFilters {
  type: string[]
  capacity: string[]
  price: number[]
  handleChangePrice?: (price: number[]) => void
}

export const CarsContext = createContext<CarsFilters | null>(null)
