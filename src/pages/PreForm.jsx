import Topexambox from "@/components/predictors/Topexambox";
import React from "react";
import { TiTick } from "react-icons/Ti";

const PreForm = () => {
  return (
    <>
      <div className="w-full md:h-[400px] h-full text-white border border-red-40 py-2 bg-blue-900 text-center grid place-content-center">
        <div className="md:w-[80%] w-full px-2  mx-auto">
          <h1 className="md:text-[30px] text-[18px]  md:py-0 py-2 font-semibold">
            CAT College Predictor - IIM & Non-IIM MBA Call Predictor
          </h1>





          <div className="flex items-center gap-2 py-4">
            <TiTick
              size={19}
              color="white"
              className="md:w-6 w-4  md:mt-[-16px]"
            />
            <p className="text-sm">
              Know Your Chances for getting Calls from IIMs & other Top MBA
              Colleges through CAT Percentile, based on your category, academic
              profile, work-ex & CAT result
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TiTick size={19} color="white" className="md:w-6 w-4" />
            <p className="text-sm">
              Get to know the College-wise Eligibility & Required Cut-off
              Percentiles / Scores for your Interview Calling Chances
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TiTick size={19} color="white" className="md:w-6 w-4" />
            <p className="text-sm ">
              70,000+ management aspirants used Careers360 College Predictors
            </p>
          </div>
        </div>
      </div>

      <div className="md:mt-20  w-full md:w-[490px] h-fit px-4 py-6 rounded-md shadow-2xl  mx-auto">
        <h4 className="text-center font-semibold text-sm md:text-md">
          Enter Center Seat Allocation Board (CSAB) Details
        </h4>

        <p className="text-[13px] text-gray-500 mt-5">Enter Your Rank</p>
        <input type="number" className="w-full h-8 border" />

        <p className="text-[13px] text-gray-500 mt-3">Gender</p>
        <div className="flex  py-0 items-center gap-5">
          <label>
            <input type="radio" name="gender" value="male" checked="true" />{" "}
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="femal" checked="" /> Female
          </label>
        </div>

        <p className="text-[13px] text-gray-500 mt-3">Reservation category</p>
        <div className="custom-select">
          <select className="w-full h-8 border">
            <option value="adada">-- Select --</option>
            <option value="adada">AU - Andhra University Regions</option>
            <option value="adada">
              Unreserved - Non local for all regions
            </option>
            <option value="adada">OU - Osmania University Region</option>
            <option value="adada">SVU - Sri Venkateshwara University</option>
          </select>
        </div>

        <p className="text-[13px] text-gray-500 mt-5">
          Seat Type in Andhra Pradesh Counselling
        </p>
        <div className="custom-select">
          <select className="w-full h-8 border">
            <option value="adada">-- Select --</option>
            <option value="adada">Disability Quota Seats</option>
            <option value="adada">
              Economically Weaker Section Quata Seats
            </option>
            <option value="adada">Minority Religion Seats</option>
            <option value="adada">Open / BC / SC / ST </option>
            <option value="adada">Special Reservation Seats</option>
          </select>
        </div>

        <div className="w-fit h-fit px-4 py-3 border  text-md text-white mt-5 mx-auto cursor-pointer rounded-md bg-orange-600 grid place-content-center">
          Predict My Colleges
        </div>
      </div>
      <div className="w-full bg-gray-400  md:mt-5  px-2 py-2 h-fit">
        <h1 className="text-center text-[22px]">
          Other MBA College Predictors
        </h1>
        <div className="md:w-[70%] h-full mx-auto py-4  grid md:grid-cols-3 grid-cols-1 ">
          <Topexambox />
          <Topexambox />
          <Topexambox />
        </div>
      </div>
    </>
  );
};

export default PreForm;
