import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PeopleIcon, SteeringIcon } from "@/lib/Icons";
import { Button } from "@/components/ui/button";
import { FavoriteHeartButton } from "@/components/FavoriteHeartButton";
import { Car } from "@/types/cars";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
interface CarCardProps {
  car: Car;
}
export function CarCard({ car }: CarCardProps) {
  const { id, model, type, image, price, features } = car;

  return (
    <Card className='w-full xl:max-w-sm xl:place-self-center mt-2'>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle>{model}</CardTitle>
          <FavoriteHeartButton />
        </div>
        <CardDescription>{type}</CardDescription>
      </CardHeader>
      <CardContent className='px-0'>
        <div className='h-28 relative mb-2'>
          <div className='relative overflow-hidden h-20 w-48 mx-auto px-10'>
            <Image
              alt={model}
              src={image}
              fill
            />
          </div>
          <div className='h-28 z-10 absolute inset-0 bg-gradient-to-t from-white  to-65%'></div>
        </div>
        <div className='flex justify-evenly'>
          {features.map(({ type, value }) => {
            return (
              <span
                key={type}
                className='flex justify-evenly items-center'
              >
                {type === "Gear" ? <SteeringIcon /> : <PeopleIcon />}
                {value}
              </span>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className='flex flex-col space-y-2'>
        <span>
          <span className='font-semibold'>{formatCurrency(price)}</span>/day
        </span>
        <Button asChild>
          <Link href={`/cars/${id}`}>Rent Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
