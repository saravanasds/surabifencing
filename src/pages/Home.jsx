import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import VehicleModels from "../components/VehicleModels";
import Testimonial from "../components/Testimonial";
import FencesDetails from "../components/FencesDetails"

export default function Home() {
  return (
    <div className=" font-poppins w-full h-full bg-gradient-to-b from-[#f8f8f8] to-white">
      <Hero />
      <Feature />
      {/* <FencesDetails /> */}
      <VehicleModels />
      <Testimonial/>
      {/* <div className="bg-red-900 z-10 w-10 h-10 ">Up</div> */}
    </div>
  );
}

