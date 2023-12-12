import Image from "next/image";
import React from "react";
import { BsFillEyeFill, BsTwitter } from "react-icons/Bs";
import { FaFacebookF, FaGooglePlusG, FaPencilAlt } from "react-icons/Fa";
import { FiUsers } from "react-icons/Fi";
import { MdDelete, MdReportProblem } from "react-icons/Md";
import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidMessage, BiSolidMessageMinus } from "react-icons/bi";
import { GiShare } from "react-icons/gi";
import Canswers from "./Canswers";

const Answerd = () => {
  return (
    <>
      <div className="w-[70%] bg-red-400 mx-auto px-10 py-2 border   border-b-2 h-20 flex justify-between items-center">
        <div>
          {" "}
          <div className="flex items-center">
            <Image
              src="https://static.thenounproject.com/png/3574480-200.png"
              width={30}
              height={30}
              alt="home"
            />{" "}
            <h3 className="text-md">
              {" "}
              <span className="text-black ">Home / </span>{" "}
              <span className="text-gray-500"> Question NO 1</span>
            </h3>{" "}
          </div>{" "}
        </div>
        <div>
          <div className="flex items-center gap-5">
            <div className="w-[140px] h-[50px] border bg-green-700 text-white   text-lg grid place-content-center ">
              Answered
            </div>
            <div className="w-[70px]  h-[50px] border grid place-content-center text-lg text-gray-500 font-semibold ">
              &lt;
            </div>

            <div className="w-[110px] h-[50px] border text-lg text-gray-500  grid place-content-center ">
              {" "}
              <div className="flex gap-2">
                <span> Next</span> <span> &gt;</span>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] relative h-full   mx-auto ">
        <div className="px-10 ml-20  h-full   w-[90%]">
          {" "}
          <div className="flex gap-7    mt-4">
            {" "}
            <div className="w-fit  text-[14px] h-fit grid place-content-center px-2  border bg-red-700 text-white">
              Teacher
            </div>
            <p className="text-gray-600 text-[15px]"> Asked: March 25, 2018 </p>
            <p className="text-[15px]">
              {" "}
              <span className="text-gray-500 ">:In</span>{" "}
              <span className="text-blue-600">Life Style, Restaurant </span>
            </p>
          </div>
          <h1 className="font-semibold text-[22px]  py-1 text-gray-800">
            Am I a vegetarian if still eat chicken & Meat Products?
          </h1>
          <p className=" mt-[30px] text-gray-600 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus mauris eget libero hendrerit, in pellentesque ligula
            hendrerit. Integer ut elit vel nisl sollicitudin elementum. Sed
            venenatis, libero quis consectetur euismod, odio ex fringilla
            libero, id consectetur elit odio vel ipsum. Quisque consectetur a
            elit vel dignissim. Sed vitae libero non diam viverra bibendum nec
            et nunc. Sed id ullamcorper justo. Proin at neque eu ligula eleifend
            commodo.
          </p>
          <div className="flex gap-3 py-8">
            <div className="border w-fit px-2 h-fit text-gray-600 ">
              Chicken
            </div>
            <div className="border w-fit px-2 h-fit text-gray-600 ">Life</div>
            <div className="border w-fit px-2 h-fit text-gray-600 ">
              vegetarian
            </div>
            <div className="border w-fit px-2 h-fit text-gray-600 ">tomato</div>
            <div className="border w-fit px-2 h-fit text-gray-600 ">Soup</div>
            <div className="border w-fit px-2 h-fit text-gray-600 ">Cheese</div>
          </div>
          <div className="w-[90%] h-[60px] bg-gray-100  px-4  flex justify-between  items-center ">
            <div className="flex gap-4  items-center">
              <div className="w-fit px-4 py-2 h-fit border text-green-700 bg-white rounded-sm  items-center gap-3 flex border-green-600">
                <BiSolidMessageMinus /> <p>19 Answers </p>
              </div>
              <div className="w-fit px-4 py-2 h-fit border text-gray-700 bg-white rounded-sm   items-center gap-3 flex ">
                <BsFillEyeFill /> <p>19 Answers </p>
              </div>
              <div className="w-fit px-4 py-2 h-fit border text-gray-700 bg-white   rounded-sm   items-center gap-3 flex ">
                <FiUsers /> <p>19 Answers </p>
              </div>
              <div className="w-fit px-4 py-2 h-fit border text-gray-700  bg-white  rounded-sm  items-center gap-3 flex ">
                <AiTwotoneStar /> <p>19 Answers </p>
              </div>
            </div>

            <div className="w-fit px-4 py-2 h-fit border text-white bg-black   rounded-sm  ">
              {" "}
              <p>19 Answers </p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-300 mt-10"></div>
          <div className="w-full h-[85px] flex items-center justify-between border-b-2 border  px-5   ">
            <div className="flex  items-center gap-4  ">
              <div className="w-fit px-4 py-0 h-fit border-0 text-[17px]  border-r-2 text-gray-700 bg-white rounded-sm   items-center gap-3 flex ">
                <FaPencilAlt size={20} /> <p>Edit</p>
              </div>
              <div className="w-fit px-4 py-0 h-fit border-0  text-[17px]  border-r-2 text-gray-700 bg-white rounded-sm   items-center gap-3 flex ">
                <MdDelete size={25} /> <p>Delete</p>
              </div>
              <div className="w-fit px-4 py-0 h-fit text-gray-700  text-[17px] bg-white rounded-sm   items-center gap-3 flex ">
                <MdReportProblem size={22} /> <p>Report</p>
              </div>
            </div>

            <div className="flex  items-center gap-2  ">
              <div className="w-fit px-4  h-fit text-gray-700 bg-white    text-[17px]  items-center gap-3 flex ">
                <GiShare size={25} /> <p>Share</p>
              </div>
              <div className="w-fit px-2 py-2 h-[40px] border rounded-sm   items-center gap-3 flex bg-blue-700 text-white ">
                {" "}
                <FaFacebookF />
                Facebook
              </div>
              <div className="w-fit px-2 py-[10px] h-fit text-white bg-[#63a4ff] rounded-sm   items-center gap-3 flex ">
                <BsTwitter />{" "}
              </div>
              <div className="w-fit px-2 py-2 h-fit text-white bg-red-500 rounded-sm   items-center gap-3 flex ">
                <FaGooglePlusG />{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-[85px]  relative   bg-gray-100 00">
            <div className="text-gray-400 text-[19px] absolute left-8 bottom-8 font-semibold">
              Answers <span className="text-black"> 19</span>{" "}
            </div>
            <div className="flex absolute right-10 bottom-0 bg-white text-gray-600 ">
              <div className="w-[90px] h-[45px] grid place-content-center border">
                Votes
              </div>
              <div className="w-[90px] h-[45px] grid place-content-center border">
                Oldest
              </div>
              <div className="w-[90px] h-[45px] grid place-content-center border">
                Recent
              </div>
            </div>
          </div>
          <Canswers />
          <Canswers />
          <Canswers />
          <div className="w-full h-16 mt-10 border-black border grid place-content-center  font bold cursor-pointer text-gray-600 text-lg">
            Load More 16 Answers{" "}
          </div>
          <div className="w-full  py-4 px-2  mt-10 h-[400px] relative ">
            <div className="w-[80%] border border-gray-500 h-44  absolute right-0">
              <div className="w-fit px-4  h-fit text-gray-500 bg-white   py-4  text-[17px]  items-center gap-3 flex ">
                <BiSolidMessage size={20} /> <p>Want to leave n answer!</p>
              </div>
            </div>
            <div className="w-[80%]    bottom-[120px] absolute right-0 h-20  flex justify-between px-6 items-center">
              <div className="flex items-center gap-3">
                {" "}
                <input type="checkbox" className="w-4 h-4" />{" "}
                <p className="text-gray-600">
                  Subcribe to the Email Notification
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[90px] h-[40px] border  grid place-content-center text-gray-600 font-bold ">
                  Cancel
                </div>
                <div className="w-[90px] h-[40px] border  grid place-content-center bg-blue-600 text-white  font-bold ">
                  Submit
                </div>
              </div>
            </div>

            <div className="w-[40px] h-[40px] rounded-full border absolute top-5 left-[140px]">
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
        </div>

        <div className="w-[60px] h-[60px] rounded-full border absolute top-[-6px] left-10">
          {" "}
          <div className="w-full h-full relative">
            <Image
              src="https://i.pinimg.com/564x/57/9a/14/579a14bb3966d1c7c4a140054e181d4d.jpg"
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

export default Answerd;
