import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Step({
  children,
  title,
  description,
  step
}: {
  children: React.ReactNode
  title: string
  description: string
  step: number
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='flex justify-between'>
          <span>{description}</span>
          <span className='text-xs'>Step {step} of 4</span>
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
