import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import bgHome from "../assets/hero/hero-bg.png";
import home from "../assets/home/home.png";

export default function Hero() {
  return (
    <div
      className="bg-no-repeat w-full h-full bg-right-top bg-contain"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <div className="flex lg:flex-row flex-col-reverse lg:h-screen  w-full px-8 lg:px-20 pt-32 ">
        <div className="flex flex-col justify-center text-center md:justify-start md:text-start py-20 flex-wrap gap-2 items-center lg:items-start">
          <p className="text-2xl font-bold">Enhance your surroundings with</p>
          <h1 className="text-[3.3rem] font-bold leading-[60px]">
            <span className="text-[#FF4D30]">Surabhi</span> Fencing
          </h1>
          <p className="text-[#706F7B] font-rubik pt-6">
            Experience Surabhi Fencing: Unrivaled quality ensuring both security and aesthetic appeal for your property. Benefit from unparalleled craftsmanship, flexible installation, and more.
          </p>
          <div className="pt-10 flex md:justify-start justify-center items-center gap-10">
            <button className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-4 px-8 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
              <p>Gallery</p>{" "}
              <span className="">
                <FaRegCircleCheck />
              </span>
            </button>
            <button className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-4 px-8 bg-black text-white hover:bg-white border-black hover:text-black transition-all duration-300 ease-in-out">
              Services <FiArrowRightCircle />
            </button>
          </div>
        </div>
        <div className="w-full hidden lg:block pt-10">
          <img src={home} alt="fence" className="" />
        </div>
      </div>
    </div>
  );
}
