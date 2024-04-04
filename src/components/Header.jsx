import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/home/logo.png";
import logo1 from "../assets/home/logo1.png";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick() {
    if (isMenuOpen) {
      toggleMenu(); // Close the menu when a link is clicked on smaller screens
    }
  }

  return (
    <header className="w-full px-4 lg:px-20 pt-6 font-rubik bg-initial absolute bg-white bg-opacity-20 backdrop-blur-md backdrop-filter backdrop-blur-md p-4 rounded-md shadow-lg">
      
      <nav className="flex justify-between items-center ">

        {/* logos */}
        <div className="flex space-x-4">
          <a href="/">
            <img src={logo} className="w-36 cursor-pointer" alt="logo" />
          </a>

          <a href="/">
            <img src={logo1} className="w-36 cursor-pointer" alt="logo" />
          </a>
        </div>

        {/* navbar */}
        <div className="hidden lg:block font-medium"> 
          <ul className="flex gap-6 items-center text-2xl ">
            <li className="hover:text-[#FF4D30] ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#FF4D30]">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#FF4D30]">
              <Link to="/vehical-models">Products</Link>
            </li>
            <li className="hover:text-[#FF4D30]">
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li className="hover:text-[#FF4D30]">
              <Link to="/our-team">Gallery</Link>
            </li>
            <li className="hover:text-[#FF4D30]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>


        <div className="flex gap-6 items-center font-medium">
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden text-red-900 font-bold text-4xl cursor-pointer hover:text-yellow-500 pr-5 "
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>


      <Transition
        show={isMenuOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref}
            className="flex flex-col gap-6 w-3/4 h-[100vh] fixed top-0 left-0 lg:p-14 p-3 rounded-b-md bg-green-700 backdrop-blur-sm shadow-md lg:hidden text-center font-medium"
          >
            <div
              className="border rounded px-10 py-4 text-xl font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/about">About</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/">Products</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/testimonials">Testimonial</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/">Gallery</Link>
            </div>
            <div
              className="border rounded px-10 py-4 text-xl font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </Transition>


      <Outlet />
    </header>
  );
}
