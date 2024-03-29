import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/Header'
import clsx from 'clsx'
import { Footer } from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rent Car',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'bg-slate-100/60')}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
