import React from "react";
import { GiRingmaster } from "react-icons/gi";

const CollegeNamePrice = ({ clgName, detail }) => {
  return (
    <>
      <div className=" flex  border-b-2  justify-between items-center mt-4  px-2 md:py-0 py-1 w-[80%] mx-auto ">
        <div>
          <h3 className="md:text-xl text-[18px]">{clgName}</h3>
          <p className="text-gray-600 text-sm py-1    ">{detail}</p>
        </div>
        <GiRingmaster size={40} color="teal" />
      </div>
    </>
  );
};

export default CollegeNamePrice;
