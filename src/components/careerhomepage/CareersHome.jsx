import Image from "next/image";
import React from "react";
import Clg from "./Clg";
import ClgNamebox from "./ClgNamebox";
import ClgList from "./ClgList";

const CareersHome = () => {
  return (
    <>
      <div className=" w-full h-[500px] flex  md:rounded-b-full overflow-hidden   bg-[#1aaed7f4]">
        <div className=" text-[white]  ml-10  flex mx-auto md:block md:text-left text-center  w-[90%] mt-16   md:w-[500px] h-44 md:mt-[130px] md:ml-72 ">
          <div>
            <h1 className="md:text-[55px] text-[38px] md:leading-[50px] leading-10 md:text-left  text-center  ">
              Most Fastest Food <br /> Delivery Service
            </h1>
            <p className="md:text-sm text-[13px]   mt-4  ">
              Enter your location to get your nearest restaurants or <br /> get
              deliver foods & enjoy. Happy foodie life
            </p>
          </div>
          <div className=" md:w-96  w-[80%] ml-2  md:ml-0   bg-white rounded-md h-10  md:h-16 md:mt-16 mt-[372px]  md:right-[550px] absolute  md:py-1 px-1 flex gap-3 items-center ">
            <select className=" text-black md:text-xl text-sm h-10  text-center border-0   w-[70%]">
              <option value="">IIT Colleges</option>
              <option value="">None IT Colleges</option>
              <option value="">Engeering Colleges</option>
            </select>
            <div className="bg-green-500 md:w-28 md:h-10 w-20 h-6 md:text-[15px] text-[10px]  cursor-pointer hover:bg-[#1aaed7f4]  rounded-md  font-semibold  items-center grid place-items-center  mx-auto  py-1 px-1">
              Find College
            </div>
          </div>
        </div>

        <div className=" opacity-30 md:opacity-100  md:h-full h-[500px] ml-[18px]  md:w-[450px] w-[350px]  md:relative  absolute   md:ml-auto rounded-b-full md:mr-20">
          <Image
            fill
            alt="careerheadimg"
            src="https://static.vecteezy.com/system/resources/previews/011/343/673/original/young-boy-reading-a-book-with-stack-of-books-3d-character-illustration-png.png"
          />
        </div>
      </div>

      <Clg />

      <div className="w-full flex py-2    px-2 h-10 gap-6  justify-center  md:mt-6  mt-[-12px] items-center  ">
        <div className="bg-green-600 md:w-20 hidden  h-1"></div>
        <div className="text-green-600  font-semibold  md:text-[27px] text-[28px]">
          Our Restaurants Selection
        </div>
      </div>

      <ClgList />
    </>
  );
};

export default CareersHome;
