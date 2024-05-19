import Logo from "@/components/Logo";
import Link from "next/link";

const AboutLinks = [
  "How it work",
  "Featured",
  "Partnership",
  "Bussiness Relation",
];
const CommunityLinks = ["Events", "Blog", "Podcast", "Invite a friend"];
const SocialLinks = ["Discord", "Instagram", "X", "Facebook"];

function FooterMenu({ title, items }: { title: string; items: string[] }) {
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
          );
        })}
      </nav>
    </article>
  );
}
export function Footer() {
  return (
    <footer className='w-full px-10 py-5 shadow-sm bg-white lg:px-20'>
      <div className='flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-between'>
        <div className='flex flex-col text-center items-center lg:items-start lg:text-left'>
          <h2 className='text-primary uppercase font-semibold text-2xl'>
            <Logo />
          </h2>
          <p className='text-sm max-w-xs'>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-around lg:justify-between gap-y-5 lg:gap-y-0 lg:gap-x-10'>
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
      <div className='flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 justify-between font-semibold text-xs'>
        <span className='text-center'>
          ©2024 <Logo />. All Right reserved
        </span>
        <div className='flex justify-between gap-x-2'>
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
}
