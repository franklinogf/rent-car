import Logo from '@/components/Logo'
import Link from 'next/link'

const AboutLinks = ['How it work', 'Featured', 'Partnership', 'Bussiness Relation']
const CommunityLinks = ['Events', 'Blog', 'Podcast', 'Invite a friend']
const SocialLinks = ['Discord', 'Instagram', 'X', 'Facebook']

export function FooterMenu({ title, items }: { title: string; items: string[] }) {
  return (
    <article>
      <h3 className='mb-2 font-semibold'>{title}</h3>
      <nav className='grid gap-y-2 text-gray-500'>
        {items.map((item, index) => {
          return (
            <Link
              key={`${item}_${index}`}
              href='#'
              className='hover:text-black'
            >
              {item}
            </Link>
          )
        })}
      </nav>
    </article>
  )
}
export default function FooterSection() {
  return (
    <footer className='mx-auto px-10 py-5 shadow-sm bg-white'>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-primary uppercase font-semibold text-2xl'>
            <Logo />
          </h2>
          <span className='text-sm max-w-xs block'>
            Our vision is to provide convenience and help increase your sales business.
          </span>
        </div>
        <div className='flex justify-between gap-10'>
          <FooterMenu
            title='About'
            items={AboutLinks}
          />
          <FooterMenu
            title='Community'
            items={CommunityLinks}
          />
          <FooterMenu
            title='Socials'
            items={SocialLinks}
          />
        </div>
      </div>
      <hr className='my-5 border-primary/60' />
      <div className='flex justify-between font-semibold text-xs'>
        <span>
          ©2024 <Logo />. All Right reserved
        </span>
        <div className='flex justify-between gap-x-2'>
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  )
}
