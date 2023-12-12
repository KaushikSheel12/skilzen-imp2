import React from "react";

export const Toptitle = ({ heading, paraGraph }) => {
  return (
    <div className="w-full h-fit text-center mt-2">
      <h1 className="md:text-[48px] text-[30px] font-bold md:py-2 ">
        {heading}
      </h1>
      <p className="md:text-[18px] text-[15px] text-gray-500"> {paraGraph} </p>
    </div>
  );
};
