import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className=" font-poppins w-full h-full bg-gradient-to-b from-[#f8f8f8] to-white">
      <Hero />
      <Feature />
      <Testimonial/>
    </div>
  );
}
