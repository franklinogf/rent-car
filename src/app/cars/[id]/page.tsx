import { cars } from "@/database/cars";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { CarGallery } from "@/components/CarGallery";
import { CarDetail } from "@/components/CarDetail";
import { CarReviews } from "@/components/CarReviews";
import { LocationPicker } from "@/components/LocationPicker";
import { PopularCars } from "@/components/sections/PopularCars";

export default function Page({ params }: { params: { id: string } }) {
  const car = cars.find((car) => car.id === Number(params.id));

  if (!car) {
    return (
      <div className='flex grow justify-center items-center'>
        <Alert
          variant='destructive'
          className='max-w-xl h-full'
        >
          <AlertDescription>This car doesn&apos;t exist</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className='space-y-5 w-full p-4'>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-2/6'>
          <CarGallery />
        </div>
        <div className='lg:w-4/6 space-y-4'>
          <LocationPicker />
          <CarDetail car={car} />
        </div>
      </div>
      <CarReviews comments={car.comments} />
      <PopularCars />
    </div>
  );
}
