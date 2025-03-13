import React from 'react';
import hero from "@/assets/about/hero.png";
import Image from 'next/image';

function About() {
  return (
    <>
    <div>
       <div className="relative w-full h-[200px] md:h-[250px] lg:h-[250px] mt-[100px] flex items-center bg-blue-900">
      {/* Background Image */}
      <Image
        src={hero} 
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Breadcrumb */}
      <div className="relative z-10 text-white px-6 md:px-10">
        <p className="text-sm md:text-lg font-medium">
          <span className="text-gray-300">Home</span> / About
        </p>
      </div>
      </div>
    </div>

    <section className='bg-[#F5F5F5]'>
        <div className='max-w-7xl mx-auto pt-6 pb-6 '>
          <h2 className='text-center text-2xl font-semibold'>Who We Are</h2>

          <p className='text-center text-md mt-4'>Graavitons is Karur based Entrance Exam coaching institute. Started in the year 2013 We are providing coaching classes for NEET, JEE, CUET, NATA, IPMAT, Foundation classes from 6th std to 10th std. We are conducting Integrated program NEET & JEE course for 11th and 12th std. CBSE students at Sri Sankara Vidyalayaa Senior Secondary School, Karur. We are a team of 23 faculties with vast experience in entrance coaching.</p>
        </div>

    </section>
    </>

  )
}

export default About
