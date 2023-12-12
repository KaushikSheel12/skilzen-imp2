import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/Bs";

export const FontCard = ({ img }) => {
  return (
    <div className="md:w-fit w-full h-fit border-2 border-gray-400 px-3 py-2 shadow-lg mb-1  relative rounded-lg ">
      <div className="w-full h-fit ">
        <div className="md:w-[240px] w-full md:h-[150px] h-[200px] relative  cursor-pointer rounded-md  ">
          <Image
            src={img}
            fill
            alt="img"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between py-1 mt-2 ">
          <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
            <p className="">Craftwork</p>
          </div>
          <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
            <p>Free & Paid</p>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};
