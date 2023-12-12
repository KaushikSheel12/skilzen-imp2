import React from "react";
import { BsStar } from "react-icons/Bs";
import { GrSettingsOption } from "react-icons/Gr";
import { MdOutlineSettings } from "react-icons/Md";
import { RiLightbulbFlashLine, RiPencilRuler2Line } from "react-icons/Ri";
import { AiOutlineCodeSandbox } from "react-icons/ai";

 export const DummyProgress = () => {
  return (
    <>
    
      <div className="md:w-[80%] bg-red-200  md:pr-0 p w-full mx-auto  h-full  mt-20 text-center">
        <div className="border border-teal-400 md:w-[240px] w-[140px] mx-auto mt-4"></div>
        <div className="md:h-[60px] h-[30px]  w-0 mx-auto border border-teal-400"></div>
        <div className="md:w-[10px] md:h-[10px] w-2 h-2  rounded-full bg-teal-400 mx-auto"></div>
        <h1 className="font-semibold md:text-[40px] text-[18px]">
          To progress...
        </h1>
        <div className="md:h-[50px] h-[30px] w-0 mx-auto border border-teal-400 mt-2"></div>

        <div className="border border-teal-400 md:w-[160px] w-[80px] md:ml-[557px] ml-[116px]"></div>

        <div className="md:h-[160px] h-[97px]  w-0 mx-auto border border-teal-400 md:ml-[557px] ml-[116px]"></div>

        <h2 className="absolute  md:left-[595px] left-[40px] md:top-[312px] top-[220px] font-semibold md:text-[33px] text-md">
          First job
        </h2>
        <div className="md:w-[450px] w-[220px] h-[60px] md:h-[110px] border absolute  left-[150px] md:left-[845px] top-[205px] md:top-[287px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-gray-800">
          <div className="md:text-[23px] text-sm">
            <h2 className="md:py-3 py-1">Juior Engineer</h2>
            <h2>28,000</h2>
            <div
              style={{ clipPath: "polygon(100% 100%, 67.8% 46%, 100% 0%)" }}
              className="md:h-[60px] h-[30px] w-[55px] md:w-[140px] bg-gray-800 absolute right-[217px] md:right-[448px] top-[15px] md:top-[25px]"
            />
          </div>

          <RiPencilRuler2Line size={65} className="md:w-12 w-6" />
        </div>

        <div className="md:w-[10px] w-2 h-2 md:h-[10px] rounded-full bg-teal-400 md:left-[733px] left-[113px] absolute top-[230px] md:top-[335px] "></div>

        <div className="md:w-[300px] w-[170px] h-[100px] md:h-[170px] border-t-2 border-teal-400 border-r-2 mx-auto absolute border-b-2 left-[116px]  md:left-[737px]">
          <div className="md:w-[450px] w-[220px] h-[60px]  md:h-[110px] border absolute right-[35px] md:right-[100px] top-[20px] md:top-[30px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-teal-600">
            <MdOutlineSettings
              size={57}
              color="white"
              className="md:w-12 w-8"
            />
            <div className="md:text-[23px] text-sm">
              <h2 className="md:py-3 py-1"> Engineer</h2>
              <h2>33,000</h2>
            </div>
            <div className="md:w-[10px] w-2 h-2 md:h-[10px] absolute  md:top-12 left-[250px]  md:left-[545px] rounded-full bg-teal-400 mx-auto"></div>
            <h4 className=" absolute md:text-[22px] text-sm  font-semibold left-[270px] md:left-[600px] text-gray-800 md:mt-2 whitespace-nowrap">
              + 9 months
            </h4>
            <div
              style={{ clipPath: "polygon(37.6% 49.3%, 0% 100%, 0% 0%)" }}
              className="md:h-[60px] h-[30px] md:w-20 w-[50px] bg-teal-600 absolute md:left-[448px] left-[217px] right-[117px] md:right-[448px] top-[15px] md:top-[25px]"
            />
          </div>
        </div>

        <div className="md:w-[300px] w-[170px] h-[100px] md:h-[170px] border-t-2 border-teal-400 border-l-2 mx-auto absolute border-b-2  top-[382px]  md:top-[600px] left-[116px]  md:left-[737px]">
          <div className="md:w-[450px] w-[220px] h-[60px] md:h-[110px] right-[35px] md:right-[100px]  border absolute left-[35px] md:left-[100px] top-[20px] md:top-[30px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-pink-600">
            <div className="md:text-[23px] text-sm">
              <h2 className="md:py-3 py-1">Senior Engineer</h2>
              <h2>42,000</h2>
              <div
                style={{ clipPath: "polygon(100% 100%, 67.8% 46%, 100% 0%)" }}
                className="md:h-[60px] h-[30px] w-[55px] md:w-[140px] bg-pink-600 absolute right-[217px] md:right-[448px] top-[15px] md:top-[25px]"
              />
            </div>

            <AiOutlineCodeSandbox
              size={57}
              color="white"
              className="md:w-12 w-8"
            />
            <div className="md:w-[10px] w-2 h-2 md:h-[10px] absolute  md:top-12  right-[251px] md:right-[545px] rounded-full bg-teal-400 mx-auto"></div>
            <h4 className=" absolute   md:text-[22px] text-sm  font-semibold right-[273px] md:right-[600px] text-gray-800 md:mt-2 mt-[-1px] whitespace-nowrap">
              + 56 months
            </h4>
          </div>
        </div>
        <div className="md:w-[300px] w-[168px] h-[100px] md:h-[170px]  border-t-2 border-teal-400 border-r-2 mx-auto absolute border-b-2 left-[118px] top-[480px] md:top-[768px] md:left-[737px]">
          <div className="md:w-[450px] w-[220px] h-[60px]  md:h-[110px] right-[35px] md:right-[100px]  border absolute top-[20px]  md:top-[30px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-blue-500">
            <RiLightbulbFlashLine
              size={57}
              color="white"
              className="md:w-12 w-8"
            />
            <div className="md:text-[23px] text-sm">
              <h2 className="md:py-3 py-1">Prinicipal</h2>
              <h2>52,000</h2>
            </div>
            <div className="md:w-[10px] md:h-[10px] w-2 h-2 absolute  md:top-12 left-[251px]  md:left-[545px] rounded-full bg-teal-400 mx-auto"></div>
            <h4 className=" absolute   md:text-[22px] text-sm   font-semibold left-[265px] md:left-[600px] text-gray-800 md:mt-2 whitespace-nowrap">
              + 64 months
            </h4>

            <div
              style={{ clipPath: "polygon(37.6% 49.3%, 0% 100%, 0% 0%)" }}
              className="md:h-[60px] h-[30px] md:w-20 w-[50px] bg-blue-500 absolute md:left-[448px] left-[217px] right-[117px] md:right-[448px] top-[15px] md:top-[25px]"
            />
          </div>
          <div className="md:h-[140px] h-[80px] absolute top-[97px] md:top-[167px] w-0 mx-auto border border-teal-400 "></div>
          <div className="md:w-[10px] w-2 h-2 md:h-[10px] absolute top-[170px]  md:top-[307px] left-[-3px]  md:left-[-4px] rounded-full bg-teal-400 mx-auto"></div>
        </div>


        <div className="md:w-[450px] w-[220px] h-[90px] md:h-[160px] md:block flex items-center  gap-6 justify-between border absolute md:left-[820px] left-[155px]  top-[610px] md:top-[1000px]  text-left text-[23px] text-white px-4 py-4 bg-yellow-500">
          <BsStar size={57} color="white" className="md:w-12 w-8" />


          <div className="mt-4 ml-2 md:text-[23px]  text-sm">
            
            <h2 className="md:py-3 py-1">Director of Engineering</h2>
            <h2>100K +</h2>
            <div



              style={{ clipPath: "polygon(100% 100%, 67.8% 46%, 100% 0%)" }}
              className="md:h-[60px] h-[30px] w-[55px] md:w-[140px] bg-yellow-500 absolute right-[217px] md:right-[448px] top-[31px] md:top-[50px]"
            />
          </div>

          <h4 className=" absolute  md:text-[22px] text-sm top-[-15px]   font-semibold right-[270px] md:right-[600px] md:top-[0px] text-gray-800 mt-2 whitespace-nowrap">
            + 87 months
          </h4>

          <h2 className=" text-black absolute whitespace-nowrap right-[270px]  md:right-[590px] md:top-[52px] font-semibold md:text-[33px] text-md ">
            First job
          </h2>
        </div>
      </div>
    </>
  );
};


