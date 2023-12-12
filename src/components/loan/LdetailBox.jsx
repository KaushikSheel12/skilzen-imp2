import React from "react";

export const LdetailBox = ({ heading, para }) => {
  return (
    <div className="w-full h-fit mb-1 rounded-lg border md:px-4  px-2 py-1 md:py-4 ">
      <h3 className="text-[17px] font-semibold mt-5">{heading}</h3>
      <p className="text-[16px] leading-5 mt-2">{para}</p>
    </div>
  );
};
