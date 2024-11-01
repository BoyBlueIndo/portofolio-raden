import About from '@/components/About';
import Hero from '@/components/Hero';
import Portofolio from '@/components/Portofolio';
import Skills from '@/components/Skills';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const page = () => {
  return (
    <main>
      <>
        <Hero />
        <About />
        <Skills />
        <Portofolio />
        <Testimonial />
      </>
    </main>
  );
};

export default page;
