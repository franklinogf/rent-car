
export type CarType = 'Sport' | 'SUV' 

export interface CarFeature{
    type:string
    value:string | number
}

export interface Car{
    id:number
    model:string
    brand:string
    type:CarType
    image:string
    features:CarFeature[]
    price:number
}