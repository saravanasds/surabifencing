import React from "react";
import bgAbout from "../assets/fences/fence1.jpg";
import FooterBanner from "../components/FooterBanner.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgContact from "../assets/banners/bg-contact.png";
import { SiMinutemailer } from "react-icons/si";
import Header from "../components/Header.jsx";

export default function Contact() {
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
          <h2 className="text-3xl font-bold pt-9" >Contact us</h2>
          <h3 className="text-lg font-semibold">Home/ Contact us</h3>
        </div>
      </div>
      </div>

      <div
        className="flex lg:flex-row flex-col flex-wrap gap-10 items-start bg-slate-500 justify-between px-8 lg:px-36 py-20 text-black bg-no-repeat bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgContact})`,
        }}
      >
        <div className="lg:w-[50%] w-full  flex flex-col gap-10 lg:text-left text-center">
          <h3 className="text-[2.7rem] font-bold text-[#FECC00]" >
            Get More..?
          </h3>
          <p className="text-white text-lg font-semibold font-rubik text-center lg:text-left pr:0 lg:pr-52">
            An all-around expert in Surabhi Fencing, skilled in research, development, and specialized know-how. With a solid background, we bring over 15 years of experience.
          </p>
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <a
              href="/"
              className="flex items-center gap-2 hover:text-[#FF4D30]"
            >
              <FaPhoneAlt /> <p className="font-bold">+91-8668006976</p>
            </a>
            <a
              href="/"
              className="flex items-center gap-2 hover:text-[#FF4D30]"
            >
              <MdEmail />
              <p className="font-bold">contact@Surabhifencing.com</p>
            </a>
          </div>

          <div className="bg-white h-[200px] rounded-xl">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15691.740305831418!2d77.48774741297501!3d10.50577990738057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9dc57d449dde3%3A0x4608e26de5668a65!2sVilvathampatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712909075676!5m2!1sen!2sin" 
        className="h-full w-full rounded-xl"
    style={{ border: '0' }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>

        </div>


        <div className="lg:w-[40%] w-full">
          <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold" htmlFor="">
                Full Name
              </label>
              <input
                className="border rounded px-20 py-2 bg-[#f2f2f2] outline-none"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold" htmlFor="">
                Email
              </label>
              <input
                className="border rounded px-20 py-2 bg-[#f2f2f2] outline-none"
                type="text"
                placeholder="yourmail@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold" htmlFor="">
                Tell us about it
              </label>
              <textarea
                className="rounded border bg-[#f2f2f2] px-10 py-2 outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Here"
              ></textarea>
              <button
                type="submit"
                className="font-rubik text-lg font-medium rounded py-3 px-[16px] mt-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out mb-8 lg:mb-0 flex flex-row gap-4 items-center justify-center"
              >
                <span>
                  <SiMinutemailer />
                </span>
                <p>Send Message</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterBanner />
    </div>
  );
}
