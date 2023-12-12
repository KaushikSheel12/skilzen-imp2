import React from "react";
export const MethodBox = ({ icon, work, detail }) => {
  return (
    <div className="w-full px-2 py-4 h-fit cursor-pointer ">
      <div className="w-[80px] h-[80px] relative">{icon}</div>
      <div className="md:w-[140px] w-[100px] mt-5 h-[1px] bg-black"></div>
      <h2 className="md:ml-16 ml-10 md:text-[14px] text-[13px]">1.</h2>
      <h2 className="md:text-[30px] text-[18px] ">{work}</h2>
      <p className="md:text-[16px] text-[12px] text-green-900">{detail}</p>
    </div>
  );
};
