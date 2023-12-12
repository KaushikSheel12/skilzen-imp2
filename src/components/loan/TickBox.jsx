import React from "react";

export const TickBox = ({ icon, text }) => {
  return (
    <div className=" md:mb-4 mb-2 flex items-center gap-5">
      {icon}
      <p className="md:text-[15px] text-[14px] whitespace-nowrap ">{text}</p>
    </div>
  );
};