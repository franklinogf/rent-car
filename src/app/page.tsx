import PopularSection from '@/components/PopularCarSection'
import PreviewCar from '@/components/PreviewCar'

export default function Page() {
  return (
    <>
      <div className='mt-4'>
        <PreviewCar />
      </div>
      <PopularSection />
    </>
  )
}
