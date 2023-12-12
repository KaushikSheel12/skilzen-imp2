import Image from "next/image";
import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";

const BenefitBox = () => {
  return (
    <>
      <div className=" md:w-[1010px] w-full  mx-auto   mt-10  md:h-[500px] h-full     md:flex    ">
        <div className="imgdiv  md:w-[50%] mt-5  w-full  h-full">
          <div className="border border-white mx-auto  md:w-[80%]  w-[85%] relative  mt-20 rounded-[40px] bg-[#edfbed] md:py-0 py-4   md:h-[440px]">
            <div className="md:w-[70%]   px-2 md:py-2 relative  h-[352px]  mx-auto md:mt-[-70px]   ">
              <Image
                alt="smlimg"
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42670aaf893bf972d3_Section-guy.png"
                fill
                className="object-contain md:mt-0  mt-[-40px]"
              />
            </div>

            <div className="w-[80%] px-2 py-0 md:mt-0   mt-[-40px]    h-[70px] border items-center  justify-center  rounded-lg bg-[#58d358]  flex gap-2  mx-auto">
              <AiOutlineCalculator size={65} color="white" />
              <div>
                <h2 className="md:text-2xl  text-md  font-semibold text-[#265726]">
                  Expert Team
                </h2>
                <p className="md:text-md text-sm whitespace-nowrap  font-semibold text-white">
                  {" "}
                  Start free while you learn
                </p>
              </div>
            </div>
            <div className="w-[80%] text-lg font-semibold hover:  cursor-pointer  text-[#265726]  h-12 mt-2 grid  place-content-center  text-center mx-auto rounded-full bg-[#58d358] ">
              {" "}
              Try Us
            </div>
          </div>
        </div>

        <div className="txtdiv  md:w-[50%] w-[85%] mx-auto  md:py-0 py-6  md:px-0 px-2 mt-6 md:mt-12 md:h-full">
          <div className="w-fit h-fit px-2 md:mt-28  uppercase   rounded-lg  border flex text-sm font-semibold bg-[#68dd68] text-[#1e451e] leading-6  ">
            DESIGN
          </div>
          <p className="font-bold  text-[28px]  py-2 mt-2  text-[#2f622f]  leading-9 ">
            skillzen was designed with the idea of being easy to use
          </p>

          <p className="font-bold  text-md  text-gray-500 md:py-2  py-1 leading- ">
            Easy as just on click to edit and be online in no time
          </p>
          <p className="font-bold text-[#1a491a] text-md  md:text-lg">
            Overview
          </p>

          <p className="font-bold  text-md   text-gray-500 py-1  leading- ">
            skillzen boasts a visually striking and modern design that is sure
            to leave a lasting impact on your visitors start today with Pulsar
            Template
          </p>
        </div>
      </div>
    </>
  );
};

export default BenefitBox;
