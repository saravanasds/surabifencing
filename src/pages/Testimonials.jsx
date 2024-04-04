import React from "react";
import bgAbout from "../assets/fences/fence1.jpg";
import Testimonial from "../components/Testimonial";
import FooterBanner from "../components/FooterBanner";
import Header from "../components/Header";
export default function Testimonials() {
  return (
    <div className="font-poppins w-full h-full relative">
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
          <h2 className="text-3xl font-bold pt-9" style={{ backgroundImage: '-webkit-linear-gradient(yellow, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonials</h2>
          <h3 className="text-lg font-semibold">Home/ Testimonials</h3>
        </div>
      </div>
      </div>
      <div className="flex flex-wrap gap-10 flex-row items-center justify-center py-24 text-black ">
        <Testimonial />
      </div>
      <FooterBanner/>
    </div>
  );
}
