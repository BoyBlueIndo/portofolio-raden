import React from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-20 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">About Me?</div>
      <div className='flex flex-col gap-20 md:gap-20 xl:flex-row'>
        <div className='flex-1 flexCenter flex-col m-auto'>
          <p className='mb-8'>
            <span className='font-extrabold'>Soo</span>, I'm a student from SMK Negeri 21 Jakarta Pusat. I'm taking a PPLG courses, soo I could learn how to make web, applications, and my favorite one, games!
          </p>
          <Button
            type="button"
            title="Read More"
            icon="/more.svg"
            variant="btn_dark_rounded"
          />
        </div>
        <div className='flex-1 flexCenter'>
          <Image 
            src="/RadenFace.svg"
            alt="about"
            height={333}
            width={333}
            className='w-auto rounded-full shadow-sm'
          />
        </div>
      </div>
    </section>
  )
}

export default About