"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/home/Logo.svg";
import one from "@/assets/header/1.png";
import two from "@/assets/header/2.png";
import three from "@/assets/header/3.png";
import four from "@/assets/header/4.png";
import five from "@/assets/header/5.png";
import six from "@/assets/header/6.png";
import seven from "@/assets/header/7.png";
import eight from "@/assets/header/8.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-white shadow-md" : " bg-white"  ///bg-transparent
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" width={150} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className={`font-medium ${pathname === "/" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            Home
          </Link>
          <Link href="/about-us" className={`font-medium ${pathname === "/about-us" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            About
          </Link>

          {/* Dropdown Menu */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center space-x-1">
              <span className={`font-medium ${pathname.includes("/courses") ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
                Courses
              </span>
              <ChevronDown size={16} />
            </div>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -left-64 bg-white shadow-lg rounded-md w-[900px] p-4 grid grid-cols-2 gap-4"
              >
                {/* First Column */}
                <div>
                  <Link href="NeetJeeEveningProgram" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={one} alt="Networking" className="w-20 h-15 " />
                    <div>
                      <span className="text-sm font-bold">NEET/JEE EVENING PROGRAMME</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                  <Link href="NeetJeeEveningProgram" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={two} alt="NTUC" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">NEET/JEE EVENING PROGRAMME</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                  <Link href="/programs/counseling" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={three} alt="Counseling" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">NTSE</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                  <Link href="/programs/counseling" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={seven} alt="Counseling" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">CAREER COUNSELLING</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                </div>

                {/* Second Column */}
                <div>
                  <Link href="FoundationProgramme" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={four} alt="Foundation" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">FOUNDATION PROGRAMME</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                  <Link href="/programs/clat" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={five} alt="CLAT" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">CUET</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                  <Link href="/programs/case" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={six} alt="Case" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">CBSE</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                  <Link href="/programs/case" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <Image src={eight} alt="Case" className="w-20 h-15 rounded" />
                    <div>
                      <span className="text-sm font-bold">View all</span>
                      <p>For Grade 11 and 12 Students.</p>
                    </div>
                  </Link>
                </div>


              </motion.div>
            )}
          </div>

          <Link href="NewsandEditorials" className={`font-medium ${pathname === "NewsandEditorials" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            News & Editorials
          </Link>
          <Link href="Achievers" className={`font-medium ${pathname === "Achievers" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            Achievers
          </Link>
          <Link href="Videos-and-Gallery" className={`font-medium ${pathname === "Videos-and-Gallery" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            Videos & Gallery
          </Link>
          <Link href="Contact" className={`font-medium ${pathname === "Contact" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            Contact
          </Link>

          {/* Auth Buttons */}
          <Link href="/login" className={`border px-4 py-2 rounded-lg ${pathname === "/login" ? "bg-blue-100" : "hover:bg-blue-100"}`}>
            Login
          </Link>
          <Link href="/signup" className={`bg-blue-600 text-white px-4 py-2 rounded-lg ${pathname === "/signup" ? "bg-blue-700" : "hover:bg-blue-700"}`}>
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>




      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4">
          <button className="mb-4" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          <Link href="/" className={`block py-2 ${pathname === "/" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="about-us" className={`block py-2 ${pathname === "about-us" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            About
          </Link>
          {/* <div className="border-t my-2"></div> */}

          <div className="relative">
            <button className="w-full flex justify-between items-center py-2" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Courses <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <motion.div className="bg-gray-100 rounded-md py-0 text-sm">
                <Link href="NeetJeeEveningProgram" className={`block px-4 py-2 ${pathname === "NeetJeeEveningProgram" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                NEET/JEE EVENING PROGRAMME
                </Link>
                <Link href="NeetJeeEveningProgram" className={`block px-4 py-2 ${pathname === "NeetJeeEveningProgram" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                NEET/JEE EVENING PROGRAMME
                </Link>
                <Link href="/courses/data" className={`block px-4 py-2 ${pathname === "/courses/data" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                NTSE
                </Link>
                <Link href="/courses/data" className={`block px-4 py-2 ${pathname === "/courses/data" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                CAREER COUNSELLING
                </Link>
                <Link href="FoundationProgramme" className={`block px-4 py-2 ${pathname === "FoundationProgramme" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                FOUNDATION PROGRAMME
                </Link>
                <Link href="/courses/data" className={`block px-4 py-2 ${pathname === "/courses/data" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                CUET
                </Link>
                <Link href="/courses/data" className={`block px-4 py-2 ${pathname === "/courses/data" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                View all
                </Link>
              </motion.div>
            )}
          </div>

          <Link href="NewsandEditorials" className={`block py-2 ${pathname === "NewsandEditorials" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
          News & Editorials
          </Link>
          <Link href="Achievers" className={`block py-2 ${pathname === "Achievers" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
          Achievers
          </Link>
          <Link href="Videos-and-Gallery" className={`block py-2 ${pathname === "Videos-and-Gallery" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
          Videos & Gallery
          </Link>
          <Link href="Contact" className={`block py-2 ${pathname === "Contact" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          {/* <div className="border-t my-2"></div> */}

          <Link href="/login" className={`block py-2 border rounded-md text-center ${pathname === "/login" ? "bg-blue-100" : ""}`}>
            Login
          </Link>
          <Link href="/signup" className={`block py-2 bg-blue-600 text-white mt-5 rounded-md text-center ${pathname === "/signup" ? "bg-blue-700" : ""}`}>
            Sign Up
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
