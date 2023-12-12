import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/Ti";
import Design from "./Design";
import HomeCart from "./HomeCart";

const PreHome = () => {
  return (
    <>
      <div className="w-full  py-2 text-center grid place-content-center relative h-fit  md:h-[350px] text-white border bg-blue-900">
        <h1 className="md:text-[33px] text-[18px]  md:py-0 py-2 font-semibold">
          COLLEGE PREDICTOR 2023
        </h1>
        <p className="md:text-[21px] text-sm  ">
          Analyze the past and predict your future!
        </p>

        <div className="md:flex justify-between md:mt-0 mt-2  w-full px-2 py-2 md:w-[70%] mx-auto right-[270px]  md:absolute bottom-[-120px] items-center ">
          <HomeCart
            title="Predict your Admission Chances"
            paragraph1="Get to know college admission chances based on your Rank, Home
                State, Caste, etc"
            paragraph2="Know previous year's round wise course cutoff"
          />
          <HomeCart
            title="Predict your Admission Chances"
            paragraph1="Get to know college admission chances based on your Rank, Home
                State, Caste, etc"
            paragraph2="Know previous year's round wise course cutoff"
          />
          <HomeCart
            title="Predict your Admission Chances"
            paragraph1="Get to know college admission chances based on your Rank, Home
                State, Caste, etc"
            paragraph2="Know previous year's round wise course cutoff"
          />
        </div>
      </div>
      <Design />
    </>
  );
};

export default PreHome;
