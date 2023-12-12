import React from "react";

export const PercentMark = ({ icon, ptag, status }) => {
  return (
    <div className="flex gap-3 mb-5 mx-auto  items-center">
      {icon}
      <div>
        <p className="text-[#9b9999] text-[12px]">{ptag}</p>
        <p className="font font-semibold">{status}</p>
      </div>
    </div>
  );
};
