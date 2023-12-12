import React from "react";

export const Services = ({ text }) => {
  return (
    <div className="w-full grid place-content-center cursor-pointer  font-semibold md:text-[17px] text-[13px] hover:text-white hover:bg-gray-500 bg-green-300 h-fit md:py-4 py-2  mx-auto rounded-md border ">
      {text}
    </div>
  );
};
