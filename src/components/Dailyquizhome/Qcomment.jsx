import Image from "next/image";
import React from "react";

const Qcomment = ({ imgSrc, title }) => {
  return (
    <>
      <div className="flex gap-2 md:px-2 md:py-[3px]">
        <Image
          width={18}
          height={18}
          className="object-contain md:py-0  md:w-4 w-4 py-1 "
          alt="cmnt"
          src={imgSrc}
        />
        
        <p className="font-bold cursor-pointer mt-1 md:mt-0  hover:text-purple-700  md:px-1  text-[10px]  md:text-[11px] text-black ">
          {title}
        </p>
      </div>
    </>
  );
};

export default Qcomment;
