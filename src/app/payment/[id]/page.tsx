'use client'
import { cars } from '@/database/cars'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CarRating } from '@/components/CarDetail'
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

const formSchema = z.object({
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
const TAX_FEE = 18 / 100
export default function Page({ params }: { params: { id: string } }) {
  const car = cars.find((car) => car.id === Number(params.id))
  const [paymentTab, setPaymentTab] = useState('item-1')
  const [totalPrice, setTotalPrice] = useState(car?.price)
  const [tax, setTax] = useState(0)
  const [subtotal, setSubtotal] = useState(car?.price)

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

  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      datePickUp: today,
      dateDropOff: tomorrow
    }
  })

  function handleSumbit(data: z.infer<typeof formSchema>) {
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
            <Card>
              <CardHeader>
                <CardTitle>Billing info</CardTitle>
                <CardDescription className='flex justify-between'>
                  <span>Please enter your billing info</span>
                  <span className='text-xs'>Step 1 of 4</span>
                </CardDescription>
              </CardHeader>
              <CardContent className='grid grid-cols-2 gap-5'>
                <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rental info</CardTitle>
                <CardDescription className='flex justify-between'>
                  <span>Please select your rental date</span>
                  <span className='text-xs'>Step 2 of 4</span>
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-8'>
                <article>
                  <h3 className='font-semibold text-lg mb-2'>Pick-Up</h3>
                  <div className='grid grid-cols-2 gap-5'>
                    <FormField
                      control={form.control}
                      name='locationPickUp'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select a location for pick up' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {['Brooklyn', 'Bronx', 'Queens'].map((item) => (
                                <SelectItem
                                  key={item}
                                  value={item}
                                >
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='datePickUp'
                      render={({ field }) => (
                        <FormItem className='flex flex-col justify-end'>
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'w-[240px] pl-3 text-left font-normal ',
                                    !field.value && 'text-muted-foreground'
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'PPP')
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className='w-auto p-0'
                              align='start'
                            >
                              <Calendar
                                mode='single'
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='timePickUp'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </article>
                <article>
                  <h3 className='font-semibold text-lg mb-2'>Drop-Off</h3>
                  <div className='grid grid-cols-2 gap-5'>
                    <FormField
                      control={form.control}
                      name='locationDropOff'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select a location for drop off' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {['Brooklyn', 'Bronx', 'Queens'].map((item) => (
                                <SelectItem
                                  key={item}
                                  value={item}
                                >
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='dateDropOff'
                      render={({ field }) => (
                        <FormItem className='flex flex-col justify-end'>
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'w-[240px] pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground'
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'PPP')
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className='w-auto p-0'
                              align='start'
                            >
                              <Calendar
                                mode='single'
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < form.getValues('datePickUp')}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='timeDropOff'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </article>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment method</CardTitle>
                <CardDescription className='flex justify-between'>
                  <span>Please enter your payment method</span>
                  <span className='text-xs'>Step 3 of 4</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Confirmation</CardTitle>
                <CardDescription className='flex justify-between'>
                  <span>
                    We are getting to the end. Just fews more clicks and your rental is ready.
                  </span>
                  <span className='text-xs'>Step 4 of 4</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                          <FormLabel>
                            I agree with sending Marketing and newsletter emails.
                          </FormLabel>
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
                      We are using the most advanced security to provide you the best experience
                      ever.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
      <div className='order-1 lg:order-2 lg:w-2/5'>
        <Card className='lg:sticky lg:top-5'>
          <CardHeader>
            <CardTitle>Rental Summary</CardTitle>
            <CardDescription>
              Prices will change depending on the length of the rental and the price of your rental
              car.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex gap-x-4 items-center'>
              <div
                className='w-36 h-24 rounded-xl relative'
                style={{ backgroundImage: `url('/images/bg2.png')` }}
              >
                <Image
                  className='w-full h-auto max-w-32 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                  src={car.image}
                  alt={`Foto del carro ${car.model}`}
                  width='0'
                  height='0'
                  sizes='100%'
                />
              </div>
              <div className='space-y-3'>
                <h4 className='text-4xl font-bold'>{car.model}</h4>
                <CarRating
                  rating={5}
                  amountOfReviews={4}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className='space-y-5 w-full'>
              <article className='flex justify-between'>
                <span className='text-muted-foreground font-semibold'>Subtotal</span>
                <span className='font-bold'>${subtotal?.toFixed(2)}</span>
              </article>
              <article className='flex justify-between'>
                <span className='text-muted-foreground font-semibold'>Tax</span>
                <span className='font-bold'>${tax.toFixed(2)}</span>
              </article>
              <article className='flex justify-between'>
                <div className='flex flex-col'>
                  <span className='font-semibold text-xl'>Total Rental Price</span>
                  <span className='text-muted-foreground text-sm'>
                    Overall price and includes rental discount
                  </span>
                </div>
                <div>
                  <span className='text-3xl font-bold'>${totalPrice?.toFixed(2)}</span>
                </div>
              </article>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
