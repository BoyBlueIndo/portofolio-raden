'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className='padding-container relative z-30 rounded-lg bg-white shadow-xl ring-1 ring-slate-100 py-4'>
      <div className='flexBetween max-container'>
        <Link href='/' className='bold-28 capitalize relative'>
          Ra<span className='text-blue-700'>den</span>{' '}
          <span className='absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-10'></span>
        </Link>

        {/* Desktop Nav */}
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='flexCenter text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <Image
          src='/menu.svg'
          alt='menu'
          width={28}
          height={28}
          className='inline-block cursor-pointer lg:hidden'
          onClick={handleMenuToggle}
        />

        {/* Mobile Nav */}
        {isMenuOpen && (
          <ul className='flex flex-col absolute top-16 right-0 bg-white shadow-md p-6 rounded-lg lg:hidden'>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className='text-black font-[500] py-2 hover:bg-blue-500 hover:text-white rounded transition'>
                {link.label}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
