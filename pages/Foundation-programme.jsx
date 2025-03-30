"use client";
import { motion } from "framer-motion";
import Image from 'next/image'
import React, { useState } from 'react';
import hero from "@/assets/about/hero.png";
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import bannerone from "@/assets/foundation/banner.png";
import one from "@/assets/neet-jee/one.svg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const tabs = [
  { name: "NEET/JEE Evening Programme", path: "/NeetJeeEveningProgram" },
  { name: "Foundation Programme", path: "/FoundationProgramme" },
  { name: "NEET-Repeaters Programme", path: "/NeetRepeaters" },
  { name: "CUET", path: "/cuet" },
  { name: "NTSE", path: "/ntse" },
  { name: "CBSE", path: "/cbse" },
  { name: "Career Counselling", path: "/career-counselling" },
];
const infoData = [
  { title: "Test Timing", description: "Daily Test: 6.30 pm - 7.00 pm\nSunday Mock Test: 9.00 am - 12.00 pm", icon: "✏️" },
  { title: "Subjects Covered", description: "Physics, Chemistry, Biology, Mathematics.", icon: "📚" },
  { title: "Studied Students", description: "13K Students", icon: "👥" },
  { title: "Class Timing", description: "Monday to Saturday\n6.30 pm - 9.00 pm", icon: "⏰" },
  { title: "Course Material", description: "Yes, we will provide course materials.", icon: "📖" },
  { title: "Course Duration", description: "One Academic Year", icon: "📅" },
  { title: "Ratings", description: "4.5/5 Star", icon: "⭐" },
];
const videos = [
  { id: 1, src: "https://youtu.be/7FqSok2QBhw?si=CUFtKrxuG6jhVeWK" },
  { id: 2, src: "https://www.youtube.com/embed/VIDEO_ID2" },
  { id: 3, src: "https://www.youtube.com/embed/VIDEO_ID3" },
];
const testimonials = [
  {
    name: "Jenny Wilson",
    image: "/path-to-image/jenny.png",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    name: "Robert Fox",
    image: "/path-to-image/robert.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    name: "Kristin Watson",
    image: "/path-to-image/kristin.png",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    name: "Kristin Watson",
    image: "/path-to-image/kristin.png",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    name: "Kristin Watson",
    image: "/path-to-image/kristin.png",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    name: "Kristin Watson",
    image: "/path-to-image/kristin.png",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    name: "Kristin Watson",
    image: "/path-to-image/kristin.png",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  }
];
function FoundationProgramme() {
      const router = useRouter();
      const [activeTab, setActiveTab] = useState(tabs[0].path);
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
              <span className="text-gray-300">Home</span> / Courses / NEET/JEE EVENING PROGRAMME
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto flex gap-2">

        <div className="flex flex-col md:flex-row bg-gray-100 p-4 min-h-screen">
          <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.path}>
                  <button
                    
                    className={`w-full text-left p-7 rounded-md text-sm font-medium  transition-all ${activeTab === tab.path ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    onClick={() => {
                      setActiveTab(tab.path);
                      router.push(tab.path);
                    }}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4 p-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <section className="bg-white py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4">
                  {/* Hero Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full overflow-hidden rounded-lg"
                  >
                    <Image
                      src={bannerone}
                      alt="NEET JEE Program"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">NEET/JEE EVENING PROGRAMME</h2>
                      <p className="text-sm md:text-lg mt-2">For Grade 11 and 12 Students.</p>
                    </div>
                  </motion.div>

                  {/* Info Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {infoData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start space-x-4"
                      >
                        <span className="text-orange-500 text-xl">{item.icon}</span>
                        <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Fee & CTA Section */}
                  <div className="bg-blue-700 text-white mt-8 p-4 md:p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <p className="text-sm">50% payment at the time of admission. Another 50% payment in the third month from the date of admission.</p>
                    </div>
                    <button
                     
                      className="bg-orange-500 text-white p-3 rounded-md font-semibold mt-4 md:mt-0"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </section>



            </motion.div>
          </div>
        </div>
      </div>





      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-500 font-semibold">Our Students Review about us</p>
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

          {/* Desktop Grid View */}
          <div className="hidden md:block">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-64">
                    <iframe
                      className="w-full h-full"
                      src={video.src}
                      title={`Video ${video.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Slider View */}
          <div className="md:hidden relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {videos.map((video) => (
                <SwiperSlide key={video.id}>
                  <motion.div
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative w-full h-64">
                      <iframe
                        className="w-full h-full"
                        src={video.src}
                        title={`Video ${video.id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors bg-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors bg-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </section>



      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-orange-500 text-sm font-bold uppercase">
              Testimonials
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              What Our Students Say
            </h2>
          </div>

          {/* Testimonial Slider - Added padding and adjusted centering */}
          <div className="px-4 md:px-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonial-swiper !pb-14 !pt-4"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className={`
                      bg-white rounded-lg p-6 shadow-lg transition-all duration-300 border-b-5 border-[#F47D07]
                      ${isActive ? 'scale-100 translate-y-0' : 'scale-95 opacity-70 translate-y-4'}
                    `}>
                      {/* User Info */}
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 text-center mb-6">
                        {testimonial.text}
                      </p>

                      {/* Quote Mark */}
                      <div className="text-blue-600 text-4xl absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        "
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="swiper-button-prev"><IoIosArrowBack className="text-1xl" /></div>
              <div className="swiper-button-next"><IoIosArrowForward className="text-1xl" /></div>
            </Swiper>
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

export default FoundationProgramme
