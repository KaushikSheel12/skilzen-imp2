import React from "react";
import { TiTick } from "react-icons/Ti";
import ClgBox from "./ClgBox";

const PredictorCard = () => {
  return (
    <>
      <div className="border border-gray-300 bg-white px-2 py-1 mt-4  h-[300px]  md:h-96">
        <h4 className="md:text-[14px] text-[12px]  text-[#3b5eb0] font-semibold">
          St Mary's Engineering College, Bhuvanagiri
        </h4>
        <p className="text-gray-500 py-1  md:text-[13px] text-[11px] ">
          Ownership: Private
        </p>

        <div className=" border-t-2  md:border-b-2  border-gray-200 md:h-60 h-44 px-0 py-2 md:py-0  md:mt-4 ">
          <h3 className="md:text-sm text-[11px] font-semibold  text-gray-500">
            Your Chances are{" "}
            <span className="bg-[#1a9d1a]   text-white px-1  rounded-md">
              Good
            </span>{" "}
            in 6 out of Courses
          </h3>

          <ClgBox />
        </div>

        <div className="w-full md:flex gap-4 py-1 md:mt-4 mt-1  px-2  hidden  ">
          <button className="border px-2 py-1 bg-gray-100 text-gray-700  text-[12px] rounded md:text-sm">
            View Cutofs{" "}
          </button>
          <button className="border px-2 py-1 border-[orange] text-[orange] text-[12px]   md:text-sm rounded ">
            Brochre
          </button>
        </div>
      </div>
    </>
  );
};

export default PredictorCard;
