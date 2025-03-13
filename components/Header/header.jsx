"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/home/Logo.svg";

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : " bg-white"  ///bg-transparent
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" width={150} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
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
                className="absolute left-0 bg-white shadow-lg rounded-md w-48 py-2"
              >
                <Link href="/courses/web" className={`block px-4 py-2 ${pathname === "/courses/web" ? "bg-blue-100" : "hover:bg-gray-100"}`}>
                  Web Development
                </Link>
                <Link href="/courses/design" className={`block px-4 py-2 ${pathname === "/courses/design" ? "bg-blue-100" : "hover:bg-gray-100"}`}>
                  UI/UX Design
                </Link>
                <Link href="/courses/data" className={`block px-4 py-2 ${pathname === "/courses/data" ? "bg-blue-100" : "hover:bg-gray-100"}`}>
                  Data Science
                </Link>
              </motion.div>
            )}
          </div>

          <Link href="/news" className={`font-medium ${pathname === "/news" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            News & Editorials
          </Link>
          <Link href="/achievers" className={`font-medium ${pathname === "/achievers" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            Achievers
          </Link>
          <Link href="/gallery" className={`font-medium ${pathname === "/gallery" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
            Videos & Gallery
          </Link>
          <Link href="/contact" className={`font-medium ${pathname === "/contact" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>
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
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
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
          <Link href="/about" className={`block py-2 ${pathname === "/about" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="border-t my-2"></div>

          <div className="relative">
            <button className="w-full flex justify-between items-center py-2" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Courses <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <motion.div className="bg-gray-100 rounded-md py-0">
                <Link href="/courses/web" className={`block px-4 py-2 ${pathname === "/courses/web" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                  Web Development
                </Link>
                <Link href="/courses/design" className={`block px-4 py-2 ${pathname === "/courses/design" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                  UI/UX Design
                </Link>
                <Link href="/courses/data" className={`block px-4 py-2 ${pathname === "/courses/data" ? "bg-blue-100" : ""}`} onClick={() => setIsOpen(false)}>
                  Data Science
                </Link>
              </motion.div>
            )}
          </div>

          <Link href="/contact" className={`block py-2 ${pathname === "/contact" ? "text-blue-600 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="border-t my-2"></div>

          <Link href="/login" className={`block py-2 border rounded-md text-center ${pathname === "/login" ? "bg-blue-100" : ""}`}>
            Login
          </Link>
          <Link href="/signup" className={`block py-2 bg-blue-600 text-white rounded-md text-center ${pathname === "/signup" ? "bg-blue-700" : ""}`}>
            Sign Up
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
