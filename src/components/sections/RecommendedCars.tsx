import { cars } from "@/database/cars";
import { CarsGrid } from "@/components/CarsGrid";

export function RecommendedCars() {
  const recommendedCars = cars.slice(0, 8);
  return (
    <CarsGrid
      title='Recommended cars'
      href='/cars'
      cars={recommendedCars}
    />
  );
}
