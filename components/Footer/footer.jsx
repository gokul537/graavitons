"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 py-10 px-6 md:px-12 text-gray-700 -mt-11"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 pt-16 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900 flex justify-center md:justify-start"
          >
            <span className="text-orange-500">GRAA</span>VITONS
          </motion.div>
          <p className="mt-2 text-sm">
            Graavitons board, NEET & JEE coaching is interesting, practical, and result-oriented.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 mt-4 ">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-600 hover:text-blue-600">
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-600 hover:text-black">
              <FaXTwitter size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebookF size={20} />
            </motion.a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-sm ">
          <h3 className="font-bold text-gray-900">Company</h3>
          <ul className="mt-2 space-y-3">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">News & Editorials</a></li>
            <li><a href="#" className="hover:underline">Achievers</a></li>
            <li><a href="#" className="hover:underline">Videos</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

          {/* Middle Section */}
          <div className="text-sm ">
          <h3 className="font-bold text-gray-900">Trending Courses</h3>
          <ul className="mt-2 space-y-3">
            <li><a href="#" className="hover:underline">NEET</a></li>
            <li><a href="#" className="hover:underline">JEE</a></li>
            <li><a href="#" className="hover:underline">NDA</a></li>
            <li><a href="#" className="hover:underline">CUET</a></li>
            <li><a href="#" className="hover:underline">NTSE</a></li>
            <li><a href="#" className="hover:underline">CBSE</a></li>
            <li><a href="#" className="hover:underline">CAREER COUNSELLING</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-sm">
          <h3 className="font-bold text-gray-900">Contact</h3>
          <p className="mt-2">
            <strong>HEAD OFFICE</strong> <br />
            64A, Sakthi Nagar, Gandhi Gramam South, Karur - 639 004.
          </p>
          <p className="mt-2">
            <strong>BRANCH OFFICE</strong> <br />
            #74, Chella Chambers 2nd Floor, Opp - Ajantha Theater, Karur - 639001.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-sm">
        <p>Copyright © 2024 Graavitons</p>
        <p>
          A creation of <a href="#" className="font-semibold hover:underline">Leadup Technologies</a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
