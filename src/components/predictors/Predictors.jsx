import React from "react";
import Pheader from "./Pheader";
import { TiTick } from "react-icons/Ti";
import PredictorCard from "./PredictorCard";
import { Filter } from "./filters/Filter";
import { Pagination } from "./Pagination";

const Predictors = () => {
  return (
    <>
      <Pheader />
      <div className="md:hidden    border w-[90%] grid mx-auto mt-2 rounded-md  px-2 py-2  h-20  shadow-xl">
        <p className="font-semibold text-md px-1 text-gray-700">
          Summary of Your Prediction
        </p>
        <div className="flex justify-around border-b-2 py-1 border-gray-400">
          <div className="flex gap-2 items-center justify-center">
            <TiTick size={19} color="green" />
            <p className="text-sm text-gray-600"> Your Chances are Good in :</p>
          </div>

          <p className="text-[#3b5eb0] font-semibold text-sm">
            4 Colleges &gt;{" "}
          </p>
        </div>
      </div>

      <div className="flex h-full md:bg-slate-50 md:mt-0 mt-2  md:w-[80%] w-[90%]  mx-auto py-2 px-2  gap-4  relative  ">
        <div className="border md:block hidden md:w-[400px]  w-fit h-fit ">
          <Filter />
        </div>
        <div className="md:border  h-full  py-2 px-2  md:w-[50%] w-[100%]   ">
          <div className="border flex justify-between items-center   md:border-green-500  h-10 w-full rounded-full    bg-[#d5f9d5]  mx-auto md:rounded-sm  py-0 px-2">
            <h2 className="md:text-[15px] text-[13px]">
              Get Personalised Report in PDF{" "}
            </h2>
            <div className="flex justify-center border text-sm cursor-pointer  text-white  bg-[#209120] px-2 py-[2px] md:w-20 w-16  md:h-7  h-6 rounded-full  items-center">
              <TiTick size={19} color="black" />
              Send
            </div>
          </div>
          <h3 className="md:text-[16px] text-[12px] font-semibold  py-1 ">
            Showing 2 Colleges in TS EAMCET Counselling
          </h3>

          <PredictorCard />
          <PredictorCard />
          <PredictorCard />
          <PredictorCard />
          <PredictorCard />
          <PredictorCard />
          <PredictorCard />
        </div>
        <div className=" absolute  bottom-1 md:right-0 right-3  md:bottom-16">

        <Pagination/>
        </div>

      </div>
    </>
  );
};

export default Predictors;
