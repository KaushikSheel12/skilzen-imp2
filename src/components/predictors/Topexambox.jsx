import PreForm from "@/pages/PreForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topexambox = () => {
  return (
    <>
      <div className="md:w-[410px] w-full h-fit pb-2 shadow-md  bg-white rounded-md  mx-auto mb-4 ">
        <div className="flex gap-3 items-center w-full h-[65px] md:px-2  ">
          <div className="w-[50px] h-[50px]  relative">
            <Image
              src="https://images.collegedunia.com/public/college_data/images/logos/NTA-%20Logo.png?h=50&w=50&mode=stretch"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
          <p className=" text-[14px] md:text-[16px] ">
            NEET 2023 College Predictor
          </p>
        </div>

        <div className="w-full flex gap-2 md:gap-4 h-fit border-b-[1px]  border-gray-400 md:px-2 py-2 ">
          <div className="border-r-2 w-fit whitespace-nowrap   px-1 pr-2  ">
            <p className="text-sm text-gray-500">Colleges Participating</p>
            <p className="text-sm text-blue-500">823</p>
          </div>

          <div className="border-r-2 w-fit whitespace-nowrap  pr-1  md:pr-2 ">
            <p className="text-sm text-gray-500 ">Exam Date</p>
            <p className="text-sm text-teal-600">15 May 2014</p>
          </div>
          <div className="w-fit whitespace-nowrap   ">
            <p className="text-sm text-gray-500">Exam Level </p>
            <p className="text-sm text-teal-500">Andhra Pradesh</p>
          </div>
        </div>

        <div className="w-full flex gap-4  h-fit mt-2  md:px-2 ">
          <p className="text-[14px] text-gray-500  border-r-2 px-2">
            Exam Info{" "}
          </p>
          <p className="text-[14px] text-gray-500  border-r-2 pr-2">Cutoff</p>
          <p className="text-[14px] text-gray-500  border-r-2 pr-2">
            Pratice Test
          </p>
          <Link href={"/PreForm"}>
            <p className="text-[14px] cursor-pointer text-orange-400">
              Predict Now
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topexambox;
