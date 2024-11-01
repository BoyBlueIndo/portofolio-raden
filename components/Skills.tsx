'use client';

import Image from 'next/image';
import { SKILLS } from '@/constants';
import React from 'react';

const Skills = () => {
  return (
    <section
      className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'
      id='skills'>
      {/* title */}
      <div className='text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20'>
        Skills
      </div>
      <ul className='mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
        {SKILLS.map((skill) => (
          <SkillItem
            key={skill.title}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;

type SkillItem = {
  title: string;
  icon: string;
  description: string;
};

const SkillItem = ({ title, icon, description }: SkillItem) => {
  return (
    <li className='relative flex w-full flex-1 flex-col items-center text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-10 hover:bg-blue-500 group duration-[1200ms] transition'>
      <div className='rounded-full p-5 bg-blue-500 absolute -top-8 group-hover:bg-black'>
        <Image src={icon} alt='map' width={28} height={28} />
      </div>
      <h3 className='bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white'>
        {title}
      </h3>
      <p className='regullar-16 text-gray-30 mt-4 group-hover:text-white'>
        {description}
      </p>
    </li>
  );
};
