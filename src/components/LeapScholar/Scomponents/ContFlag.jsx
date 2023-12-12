import Image from "next/image";
import React from "react";

export const ContFlag = ({ ImgSrc, name, bgColor, borderColor, onClick }) => {
  return (
    <>
      <div
        className={`md:w-[190px] w-full h-[80px] md:h-[100px] border-${borderColor} bg-${bgColor}  border-2 py-2 rounded-md grid place-content-center cursor-pointer`}
        onClick={() => onClick(name)}
      >
        <Image
          src={ImgSrc}
          alt="country-flg"
          width={40}
          height={40}
          className="mt-2 mx-auto"
        />

        <p className="text-[16px]  mt-2 ">{name}</p>
      </div>
    </>
  );
};
