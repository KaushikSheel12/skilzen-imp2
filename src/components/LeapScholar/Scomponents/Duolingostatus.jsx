import React from "react";

export const Duolingostatus = () => {
  return (
    <>
      <h2 className=" text-center font-semibold text-[20px] md:text-[22px]">
        IELTS/TOEFL/PTE/Duolingo status
      </h2>

      <div className="md:w-[80%] w-full h-12  shadow-md px-2 py-1 rounded-md mx-auto text-[16px] mt-3 ">
        <select className="w-full h-full px-2 py-2 bg-white ">
          <option value="">IELTS /TOEFT/PTE/Duolingo stats*</option>
          <option value="">Not decided</option>
          <option value="">Already gave the exam</option>
          <option value="">Booked my exam</option>
          <option value="">Planing to give the exam in next 2 months</option>
        </select>
      </div>
    </>
  );
};
