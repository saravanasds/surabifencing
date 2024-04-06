import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/home/logo.png";
import logo1 from "../assets/home/logo1.png";

import "../index.css"

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
    <header className="w-full px-8 lg:px-20 pt-6 font-rubik bg-initial absolute bg-black bg-opacity-20 md:backdrop-blur-md backdrop-filter p-4 rounded-md shadow-lg">
      
      <nav className="flex justify-between items-center ">

        {/* logos */}
        <div className="flex justify-center items-center h-full space-x-4">
          <a href="/">
            <img src={logo} className="w-24 lg:w-36 cursor-pointer" alt="logo" />
          </a>

          <a href="/">
            <img src={logo1} className="w-28 lg:w-32 cursor-pointer" alt="logo" />
          </a>
        </div>

        {/* navbar */}
        <div className="hidden lg:block font-medium"> 
          <ul className="flex gap-6 items-center text-lg font-bold">
            <li className=" hover:text-[#6B231C] " style={{
  textShadow: '1px 1px 2px white, -1px -1px 2px white, -1px 1px 2px white, 1px -1px 2px white'  
}}
>      <NavLink exact  to="/" activeClassName="text-[#ffd930]">Home</NavLink >
            </li>
            <li className="hover:text-[#6B231C]">
              <NavLink  to="/about" activeClassName="text-[#ffd930]" style={{
  textShadow: '1px 1px 2px white, -1px -1px 2px white, -1px 1px 2px white, 1px -1px 2px white'  
}}>About</NavLink >
            </li>
            <li className="hover:text-[#6B231C]">
              <NavLink   to="/vehical-models" activeClassName="text-[#ffd930]" style={{
  textShadow: '1px 1px 2px white, -1px -1px 2px white, -1px 1px 2px white, 1px -1px 2px white'  
}}>Products</NavLink >
            </li>
            <li className="hover:text-[#6B231C]">
              <NavLink  to="/testimonials" activeClassName="text-[#ffd930]" style={{
  textShadow: '1px 1px 2px white, -1px -1px 2px white, -1px 1px 2px white, 1px -1px 2px white'  
}}>Testimonials</NavLink >
            </li>
            <li className="hover:text-[#6B231C]">
              <NavLink  to="/our-team" activeClassName="text-[#ffd930] " style={{
  textShadow: '1px 1px 2px white, -1px -1px 2px white, -1px 1px 2px white, 1px -1px 2px white'  
}}>Gallery</NavLink >
            </li>
            {/* <li className="hover:text-[#ffd930]">
              <NavLink  to="/contact" activeClassName="text-[#ffd930]">Contact</NavLink >
            </li> */}
          </ul>
        </div>

        <button><Link  to="/contact" activeClassName="text-[#ffd930]" className="bg-[#6B231C] text-white border-white hover:bg-[#FECC00] hidden lg:block hover:text-black duration-500 font-bold rounded px-8 py-2 ">Contact</Link ></button>

        {/* toggle */}
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
          className="flex flex-col justify-between    fixed top-0 left-0 lg:p-14 p-3 rounded-b-md bg-[#e9e9e9] backdrop-blur-sm shadow-md lg:hidden text-center font-medium"
        >
          <div
            className="border rounded px-10 py-4 text-xl font-bold bg-gray-400 hover:text-yellow-500 hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
            onClick={handleLinkClick} 
          >
            <NavLink to="/" className="px-10 py-4">Home</NavLink>
          </div>
          <div
            className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-yellow-500 hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
            onClick={handleLinkClick}
          >
            <NavLink to="/about" className="px-10 py-4">About</NavLink>
          </div>
          <div
            className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-yellow-500 hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
            onClick={handleLinkClick}
          >
            <NavLink to="/vehical-models" className="px-10 py-4 ">Products</NavLink>
          </div>
          <div
            className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-yellow-500 hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
            onClick={handleLinkClick}
          >
            <NavLink to="/testimonials" className="px-10 py-4">Testimonial</NavLink>
          </div>
          <div
            className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-yellow-500 hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
            onClick={handleLinkClick}
          >
            <NavLink to="/our-team" className="px-10 py-4 ">Gallery</NavLink>
          </div>
          <div
            className="border rounded-lg px-10 py-4 text-xl bg-[#6B231C] text-white font-bold hover:text-yellow-500 hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
            onClick={handleLinkClick}
          >
            <Link to="/contact"className="px-10 py-4 ">Contact</Link>
          </div>
        </div>
        )}
      </Transition>

      <Outlet />
    </header>
  );
}


// 

{/* 
<div ref={ref}
            className="flex flex-col justify-between  w-3/4  fixed top-0 left-0 lg:p-14 p-3 rounded-b-md bg-[#e9e9e9] backdrop-blur-sm shadow-md lg:hidden text-center font-medium"
          >
            <div
              className="border rounded px-10 py-4 text-xl font-bold bg-gray-400 hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick} 
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/about">About</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/vehical-models">Products</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/testimonials">Testimonial</Link>
            </div>
            <div
              className="border  rounded px-10 py-4 text-xl bg-gray-400 font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/our-team">Gallery</Link>
            </div>
            <div
              className="border rounded-lg px-10 py-4 text-xl bg-[#6B231C] text-white font-bold hover:text-[#30ff75] hover:bg-gray-800 hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              <Link to="/contact" className="bg-black">Contact</Link>
            </div>
          </div>

*/}