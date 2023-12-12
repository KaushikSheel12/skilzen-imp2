import Image from "next/image";
import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";
import PreForm from "../../pages/PreForm";
import Navigation from "./Navigation";

const Design = () => {
  return (
    <>
      <>
        <div className=" md:w-[70%] w-full  mx-auto  bg-[#f4f4e9]  md:mt-[130px] md:h-[500px] h-full  border    md:flex    ">
          <div className="imgdiv  md:w-[50%] mt-5   w-full  h-full">
            <div className=" mx-auto  md:w-[70%] border   w-[85%] relative  mt-20 rounded-[40px] bg-blue-100 md:py-0 py-4   md:h-[440px]">
              <div className="md:w-[70%]   px-2 md:py-2 relative  h-[352px]  mx-auto md:mt-[-70px]   ">
                <Image
                  alt="smlimg"
                  src="https://cdn-images-1.medium.com/max/1600/1*Q71-VRy3MHnzYdSTkbJ7Dw.png"
                  fill
                  className="object-contain md:mt-0  mt-[-40px]"
                />
              </div>

              <div className="w-[80%] px-2 py-0 md:mt-0    mt-[-40px]    h-[70px] border items-center  justify-center  rounded-lg bg-blue-900  flex gap-2  mx-auto">
                <p className="text-white font-semibold text-[17px] text-center">
                  Archieve Exam Success with a Single Click now
                </p>
              </div>
            </div>
          </div>

          <div className="txtdiv  md:w-[50%] w-[85%] mx-auto  md:py-0 py-6  md:px-0 px-2 mt-6 md:mt-12 md:h-full">
            <div className="w-fit h-fit px-2 md:mt-28  uppercase   rounded-lg  border flex text-sm font-semibold bg-blue-900 text-white leading-6  ">
              DESIGN
            </div>
            <p className="font-bold  text-[28px]  py-2 mt-2  text-blue-900  leading-9 ">
              Design Crafted For Exam Success , the Layout Prioritizes Ease of
              Use
            </p>

            <p className="font-bold  text-md  text-gray-500 md:py-2  py-1 leading- ">
              Easy as just on click to edit and be online in no time
            </p>
          </div>
        </div>
      </>
      {/* <PreForm /> */}


      <Navigation/>
    </>
  );
};

export default Design;
