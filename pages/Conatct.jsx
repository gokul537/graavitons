// pages/contact.jsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import hero from "@/assets/about/hero.png";
import Image from 'next/image';
import Link from 'next/link';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
    }
  };

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

 
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-orange-500 text-sm font-semibold">
            Get Started
          </span>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            Get in touch with us. We're here to assist you.
          </h1>
        </motion.div>

        {/* Status Message */}
        {submitStatus.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center p-4 mb-6 rounded-md ${
              submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-gray-300 rounded-md outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-gray-300 rounded-md outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label 
              htmlFor="phone" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-gray-300 rounded-md  outline-none transition-colors"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-b border-gray-300 rounded-md outline-none transition-colors resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 font-medium ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Leave us a Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>



    <section className="relative py-16 px-4 md:px-8 bg-gray-50">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/path-to-your-pattern.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <span className="text-gray-600 font-medium">Contact Info</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              We are always happy to assist you
            </h2>
          </motion.div>

          {/* Middle Column - Head Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="font-bold text-lg mb-2">Head Office</h3>
            <div className='h-[5px] bg-black w-[50px] mb-4'></div>
            
            <div className="space-y-3">
              <p className="text-[#000000] font-bold text-lg">graavitons@gmail.com</p>
              <p className="text-[#000000] font-bold text-md">+91 8778984516</p>
              <p className="text-[#000000] text-sm">
                64A, Sakthi Nagar,<br />
                Gandhigramam South, Karur - 639<br />
                004
              </p>
            </div>

            <Link 
              href="https://maps.google.com" 
              target="_blank"
              className="inline-flex items-center text-[#02399E] mt-4 hover:text-[#02399E] transition-colors"
            >
              View in Map
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right Column - Branch Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=""
          >
            <h3 className="font-bold text-lg mb-2">Branch Office</h3>
            <div className='h-[5px] bg-black w-[50px] mb-4'></div>
            
            <div className="space-y-3">
              <p className="text-[#000000] font-bold text-lg">graavitons@gmail.com</p>
              <p className="text-[#000000] font-bold text-md">+91 8778984516</p>
              <p className="text-[#000000] text-sm">
                298, Sengunthaapuram 2nd cross,<br />
                1st floor Anar Fabrics Opp to<br />
                professional courier Karur<br />
                -639002.
              </p>
            </div>

            <Link 
              href="https://maps.google.com" 
              target="_blank"
              className="inline-flex items-center text-[#02399E] mt-4 hover:text-[#02399E] transition-colors"
            >
              View in Map
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Contact;















