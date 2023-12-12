import Image from "next/image";
import React from "react";
import UniversityBox from "./UniversityBox";
import { universityData } from "./data";
const Mhome = () => {
  return (
    <>
      <div className="w-full bg-[#f4f4e6] text-center h-full border">
        <div className="md:w-[80%] w-full mx-auto border h-full grid grid-cols-1 md:grid-cols-3 mt-10 space-x-4  px-2 py-2">
          {universityData.map((el, index) => {
            return (
              <div key={index}>
                <UniversityBox imgUrl={el.imgUrl} university={el.clgName} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mhome;
