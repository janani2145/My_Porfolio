
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className={`header-wrapper ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      } fixed top-0 left-0 w-full transition-all duration-300 z-50`}
    >
      <nav className="flex justify-between items-center px-6 py-4 mx-auto">
        {/* Logo Section */}
        <div className="text-white font-bold text-xl tracking-wide lg:ps-4">
          PORTFOLIO
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-white cursor-pointer" onClick={handleShow}>
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </div>

        {/* Desktop Navigation Links (Centering) */}
        <ul className="hidden lg:flex justify-center items-center space-x-6 w-full">
          <li>
            <a
              href="#about"
              className="text-white hover:text-pink-500 transition-colors duration-300 font-bold"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-pink-500 transition-colors duration-300 font-bold"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-pink-500 transition-colors duration-300 font-bold"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-pink-500 transition-colors duration-300 font-bold"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Button at the end (far right) */}
        <div className="hidden lg:flex pe-4">
  <button className="px-6 py-2 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all text-center min-w-[150px]">
    Get in Touch
  </button>
</div>
      </nav>

      {/* Offcanvas Menu */}
      <div
        className={`${
          show ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <CgCloseR className="text-3xl cursor-pointer" onClick={handleClose} />
        </div>
        <ul className="mt-6 space-y-6 px-6">
          <li>
            <a
              href="#about"
              onClick={handleClose}
              className="text-lg flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
            >
              About Me <IoIosArrowRoundForward className="text-pink-500" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleClose}
              className="text-lg flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
            >
              Projects <IoIosArrowRoundForward className="text-pink-500" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleClose}
              className="text-lg flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
            >
              Contact <IoIosArrowRoundForward className="text-pink-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
