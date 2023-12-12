import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/Bs";

export const Apps = ({ img, title }) => {
  return (
    <div className="flex mt-2 items-center md:gap-5 justify-between mb-2 px-2 y-1 cursor-pointer w-full">
      <div className="flex items-center gap-3">
        <Image
          src={img}
          width={50}
          height={50}
          alt="image"
          className="object-contain"
        />
        <div>
          <p className="text-16px font-semibold">{title}</p>
          <p className="text-[13px]  text-gray-500">paid</p>
        </div>
      </div>

      <BsArrowUpRight />
    </div>
  );
};
