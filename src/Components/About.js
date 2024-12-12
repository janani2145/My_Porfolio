
import React from "react";
import { motion } from "framer-motion";
import imge from "../assets/MyImage3.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => (
  <section id="about" className="py-20 bg-black">
    <motion.div
      className="container mx-auto text-center px-4 py-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
      viewport={{ once: false, amount: 0.2 }} // Triggers animation when the element is 20% visible
      transition={{ duration: 0.5 }}
    >
      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 mt-5">
        {/* Left Section - Text Content */}
        <motion.div
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of the element is in view
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl text-white font-bold mb-4">
            Hello, <span className=" text-teal-400">I'm Janani</span>
          </h1>
          <h2 className="text-3xl text-gray-100 font-semibold mb-4">
            Frontend Developer
          </h2>
          <p className="text-xl leading-relaxed text-gray-300 mb-6">
            I specialize in creating stunning, responsive interfaces that blend
            design with functionality. Let’s create something incredible
            together!
          </p>
          {/* Contact Button */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Contact Me
            </button>
            <a
              href="/path-to-your-resume.pdf" // Update with the link to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              View Resume
            </a>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400  hover:text-white transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="lg:w-1/2 w-full"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <img
            className="w-80 mx-auto rounded-full shadow-lg"
            src={imge}
            alt="Profile"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;

