"use client";
import React from 'react';
import hero from "@/assets/about/hero.png";
import Image from 'next/image';

import one from "@/assets/newsandeditors/1.png";
import two from "@/assets/newsandeditors/2.png";
import three from "@/assets/newsandeditors/3.png";

import { motion } from "framer-motion";
import Link from 'next/link';
const newsData = [
  {
    id: 1,
    image: one,
    title: "Young Karur traders, professionals swell Rotaract ranks",
    link: "YoungKarurRaders",
    description:
      "RAC Karur IPP P Selva Kumar hands over the laminated Karna poster to Gravitons CEO Parameshwari in the presence of (from L) project chairman Chris Marshall and club president N Baranish.",
  },
  {
    id: 2,
    image: two,
    title: "Slice of Brazil",
    description:
      "Campus life at the Institute for Theoretical Physics, Sao Paulo, was enthralling, the author says. For students aspiring to study abroad, the most memorable day is when they receive the offer letter from the university they applied to.",
  },
  {
    id: 3,
    image: three,
    title: "Young Karur traders, professionals swell Rotaract ranks",
    description:
      "RAC Karur IPP P Selva Kumar hands over the laminated Karna poster to Gravitons CEO Parameshwari in the presence of (from L) project chairman Chris Marshall and club president N Baranish.",
  },
];

const NewsCard = ({ news }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border-b-4 border-transparent hover:border-orange-500 p-4 transition-all duration-300"
    >
      <Image src={news.image} alt="img" className="w-full " />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{news.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{news.description}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition-all"
        >
          <Link href="YoungKarurRaders" >Read More</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};
function NewsandEditorial() {
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
              <span className="text-gray-300">Home</span> / News & Editorials
            </p>
          </div>
        </div>
      </div>




      <section>
        <div className="py-10  max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">News & Editorials</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

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

export default NewsandEditorial
