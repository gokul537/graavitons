"use client";
import React from 'react';
import hero from "@/assets/about/hero.png";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

import Banner from "@/assets/news/banner.png"
function YoungKarurtrader() {
  return (
    <div>
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
              <span className="text-gray-300">Home</span> / News & Editorials / Young Karur traders, professionals...
            </p>
          </div>
        </div>
      </div>




      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="md:col-span-2">
            <div className='bg-[#F2F5FA] p-5'>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-bold"
              >
                Young Karur traders, professionals swell Rotaract ranks
              </motion.h1>
              <p className="text-gray-500 mt-1">December 18, 2024</p>

            </div>
            <div className='bg-[#F2F5FA] p-5 mt-5'>
              {/* Image */}
              <Image
                src={Banner}
                alt="Rotaract Event"
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-lg mt-4 shadow-md"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-700 mt-4 leading-relaxed"
              >
                RAC Karur IPP P Selva Kumar hands over the laminated Karna poster to Gravitons CEO Parameshwari
                in the presence of (from L) project chairman Chris Marshall and club president N Baranish.
                This Rotaract club does not have a single student, teacher, or doctor. Don’t be surprised as
                it is a community-based club catering to the interests of traders and businessmen in Karur,
                the textile city of Tamil Nadu...
              </motion.p>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:col-span-1">
            {/* Share Section */}
            <h3 className="text-gray-700 font-semibold">Share</h3>
            <div className="flex space-x-3 mt-2">
              {[FaLinkedin, FaXTwitter, FaInstagram, FaFacebookF].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Keep Reading Section */}
            <h3 className="text-gray-700 font-semibold mt-6">Keep Reading</h3>
            <hr className='bg-[#EDEDED]' />
            <ul className="mt-2 space-y-2">
              <motion.li whileHover={{ x: 5 }} className="text-blue-600 hover:underline cursor-pointer">
                Slice of Brazil
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="text-blue-600 hover:underline cursor-pointer">
                Young Karur traders, professionals swell Rotaract ranks
              </motion.li>
            </ul>
          </div>
        </div>
      </div>





      <motion.div
        className="bg-blue-700 text-white relative z-2 py-12 mt-9 px-4 md:px-8 rounded-lg w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Graavitons training will increase the student’s Brain Capacity
        </h2>

        {/* Description */}
        <p className="text-center text-sm md:text-base mt-4 max-w-3xl mx-auto">
          Most human beings use only 10 percent of the brain’s capacity. Our Indian students
          are the most intelligent in the world. Our students did not get the opportunity that
          other country students got in the past. Graavitons training is designed to improve our
          student’s brain capacity. We will make our students the best in the world.
        </p>

        {/* Input & Button */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="px-4 py-3 w-full md:w-96 bg-white rounded-md border-none outline-none text-black"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          />
          <button

            className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold"
          >
            Subscribe
          </button>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default YoungKarurtrader
