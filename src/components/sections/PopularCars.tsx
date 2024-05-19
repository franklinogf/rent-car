import { cars } from "@/database/cars";
import { CarsGrid } from "@/components/CarsGrid";

export function PopularCars() {
  const popularCars = cars.sort(() => Math.random() - 0.5).slice(0, 4);
  return (
    <CarsGrid
      title='Popular cars'
      href='/cars'
      cars={popularCars}
    />
  );
}
