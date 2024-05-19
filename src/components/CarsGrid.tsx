import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Car } from "@/types/cars";
import { CarCard } from "./CarCard";
interface CarsGridProps {
  title?: string;
  href?: string;
  cars: Car[];
}
export function CarsGrid({ title, href, cars }: CarsGridProps) {
  return (
    <section>
      {title || href ? (
        <div className='flex justify-between items-center w-full'>
          {title && <h2 className='font-semibold'>{title}</h2>}
          {href && (
            <Button
              variant='outline'
              className='text-primary ml-auto'
              asChild
            >
              <Link href={href}>View All</Link>
            </Button>
          )}
        </div>
      ) : null}
      <div className='grid md:grid-cols-2 md:gap-x-5 xl:grid-cols-4'>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </section>
  );
}
