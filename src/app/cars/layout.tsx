import { Sidebar } from '@/components/Sidebar'

export default function CarsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='lg:flex h-full'>
      <Sidebar />
      <div className='px-5 py-2 w-full'>{children}</div>
    </div>
  )
}
