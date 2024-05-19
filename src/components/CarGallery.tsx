import Image from "next/image";

export function CarGallery() {
  return (
    <div className='flex flex-col gap-y-2 '>
      <div>
        <Image
          width={640}
          height={360}
          className='h-auto w-full max-w-full'
          src='/images/bg1.png'
          alt=''
        />
      </div>
      <div className='flex gap-x-2'>
        <div>
          <Image
            width={640}
            height={360}
            className='h-auto max-w-full'
            src='/images/bg1.png'
            alt=''
          />
        </div>
        <div>
          <Image
            width={640}
            height={360}
            className='h-auto max-w-full'
            src='/images/bg1.png'
            alt=''
          />
        </div>
        <div>
          <Image
            width={640}
            height={360}
            className='h-auto max-w-full'
            src='/images/bg1.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
