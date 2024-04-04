import React, { useState, useEffect } from "react";
import { CAR_DATA } from "./CarData2.js";

import { FaIndianRupeeSign } from "react-icons/fa6";

export default function VehicleModels() {
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Set the first car as selected on page load
    setSelectedCar(CAR_DATA[0][0]);
  }, []);

  const handleClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="w-full px-8 lg:px-20 pt-6 py:10 lg:py-20 flex-wrap bg-gray-200">
      <div className="flex flex-col justify-center items-center pb-10">
        <h3 className="text-2xl font-semibold" >Safety begins here</h3>
        <h4 className="text-[2.7rem] font-extrabold py-4 text-center" style={{ backgroundImage: '-webkit-linear-gradient(yellow, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Products</h4>
        <p className="text-black px-6 lg:px-96 text-center">
          Choose from a variety of our Products for your safety and for your welfare </p>
      </div>

      {/* New Tab */}
      

      {/* products click details */}
      <div className="flex flex-col lg:flex-row lg:justify-between h-[450px] gap-10 lg:items-start items-center" id="product-section">
        
        {/* section1 */}
        <div className="flex flex-col justify-between h-full ml-5 lg-full lg:w-[20%] w-full">
          {CAR_DATA.map((carGroup, index) => (
            <div key={index}>
              {carGroup.map((car) => (
                <div
                  key={car.name}
                  onClick={() => handleClick(car)}
                  className={` hover:bg-[#e0ff30] hover:text-black px-6 py-4 cursor-pointer   ${
                    selectedCar === car
                      ? "bg-[#e0ff30] text-black"
                      : "bg-[#888181] text-white"
                  }`}
                >
                  <button className=" text-lg font-semibold w-full">
                    {car.name}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* section2 */}
        <div className="lg:w-[60%] h-full ">
          {selectedCar && (
            <img
              src={selectedCar.img}
              alt={selectedCar.name}
              className="object-cover h-full rounded-md"
            />
          )}
        </div>

        {/* section3 */}
        <div className="text-sm  text-center w-full lg:w-[20%] ">
          {selectedCar && (
            <div className="flex flex-col justify-between text-center border border-black h-[450px]">
              <div className="flex flex-col gap-2 text-black items-center justify-center">
                <p className="text-3xl font-bold bg-[#e0ff30]  w-full py-3">
                  <FaIndianRupeeSign className="inline"/>{selectedCar.price}
                  <span className="text-lg font-normal">/ per feet</span>
                </p>
                <div className="bg-[#e0ff30] text-black w-full text-xl font-bold py-3 uppercase">Fence Description</div>
              </div>

              {/* model */}
              <div className="flex flex-col p-2 italic text-base ">
                <div className="">
                  {selectedCar.des}
                </div>
              </div>

                <button className="w-full uppercase bg-[#e0ff30] text-black px-[2.5rem] py-3 mt-4 text-xl font-semibold hover:bg-opacity-95 shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
            Reserve Now
          </button>
              


            </div>
          )}
          
        </div>


      </div>
    </div>
  );
}
