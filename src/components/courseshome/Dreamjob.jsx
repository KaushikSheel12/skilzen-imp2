import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CompanyBox from "./CompanyBox";

const Dreamjob = () => {
  const newArray = Array(20);

  return (
    <>
      <div className="w-full h-[500px] px-2 py-2 md:flex  justify-around">
        <div className=" md:w-[50%] w-full h-full  md:mt-[0px] mt-[-80px]  md:h-[600px] grid place-content-center ">
          <h1 className="md:text-[48px] text-[38px] md:text-left text-center font-semibold md:leading-[1.4] leading-[1.2]">
            Let&apos;s find your <br /> dream{" "}
            <span className="text-[#5B4BDA]">University</span> with{" "}
            <span className="text-[#5B4BDA]">CM</span>
          </h1>
          <div className="md:flex h-[56px] justify-between items-center w-full md:w-[663px] md:border md:border-black rounded-md py-1 p-2 mt-10">
            <div className="w-full flex  px-2  py-[8px] md:rounded-none rounded-md md:border-0 border   space-x-2">
              <AiOutlineSearch size={22} />
              <input
                type="text"
                className="h-full w-full  text-md focus:outline-none"
                placeholder="Job Title"
              />
            </div>
            <div className="w-full flex  md:border-0 border md:mt-0  md:rounded-none rounded-md py-[8px] mt-7 px-2 items-center space-x-2  md:border-l-[3px]  ">
              <CiLocationOn size={22} />
              <input
                type="text"
                className="h-full w-full text-md focus:outline-none"
                placeholder="Location"
              />
            </div>
            <button className="bg-[#5B4BDA] text-white md:px-10 md:mt-0  mt-7 md:w-fit w-full py-[8px]  md:py-2 rounded-md font-semibold">
              Search
            </button>
          </div>
        </div>

        <div className=" md:w-fit  gap-2 grid  grid-cols-2  md:grid-cols-4 px-2 py-2 w-full h-full">
          {newArray.fill(1).map((el, index) => {
            return (
              <div
                className={`${index % 2 == 0 ? "mt-8" : "mt-0"}`}
                key={index}
              >
                <CompanyBox />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dreamjob;
