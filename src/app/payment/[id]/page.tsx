'use client'
import { cars } from '@/database/cars'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { useEffect, useState } from 'react'
import { BitcoinLogo, MastercardLogo, PaypalLogo, SecurityLogo, VisaLogo } from '@/lib/Logos'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { TextInput } from '@/components/payment/inputs/TextInput'
import { usePaymentForm } from '@/hooks/usePaymentForm'
import { PaymentFormType } from '@/schemas/payment'
import { Step } from '@/components/payment/Step'
import { RentalSummary } from '@/components/payment/RentalSummary'
import { SelectInput } from '@/components/payment/inputs/SelectInput'
import { DateInput } from '@/components/payment/inputs/DateInput'

const TAX_FEE = 18 / 100
export default function Page({ params }: { params: { id: string } }) {
  const { form } = usePaymentForm()
  const car = cars.find((car) => car.id === Number(params.id))
  const [paymentTab, setPaymentTab] = useState('item-1')
  const [subtotal, setSubtotal] = useState(car?.price ?? 0)
  const [tax, setTax] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (!subtotal) {
      setTax(0)
      setTotalPrice(0)
      return
    }
    const totalTax = subtotal * TAX_FEE
    setTax(totalTax)
    setTotalPrice(totalTax + subtotal)
  }, [subtotal])

  function handleSumbit(data: PaymentFormType) {
    console.log(data)
  }

  if (!car) return <h1>No existe este carro</h1>

  return (
    <section className='p-4 flex flex-col lg:flex-row gap-4'>
      <div className='order-2 lg:order-1 lg:w-3/5'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSumbit)}
            className='space-y-6'
          >
            <Step
              title='Billing info'
              description='Please enter your billing info.'
              step={1}
            >
              <div className='grid grid-cols-2 gap-5'>
                <TextInput
                  title='Full name'
                  name='fullName'
                  control={form.control}
                />
                <TextInput
                  title='Phone number'
                  name='phoneNumber'
                  control={form.control}
                />
                <TextInput
                  title='Address'
                  name='address'
                  control={form.control}
                />
                <TextInput
                  title='City'
                  name='city'
                  control={form.control}
                />
              </div>
            </Step>
            <Step
              title='Rental info'
              description='Please select your rental date.'
              step={2}
            >
              <div className='space-y-8'>
                <article>
                  <h3 className='font-semibold text-lg mb-2'>Pick-Up</h3>
                  <div className='grid grid-cols-2 gap-5'>
                    <SelectInput
                      control={form.control}
                      items={['Brooklyn', 'Bronx', 'Queens']}
                      name='locationPickUp'
                      title='Location'
                      placeholder='Select a location for pick up'
                    />
                    <DateInput
                      control={form.control}
                      name='datePickUp'
                      title='Date'
                      placeholder='Pick a date'
                    />

                    <TextInput
                      control={form.control}
                      name='timePickUp'
                      title='Time'
                      type='time'
                    />
                  </div>
                </article>
                <article>
                  <h3 className='font-semibold text-lg mb-2'>Drop-Off</h3>
                  <div className='grid grid-cols-2 gap-5'>
                    <SelectInput
                      control={form.control}
                      items={['Brooklyn', 'Bronx', 'Queens']}
                      name='locationDropOff'
                      title='Location'
                      placeholder='Select a location for drop off'
                    />
                    <DateInput
                      control={form.control}
                      name='dateDropOff'
                      title='Date'
                      placeholder='Pick a date'
                    />

                    <TextInput
                      control={form.control}
                      name='timePickUp'
                      title='Time'
                      type='time'
                    />
                  </div>
                </article>
              </div>
            </Step>
            <Step
              title='Payment method'
              description='Please enter your payment method.'
              step={3}
            >
              <Accordion
                className='space-y-5'
                type='single'
                collapsible
                defaultValue='item-1'
                onValueChange={(value) => setPaymentTab(value)}
              >
                <AccordionItem
                  disabled={paymentTab === 'item-1'}
                  className='bg-slate-100'
                  value='item-1'
                >
                  <AccordionTrigger className='px-5'>
                    <div className='w-full flex justify-between pr-5'>
                      <span>Credit card</span>
                      <span className='flex items-center gap-x-2'>
                        <VisaLogo className='size-10' />
                        <MastercardLogo className='size-8' />
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='px-5'>
                    <div className='grid grid-cols-2 gap-5'>
                      <FormField
                        control={form.control}
                        name='creditCardNumber'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card number</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='creditCardDate'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiration date</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='creditCardName'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card holder</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='creditCardCVC'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVC</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  className='bg-slate-100'
                  value='item-2'
                  disabled={paymentTab === 'item-2'}
                >
                  <AccordionTrigger className='px-5'>
                    <div className='w-full flex justify-between pr-5'>
                      <span>Paypal</span>
                      <span>
                        <PaypalLogo className='w-16' />
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='px-5'>
                    <div className='flex justify-center'>
                      <Button>Pay with paypal</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  className='bg-slate-100'
                  value='item-3'
                  disabled={paymentTab === 'item-3'}
                >
                  <AccordionTrigger className='px-5'>
                    <div className='w-full flex justify-between pr-5'>
                      <span>Bitcoin</span>
                      <span>
                        <BitcoinLogo className='w-16' />
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='px-5'>
                    <div className='flex justify-center'>
                      <Button variant='secondary'>Pay with bitcoin</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Step>
            <Step
              title='Confirmation'
              description='We are getting to the end. Just fews more clicks and your rental is ready.'
              step={4}
            >
              <div className='space-y-8 mt-4'>
                <FormField
                  control={form.control}
                  name='marketing'
                  render={({ field }) => (
                    <FormItem className='bg-slate-100 p-5'>
                      <div className='flex gap-4'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>I agree with sending Marketing and newsletter emails.</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='termsAndConditions'
                  render={({ field }) => (
                    <FormItem className='bg-slate-100 p-5'>
                      <div className='flex gap-4'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>
                          I agree with our terms and conditions and privacy policy.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit'>Rent Now</Button>
                <div className='flex flex-col gap-y-2'>
                  <span>
                    <SecurityLogo />
                  </span>
                  <span className='font-semibold'>All your data are safe</span>
                  <span className='text-sm text-muted-foreground'>
                    We are using the most advanced security to provide you the best experience ever.
                  </span>
                </div>
              </div>
            </Step>
          </form>
        </Form>
      </div>
      <div className='order-1 lg:order-2 lg:w-2/5'>
        <div className='lg:sticky lg:top-5'>
          <RentalSummary
            image={car.image}
            model={car.model}
            tax={tax}
            subtotal={subtotal}
            total={totalPrice}
          />
        </div>
      </div>
    </section>
  )
}
