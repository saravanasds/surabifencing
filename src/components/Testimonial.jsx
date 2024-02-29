import React from "react";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/testimonials/pfp1.jpg";
import image2 from "../assets/testimonials/pfp2.jpg";
import image3 from "../assets/testimonials/pfp3.jpg";

export default function Testimonial() {

  return (
    <div className="w-full bg-[#f8f8f8]">
      <div className="flex flex-col justify-center items-center py-36 lg:gap-16 px-8 lg:px-40 lg:py-20 ">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h3 className="text-2xl font-medium font-rubik">
            Reviewed by People
          </h3>
          <h2 className="text-[2.7rem] font-bold">Client's Testimonials</h2>
          <p className="text-[#706F7B] font-rubik px-10 lg:px-40 text-center">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 pt-10 lg:pt-0">
          <TestimonialCard
            content='"We had an outstanding experience with Surabi Fencing for our project. The rates offered were very reasonable, making the entire engagement highly satisfactory."'
            img={image1}
            name="Swarup"
            city="Kolkata, India"
          />
          <TestimonialCard
            content='"The fencing materials from Surabi Fencing were in excellent condition and significantly enhanced the overall aesthetics of our property."'
            img={image2}
            name="Arpita"
            city="Bengaluru, India"
          />
          <TestimonialCard
            content='"Our experience with Surabi Fencing has been nothing short of exceptional, and we wholeheartedly recommend them for their top-notch materials and impeccable service."'
            img={image3}
            name="Rani"
            city="Hydrabad, India"
          />
        </div>

      </div>
    </div>
  );
}
