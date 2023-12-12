import Image from "next/image";
import React from "react";

export const CollegecompairBox = ({ img1, img2, title1, title2 }) => {
  return (
    <div className="md:flex items-center border w-full h-fit md:h-20 px-2 gap-2 ">
      <p className="text-[14px] ">{title1}</p>
      <Image src={img1} alt="clg-img" width={50} height={50} />
      <p className=" font-bold  text-gray-500">VS</p>
      <Image src={img2} alt="clg-img" width={50} height={50} />
      <p className="text-[14px] ">{title2}</p>
    </div>
  );
};
