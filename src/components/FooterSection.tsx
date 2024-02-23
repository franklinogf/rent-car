export default function FooterSection() {
  return (
    <footer className='mx-auto bg-gradient-to-t from-blue-400/80'>
      <article className='flex justify-between mx-24 my-5'>
        <div className='py-5'>
          <h2 className='text-primary uppercase font-semibold text-2xl'>
            morent
          </h2>
          <span className='text-sm'>
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div className='flex justify-between gap-10'>
          <div>
            <h3 className='py-5 font-semibold'>About</h3>
            <div className='grid grid-cols-1 text-gray-400'>
              <span className='cursor-pointer hover:text-black'>
                How it work
              </span>
              <span className='cursor-pointer hover:text-black'>Featured</span>
              <span className='cursor-pointer hover:text-black'>
                Partnership
              </span>
              <span className='cursor-pointer hover:text-black'>
                Bussiness Relation
              </span>
            </div>
          </div>
          <div>
            <h3 className='py-5 font-semibold'>Community</h3>
            <div className='grid grid-cols-1 text-gray-400'>
              <span className='cursor-pointer hover:text-black'>Events</span>
              <span className='cursor-pointer hover:text-black'>Blog</span>
              <span className='cursor-pointer hover:text-black'>Podcast</span>
              <span className='cursor-pointer hover:text-black'>
                Invate a friend
              </span>
            </div>
          </div>
          <div>
            <h3 className='py-5 font-semibold'>Socials</h3>
            <div className='grid grid-cols-1 text-gray-400'>
              <span className='cursor-pointer hover:text-black'>Discord</span>
              <span className='cursor-pointer hover:text-black'>Instagram</span>
              <span className='cursor-pointer hover:text-black'>Twitter</span>
              <span className='cursor-pointer hover:text-black'>Facebook</span>
            </div>
          </div>
        </div>
      </article>
      <hr />
      <article className='flex justify-between p-5 mx-24 font-semibold text-xs'>
        <span>©2022 MORENT. All Right reserved</span>
        <div className='flex justify-between '>
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </article>
    </footer>
  )
}
