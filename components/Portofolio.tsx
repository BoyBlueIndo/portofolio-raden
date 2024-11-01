'use client ';

import { PORTOFOLIO } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Portofolio = () => {
  return (
    <section
      className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]'
      id='portofolio'>
      <div className='text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20'>
        Portofolio
      </div>
      <ul className='mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto'>
        {PORTOFOLIO.map((portofolio) => (
          <PortofolioItem
            key={portofolio.title}
            imgURL={portofolio.imgURL}
            title={portofolio.title}
            description={portofolio.description}
          />
        ))}
      </ul>
    </section>
  );
};

type PortofolioItem = {
  title: string;
  imgURL: string;
  description: string;
};

const PortofolioItem = ({ title, imgURL, description }: PortofolioItem) => {
  return (
    <li className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
      <div className='group-hover:scale-110 transition-all duration-1000'>
        <Image src={imgURL} alt='map' width={444} height={444} />
      </div>
      <div className='px-6 py-4'>
        <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
        <p className='regular-16 text-gray-500 mb-4'>{description}</p>
        <div className='flex gap-1'>
          <Button
            type='button'
            title='Read More'
            icon='/more.svg'
            variant='btn_dark_rounded'
          />
          <Button
            type='button'
            title='View Code'
            icon='/github.svg'
            variant='btn_white_rounded'
          />
        </div>
      </div>
    </li>
  );
};

export default Portofolio;
