'use client';

import { TESTIMONIAL } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <section
      className='max-container padding-container gap-20 pb-32 md:gap-28 lg:py-20 xl:flex-row'
      id='testimonial'>
      <div className='text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20'>
        Testimonial
      </div>
      <ul className='mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto'>
        {TESTIMONIAL.map((testimonial) => (
          <TestimonialItem
            key={testimonial.title}
            imgURL={testimonial.imgURL}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </ul>
    </section>
  );
};

type TestimonialItem = {
  title: string;
  imgURL: string;
  description: string;
};

const TestimonialItem = ({ title, imgURL, description }: TestimonialItem) => {
  return (
    <li className='relative flex w-full flex-1 flex-col p-6 shadow-lg rounded-md hover:shadow-xl transition'>
      <div className='absolute -top-8'>
        <Image
          src={imgURL}
          alt={`${title}'s profile picture`}
          height={66}
          width={66}
          className='rounded-full shadow-xl border-4 border-white'
        />
      </div>
      <div className='absolute -top-8 right-0'>
        <Image src='/quote.svg' alt='quote icon' height={44} width={44} />
      </div>
      <h3 className='bold-18 lg:bold-20 mt-8 capitalize'>{title}</h3>
      <p className='regular-16 text-gray-30 my-4'>{description}</p>
    </li>
  );
};

export default Testimonial;
