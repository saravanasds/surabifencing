import React from "react";
import bgAbout from "../assets/fences/fence1.jpg";
import { CAR_DATA } from "../components/CarData2.js";
// import { FaStar } from "react-icons/fa6";
// import { FaCarSide } from "react-icons/fa";
// import { RiOilFill } from "react-icons/ri";
// import { GiCarDoor } from "react-icons/gi";
// import { GiGearStick } from "react-icons/gi";
import FooterBanner from "../components/FooterBanner.jsx";
import { FaIndianRupeeSign } from "react-icons/fa6";

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function VehicalModel() {

  const scrollToElement = (element) => {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth"
    });
  };
  const onInit = () => {
    console.log('lightGallery has been initialized');
};

  return (
    <div className="font-poppins w-full h-full relative">
      {/* header */}
      <div
        className="bg-no-repeat w-full h-[300px] lg:[400px] bg-top "
        style={{
          backgroundImage: `url(${bgAbout})`,
          // opacity: "0.3",
          backgroundPosition:"center",
            objectFit:"cover", // Set the opacity value here (0.1 for 10%)
        }}
      >
        <div className=" z-20"><Header/></div>
      <div className="flex lg:flex-row px-8 lg:px-20 py-40 text-black  z-10">
        <div>
          <h2 className="text-3xl font-bold pt-9">Products</h2>
          <h3 className="text-lg font-semibold">Home/ Products</h3>
        </div>
      </div>
      </div>
      {/* body */}
      <div className="flex flex-wrap gap-10 flex-row items-center justify-center px-8 lg:px-20 py-20 text-black ">
        {CAR_DATA.map((carGroup, index) => {
          return (
            <div key={index} className="flex items-start">
  {carGroup.map((car) => (
    <div key={car.name} className="flex flex-col border rounded-lg p-4 mb-4 mr-4">
      
      
      <div className="relative bg-black w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-105 hover:rounded">

      <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >

        <img src={car.img} alt="" className=" absolute inset-0 w-full h-full object-cover cursor-pointer" />
        </LightGallery>
        
      </div>



      {/* <div className="flex justify-between border-b pb-4">
      <div className="flex gap-2 items-center justify-around">
                          
                        </div>
      </div> */}
      
      <button type="button" className="font-rubik text-lg font-medium rounded mt-4 py-3 px-3 h-[20%] bg-[#FF4D30] hover:bg-[#ff4c3081] text-white hover:text-black shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
        <Link  onClick={() => scrollToElement(document.getElementById("selection"))} >{car.name}</Link>
      </button>
    </div>
  ))}
</div>

          );
        })}
      </div>
      <FooterBanner />
    </div>
  );
}
