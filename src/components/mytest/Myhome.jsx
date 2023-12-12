import Image from "next/image";
import React from "react";
import { Services } from "./Services";

export const Myhome = () => {
  const navItem = ["Home", "About", "Contect", "Other"];
  const SerVicesItem = [
    "Appendix Surgery",
    "Gall Bladder Surgery",
    "Colon & Rectal Surgery",
    "Foot & Ankle Surgery",
    " Bone Density Testing",
    "Nuclear Medicine",
    "Advanced Cardiac ",
    " Imaging/Testing",
  ];
  return (
    <div className="md:w-[90%] w-full mx-auto ">
      <div className="w-full  bg-green-800 h-10 md:px-2 px-1  py-1 md:py-2 border flex items-center justify-around">
        {navItem?.map((el, index) => {
          return (
            <p
              className="cursor-pointer font-semibold hover:text-white hover:bg-gray-500 rounded-md px-2 py-[2px] md:text-[16px] text-[14px] text-white"
              key={index}
            >
              {el}
            </p>
          );
        })}
      </div>
      <div className="w-full h-[150px]  md:h-[440px] relative border mx-auto ">
        <Image
          className="object-cover"
          fill
          src="https://berhamporecityhospital.com/wp-content/uploads/2023/02/banner-01-min.jpg"
          alt="banner-img"
        />
      </div>
      <h2 className="md:mt-4 mt-2 md:text-[30px] md:px-0 px-2 text-[15px] font-semibold text-gray-700">
        Services
      </h2>
      <div className="w-full md:h-[4px] h-[2px]  bg-gray-400"></div>

      <div className="w-full h-fit py-2 px-2 grid grid-cols-2 md:grid-cols-4 items-center gap-3 md:gap-5 ">
        {SerVicesItem.map((el, index) => {
          return <Services text={el} key={index} />;
        })}
      </div>

      <h2 className="mt-4 md:text-[30px] md:px-0 px-2 text-[15px] font-semibold text-gray-700">
        Contect us
      </h2>
      <div className="w-full md:h-[4px] h-[2px]  bg-gray-400"></div>

      <div className="md:w-[500px] px-4 py-4 mx-auto h-fit rounded-md border mt-10">
        <input
          className="w-full mt-3 border px-2"
          placeholder="Your full name"
        />
        <input className="w-full mt-3 border px-2" placeholder="Your age" />
        <input className="w-full mt-3 border px-2" placeholder="Your mobile" />
        <input className="w-full mt-3 border px-2" placeholder="Your city " />
        <input className="w-full mt-3 border px-2" placeholder="Your state" />

        <button className=" w-full mt-4 bg-green-500 px-4 py-2  border hover:text-white hover:bg-gray-500 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};
