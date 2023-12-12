import Image from "next/image";
import React from "react";


export const QRule = ({ imgSrc, title }) => {
  return (
    <div className="flex gap-2 md:px-2   py-1">

      <Image
        width={18}
        height={18}
        alt="first"
        className="object-contain w-4" 
        src={imgSrc}
      />
      <h3 className="font-bold  md:px-1  py-[2px]  text-[10px]  md:text-[11px] text-gray-600 ">
        {title}
      </h3>
    </div>
  );
};
