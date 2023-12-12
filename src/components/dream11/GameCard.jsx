import Image from "next/image";
import React from "react";

const GameCard = ({ srcUrl, ptag, head }) => {
  return (
    <>
      <div className="md:w-[380px] md:mt-0 mt-16 w-full h-[140px] mx-auto rounded-lg  relative  bg-gradient-to-r  from-gray-200 via-white to-gray-200">
        <div className="w-[50px] h-[50px] absolute rounded-full bg-green-600 top-[-25px] text-white font-semibold grid place-content-center text-2xl left-4">
          1
        </div>

        <div className="w-[260px] h-[100px] absolute  right-[-10px] rounded-lg top-[-45px] ">
          <div className="w-full h-full relative">
            <Image fill alt="card" className="object-contain" src={srcUrl} />
          </div>
        </div>

        <h3 className="absolute bottom-14 left-4 font-semibold text-[17px]">
          {head}
        </h3>
        <p className="absolute bottom-8 left-4 text-sm text-gray-500 ">
          {ptag}
        </p>
      </div>
    </>
  );
};

export default GameCard;
