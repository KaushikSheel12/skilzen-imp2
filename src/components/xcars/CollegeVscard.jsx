import Image from "next/image";
import React from "react";

export const CollegeVscard = ({
  clgoneTitle,
  clgtwoTitle,
  para1, 
  para2,
  imgOne,
  imgTwo,
}) => {
  return (
    <div className="flex items-center shadow-md w-fit h-fit relative mx-auto">
      <div className="md:w-[280px] w-full md:h-60 h-fit border-r-2 border-red-600 mx-auto px-2 py-2  ">
        <div className="md:w-[210px] w-[150px] h-[100px] md:h-[150px]  relative  mx-auto mt-2 rounded-md ">
          <Image
            src={imgOne}
            alt="clg-img"
            fill
            className="object-contain rounded-md"
          />
        </div>
        <p className="text-center md:mt-2 md:text-[18px] text-[12px] ">
          {clgoneTitle}
        </p>
        <p className=" text-center text-red-500  md:text-[14px] text-[10px] ">
          {para1}
        </p>
      </div>

      <div className="md:w-[40px] w-[30px] md:h-[40px]  h-[30px] rounded-full bg-red-500 grid place-content-center text-white absolute left-[153px] z-10 md:left-[258px]">
        VS
      </div>

      <div className="md:w-[280px] w-full md:h-60 h-fit py-2 px-2  ">
        <div className="md:w-[200px] w-[150px] md:h-[150px] h-[100px]  relative  mx-auto mt-2 rounded-md  ">
          <Image
            src={imgTwo}
            alt="clg-img"
            fill
            className="object-contain rounded-md"
          />
        </div>
        <p className="text-center md:mt-2 md:text-[18px] text-[12px] ">
          {clgtwoTitle}
        </p>
        <p className=" text-center text-red-500  md:text-[14px] text-[10px] ">
          {para2}
        </p>
      </div>
    </div>
  );
};
