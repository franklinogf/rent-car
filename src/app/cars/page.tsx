"use client";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/Sidebar";
import { cars } from "@/database/cars";
import { useFilters } from "@/hooks/useFilters";
import { CarsGrid } from "@/components/CarsGrid";

export default function Page() {
  const { filterCars } = useFilters();
  const filteredCars = filterCars(cars);

  return (
    <div className='lg:flex h-full'>
      <Sidebar />
      <div className='w-full p-4'>
        <CarsGrid cars={filteredCars} />
        <Button className='mx-auto block mt-4'>Show more Cars</Button>
      </div>
    </div>
  );
}
