"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import hero from "@/assets/about/hero.png";
import Image from 'next/image';
import one from "@/assets/Achievers/one.png";
import two from "@/assets/Achievers/two.png";
import three from "@/assets/Achievers/three.png";
const tabs = [
    "NEET/JEE EVENING PROGRAMME",
    "FOUNDATION PROGRAMME",
    "NEET-REPEATERS PROGRAMME",
    "CUET",
    "NTSE",
    "CBSE",
    "CAREER COUNSELLING",
];


function Achiever() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
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
                            <span className="text-gray-300">Home</span> / News & Editorials / Young Karur traders, professionals...
                        </p>
                    </div>
                </div>
            </div>

            <section className='max-w-7xl mx-auto px-4'>
                <div className="flex flex-col md:flex-row p-5 space-x-4">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 bg-[#F5F5F5] p-2">
                        <ul className="space-y-4 ">
                            {tabs.map((tab) => (
                                <motion.li
                                    key={tab}
                                    onClick={() => setSelectedTab(tab)}
                                    whileHover={{ scale: 1.05 }}
                                    className={`p-3 cursor-pointer text-sm rounded-lg text-center hover:bg-[#FFFFFF] ${selectedTab === tab ? "bg-orange-500 text-white" : "bg-gray-100"
                                        }`}
                                >
                                    {tab}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Different Design for Each Tab */}
                    <motion.div
                        className="w-full md:w-3/4 shadow-lg rounded-lg "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {selectedTab === "NEET/JEE EVENING PROGRAMME" && (
                            <div className="p-5   text-center">
                                <h2 className="text-xl font-bold mb-4">NEET/JEE Evening Programme</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <Image
                                            src={one}
                                            alt="Achiever 1"
                                            className="w-24 h-24 mx-auto mb-2"
                                        />
                                        <p className="font-bold">BALANAGARAJA. B</p>
                                        <p>Govt. Medical College, Karur.</p>
                                    </div>
                                    <div className="text-center">
                                        <Image
                                            src={two}
                                            alt="Achiever 2"
                                            className="w-24 h-24 mx-auto mb-2"
                                        />
                                        <p className="font-bold">KAVIN GURUNATH. S</p>
                                        <p>Govt. Medical College, Karur.</p>
                                    </div>
                                    <div className="text-center">
                                        <Image
                                            src={three}
                                            alt="Achiever 3"
                                            className="w-24 h-24 mx-auto mb-2"
                                        />
                                        <p className="font-bold">SANJEITH. R</p>
                                        <p>Govt. Medical College, Karur.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedTab === "FOUNDATION PROGRAMME" && (
                            <div className="p-5 bg-green-100 shadow-lg rounded-lg text-center">
                                <h2 className="text-xl font-bold">Foundation Programme</h2>
                                <p>Basic concepts for school students.</p>
                            </div>
                        )}
                        {selectedTab === "NEET-REPEATERS PROGRAMME" && (
                            <div className="p-5 bg-red-100 shadow-lg rounded-lg text-center">
                                <h2 className="text-xl font-bold">NEET Repeaters Programme</h2>
                                <p>For students attempting NEET again with expert guidance.</p>
                            </div>
                        )}
                        {selectedTab === "CUET" && (
                            <div className="p-5 bg-purple-100 shadow-lg rounded-lg text-center">
                                <h2 className="text-xl font-bold">CUET Preparation</h2>
                                <p>Guidance for Common University Entrance Test.</p>
                            </div>
                        )}
                        {selectedTab === "NTSE" && (
                            <div className="p-5 bg-yellow-100 shadow-lg rounded-lg text-center">
                                <h2 className="text-xl font-bold">NTSE Training</h2>
                                <p>Special coaching for NTSE aspirants.</p>
                            </div>
                        )}
                        {selectedTab === "CBSE" && (
                            <div className="p-5 bg-orange-100 shadow-lg rounded-lg text-center">
                                <h2 className="text-xl font-bold">CBSE Syllabus Coaching</h2>
                                <p>Coaching classes for CBSE syllabus students.</p>
                            </div>
                        )}
                        {selectedTab === "CAREER COUNSELLING" && (
                            <div className="p-5 bg-pink-100 shadow-lg rounded-lg text-center">
                                <h2 className="text-xl font-bold">Career Counselling</h2>
                                <p>Expert guidance for choosing the right career path.</p>
                            </div>
                        )}
                    </motion.div>
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

        </>
    )
}

export default Achiever
