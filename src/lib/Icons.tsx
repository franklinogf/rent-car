import clsx from 'clsx'

interface IconClassName {
  className?: string
}

export function HeartIcon({ className }: IconClassName) {
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
export function PeopleIcon({ className }: IconClassName) {
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
export function SteeringIcon({ className }: IconClassName) {
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

export function ArrowsUpDown({ className }: IconClassName) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1}
      stroke='currentColor'
      className={clsx('size-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
      />
    </svg>
  )
}

export function SettingsIcon({ className }: IconClassName) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={clsx('size-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  )
}

export function MenuIcon({ className }: IconClassName) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={clsx('size-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  )
}
