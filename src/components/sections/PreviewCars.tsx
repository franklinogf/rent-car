import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { type VariantProps } from "class-variance-authority";

interface PreviewCarCardProps {
  background: string;
  title: string;
  description: string;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
}

export function PreviewCarCard({
  background,
  buttonVariant,
  title,
  description,
}: PreviewCarCardProps) {
  return (
    <article
      className='text-white relative p-4 w-full max-w-md h-[365px] bg-cover bg-no-repeat rounded-[10px]'
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className='grid grid-cols w-80 gap-5'>
        <h2 className='font-bold text-2xl max-w-60'>{title}</h2>
        <p className='font-light text-sm max-w-60'>{description}</p>
        <Button
          variant={buttonVariant}
          className='w-32 text-base'
        >
          Rent Car
        </Button>
      </div>
      <Image
        className='bottom-0 left-1/2 -translate-x-1/2 lg:-translate-x-1/3 absolute w-48 lg:w-56'
        alt='previewCar1'
        src='/cars/car4.png'
        width={250}
        height={100}
        // style={{ height: 'auto', width: 'auto' }}
      />
    </article>
  );
}

export function PreviewCars() {
  return (
    <section className='w-full flex flex-col justify-center gap-y-5 lg:flex-row lg:justify-center lg:gap-x-5 mx-auto place-items-center'>
      <PreviewCarCard
        title='The Best Platform for Car Rental'
        description='Ease of doing a carretal safety and rellably. Of course at low price.'
        background='/images/bg1.png'
      />
      <PreviewCarCard
        title='The Best Platform for Car Rental'
        description='Ease of doing a carretal safety and rellably. Of course at low price.'
        background='/images/bg2.png'
        buttonVariant='secondary'
      />
    </section>
  );
}
