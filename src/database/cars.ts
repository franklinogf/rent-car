import { type Car } from '@/types/cars'

export const cars: Car[] = [
  {
    id:1,
    brand: 'Lamborghini',
    model: 'Koenigsegg',
    type: 'Sport',
    image: '/cars/car2.png',
    price: 99,
    features: [
      {
        type: 'Gear',
        value: 'Manual'
      },
      {
        type: 'Person',
        value: 2
      }
    ]
  },
  {
    id:2,
    brand: 'Toyota',
    model: 'RAV-4',
    type: 'SUV',
    image: '/cars/car1.png',
    price: 30,
    features: [
      {
        type: 'Gear',
        value: 'Automatic'
      },
      {
        type: 'Person',
        value: 5
      }
    ]
  }
]
