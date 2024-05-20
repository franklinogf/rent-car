"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/Logo";
import { HeartIcon, MenuIcon, SettingsIcon } from "@/lib/Icons";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className='bg-white w-full flex justify-between items-center px-4 shadow py-4'>
      <Sheet>
        <SheetTrigger className='md:hidden'>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>
              <SheetClose asChild>
                <Link
                  href='/'
                  className='text-primary font-bold'
                >
                  <Logo />
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className='grid gap-y-4 h-full pb-6 pt-5'>
            <nav className='space-y-4 pl-5'>
              <SheetClose asChild>
                <Link
                  href='/cars'
                  className='hover:text-primary/80'
                >
                  All Cars
                </Link>
                <Link
                  href='/admin'
                  className='hover:text-primary/80'
                >
                  Admin
                </Link>
              </SheetClose>
            </nav>

            <nav className='flex justify-end items-center gap-x-1 mt-auto'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full'
              >
                <HeartIcon className='size-6 mx-auto' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full'
              >
                <SettingsIcon className='size-6 mx-auto' />
              </Button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <nav>
        <Button
          variant='ghost'
          asChild
          className='text-primary font-bold'
        >
          <Link href='/'>
            <Logo />
          </Link>
        </Button>
      </nav>
      <nav className='md:flex justify-evenly items-center gap-4 hidden'>
        <Button
          variant='ghost'
          asChild
        >
          <Link href='/cars'>All Cars</Link>
        </Button>
        <Link
          href='/admin'
          className='hover:text-primary/80'
        >
          Admin
        </Link>
      </nav>
      <nav className='flex justify-evenly items-center gap-x-1'>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hidden md:inline-block'
        >
          <HeartIcon className='size-6 mx-auto' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hidden md:inline-block'
        >
          <SettingsIcon className='size-6 mx-auto' />
        </Button>
        <Avatar>
          <AvatarImage />
          <AvatarFallback className='bg-primary/50'>FG</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
}
