'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import One from "@/assets/home/1.webp";
import Two from "@/assets/home/2.webp";
import Three from "@/assets/home/3.webp";
import { FaCalendarDays } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

const courses = [
    {
        id: 1,
        title: 'NEET/JEE EVENING PROGRAMME',
        description: 'For Grade 11 and 12 Students.',
        subjects: 'Physics, Chemistry, Biology, Mathematics.',
        duration: 'One Academic year',
        rating: '4.5/5 Star',
        students: '13K Students',
        image: One,
    },
    {
        id: 2,
        title: 'FOUNDATION PROGRAMME',
        description: 'For Grade-6 to 10 Students.',
        subjects: 'Physics, Chemistry, Biology, Mathematics, Vedic Mathematics.',
        duration: 'One Academic year',
        rating: '4.3/5 Star',
        students: '6K Students',
        image: Two,
    },
    {
        id: 3,
        title: 'NEET-REPEATERS PROGRAMME',
        description: 'For Grade-6 to 10 Students.',
        subjects: 'Physics, Chemistry, Biology',
        duration: 'One Academic year',
        rating: '4.7/5 Star',
        students: '12K Students',
        image: Three,
    },
    {
        id: 4,
        title: 'NEET-REPEATERS PROGRAMME',
        description: 'For Grade-6 to 10 Students.',
        subjects: 'Physics, Chemistry, Biology',
        duration: 'One Academic year',
        rating: '4.7/5 Star',
        students: '12K Students',
        image: One,
    },
];

const CourseSlider = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto pt-10">
            {/* Swiper Buttons */}
            <div className="absolute -top-0 md:-top-14 right-5 flex gap-3 z-10">
                <button className="swiper-button-prev-custom bg-white p-2 rounded-full shadow-md">
                    <ChevronLeft size={24} />
                </button>
                <button className="swiper-button-next-custom bg-white p-2 rounded-full shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Swiper Container */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },  
                    768: { slidesPerView: 2 },  
                    1024: { slidesPerView: 3 },
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                className="mt-5"
            >
                {courses.map((course) => (
                    <SwiperSlide key={course.id} className="flex justify-center">
                        <div className="w-full sm:w-[360px] h-[450px] bg-white rounded-lg shadow-md flex flex-col">
                            {/* Image Section */}
                            <div className="h-[180px]">
                                <Image src={course.image} alt={course.title} width={360} height={180} className="rounded-t-lg w-full h-full object-cover" />
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold">{course.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                                
                                <p className="text-md text-black-500 flex gap-2 items-center mt-3">
                                    <LiaBookSolid size={24} className="text-[#F47D07]" />
                                    {course.subjects}
                                </p>
                                
                                <p className="text-md text-black-500 flex gap-2 items-center mt-3">
                                    <FaCalendarDays size={20} className="text-[#F47D07]" />
                                    {course.duration}
                                </p>

                                <p className="text-md font-semibold flex gap-2 items-center mt-4">
                                    <SlLike size={20} className="text-[#F47D07]" />
                                    {course.rating}
                                </p>

                                {/* Buttons */}
                                <div className="flex justify-between items-center gap-2 mt-auto">
                                    <button className="w-full bg-orange-500 text-white py-2 flex items-center justify-center gap-1.5 rounded-md">
                                        <FaWhatsapp size={20} /> Enquire Now
                                    </button>
                                    <button className="w-full text-black-400 py-2 flex items-center justify-center gap-1.5">
                                        <IoPeopleOutline size={20} className="text-[#F47D07]" /> {course.students}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CourseSlider;
