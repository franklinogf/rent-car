import { PaymentFormType, formSchema } from '@/schemas/payment'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function usePaymentForm() {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  const form = useForm<PaymentFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      datePickUp: today,
      dateDropOff: tomorrow
    }
  })

  return { form }
}
