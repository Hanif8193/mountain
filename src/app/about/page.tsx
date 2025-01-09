import React from 'react'
import Image from 'next/image'
import P from '../../../public/Hanif.jpeg'
function About() {
  return (
    <div className='bg-pink-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        ABOUT US
        <br className="hidden lg:inline-block" />
      
      </h1>
      <p className="mb-8 leading-relaxed text-2xl">
      Mohammad Hanif Memon, a talented front-end developer from Karachi, Pakistan, excels in crafting responsive and user-friendly web interfaces.
       With expertise in modern tools like Tailwind CSS and Next.js,
       he delivers high-quality solutions as a dedicated freelancer.
       
      </p>
     
     
          </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image src={P}alt='PIC'width={500}height={500} ></Image>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About
