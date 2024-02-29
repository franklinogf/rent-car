'use client'
import { FiltersProvider } from '@/context/filters'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <FiltersProvider>{children}</FiltersProvider>
}
