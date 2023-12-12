import React from "react";
import { TbCoinRupee } from "react-icons/tb";
export const AmountDetailsCard = ({ amountType, money, border, logo }) => {
  return (
    <div
      className={`w-full   h-fit p-2   ${
        border && "border-r-2"
      } flex items-center md:mb-4 gap-2  `}
    >
      <div>{logo}</div>
      <div>
        <p className="text-gray-400 py-1 md:text-[14px] text-[13px] ">
          {amountType}
        </p>
        <p className="font semibold text-[16px] md:text-[22px] py-0 md:mt-[-10px]">
          {money}
        </p>
      </div>
    </div>
  );
};
