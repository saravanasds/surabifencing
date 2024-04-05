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
    <div className="w-full px-8 lg:px-20 py-10  flex-wrap bg-gray-700">
    <div className="flex flex-col justify-center items-center pb-6">
      <h3 className="text-2xl text-white font-semibold">Safety begins here</h3>
      <h4 className="text-[2.7rem] font-bold py-4 text-center" style={{ backgroundImage: '-webkit-linear-gradient(yellow, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Products</h4>
      <p className="text-[#edecf1] px-6 lg:px-96 text-center">
      Choose from a variety of our Products for your safety and for your welfare
      </p>
    </div>
    <div className="flex flex-col lg:flex-row lg:justify-between lg:h-[450px] gap-10 justify-center lg:items-start items-center ">
      
      <div className="flex flex-col justify-between h-full ml-5 lg-full lg:w-[20%] w-full">
        {CAR_DATA.map((carGroup, index) => (
          <div key={index}>
            {carGroup.map((car) => (
              <div
                key={car.name}
                onClick={() => handleClick(car)}
                className={` hover:bg-[#FF4D30] cursor-pointer ${
                  selectedCar === car
                    ? "bg-[#FF4D30] text-white"
                    : "bg-[#e9e9e9] text-black"
                }`}
              >
                <button className="px-6 py-4 text-lg font-semibold">
                  {car.name}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="lg:w-[60%] h-full ">
        {selectedCar && (
          <img
            src={selectedCar.img}
            alt={selectedCar.name}
            className="object-cover h-full w-full rounded-md border-4 border-white "
          />
        )}
      </div>
      
      <div className="text-sm text-center w-full h-full border-b bg-white border-black lg:w-[20%] overflow-scroll">
        {selectedCar && (
          <div className="flex flex-col justify-between text-center ">
            <div className="flex bg-[#FF4D30] text-white items-center justify-center py-4">
              <p className="text-2xl font-bold">
              {selectedCar.name}
              </p>
            </div>
            <div className="flex py-2 px-2 ">
              <div className="w-full px-1 py-2 italic font-semibold ">
                {selectedCar.des}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  </div>
  );
}
