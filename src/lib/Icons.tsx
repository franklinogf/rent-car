import clsx from 'clsx'

export function HeartIcon({ className }: { className: string }) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      className={clsx('size-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
      />
    </svg>
  )
}
export function PeopleIcon({ className }: { className: string }) {
  return (
    <svg
      className={clsx('size-6', className)}
      aria-hidden='true'
      fill='none'
      strokeWidth='1.5'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        fillRule='evenodd'
        d='M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
export function SteeringIcon({ className }: { className: string }) {
  return (
    <svg
      className={clsx('size-6', className)}
      fill='#000000'
      viewBox='0 0 256 256'
    >
      <path d='M128,152a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm104-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM40,128v.33a135.93,135.93,0,0,1,176,0V128a88,88,0,0,0-176,0Zm67.5,85.58L90.45,168H49.63A88.35,88.35,0,0,0,107.5,213.58ZM128,216c.83,0,1.66,0,2.49,0l20.07-53.57a16.07,16.07,0,0,1,15-10.39h47.12c.38-1.31.72-2.64,1-4a120,120,0,0,0-171.4,0c.31,1.34.65,2.67,1,4H90.45a16.08,16.08,0,0,1,15,10.4l20,53.56C126.31,216,127.15,216,128,216Zm78.37-48H165.55l-17.09,45.59A88.34,88.34,0,0,0,206.37,168Z'></path>
    </svg>
  )
}
