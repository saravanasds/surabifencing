import React from "react";
import bgAbout from "../assets/fences/fence1.jpg";
import FooterBanner from "../components/FooterBanner.jsx";
import img1 from "../assets/fense-Gallery/fense1.jpeg";
import img2 from "../assets/fense-Gallery/fense2.jpeg";
import img3 from "../assets/fense-Gallery/fense3.jpeg";
import img4 from "../assets/fense-Gallery/fense4.jpeg";
import img5 from "../assets/fense-Gallery/fense5.jpeg";
import img6 from "../assets/fense-Gallery/fense6.jpeg";
import img7 from "../assets/fense-Gallery/fense7.jpeg";
import img8 from "../assets/fense-Gallery/fense8.jpeg";
import img9 from "../assets/fense-Gallery/fense9.jpeg";
import img10 from "../assets/fense-Gallery/fense10.jpeg";

// import vdo from "../assets/fences/video1.mp4"
import { IoLogoYoutube } from "react-icons/io";
import { ImYoutube2 } from "react-icons/im";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import Header from "../components/Header.jsx";

export default function OurTeam() {
  const teams = [
    { key: 1, img: img1, name: "Luke Miller", role: "Salesman" },
    { key: 2, img: img2, name: "Michael Diaz", role: "Business Owner" },
    { key: 3, img: img3, name: "Briana Ross", role: "Photographer" },
    { key: 4, img: img4, name: "Lauren Rivera", role: "Car Detailist" },
    { key: 5, img: img5, name: "Martin Rizz", role: "Mechanic" },
    { key: 6, img: img6, name: "Caitlyn Hunt", role: "Manager" },
    { key: 7, img: img7, name: "Caitlyn Hunt", role: "Manager" },
    { key: 8, img: img8, name: "Caitlyn Hunt", role: "Manager" },
    { key: 9, img: img9, name: "Caitlyn Hunt", role: "Manager" },
    { key: 10, img: img10, name: "Caitlyn Hunt", role: "Manager" },
  ];

  // const video =[{ key: 1, vdo },]

  return (
    <div className="font-poppins w-full h-full relative">
      <div
        className="bg-no-repeat w-full h-[300px] lg:[400px] bg-top "
        style={{
          backgroundImage: `url(${bgAbout})`,
          // opacity: "0.3",
          backgroundPosition: "center",
          objectFit: "cover", // Set the opacity value here (0.1 for 10%)
        }}
      >
        <div className=" z-20">
          <Header />
        </div>
        <div className="flex lg:flex-row px-8 lg:px-20 py-40 text-black  z-10">
          <div>
            <h2 className="text-3xl font-bold pt-9">Gallery</h2>
            <h3 className="text-lg font-semibold">Home/ Gallery</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 flex-row items-center justify-center px-8 lg:px-20 py-20 text-black ">
        {teams.map((team) => {
          return (
            <div
              key={team.key}
              className=" flex flex-col w-[300px]  justify-center items-center text-center overflow-hidden bg-[#b1434391] rounded-xl shadow-xl hover:-translate-y-3 ease-in-out duration-200 transition-all"
            >
              <img
                src={team.img}
                alt=""
                className=" h-[350px] w-full object-cover"
              />
              {/* <div className="py-6 flex flex-col gap-2">
                <h4 className="text-xl font-semibold">{team.name}</h4>
                <h5>{team.role}</h5>
              </div> */}
            </div>
          );
        })}
      </div>
      <hr />

      {/* <div>
        {video.map((vid)=>{
          return (
            <div key={video.key}>
              <video src={vid}></video>
            </div>
          )
        })}
      </div> */}

      {/*  */}
      <div className=" p-10 w-full bg-gray-200">
        <div className="text-3xl font-bold text-red-700 underline text-center">
          Our Channel Links
        </div>

        <div className=" mt-5 flex flex-col lg:flex-row md:flex-row">
          <div className=" w-full lg:w-1/2 md:w-1/2 p-10 lg:ml-10 h-[300px] container">
            <iframe
              src="https://www.youtube.com/embed/FY6LXogAcaE?si=q5YVWtY5aaq1dcQO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="flex justify-center items-center h-full w-full rounded-xl shadow "
            ></iframe>
          </div>

          <div className="lg:w-1/3 md:w-1/3 mt-14 lg:ml-24">
            <div className="flex justify-center items-center  bg-white shadow-black shadow-md  rounded-lg">
              <div className=" text-2xl  font-bold text-center text-red-500 italic pt-2">
                For more Videos, Visit..
                <p className="text-2xl pt-2 text-black">
                  <a
                    href="https://www.youtube.com/@sivakumarsiva2456"
                    target="blank"
                  >
                    <ImYoutube2 className="inline text-6xl font-bold hover:-translate-y-1 ease-in-out duration-200 transition-all text-red-600" />{" "}
                    <span title="Click Here">Surabhi Fencing</span>
                  </a>
                </p>
                <ul className="flex gap-10 justify-center py-4 bottom-0">
                  <li>
                    <a
                      href="https://www.youtube.com/@sivakumarsiva2456"
                      target="blank"
                      className="text-red-600 text-3xl"
                    >
                      <IoLogoYoutube />
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600 text-3xl">
                      <CiFacebook />
                    </a>
                  </li>
                  <li>
                    <a className=" text-3xl">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBanner />
    </div>
  );
}

//width="460" height="215"

{
  /* <div className="flex w-full">
          <div className="w-1/2">
          <iframe  src="https://www.youtube.com/embed/FY6LXogAcaE?si=q5YVWtY5aaq1dcQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
          </div>
          <div className="w-1/2 bg-slate-500">
            <div>Our Social Media Links</div>
            <div className=" flex item-center w-full">
            <ul className="flex gap-10 items-center">
              <li><IoLogoYoutube/></li>
              <li><CiFacebook/></li>
              <li><FaInstagram/></li>
            </ul>
            </div>
          </div>
      </div> */
}
