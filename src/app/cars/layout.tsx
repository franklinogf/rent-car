import { Sidebar } from '@/components/Sidebar'

export default function CarsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='lg:flex h-full'>
      <Sidebar />
      <div className='w-full p-4'>{children}</div>
    </div>
  )
}
