import Image from "next/image";
import React from "react";
import SlidingText from "./SlidingText";

const Coursehero = () => {
  return (
    <>
      <div className="md:w-[70%] w-[90%] md:h-[250px]   mx-auto px-2 md:px-4 py-4 md:flex relative gap-5 items-center justify-between">

        <div className="w-[90%]   h-full md:border-b-[0px] border-b-[4px] mx-auto md:border-l-4 border-[#184132]">
          <h1 className="md:px-4   py-8 md:py-4 text-[25px] md:text-[50px]  mx-auto  font-semibold leading-8 md:leading-[60px] text-gray-700">
            {" "}
            Bridging Dreams <br /> with Courses
          </h1>
          <div className="md:w-[200px] hidden md:block   w-[300px]     h-[4px]  bg-[#184132]"></div>
        </div>

        <div className="md:w-[50%]   w-full px-4 mx-auto  md:flex items-center  md:mr-[103px]  mt-4 justify-between h-[340px] md:h-[170px] ">

          <div className="md:w-[50%]  w-full  md:px-2 py-2 md:flex relative items-center gap-5  h-[150px] md:h-[170px] border-[#184132] md:border-r-4     ">
            <div className="w-[300px] h-1 hidden md:block bg-[#184132] absolute top-0 right-[-100px] "></div>

            <div className="md:w-[90px]   md:ml-3 ml-0 md:h-[87px] w-[68px] h-[70px] relative    ">
              <Image
                src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644fb94eb0874f0ac6fea560_design.svg"
                alt="img"
                
                fill
                className="object-contain"
              />
            </div>
            <div>
         
            </div>
          </div>

          <div className="md:w-[57%] w-full    ml-0 md:ml-7 md:mt-0  mt-[12px]   md:px-4 py-2 md:flex   items-center gap-5 h-[150px] md:h-[170px]  border-[#184132]   ">
            <div className="md:w-[90px] md:h-[90px] w-[70px] h-[70px] relative  ">
              <Image
                src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644fb94d642592b496270797_sustainability.svg"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
            <div>
            
            </div>
          </div>
        </div>







        <div className="border-[#184132] md:w-[677px] w-[95%]   md:right-[-0px] top-[495px] md:top-[215px] md:border-t-[4px]  md:border-l-[4px] px-4 py-4    absolute h-[100px]">
          <p className="md:text-lg text-gray-800 text-[15px] leading-5 md:leading-6 ml-2">
          Unlock your potential with our courses section designed to bridge aspirations to achievements.
          </p>
        </div>
      </div>
      <SlidingText/>
    </>
  );
};

export default Coursehero;
