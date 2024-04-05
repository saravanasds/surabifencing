import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { GrGallery } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

import logo from "../assets/home/logo2.png";
import bgHome3 from '../assets/fences/fence3.jpg';
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="px-8 lg:px-10 pb-10 pt-20 mt-10 lg:mt-0 bg-yellow-200" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${bgHome3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }}>
      <div className="flex lg:gap-4 gap-10 lg:flex-row flex-col justify-around lg:items-start items-center text-center lg:text-left">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} className="w-36 cursor-pointer" alt="logo" />
          </Link>
          <p className="text-wrap w-72 pb-4 font-bold text-black font-rubik">
            Surabhi Fencing proudly presents a diverse range of fencing options tailored to meet your specific needs. Discover the perfect solution for your property.
          </p>
          
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 items-start lg:items-start">
          <h3 className="text-2xl font-extrabold uppercase text-[#FF4D30] " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Our Other Links</h3>

          <ul className="flex flex-col gap-2 text-xl font-rubik">
            <li className="hover:text-[#FF4D30] cursor-pointer"><Link to="/" onClick={scrollToTop}><div className="flex items-center gap-2">< IoHomeOutline />Home</div></Link></li>
            <li className="hover:text-[#FF4D30] cursor-pointer"><Link to="/about" onClick={scrollToTop}><div className="flex items-center gap-2">< MdOutlineLocalLibrary />About</div></Link></li>
            <li className="hover:text-[#FF4D30] cursor-pointer"><Link to="/vehical-models" onClick={scrollToTop}><div className="flex items-center gap-2">< MdOutlineProductionQuantityLimits />Products</div></Link></li>
            <li className="hover:text-[#FF4D30] cursor-pointer"><Link to="/our-team" onClick={scrollToTop}><div className="flex items-center gap-2">< GrGallery />Gallery</div></Link></li>
            <li className="hover:text-[#FF4D30] cursor-pointer"><Link to="/testimonials" onClick={scrollToTop}><div className="flex items-center gap-2">< GoCodeReview />Testimonial</div></Link></li>
            <li className="hover:text-[#FF4D30] cursor-pointer"><Link to="/contact" onClick={scrollToTop}><div className="flex items-center gap-2">< MdOutlineContactSupport />Contact us</div></Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        {/* <div className="flex flex-col items-start gap-4 lg:items-start">
          <h3 className="text-2xl font-extrabold uppercase text-[#FF4D30] " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Working Hours</h3>
          <ul className="flex flex-col  gap-2 items-start font-rubik">
            <li><span className="font-bold"> Mon- Fri </span>: 9:00AM - 9:00PM</li>
            <li><span className="font-bold"> Sat </span>: 9:00AM - 19:00PM</li>
            <li><span className="font-bold"> Sun </span>: Closed</li>
          </ul>
        </div> */}

        {/* Contact Details */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold uppercase text-[#FF4D30] " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >Further Enquiry</h3>
          <a href="/" className="flex items-center gap-2 ">
            <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 hover:text-[#FF4D30]">
            <FaPhoneAlt/><p>+91-8668006976</p>
            </div>
            <div className="flex items-center gap-2 hover:text-[#FF4D30]">
            <FaPhoneAlt/><p>+91-9042506976</p>
            </div>
            </div>
          </a>
          <a href="/" className="flex items-center gap-2 hover:text-[#FF4D30]">
            <MdEmail />
            <p>contact@Surabhifencing.com</p>
          </a>
          {/*  */}
          <input
            className="border rounded py-4 px-2 outline-none bg-[#f8f8f8]"
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="w-full rounded py-3 px-6 bg-[#FF4D30] hover:bg-red-400 text-black uppercase font-extrabold tracking-wider shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center text center opacity-20 pt-10">
        <p>❤️ ak</p>
      </div>
      {/* <div className="flex flex-row justify-center items-center text-black font-bold w-full pt-5">
        <span className="flex items-center gap-2">Copyright 2024<div className="flex items-center gap-2 text-red-800">< FaRegCopyright/>Surabhi Fencing</div></span>
      </div> */}
      <div className="text-black font-bold w-full text-center pt-5">Copyright 2024 <span>&#169;</span><span className="text-red-900"> Surabhi</span> Fencing</div>
    </div>
  );
}
