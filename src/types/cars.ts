type NonEmptyArray<T> = [T, ...T[]]

type CarType = 'Sport' | 'SUV' | 'MPV' | 'Sedan' | 'Coupe' | 'Hatchback'
type CarFeaturePerson = {
  type: Capitalize<'Person'>
  value: number
}
type CarFeatureGear = {
  type: Capitalize<'Gear'>
  value: Capitalize<'Automatic' | 'Manual'>
}
export type CarFeature = CarFeaturePerson | CarFeatureGear

export type CarComment = {
  readonly id: number
  name: string
  date: string
  rating: number
  body: string
  image_url?: string
}

export interface Car {
  readonly id: number
  model: Capitalize<string>
  brand: Capitalize<string>
  type: Capitalize<CarType>
  image: string
  description: string
  features: NonEmptyArray<CarFeature>
  price: number
  comments?: CarComment[]
  rating?: number
}
