import { type CarTypeName } from "./carsType"

export interface CarFeature{
    type:string
    value:string | number
}

export interface Car{
    id:number
    model:string
    brand:string
    type:CarTypeName
    image:string
    features:CarFeature[]
    price:number
}