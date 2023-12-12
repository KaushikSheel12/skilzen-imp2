import Image from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/Bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Vcall = () => {
  return (
    <div className="w-sceen md:h-screen h-fit py-10  bg-[#0e3333]">
      <div className=" w-full md:max-w-[90%] mx-auto h-full px-2 py-2  grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full text-center px-3 md:px-0">
          <div className="text-left  ">
            <h1 className="md:text-[100px] text-[44px] md:py-20   text-white leading-[1.2] ">
              The world's <br /> most loved <br />
              <span className="rounded-full px-7    border-2 border-white">
                telemedicine
              </span>
              <br />
              <div className="flex gap-4  items-center">
                <AiOutlineArrowRight
                  className="bg-orange-600 p-1 md:p-3 md:w-20 md:h-20 w-10 h-10 md:mt-4 mt-2 border-none rounded-full"
                  color="white"
                />
                <p>solution</p>
              </div>
            </h1>
          </div>

          <p className="md:text-[18px] md:px-20 py-6 md:py-0 text-[14px] text-white text-left">
            Sign up in less than 60 seconds to experience why more than one
            million providers trust us already.
          </p>

          <div className="md:flex  md:ml-20 items-center mt-4 gap-5">
            <div className="bg-white text-black md:w-[400px] w-full h-12  px-4  rounded-md">
              <input
                type="email"
                placeholder="Your email address "
                className="w-full mt-3  text-sm"
              />
            </div>
            <button className="h-12 md:w-[200px] md:mt-0 mt-3  w-full bg-teal-300 hover:bg-teal-400 rounded-md px-4 flex items-center gap-2 group/item ">
              <p className="group/edit md:group-hover/item:ml-[-4px]   mx-auto transiton ease-in-out">
                Get started for free
              </p>
              <div className="invisible group/edit group-hover/item:visible">
                <IoIosArrowForward />
              </div>
            </button>
          </div>
        </div>

        <div className="w-full h-full relative md:flex hidden ">
          <Image
            src="https://doxy.me/images/home/patient-large@2x.jpg"
            alt="v-call-img"
            fill
            className="object-cover"
            loading="lazy"
          />

          <div className="w-[190px] h-[190px] rounded-2xl absolute right-5 top-5">
            <Image
              src="https://doxy.me/images/home/provider-large.jpg"
              alt="v-call-man"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="w-[340px] h-[75px] absolute bottom-4 left-56 rounded-lg ">
            <div className="relative w-full h-full">
              <Image
                src="https://doxy.me/images/home/controls.png"
                alt="v-call-icon"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vcall;
