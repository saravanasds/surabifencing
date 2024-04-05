import React, { useState, useEffect } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from './Header';

// Import background images
import bgHome1 from '../assets/fences/fence-7.jpeg';
import bgHome2 from '../assets/fences/fence1.jpg';
import bgHome3 from '../assets/fences/fence3.jpg';
import bgHome4 from '../assets/fences/fence-4.jpeg';
import bgHome5 from '../assets/fences/fence5.jpg';
import bgHome7 from '../assets/fences/fence-7.jpeg';
import bgHome8 from '../assets/fences/fence-8.jpeg';
import bgHome9 from '../assets/fences/fence-9.jpeg';

const slideTexts = [
  "Strong and secure fencing solutions",
  "Quality fences for every need",
  "Protecting your property, enhancing your style",
  "Expert craftsmanship, lasting durability",
  "Building boundaries, creating privacy",
];

const images = [bgHome1, bgHome2, bgHome3, bgHome4, bgHome5];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className='z-20'>
      <Header/>
      </div>

      <div className="absolute bottom-0 right-0 left-0  flex flex-col  text-center " >
        <div className="max-w-3xl flex flex-col w-full mx-auto px-4 ">
        <div className='p-10 lg:pb-20 pb-40' style={{transition: 'background-opacity 1s ease-in-out'}}>
  <p className="text-2xl lg:text-4xl w-[100%]  text-black font-extrabold " style={{
    textShadow: '2px 2px 4px white, -2px -2px 4px white, -2px 2px 4px white, 2px -2px 4px white',
    // opacity: slideTextOpacity, transition: 'opacity 0.5s'
  }}>
    {slideTexts[currentImageIndex]}
  </p>
</div>

          <div className="flex justify-center items-center pb-10 space-x-4">
            <Link to="/our-team" className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-2 px-4 lg:py-4 lg:px-8 bg-[#d13d3d] text-white hover:bg-red-900 shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
              Gallery <FiArrowRightCircle />
            </Link>
            <Link to="/contact" className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-2 px-4 lg:py-4 lg:px-8 bg-black text-white hover:bg-white border-black hover:text-black transition-all duration-300 ease-in-out">
              Services <FiArrowRightCircle />
            </Link>
          </div>
        </div>
    </div>
  </div>
  );
}

{/* <div className="max-w-3xl mx-auto px-4 ">
        <p className="text-2xl lg:font-bold text-black" style={{ textShadow: '2px 2px 4px white' }}>
  Enhance your surroundings with
</p>
<h1 className="text-4xl lg:text-6xl font-bold text-white lg:mb-8" style={{ textShadow: '2px 2px 10px black' }}>
  <span className="" style={{ backgroundImage: '-webkit-linear-gradient(yellow, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Surabhi</span> Fencing
</h1>
<p className="text-lg lg:text-xl text-white my-4 lg:mb-12" style={{ textShadow: '2px 2px 4px black' }}>
  Experience Surabhi Fencing: Unrivaled quality ensuring both security and aesthetic appeal for your property. Benefit from unparalleled craftsmanship, flexible installation, and more.
</p>

          <div className="flex justify-center items-center space-x-4">
            <button className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-2 px-4 lg:py-4 lg:px-8 bg-[#d13d3d] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">Gallery <FiArrowRightCircle /></button>
            <button className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-2 px-4 lg:py-4 lg:px-8 bg-black text-white hover:bg-white border-black hover:text-black transition-all duration-300 ease-in-out">Services <FiArrowRightCircle /></button>
          </div>
        </div> */}