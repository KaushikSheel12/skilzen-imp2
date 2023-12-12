import Image from "next/image";
import React from "react";

export const Compairbox = ({ clgImg, heading, para }) => {
  return (
    <div className="md:flex  gap-9  mb-4">
      <div className="md:w-[280px] w-full h-[170px] relative ">
        <Image src={clgImg} fill alt="clg-img" />
      </div>

      <div className="md:w-[60%] w-full">
        <p className="font-semibold text-[16px]  md:text-[17px] ">{heading}</p>
        <p className="text-[14px] text-gray-400">{para}</p>
      </div>
    </div>
  );
};
