"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import About from '@/assets/home/about.webp'
import { AnimatedTooltipPreview } from '@/components/AnimatedTooltipPreview';
import CourseSlider from '@/components/homeslider';
import wone from '@/assets/home/w-1.svg'
import wtwo from '@/assets/home/w-2.svg'
import wthree from '@/assets/home/w-3.svg'
import wfour from '@/assets/home/w-4.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import starone from "@/assets/home/star/1.png";
import startwo from "@/assets/home/star/2.png";
import starthree from "@/assets/home/star/3.png";
import starfour from "@/assets/home/star/4.png";
import starfive from "@/assets/home/star/5.png";
import starsix from "@/assets/home/star/6.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

import Homestar from "@/assets/home/home-star.png"
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LuCirclePlus } from "react-icons/lu";
import Footer from '@/components/Footer/footer';
const features = [
  {
    title: "High Quality Classes",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: wone, // Example icon
  },
  {
    title: "Expert Tutors",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: wtwo,
  },
  {
    title: "Life Time Support",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: wthree,
  },
  {
    title: "Dedicated Support",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: wfour,
  }
];

const steps = [
  {
    id: "01",
    title: "Understand Your Needs",
    description: "Share your vision, challenges, or objectives, and let us explore how we can bring your ideas to life.",
    highlight: false, // This card has the star
  },
  {
    id: "02",
    title: "Tailored Solutions",
    description: "We design and propose customized solutions that align with your specific requirements and aspirations.",
    highlight: false,
  },
  {
    id: "03",
    title: "Implementation Excellence",
    description: "Our team ensures every aspect is executed flawlessly, leveraging the latest tools and techniques for optimal results.",
    highlight: false,
  },
  {
    id: "04",
    title: "Continuous Support",
    description: "Stay ahead with our ongoing assistance and support to ensure sustained growth and success.",
    highlight: false,
  },
];

const colleges = [
  {
    id: 1,
    name: "Government Medical College, Karur",
    img: starone,
    label: "5 Students Placed"
  },
  {
    id: 2,
    name: "AIIMS Delhi",
    img: startwo,
    label: "3 Students Placed"
  },
  { id: 3, name: "JIPMER Pondicherry", img: starthree, label: "3 Students Placed" },
  { id: 4, name: "CMC Vellore", img: starfour, label: "3 Students Placed" },
  { id: 5, name: "Kasturba Medical College", img: starfive, label: "3 Students Placed" },
  { id: 6, name: "Madras Medical College", img: starsix, label: "3 Students Placed" },
];

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    text: "Graavitons – the best NEET, JEE & ENTRANCE exam coaching Institute. They have an experienced team of faculties and a positive environment to learn.",
    image: "/images/jenny.jpg", // Replace with actual image path
    rating: 5,
  },
  {
    id: 2,
    name: "Robert Fox",
    text: "Best institute for learning competitive exams like JEE and NEET. Best material and experienced Lecturers making studies a piece of cake.",
    image: "/images/robert.jpg", // Replace with actual image path
    rating: 4,
  },
  {
    id: 3,
    name: "Kristin Watson",
    text: "The best institute for learning competitive exams like JEE and NEET. Best material and experienced Lecturers making studies easy.",
    image: "/images/kristin.jpg", // Replace with actual image path
    rating: 5,
  },
  {
    id: 4,
    name: "Kristin Watson",
    text: "The best institute for learning competitive exams like JEE and NEET. Best material and experienced Lecturers making studies easy.",
    image: "/images/kristin.jpg", // Replace with actual image path
    rating: 5,
  },
];

const videos = [
  { id: 1, src: "https://youtu.be/7FqSok2QBhw?si=CUFtKrxuG6jhVeWK" },
  { id: 2, src: "https://www.youtube.com/embed/VIDEO_ID2" },
  { id: 3, src: "https://www.youtube.com/embed/VIDEO_ID3" },
];








function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  // State for all counts
  const [branches, setBranches] = useState(0);
  const [years, setYears] = useState(0);
  const [staff, setStaff] = useState(0);
  const [achievers, setAchievers] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Define the state for tracking open FAQ
  const [openIndex, setOpenIndex] = useState(null); // Move state outside of map function
  const [activeIndex, setActiveIndex] = useState(null);
  // Function to animate numbers
  const animateCount = (setter, finalValue, duration = 2000) => {
    let start = 0;
    const stepTime = duration / finalValue;

    let timer = setInterval(() => {
      start += 1;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(timer);
      }
      setter(start);
    }, stepTime);
  };

  useEffect(() => {
    animateCount(setBranches, 2, 1000); // 1 sec
    animateCount(setYears, 10, 1500); // 1.5 sec
    animateCount(setStaff, 25, 1800); // 1.8 sec
    animateCount(setAchievers, 3000, 2500); // 2.5 sec
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };



  // Handler for FAQ clicks
  const handleFaqClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-14 md:mt-0 px-6 md:px-16 py-16 bg-white">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building{" "}
            <span className="text-blue-700 underline decoration-orange-500">
              Strong Foundations
            </span>{" "}
            <br />
            for a Bright Academic Future!
          </h1>
          <motion.p
            variants={fadeIn}
            className="text-gray-600 mt-4 text-lg"
          >
            Lay a strong academic foundation with our specialized courses for
            early learners aiming for top results in NEET & JEE.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeIn}
            className="mt-6 flex space-x-4"
          >
            <Link
              href="/start"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Start Now
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 border border-gray-400 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition"
            >
              <span>Learn More</span> <span><IoIosArrowRoundForward size={26} className="rotate-60" /></span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center space-x-4"
        >
          {/* Image 1 */}
          <motion.div
            variants={fadeIn}
            className="relative w-ful p-2 "
          >
            <Image
              src={Homestar}
              alt="Students"

            />
          </motion.div>

          {/* Image 2 */}
          {/* <motion.div
            variants={fadeIn}
            className="relative w-48 h-48 md:w-56 md:h-56 p-2 border-2 border-dotted border-blue-500 rounded-[40%] shadow-lg"
          >
            <Image
              src="/students-2.jpg"
              alt="Happy Students"
              layout="fill"
              objectFit="cover"
              className="rounded-[40%]"
            />
          </motion.div> */}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-blue-900 text-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            className="text-left md:w-2/5"
          >
            <h2 className="text-5xl font-bold">
              About <span className="inline-block">🚡</span><br />
              Graavitons
            </h2>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-6 md:mt-0 md:w-3/5 text-left md:pl-12"
          >
            <p className="text-lg md:text-xl">
              Graavitons is a Karur-based Entrance Exam coaching institute.
            </p>
            <p className="mt-2 text-sm md:text-lg">
              Started in the year <strong>2013</strong>, we provide coaching classes for NEET, JEE, CUET, NATA, IPMAT, and foundation courses from 6th to 10th standard.
            </p>
            <p className="mt-2 text-sm md:text-lg">
              We are conducting an integrated program for <strong>NEET & JEE</strong> courses for 11th and 12th std.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white px-6 py-2 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition"
              >
                Learn More <span>↗</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      <section className="px-4 sm:px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center overflow-x-hidden">
        {/* Left Image Section */}
        <motion.div
          className="relative w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-auto rounded-xl shadow-lg">
            <Image src={About} className="w-full  rounded-xl" alt="Tutor" />
          </div>

          {/* Ratings Box */}
          <div className="absolute bottom-4 bg-white p-3 shadow-md rounded-lg flex justify-center items-center">
            <div>
              <p className="text-blue-700 font-semibold text-sm text-center">4.9 Ratings From the Experienced Tutors</p>
              <div className="flex justify-center mx-auto items-center">
                <AnimatedTooltipPreview />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-12 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">The Graavitons</h2>

          {/* Stats - Now Responsive */}
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-8 mt-6 border-t-2 pt-5 pb-5 border-b-2 border-gray-500">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <p className="text-xl font-bold"><span className="text-4xl md:text-5xl font-bold">{branches}</span> ↗</p>
              <p className="text-gray-500 text-sm">Branches</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h2 className="text-xl font-bold"><span className="text-4xl md:text-5xl font-bold">{years}</span> ↗</h2>
              <p className="text-gray-500 text-sm">Years</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <p className="text-xl font-bold"><span className="text-4xl md:text-5xl font-bold">{staff}</span> ↗</p>
              <p className="text-gray-500 text-sm">Experienced Staff</p>
            </motion.div>

            {/* Running Number Animation */}
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <p className="text-xl font-bold"><span className="text-4xl md:text-5xl font-bold">{achievers.toLocaleString()}+</span> ↗</p>
              <p className="text-gray-500 text-sm">Achievers</p>
            </motion.div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s.
          </p>
        </motion.div>
      </section>




      <section className='mt-5 bg-[#F5F5F5] pt-10 pb-10'>
        <p className='text-md text-[#F47D07] text-center'>Courses</p>
        <h2 className='text-2xl font-semibold text-center'>Explore Our Courses</h2>
        <CourseSlider />
      </section>


      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Side - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose <span className="text-orange-500">US</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="text-orange-500 text-3xl mt-2">
                  <Image src={feature.icon} alt="feature icon" width={60} height={60} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>


      <section className="bg-[#02399E] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative bg-[#02399E] p-6 pt-10 pb-10 border-b-4 border-amber-50 
                transition-all duration-300 cursor-pointer
                ${hoveredIndex === index
                    ? "shadow-xl transform scale-105 border-b-4 border-orange-500 bg-white !text-[#02399E]"
                    : "text-white hover:bg-white hover:text-[#02399E] active:bg-white active:text-[#02399E]"
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                variants={itemVariants}
              >
                {/* Step Number */}
                <p className={`absolute top-5 left-5 text-9xl font-bold opacity-10 
                transition-colors duration-300
                ${hoveredIndex === index ? "text-[#02399E]" : "text-white"}`}>
                  {step.id}
                </p>

                {/* Step Content */}
                <h3 className="text-lg font-bold mt-16 relative z-10">{step.title}</h3>
                <p className="text-sm mt-2 relative z-10">{step.description}</p>

                {/* Star Icon - Only on First Card or on Hover */}
                {(step.highlight || hoveredIndex === index) && (
                  <motion.div
                    className="absolute top-3 right-3 text-orange-500 text-xl"
                    initial={{ scale: 1, rotate: 0, opacity: 0 }}
                    animate={{ scale: 1.2, rotate: 10, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5446 7.27036C15.8055 7.55433 14.3327 12.499 14.6627 13.5833C14.9419 14.5008 18.4568 16.9887 19.0325 18.1407L12.5796 19.1217L9.96502 24.8516C8.94829 23.9158 7.74504 19.6757 6.8081 19.0905C5.79137 18.4559 1.81719 18.5183 0.43927 18.1407C1.00316 16.8984 4.79405 14.5642 5.05497 13.579C5.35255 12.456 3.88191 8.7257 4.16008 7.26929C4.36278 7.04018 9.00652 10.0036 9.63725 10.0444C10.6227 10.1079 15.26 6.95736 15.5468 7.26929L15.5446 7.27036Z" fill="#F47D07" />
                      <path d="M24.8407 0.328325C25.1027 0.681133 24.169 3.25405 24.4202 4.0952C24.624 4.77715 26.5809 5.99692 26.9345 6.80472C26.0439 6.92196 23.8779 6.90583 23.2288 7.39739C22.8935 7.65124 21.673 10.7437 21.3592 10.5081C21.1705 10.0209 20.1182 7.47376 19.908 7.3221C19.4929 7.02307 16.9322 6.87571 16.2443 6.80579C16.4114 5.56021 18.5894 5.01594 18.7565 3.86824C18.8816 3.00773 18.1775 1.27488 18.1042 0.330476C18.2519 0.183114 20.86 1.9052 21.4908 1.94608C22.4202 2.00631 23.866 0.584325 24.8407 0.3294V0.328325Z" fill="#F47D07" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-12 bg-white overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Student Placed Institutions</h2>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-0 md:flex-nowrap md:-space-x-16 group/colleges px-4 md:px-0">
            {colleges.map((college, index) => (
              <motion.div
                key={college.id}
                className={`relative group transform cursor-pointer ${index === Math.floor(colleges.length / 2)
                  ? 'md:rotate-0'
                  : index < Math.floor(colleges.length / 2)
                    ? 'md:rotate-12'
                    : 'md:-rotate-12'
                  }`}
                whileHover={{ scale: 1.1, zIndex: 20, rotate: 0 }}
                whileTap={{ scale: 1.1, zIndex: 20, rotate: 0 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Speech Bubble */}
                <div
                  className={`absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 
                    transition-opacity duration-150 ease-in pointer-events-none
                    w-full px-4 md:w-auto md:px-0
                    ${activeIndex === index ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                >
                  <div className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm whitespace-normal md:whitespace-nowrap">
                    {college.name}
                    <div className="absolute h-3 w-3 bg-blue-700 transform rotate-45 left-1/2 -bottom-1 -translate-x-1/2"></div>
                  </div>
                </div>

                {/* Star Container */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 relative">
                  {/* Border/Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 p-2"
                    style={{
                      clipPath: "polygon(50% 0, 66% 26%, 98% 35%, 76% 57%, 79% 91%, 50% 70%, 21% 91%, 24% 57%, 2% 35%, 34% 26%)",
                      transform: "scale(1.02)",
                    }}
                  />

                  {/* Image Container */}
                  <div className="absolute inset-0"
                    style={{
                      clipPath: "polygon(50% 0, 66% 26%, 98% 35%, 76% 57%, 79% 91%, 50% 70%, 21% 91%, 24% 57%, 2% 35%, 34% 26%)"
                    }}
                  >
                    <Image
                      src={college.img}
                      alt={college.name}
                      layout="fill"
                      objectFit="cover"
                      className={`transform transition-transform duration-150 
                        ${activeIndex === index ? 'scale-110' : 'md:group-hover:scale-110'}`}
                    />
                  </div>

                  {/* Hover/Touch Overlay */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-60 
                      transition-opacity duration-150 flex items-center justify-center 
                      touch-action-manipulation
                      ${activeIndex === index ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                    style={{
                      clipPath: "polygon(50% 0, 66% 26%, 98% 35%, 76% 57%, 79% 91%, 50% 70%, 21% 91%, 24% 57%, 2% 35%, 34% 26%)"
                    }}
                  >
                    <p className="text-white text-center text-xs sm:text-sm font-semibold px-2 sm:px-4">
                      {college.label}
                    </p>
                  </div>

                  {/* Small Star Icon */}
                  <div className="absolute -top-1 -right-1 text-orange-500 z-10">
                    <svg width="20" height="20" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5446 7.27036C15.8055 7.55433 14.3327 12.499 14.6627 13.5833C14.9419 14.5008 18.4568 16.9887 19.0325 18.1407L12.5796 19.1217L9.96502 24.8516C8.94829 23.9158 7.74504 19.6757 6.8081 19.0905C5.79137 18.4559 1.81719 18.5183 0.43927 18.1407C1.00316 16.8984 4.79405 14.5642 5.05497 13.579C5.35255 12.456 3.88191 8.7257 4.16008 7.26929C4.36278 7.04018 9.00652 10.0036 9.63725 10.0444C10.6227 10.1079 15.26 6.95736 15.5468 7.26929L15.5446 7.27036Z" fill="#F47D07" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      <section className="py-16 bg-gray-50">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Got Any Questions?</p>
          <h2 className="text-3xl font-bold">We've Got Answers.</h2>
        </div>

        {/* FAQ Grid Container */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => handleFaqClick(1)}
                >
                  <h3 className="text-lg font-semibold">1. What services does Graavitons offer?</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === 1 ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <p className="text-gray-600">
                    Our comprehensive services include web development, mobile app development, UI/UX design, and digital transformation solutions.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => handleFaqClick(2)}
                >
                  <h3 className="text-lg font-semibold">2. How can I collaborate with Graavitons for my project?</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === 2 ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <p className="text-gray-600">
                    Contact us through our website or email, and our team will schedule a consultation to discuss your project requirements.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => handleFaqClick(3)}
                >
                  <h3 className="text-lg font-semibold">3. What industries do you cater to?</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === 3 ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <p className="text-gray-600">
                    We serve various industries including healthcare, education, finance, retail, and technology sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => handleFaqClick(4)}
                >
                  <h3 className="text-lg font-semibold">4. Do you offer customized software solutions?</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === 4 ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === 4 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <p className="text-gray-600">
                    Yes, we specialize in creating fully customized software solutions tailored to your business needs.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => handleFaqClick(5)}
                >
                  <h3 className="text-lg font-semibold">5. What technologies do you use in your projects?</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === 5 ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === 5 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <p className="text-gray-600">
                    We use modern technologies including React, Node.js, Python, and various cloud platforms.
                  </p>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => handleFaqClick(6)}
                >
                  <h3 className="text-lg font-semibold">6. How do you ensure project timelines and quality?</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === 6 ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === 6 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <p className="text-gray-600">
                    We follow agile methodologies and have strict quality control processes in place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-4 relative">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-orange-500 font-medium mb-2">Happy Students & Parents</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              " We love our children and they Love us too! "
            </h2>
          </div>

          {/* Swiper Container with padding for arrows */}
          <div className="relative px-2 md:px-10">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
              className="relative"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gray-50 p-8 rounded-lg h-full flex flex-col min-h-[320px]">
                    {/* Quote Mark */}
                    <div className="text-blue-600 text-4xl font-serif mb-4">
                      <FaQuoteLeft className="text-blue-600 text-2xl mb-2" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${index < testimonial.rating
                            ? 'text-orange-400'
                            : 'text-gray-300'
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 flex-grow mb-6 text-base leading-relaxed">
                      {testimonial.text}
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons - Updated positioning */}
            <button
              className="prev-btn absolute top-1/2 -translate-y-1/2 
                -left-2 md:-left-5 
                w-8 h-8 md:w-10 md:h-10 
                flex items-center justify-center 
                rounded-full border border-blue-600 
                text-blue-600 hover:bg-blue-50 
                transition-colors bg-white
                z-10"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="next-btn absolute top-1/2 -translate-y-1/2 
                -right-2 md:-right-5 
                w-8 h-8 md:w-10 md:h-10 
                flex items-center justify-center 
                rounded-full border border-blue-600 
                text-blue-600 hover:bg-blue-50 
                transition-colors bg-white
                z-10"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>



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


      <motion.section
        className="bg-blue-800 max-w-5xl relative z-2 mx-auto text-white text-center py-10 px-6 md:px-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Get one week <span className="text-white">FREE TRIAL CLASS</span> for your child
        </h2>
        <p className="mt-2 text-sm md:text-base">
          We will give you a refreshing learning environment for your kid
        </p>

        <button
        
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          For Enquiry
        </button>
      </motion.section>





    </div>
  )
}

export default HomePage
