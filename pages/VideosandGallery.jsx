"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import hero from "@/assets/about/hero.png";
import one from "@/assets/gallery/1.png";
import two from "@/assets/gallery/2.png";
import three from "@/assets/gallery/3.png";
import four from "@/assets/gallery/4.png";
import five from "@/assets/gallery/5.png";
import six from "@/assets/gallery/6.png";
import seven from "@/assets/gallery/7.png";
import eight from "@/assets/gallery/8.png";
import nine from "@/assets/gallery/9.png";
import ten from "@/assets/gallery/10.png";
import eleven from "@/assets/gallery/11.png";
import twele from "@/assets/gallery/12.png";

const tabs = ["Videos", "Gallery"];

function VideosandGallery() {
  const [activeTab, setActiveTab] = useState("Videos");

  const videos = [
    "/video-thumbnail1.jpg",
    "/video-thumbnail2.jpg",
    "/video-thumbnail3.jpg",
    "/video-thumbnail4.jpg",
  ];

  const gallery = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twele,
  ];

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
                      <span className="text-gray-300">Home</span> / Videos & Gallery
                    </p>
                  </div>
                </div>
              </div>


      <div className="w-full max-w-6xl mx-auto text-center py-10">
        <h2 className="text-xl font-semibold mb-4">Videos & Gallery</h2>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-medium  rounded-lg transition-all ${
                activeTab === tab ? "bg-orange-500 text-white" : "bg-white text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6"
        >
          {(activeTab === "Videos" ? videos : gallery).map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={item}
                alt={`Media ${index}`}
                width={300} // Specify the width
                height={200} // Specify the height
                className="w-full h-48 object-cover"
              />
              {activeTab === "Videos" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white text-3xl">▶</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
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
                  <form>
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="px-4 py-3 w-full md:w-96 bg-white rounded-md border-none outline-none text-black"
                  />
                  <button
                   
                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold"
                  >
                    Subscribe
                  </button>
                  </form>
                </motion.div>
              </motion.div>
    </div>
  );
}

export default VideosandGallery;
