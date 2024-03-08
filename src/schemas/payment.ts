import { z } from 'zod'

export const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  phoneNumber: z.string(),
  address: z.string(),
  city: z.string(),
  locationPickUp: z.string(),
  datePickUp: z.date(),
  timePickUp: z.string(),
  locationDropOff: z.string(),
  dateDropOff: z.date(),
  timeDropOff: z.string(),
  creditCardNumber: z.string().optional(),
  creditCardName: z.string().optional(),
  creditCardDate: z.string().optional(),
  creditCardCVC: z.string().optional(),
  marketing: z.boolean(),
  termsAndConditions: z.boolean()
})
export type PaymentFormType = z.infer<typeof formSchema>
