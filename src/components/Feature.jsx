import React from "react";
import FeatureCard from "./FeatureCard";
import icon1 from "../assets/plan/icon1.png";
import icon2 from "../assets/plan/icon2.png";
import icon3 from "../assets/plan/icon3.png";

export default function Feature() {
  return (
    <div className="flex flex-col justify-center items-center py-20 lg:gap-6 px-8 lg:px-40 lg:py-16 ">
      <p className="text-2xl font-semibold">Explore Surabhi Fencing Solutions
      </p>
      <h2 className="text-[2.7rem] font-bold text-center" style={{ backgroundImage: '-webkit-linear-gradient(yellow, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Quick & easy installation
      </h2>
      <div className="flex flex-col lg:flex-row gap:10  mt-6">
        {" "}
        <FeatureCard
          imageUrl={icon1}
          title="Pick your Fence"
          content="We offer exclusive non-mixable stone fencing adorned with Tata and more to enhance and fortify your surroundings."
        />
        <FeatureCard
          imageUrl={icon2}
          title="Contact Our Experts"
          content="Our team is ready to assist with any questions or concerns you may have about your fencing needs."
        />
        <FeatureCard
          imageUrl={icon3}
          title="Let's Fence"
          content="Whether you're securing an event space or a construction site, we've got you covered with our diverse range of fencing options."
        />
      </div>
    </div>
  );
}
