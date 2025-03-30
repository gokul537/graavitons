"use client";
import { motion } from "framer-motion";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import hero from "@/assets/about/hero.png";
import Image from 'next/image';
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import TRAINING from "@/assets/about/trainning.png"
import imgone from "@/assets/about/img1.png"
import imgtwo from "@/assets/about/img2.png"
import topabout from "@/assets/about/top-about.png"
import CEO1 from "@/assets/about/ceo.png"
import CEO2 from "@/assets/about/ceotwo.png"
import { FaTwitter } from "react-icons/fa";




const progressData = [
  { label: "Students Mentored", value: 3000, percentage: 80 },
  { label: "Success Rate In Competitive Exams", value: "95%", percentage: 95 },
  { label: "Total Enrolled Students", value: "10,000+", percentage: 100 },
];

const educationCards = [
  {
    icon: "📚", // Replace with actual icon
    title: "Innovative Teaching Methodology",
    description:
      "We empower educators with modern teaching techniques designed to simplify complex concepts, engage students, and encourage critical thinking. Our methodologies create an interactive and inspiring learning environment.",
  },
  {
    icon: "🎓",
    title: "Advanced Training Techniques",
    description:
      "Our expert-led training programs equip teachers and students with tools to excel. Integrating technology makes learning more effective.",
  },
  {
    icon: "📜",
    title: "Comprehensive Testing",
    description:
      "Gravitons provides well-structured and customized test papers to challenge students and prepare them for excellence.",
  },
  {
    icon: "📜",
    title: "Comprehensive Testing",
    description:
      "Gravitons provides well-structured and customized test papers to challenge students and prepare them for excellence.",
  },
  {
    icon: "📜",
    title: "Comprehensive Testing",
    description:
      "Gravitons provides well-structured and customized test papers to challenge students and prepare them for excellence.",
  },
];


const leaders = [
  {
    name: "Prof. A. Parameswari, M.Sc., M.Phill, M.Ed",
    title: "TNSCST - Young Scientist Fellow, CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
  },
  {
    name: "Prof. R. Natarajan, M.Sc., Ph.D (Brazil)",
    title: "TNSCST - Young Scientist Fellow, CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
  },
];

const mobilleaders = [
  {
    name: "Prof. A. Parameswari, M.Sc., M.Phill, M.Ed",
    title: "TNSCST - Young Scientist Fellow, CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    image: CEO1,
  },
  {
    name: "Prof. R. Natarajan, M.Sc., Ph.D (Brazil)",
    title: "TNSCST - Young Scientist Fellow, CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    image: CEO2,
  },
];
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
        <div className='max-w-7xl mx-auto pt-6 pb-6 p-5'>
          <h2 className='text-center text-2xl font-semibold'>Who We Are</h2>

          <p className='text-center text-md mt-4'>Graavitons is Karur based Entrance Exam coaching institute. Started in the year 2013 We are providing coaching classes for NEET, JEE, CUET, NATA, IPMAT, Foundation classes from 6th std to 10th std. We are conducting Integrated program NEET & JEE course for 11th and 12th std. CBSE students at Sri Sankara Vidyalayaa Senior Secondary School, Karur. We are a team of 23 faculties with vast experience in entrance coaching.</p>
        </div>

      </section>

      <section className="py-5 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="block md:hidden text-center  left-[42%] ">
            <p className="text-orange-500 font-medium ">Since 200hh0</p>
            <h2 className="text-3xl font-bold">Our Journey</h2>
          </div>


          {/* Journey Cards Container */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            {/* Dotted Lines - Hidden on Mobile */}
            <div className="hidden md:block text-center absolute left-[42%] -mt-[250px]">
              <p className="text-orange-500 font-medium ">Since 200hh0</p>
              <h2 className="text-3xl font-bold">Our Journey</h2>
            </div>
            <div className="hidden md:block absolute w-full h-full">
              {/* First Curve */}


              <svg width="264" className="absolute left-[15%] top-[100%]  transform -translate-y-1/2" height="174" viewBox="0 0 264 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M196.113 129.624L195.723 127.318C200.408 126.525 205.048 125.428 209.516 124.053L210.203 126.288C205.637 127.692 200.897 128.815 196.11 129.625L196.113 129.624ZM181.717 131.137C176.931 131.341 172.061 131.251 167.247 130.871L167.432 128.539C172.153 128.912 176.923 128.999 181.617 128.8L181.717 131.137ZM152.919 128.875C148.187 127.926 143.48 126.68 138.93 125.177L139.663 122.957C144.125 124.429 148.742 125.649 153.38 126.581L152.919 128.873L152.919 128.875ZM125.491 119.795C121.099 117.708 116.843 115.334 112.842 112.745L114.115 110.783C118.029 113.32 122.194 115.641 126.494 117.685L125.491 119.798L125.491 119.795ZM101.258 104.043C97.5758 100.847 94.1405 97.3839 91.0473 93.7524L92.8265 92.2356C95.8456 95.7786 99.1975 99.1568 102.79 102.279L101.256 104.046L101.258 104.043ZM73.1999 86.1987C68.3949 86.5019 63.5111 86.3989 58.6872 85.8924L58.9315 83.5669C63.6274 84.0591 68.3798 84.1582 73.0551 83.8631L73.202 86.1959L73.1999 86.1987ZM87.563 84.0466L87.0171 81.7742C87.8199 81.581 88.6255 81.3726 89.4128 81.1568C93.4017 80.0634 97.0515 78.6986 100.264 77.0984L101.305 79.1906C97.9592 80.8564 94.1664 82.2756 90.0325 83.409C89.2213 83.6306 88.3894 83.8451 87.5651 84.0438L87.563 84.0466ZM82.743 81.7937C80.217 77.1104 78.5559 72.4672 77.8119 67.9902L80.1192 67.6074C80.8227 71.8282 82.3982 76.229 84.8012 80.685L82.7434 81.7962L82.743 81.7937ZM44.4239 83.1908C39.7236 81.8868 35.1458 80.1855 30.8128 78.1316L31.8152 76.0191C36.0266 78.0158 40.477 79.6707 45.0487 80.9382L44.4239 83.1908ZM113.098 70.4205L111.342 68.8771C111.997 68.1316 112.611 67.3497 113.17 66.5559C115.202 63.6582 116.499 60.2404 116.921 56.6728L119.243 56.9471C118.776 60.8989 117.337 64.6845 115.085 67.8969C114.48 68.7614 113.81 69.6102 113.1 70.4201L113.098 70.4205ZM18.3045 70.741C17.0111 69.8048 15.738 68.819 14.5187 67.8108C11.6695 65.4541 9.38523 63.1817 7.53865 60.8608L9.36808 59.4036C10.933 61.3687 12.8401 63.3083 15.1835 65.3132C19.0752 63.4159 22.5352 60.6873 25.0141 57.5446L26.8503 58.9929C24.3607 62.147 20.9728 64.9149 17.1547 66.9328C17.9793 67.5885 18.8237 68.2266 19.6779 68.846L18.3069 70.7406L18.3045 70.741ZM81.0678 54.0374L78.8647 53.2526C80.4451 48.8176 83.6878 44.6698 87.9958 41.5762L89.359 43.4755C85.4324 46.2937 82.49 50.0442 81.0678 54.0374ZM113.715 44.0145C113.21 43.3883 112.65 42.8045 112.043 42.2766C109.371 39.9496 105.904 38.7825 102.013 38.9044L101.939 36.5663C106.431 36.4252 110.456 37.7911 113.578 40.5147C114.286 41.1322 114.945 41.816 115.533 42.549L113.712 44.0148L113.715 44.0145ZM31.4162 44.8356L29.0964 45.1288L29.0755 44.9786C28.5016 40.8557 25.6296 36.8083 21.7565 34.6706L22.8866 32.6243C27.4525 35.1446 30.7116 39.7555 31.3937 44.656L31.4186 44.8352L31.4162 44.8356ZM4.32609 47.0749L1.98923 47.1038C1.92494 41.7272 4.27805 36.5278 8.13122 33.5371L9.56617 35.3844C6.27906 37.9358 4.27028 42.4157 4.32885 47.077L4.32609 47.0749Z" fill="black" />
                <path d="M242.931 114.863C243.388 115.24 242.194 123.075 242.926 124.655C243.545 125.992 249.42 129.033 250.54 130.664L240.929 133.523L238.165 142.795C236.419 141.586 233.691 135.39 232.141 134.698C230.46 133.948 224.426 134.884 222.25 134.601C222.845 132.592 228.118 128.238 228.307 126.683C228.522 124.912 225.494 119.547 225.609 117.272C225.869 116.881 233.562 120.406 234.53 120.335C236.043 120.223 242.432 114.447 242.934 114.861L242.931 114.863Z" fill="#F47D07" />
                <path d="M255.605 102.332C256.079 102.814 255.203 106.926 255.763 108.153C256.217 109.147 259.453 110.589 260.162 111.743C258.832 112.11 255.533 112.544 254.65 113.429C254.193 113.887 252.991 118.85 252.464 118.558C252.073 117.857 249.933 114.204 249.581 114.018C248.886 113.651 244.959 113.969 243.897 114.008C243.888 112.078 247.086 110.788 247.098 109.007C247.106 107.671 245.667 105.183 245.356 103.762C245.549 103.506 249.882 105.574 250.851 105.503C252.278 105.398 254.176 102.928 255.605 102.334L255.605 102.332Z" fill="#F47D07" />
              </svg>




              <svg className="absolute right-[15%] top-[100%] transform -translate-y-1/2" width="237" height="241" viewBox="0 0 237 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M185.482 114.27L183.96 112.915C186.712 109.824 189.268 106.55 191.556 103.181L193.241 104.326C190.902 107.767 188.293 111.114 185.48 114.272L185.482 114.27ZM176.521 123.142C173.379 125.889 170.02 128.48 166.542 130.845L165.396 129.16C168.808 126.841 172.098 124.301 175.18 121.608L176.521 123.142ZM155.716 137.295C151.982 139.229 148.104 140.946 144.192 142.404L143.481 140.495C147.316 139.065 151.118 137.378 154.779 135.485L155.714 137.294L155.716 137.295ZM132.126 146.068C128.003 147.042 123.817 147.748 119.688 148.168L119.483 146.141C123.526 145.733 127.622 145.041 131.658 144.088L132.127 146.07L132.126 146.068ZM107.072 148.565C102.828 148.399 98.6066 147.917 94.5255 147.134L94.9084 145.134C98.8909 145.897 103.01 146.367 107.153 146.531L107.073 148.568L107.072 148.565ZM78.2793 151.724C75.1786 154.548 71.803 157.139 68.2483 159.423L67.1473 157.709C70.6073 155.485 73.8914 152.963 76.9083 150.215L78.2792 151.721L78.2793 151.724ZM86.8691 142.435L85.26 141.188C85.7004 140.62 86.1344 140.039 86.5519 139.463C88.6673 136.547 90.4044 133.631 91.7157 130.793L93.5638 131.647C92.197 134.603 90.3924 137.634 88.2002 140.657C87.7695 141.249 87.321 141.848 86.869 142.432L86.8691 142.435ZM82.3656 143.53C78.097 141.723 74.4381 139.473 71.4931 136.835L72.8527 135.318C75.6307 137.803 79.0993 139.936 83.1604 141.655L82.3671 143.532L82.3656 143.53ZM57.0818 165.358C53.1766 167.033 49.1382 168.371 45.0741 169.335L44.6044 167.354C48.5548 166.416 52.4813 165.116 56.2792 163.487L57.0818 165.358ZM96.8006 119.261L94.7664 119.169C94.805 118.306 94.7968 117.439 94.744 116.595C94.5459 113.519 93.5654 110.489 91.9085 107.834L93.6364 106.755C95.4718 109.696 96.5566 113.053 96.7763 116.463C96.8357 117.381 96.8431 118.323 96.8021 119.26L96.8006 119.261ZM32.5456 171.127C31.1565 171.196 29.754 171.219 28.3759 171.199C25.1554 171.149 22.3647 170.849 19.845 170.278L20.2945 168.291C22.4288 168.774 24.7819 169.053 27.467 169.139C29.0784 165.729 29.9434 161.989 29.916 158.502L31.9531 158.486C31.9795 161.986 31.1849 165.714 29.6892 169.166C30.6069 169.162 31.5285 169.135 32.4466 169.091L32.547 171.126L32.5456 171.127ZM66.1039 125.578L64.1789 126.245C62.8366 122.369 62.7807 117.783 64.0233 113.333L65.9846 113.881C64.8513 117.936 64.8948 122.089 66.1039 125.578ZM82.8324 100.978C82.1483 100.827 81.4495 100.735 80.7493 100.707C77.6652 100.581 74.6733 101.677 72.0945 103.88L70.7706 102.331C73.7467 99.7878 77.2265 98.5232 80.8328 98.6731C81.6506 98.707 82.4705 98.8131 83.2698 98.9907L82.8309 100.979L82.8324 100.978ZM27.3428 146.376L25.9259 147.839L25.8298 147.749C23.1935 145.259 19.0361 144.073 15.2389 144.73L14.8921 142.723C19.3686 141.949 24.0961 143.307 27.2297 146.266L27.3443 146.374L27.3428 146.376ZM10.1502 162.658L8.57765 163.951C5.60451 160.332 4.37098 155.516 5.36041 151.383L7.34225 151.857C6.49821 155.382 7.57372 159.522 10.1532 162.658L10.1502 162.658Z" fill="black" />
                <path d="M209.261 78.7287C209.777 78.7357 213.234 84.7117 214.592 85.3869C215.742 85.9582 221.392 84.8243 223.041 85.3226L218.067 92.5022L221.24 100.31C219.395 100.44 214.164 97.7148 212.734 98.0888C211.182 98.4949 207.592 102.419 205.958 103.413C205.268 101.722 206.48 95.8897 205.761 94.7306C204.942 93.4093 199.961 91.4128 198.8 89.804C198.763 89.3963 205.913 87.601 206.532 87.0249C207.499 86.1244 208.695 78.718 209.262 78.7256L209.261 78.7287Z" fill="#F47D07" />
                <path d="M211.048 63.306C211.632 63.3753 213.277 66.6476 214.326 67.1761C215.177 67.6044 218.162 66.8211 219.272 67.2192C218.568 68.1934 216.562 70.286 216.444 71.3692C216.383 71.9286 218.271 75.9574 217.753 76.0462C217.106 75.7821 213.661 74.4657 213.32 74.5309C212.648 74.66 210.152 77.016 209.452 77.621C208.393 76.314 209.865 73.695 208.902 72.4779C208.179 71.5656 205.847 70.6585 204.86 69.8621C204.853 69.583 208.924 68.6277 209.544 68.0516C210.456 67.2027 210.401 64.4895 211.049 63.307L211.048 63.306Z" fill="#F47D07" />
              </svg>

            </div>

            {/* Journey Cards */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8 border-b-6 border-[#F47D07] relative">
              <div className="text-5xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">The Vision Takes Flight</h3>
              <p className="text-gray-600">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8 relative border-b-6 border-[#F47D07] md:mt-[200px]">
              <div className="text-5xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Building a Strong Foundation</h3>
              <p className="text-gray-600">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8 border-b-6 border-[#F47D07] relative">
              <div className="text-5xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Shaping the Future Together</h3>
              <p className="text-gray-600">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 px-6 md:px-16 bg-[#F5F5F5] mt-48">
        <div className="max-w-7xl mx-auto  p-6 md:p-10 rounded-lg relative flex flex-col md:flex-row items-center gap-6">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src={TRAINING} // Replace with actual image
              alt="Training"
              width="100%"
              height="auto"

            />
            {/* Decorative Orange Shape */}
            <div className="absolute -z-10 top-4 left-4 w-48 h-48 border-4 border-orange-500 rotate-45"></div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold text-orange-500">
              The future ready training prepare future smart kids
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              THE NEXT LEVEL TRAINING
            </h2>
            <p className="text-gray-700 mt-4 text-sm md:text-base">
              Malcolm X told – Education is the passport to the future, for tomorrow belongs to those who prepare for it today. We believe our Indian students will rule the future world. Our training prepares them for future ready. • 92% of our students found sharp increase in self motivation in study • Burden of studying drastically reduced for 94% of our students • 100% of students feels Learning at Graavitons Addictive
            </p>

            {/* Progress Bars */}
            <div className="mt-6 space-y-4">
              {progressData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2.5 relative">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-2.5 bg-[#02399E] rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 md:px-16 bg-white ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Static Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/3"
          >
            <h2 className="text-4xl md:text-4xl font-bold">
              Continuously <br />
              <span className="text-black relative">
                Transforming Education
                <span className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500"></span>
              </span>
              <br /> at Gravitons
            </h2>
          </motion.div>

          {/* Right Auto-Scrolling Section */}
          <div className="w-full md:w-2/3">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              freeMode={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[FreeMode, Autoplay]}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {educationCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-white border-b-6 border-[#F47D07] shadow-lg p-6 rounded-lg  relative items-bottom flex flex-col min-h-[360px] justify-between"
                  >
                    <div className="p-1 ">
                      <div className="text-4xl">{card.icon}</div>
                      <h3 className="text-lg font-bold mt-2">{card.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                        {card.description}
                      </p>
                    </div>

                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>



      <section className="py-16 px-6 md:px-16  bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-2/5 mx-auto mb-8 md:mb-0"
          >
            {/* Blue Background */}
            <div className="absolute -top-10 md:-top-13 left-0 w-[70%] h-12 md:h-16 rounded-t-lg">
              <Image
                src={topabout}
                alt="Students Learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Image */}
            <div className="relative">
              <Image
                src={imgone}
                alt="Students Learning"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Label Box */}
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-0 bg-white p-5 shadow-md rounded-md max-w-[150px] md:max-w-none">
              <p className="text-blue-600 text-xs md:text-sm font-bold">
                500+ Workshops and <br /> Events Conducted Annually
              </p>
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-orange-500 text-sm font-bold uppercase">
              To Grow and Explore Student's Maximum Potential
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">Why Gravitons</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We believe that every student is unique and special. We need to understand the
              student's interest and potential and train them accordingly. It is a teacher's
              duty to find the right process and method to teach a particular student.We believe that every student is unique and special. We need to understand the
              student's interest and potential and train them accordingly. It is a teacher's
              duty to find the right process and method to teach a particular student.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Gravitons bridge this gap by identifying each student's potential. Students
              spend more time in difficult subjects and can clarify doubts anytime.We believe that every student is unique and special. We need to understand the
              student's interest and potential and train them accordingly. It is a teacher's
              duty to find the right process and method to teach a particular student.
            </p>
          </motion.div>
        </div>
      </section>



      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-orange-500 text-sm font-bold uppercase">
              WE ARE TEACHING EXPERT AND PASSIONATE
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              Our experienced and specialist team behind the training
            </h2>
            <ul className="text-gray-600 mt-4 space-y-3">
              <li>
                1. Gravitons training is Designed & Developed by Dr. R. Natarajan, Phd, State university of São Paulo, Brazil.
              </li>
              <li>
                2. Class room training is taken care of by teachers with 15+ years of experience in teaching and preparing students for competitive exams.
              </li>
              <li>
                3. Student’s assessment, ratings, and motivation will be handled directly by the founder and mentor of Gravitons.
              </li>
              <li>
                4. Student’s doubts will be cleared through teacher guidance and group discussions with senior mentors.
              </li>
            </ul>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/2"
          >
            {/* Blue Background Box */}
            <div className="absolute -top-10 md:-top-13 right-0 w-[70%] h-12 md:h-16 rounded-t-lg">
              <Image
                src={topabout}
                alt="Students Learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Image */}
            <div className="relative">
              <Image
                src={imgtwo}
                alt="Students Learning"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Label Box */}
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-0 bg-white p-5 shadow-md rounded-md max-w-[150px] md:max-w-none">
              <p className="text-blue-600 text-xs md:text-sm font-bold">
                500+ Workshops and <br /> Events Conducted Annually
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      <section className="py-10 px-5 md:px-20 bg-gray-100">
        <h2 className="text-center text-orange-500 uppercase text-sm font-semibold">Our Team Leaders</h2>
        <h1 className="text-center text-2xl md:text-3xl font-bold mt-2">OUR MANAGEMENT</h1>
        <div className="hidden md:block">
          <div className=" max-w-7xl mx-auto flex gap-2">
            <div className="w-1/2 ">
              <div className="container mx-auto px-5 py-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left Profile - Image First, Then Text */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={CEO1}
                      alt="Prof. A. Parameswari"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="mt-4 relative">
                      {/* Blue Line */}
                      <div className="absolute top-8 -right-11 w-15 h-1 bg-blue-600"></div>
                      <h3 className="text-sm font-bold">Prof. A. Parameswari, M.Sc., M.Phill, M.Ed</h3>
                      <p className="text-sm text-gray-500">TNSCST - Young Scientist Fellow, CEO</p>
                    </div>
                  </motion.div>

                  {/* Right Profile - Text First, Then Image */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="mb-4 relative">
                      {/* Blue Line */}
                      <div className="absolute top-6 -left-15 w-15 h-1 bg-blue-600"></div>
                      <h3 className="text-sm font-bold">Prof. R. Natarajan, M.Sc., Ph.D (Brazil)</h3>
                      <p className="text-sm text-gray-500">TNSCST - Young Scientist Fellow, CEO</p>
                    </div>
                    <Image
                      src={CEO2}
                      alt="Prof. R. Natarajan"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className=" w-1/2  p-5 mt-10 md:mt-0">
              <div className="container mx-auto px-5 py-10">
                {/* Section Title */}
                <h2 className="text-2xl font-bold mb-6">Creative Leaders</h2>

                {/* Leader Profiles */}
                <div className="space-y-8">
                  {leaders.map((leader, index) => (
                    <motion.div
                      key={index}
                      className=" p-6 rounded-lg "
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-lg font-bold">{leader.name}</h3>
                      <p className="text-gray-500">{leader.title}</p>
                      <p className="text-sm text-gray-600 mt-3">{leader.description}</p>

                      {/* Social Media Icons */}
                      <div className="flex space-x-4 mt-4 text-blue-600">
                        <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-800" />
                        <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                        <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-600" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>






        {/* mobile  */}

        <div className="container mx-auto px-5 py-10 block md:hidden">

          {/* Leader Cards */}
          <div className="space-y-10 ">
            {mobilleaders.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image Section */}
                <motion.div
                  className="w-full md:w-1/3 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={250}
                    height={250}
                    className="rounded-lg object-cover shadow-md"
                  />
                </motion.div>

                {/* Text Section */}
                <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <h3 className="text-lg font-bold">{leader.name}</h3>
                  <p className="text-gray-500">{leader.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{leader.description}</p>

                  {/* Social Media Icons */}
                  <div className="flex justify-center md:justify-start space-x-4 mt-4 text-blue-600">
                    <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-800" />
                    <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                    <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-600" />
                  </div>
                </div>
              </motion.div>
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
    




    </>

  )
}

export default About
