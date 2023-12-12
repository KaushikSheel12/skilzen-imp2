import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Wantbe = () => {
  return (
    <>
      <div className=" w-[90%] h-full mx-auto mt-[70px]   md:py-10 mb-[70px] ">
        <h1 className="text-center font-semibold md:text-[70px] py-4 text-[39px] ">
          I want to be...
        </h1>

        <div className="grid mx-auto max-w-[1186px] bg-[#FEFCFB]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16  w-full rounded-md  h-full ">
            {[...new Array(6)].map((el, index) => {
              return (
                <div className="h-[655px] w-full bg-[#fff] border">
                  <div className=" relative group w-full cursor-pointer md:py-0 mb-10   h-[550px] ">
                    <div className="imgdiv w-full h-[90%] relative border  overflow-hidden">
                      <Image
                        src="https://images.doclify.net/bayswater-web/d/5858d6d2-0679-4a4c-afbb-992370678fef.jpg?enlarge=0&format=webp&w=500"
                        className="object-cover group-hover:scale-[1.1] transition-all linear ease-linear"
                        fill
                        alt="img"
                      />
                    </div>
                    <div className="  text-box absolute w-full z-20  bg-[#fff] group-hover:h-[320px]  h-fit group-hover:p-8 py-10  group-hover:-bottom-[100px] transition-all ease-linear">
                      <h3 className="md:text-[40px] text-[24px] font-semibold text-[#17175d] leading-[1.2]">
                        A Global Explorer
                      </h3>
                      <div className="hidden group-hover:block transition-all ease-linear  ">
                        <p className="md:text-[18px] text-[15px] py-4 leading-2 text-gray-600 max-w-[90%]">
                          Soak up diverse cultures by experiencing life in a
                          different country.
                        </p>
                        <ul>
                          <div className="flex gap-2 py-2 items-center">
                            <MdOutlineKeyboardDoubleArrowRight
                              color="orange"
                              size={25}
                            />
                            <li className="md:text-[19px] text-[17px] font-semibold">
                              General English
                            </li>
                          </div>
                          <div className="flex gap-2  items-center">
                            <MdOutlineKeyboardDoubleArrowRight
                              color="orange"
                              size={25}
                            />
                            <li className="md:text-[19px] text-[17px] font-semibold">
                              General English
                            </li>
                          </div>
                        </ul>
                      </div>
                      <div className="absolute -top-24 group-hover:-top-14 hover:bg-red-200 right-0 group-hover:right-[-18px] group-hover:scale-[0.7] transition-all">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 260 260"
                          fill="none"
                        >
                          <path
                            d="M130.008 0.03125H0V259.991H130.008V0.03125Z"
                            fill="#FFF8D9"
                          ></path>
                          <path
                            d="M259.989 0H130.02V259.998H259.989V0Z"
                            fill="#FFD100"
                          ></path>
                          <path
                            d="M260.001 129.965V259.998L130.021 129.985L130.012 129.994V0.0288886L130.041 0L260.001 129.965Z"
                            fill="#020842"
                          ></path>
                          <path
                            d="M130.008 0.03125V129.997L0 260V129.968L130.008 0.03125Z"
                            fill="#FFD100"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wantbe;
