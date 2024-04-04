import React, { useState, useEffect } from "react";
import { FENCE_DATA } from "./FenceData.js";

export default function FencesDetails() {
  const [selectedFence, setSelectedFences] = useState(null);

  useEffect(() => {
    // Set the first car as selected on page load
    setSelectedFences(FENCE_DATA[0][0]);
  }, []);

  const handleClick = (fence) => {
    setSelectedFences(fence);
  };

  return (
    <div className="w-full px-8 lg:px-20 pt-6 py:10 lg:py-20 flex-wrap">
      <div className="flex flex-col justify-center items-center pb-20">
        <h3 className="text-2xl font-semibold">Fences Details</h3>
        <h4 className="text-[2.7rem] font-bold py-4 text-center">Guarantted Safety</h4>
        <p className="text-[#706F7B] px-6 lg:px-96 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi amet minus mollitia rem expedita?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 justify-center lg:items-start items-center">
        <div className="flex flex-col gap-2 lg:w-[20%] w-full">
          {FENCE_DATA.map((fences, index) => (
            <div key={index}>
              {fences.map((fence) => (
                <div
                  key={fence.name}
                  onClick={() => handleClick(fence)}
                  className={` hover:bg-[#FF4D30] cursor-pointer ${
                    selectedCar === fence
                      ? "bg-[#FF4D30] text-white"
                      : "bg-[#e9e9e9] text-black"
                  }`}
                >
                  <button className="px-6 py-4 text-lg font-semibold">
                    {fence.name}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          {selectedFence && (
            <img
              src={selectedFence.img}
              alt={selectedFence.name}
              className="pt-12"
            />
          )}
        </div>
        <div className="text-sm text-center w-full lg:w-[20%] h-64">
          {selectedFence && (
            <div className="text-center border border-black">
              <div className="flex bg-[#FF4D30] text-white items-center justify-center py-4">
                <p className="text-3xl font-bold">
                  {/* ${selectedFence.price} */}
                  <span className="text-lg font-normal">Description Details</span>
                </p>
              </div>
              <div>
                <h1>Descrit</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestiae nihil laudantium voluptate ex voluptatibus aperiam aut incidunt tempora numquam soluta officia pariatur sapiente ab, totam deserunt fugiat optio quam?</p>
              </div>
              

              
            </div>
          )}

          {/* <button className="w-full uppercase bg-[#FF4D30] text-white px-[2.5rem] py-3 mt-4 text-xl font-semibold hover:bg-opacity-95 shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
            Reserve Now
          </button> */}
        </div>
      </div>
    </div>
  );
}




// <div className="flex py-2 px-2 border-b border-black">
//                 <span className=" w-1/3">Model</span>
//                 <span className="w-2/3 border-l border-black">
//                   {selectedCar.model}
//                 </span>
//               </div>
//               <div className="flex py-2 px-2 border-b border-black">
//                 <span className=" w-1/3">Mark</span>
//                 <span className="w-2/3  border-l border-black">
//                   {selectedCar.mark}
//                 </span>
//               </div>
//               <div className="flex py-2 px-2 border-b border-black">
//                 <span className=" w-1/3">Year</span>
//                 <span className="w-2/3  border-l border-black">
//                   {selectedCar.year}
//                 </span>
//               </div>
//               <div className="flex py-2 px-2 border-b border-black">
//                 <span className=" w-1/3">Doors</span>
//                 <span className="w-2/3  border-l border-black">
//                   {selectedCar.doors}
//                 </span>
//               </div>
//               <div className="flex py-2 px-2 border-b border-black">
//                 <span className=" w-1/3">AC</span>
//                 <span className="w-2/3  border-l border-black">
//                   {selectedCar.air}
//                 </span>
//               </div>
//               <div className="flex py-2 px-2 border-b border-black">
//                 <span className=" w-1/3 ">Carrying</span>
//                 <span className="w-2/3  border-l border-black">
//                   {selectedCar.transmission}
//                 </span>
//               </div>
//               <div className="flex py-2 px-2">
//                 <span className=" w-1/3  ">Fuel</span>
//                 <span className="w-2/3 border-l border-black">
//                   {selectedCar.fuel}
//                 </span>
//               </div>