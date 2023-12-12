import Image from "next/image";
import React from "react";
import { BsFillReplyFill } from "react-icons/Bs";
import { MdReportProblem } from "react-icons/Md";
import { BiSolidUpvote } from "react-icons/bi";
import { GiShare } from "react-icons/gi";

const Canswers = () => {
  return (
    <> 
      <div className="w-full relative h-full  mt-[60px] mx-auto ">
        <div className="px-14 ml-20    w-full ">
          {" "}
          <div className="  relative border  mt-4">
            {" "}
            <div className="w-fit  text-[14px] h-fit grid place-content-center px-2 absolute top-0 left-[150px]  mt-2 border bg-red-700 text-white">
              Teacher
            </div>
            <h3 className="text-[19px] font-bold text-blue-600 top-0 left-[10px] py-1 absolute">
              Shivam Dubey
            </h3>
            <p className="text-gray-600 text-[15px]  top-6 left-2 py-2 absolute ">
              {" "}
              Asked: March 25, 2018{" "}
            </p>
          </div>
          <p className=" mt-[70px] ml-2 text-gray-600 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus mauris eget libero hendrerit, in pellentesque ligula
            hendrerit. Integer ut elit vel nisl sollicitudin elementum. Sed
            venenatis, libero quis consectetur euismod, odio ex fringilla
            libero, id consectetur elit odio vel ipsum. Quisque consectetur a
            elit vel dignissim. Sed vitae libero non diam viverra bibendum nec
            et nunc. Sed id ullamcorper justo. Proin at neque eu ligula eleifend
            commodo.
          </p>
          <div className="flex mt-8  items-center gap-4  ">
            <div className="w-fit px-4 py-0 h-fit border-0 text-[17px]  border-r-2 text-blue-700 bg-white rounded-sm   items-center gap-3 flex ">
              <BiSolidUpvote size={20} /> <p>Upvote</p>
            </div>
            <div className="w-fit px-4 py-0 h-fit border-0  text-[17px]  border-r-2 text-gray-700 bg-white rounded-sm   items-center gap-3 flex ">
              <BsFillReplyFill size={25} /> <p>Reply</p>
            </div>
            <div className="w-fit px-4 py-0 h-fit text-gray-700  text-[17px] bg-white rounded-sm   border-r-2  items-center gap-3 flex ">
              <GiShare size={22} /> <p>Share</p>
            </div>
            <div className="w-fit px-4 py-0 h-fit text-gray-700  text-[17px] bg-white rounded-sm   items-center gap-3 flex ">
              <MdReportProblem size={22} /> <p>Report</p>
            </div>
          </div>
        </div>

        <div className="w-[60px] h-[60px] rounded-full border absolute top-[-6px] left-10">
          {" "}
          <div className="w-full h-full relative">
            <Image
              src="https://cdn2.momjunction.com/wp-content/uploads/2019/07/Whatsapp-DP39.jpg"
              alt="profile-pic"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Canswers;
