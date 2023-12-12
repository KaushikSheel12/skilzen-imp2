import React, { useState } from "react";
import ProgressBar from "../result/ProgressBar";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ChooseContry } from "./Scomponents/ChooseContry";
import { Preferred } from "./Scomponents/Preferred";
import { Education } from "./Scomponents/Education";
import { Duolingostatus } from "./Scomponents/Duolingostatus";
import { NameEmail } from "./Scomponents/NameEmail";
import Image from "next/image";

export const Scholar = () => {
  const CompoNents = [
    <ChooseContry />,
    <Preferred />,
    <Education />,
    <Duolingostatus />,
    <NameEmail />,
  ];

  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  const handleNextClick = () => {
    if (activeComponentIndex < CompoNents.length - 1) {
      setActiveComponentIndex(activeComponentIndex + 1);
    }
  };


  const handleBackClick = () => {
    if (activeComponentIndex > 0) {
      setActiveComponentIndex(activeComponentIndex - 1);
    }
  };

  const isLastComponent = activeComponentIndex === CompoNents.length - 1;

  return (
    <>
      <div className="w-full md:h-[700px] h-full relative px-2 py-2">
        <ProgressBar progress={(activeComponentIndex + 1) * 20} />
        <div className=" md:text-[17px] text-md w-full md:w-[60%] mx-auto py-2 mt-4    ">
          <div
            onClick={handleBackClick}
            className="flex items-center gap-1 w-fit  h-fit border bg-blue-500 px-3 md:px-8 md:py-2 py-1 text-white rounded-md  cursor-pointer"
          >
            <AiOutlineArrowLeft className="md:w-7 w-6" />
            <p>Back</p>
          </div>
        </div>
        <div className="md:w-[600px] w-full px-2 h-fit mx-auto  mt-10">
          {CompoNents[activeComponentIndex]}
        </div>
        <div className="md:text-[17px] text-md w-full md:w-[60%] mx-auto py-5 md:mt-8     ">
          {isLastComponent ? (
            <p className="bg-green-500 text-white text-center  shadow-lg cursor-pointer rounded-md w-fit mx-auto px-7 py-1 ">
              Complete
            </p>
          ) : (
            <div
              onClick={handleNextClick}
              className="flex items-center gap-1 w-fit h-fit border bg-blue-500 px-6 md:px-10 py-2 text-white rounded-md  shadow-lg mx-auto cursor-pointer"
            >
              <p>Next</p>
              <AiOutlineArrowRight className="md:w-7 w-7" />
            </div>
          )}
        </div>
      </div>

      {/* <div className="absolute w-full bottom-0">
        <div className="w-full hidden  h-[270px]    relative">
          <Image
            fill
            src="https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Ftapri%2Ftapri_assets%2Fform%2Fform_bg.png&w=3840&q=75"
            alt="buttom img"
            className="object-contain"
          />
        </div>
      </div> */}
    </>
  );
};
