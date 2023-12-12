import React from "react";

const Intro = ({ toptext, headtext, paragraph }) => {
  return (
    <>
      <div className="md:w-[80%] w-full  mx-auto h-fit  flex justify-center    text-center  mt-[100px]   md:p-6 md:mt-18">
        <div className=" md:w-[50%]  w-full   ">
          <div className="w-fit h-fit md:px-2 px-5  md:py-1 mx-auto  rounded-lg flex items-center md:text-sm text-[13px] font-semibold bg-[#68dd68] text-[#1e451e] leading-6  ">
            {toptext}
          </div>
          <h1 className="md:text-[35px] text-[30px] font-bold text-[#2d652d] py-3 md:leading-[42px] leading-[38px]">
            {headtext}
          </h1>
          <p className="text-[18px]  font-semibold text-[gray] text-center  ">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
