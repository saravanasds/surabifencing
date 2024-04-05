import React from "react";

export default function TestimonialCard(props) {
  return (
    <div className="bg-[#FFEDEA] rounded-md flex flex-col gap-10 shadow shadow-black p-12 w-full lg:max-w-[400px] hover:-translate-y-3 ease-in-out duration-200 transition-all">
      <div className="">
        <p className="text-xl font-medium overflow-hidden text-gray-800">{props.content}</p>{" "}
      </div>
      <div className="flex items-center">
        {/* <img className="w-20 h-20 rounded-full" src={props.img} alt="" /> */}
        <div className="flex flex-col flex-grow ml-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-lg text-red-700 font-bold">{props.name}</span>
              <span className="font-rubik">{props.city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
