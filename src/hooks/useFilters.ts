import { FiltersContext } from '@/context/filters'
import { Car } from '@/types/cars'
import { useContext } from 'react'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  function filterCars(cars: Car[]) {
    return cars.filter((car) => {
      return (
        car.price <= filters.price[0] &&
        (filters.type.length === 0 || filters.type.includes(car.type)) &&
        (filters.capacity.length === 0 ||
          filters.capacity.includes(
            car.features.find((feature) => feature.type === 'Person')?.value as number
          ))
      )
    })
  }
  return { filterCars, setFilters, filters }
}
