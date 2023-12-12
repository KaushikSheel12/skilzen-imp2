import React from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";
import Pheadercard from "./PheaderCard";

const Pheader = () => {
  return (
    <>
      <div className="w-full md:block hidden  mt-5 py-1 px-2 h-[70px]">
        <div className="w-[80%] h-full  border  mx-auto flex justify-around px-2 py-2 items-center  ">
          <p className="text-gray-500  text-sm ">Summary of Your Prediction</p>

          <div className="flex gap-4">
            <div className="cursor-pointer">
              <Pheadercard
                bgClr="#30D5C8"
                textClr="white"
                text="Good Chances"
                clg="4 Colleges"
                boxbottomClr="green"
              />
            </div>
            <Pheadercard
              bgClr="white"
              textClr="gray"
              text=" May Get In"
              clg="0 Colleges"
              boxbottomClr="orange"
            />
            <Pheadercard
              bgClr="white"
              textClr="gray"
              text="Tough Chances In"
              clg="0 Colleges"
              boxbottomClr="gray"
            />
          </div>
          <div className="flex border-l-2 px-4">
            <p className="text-blue-700 text-sm cursor-pointer ">
              Change Inputs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pheader;
