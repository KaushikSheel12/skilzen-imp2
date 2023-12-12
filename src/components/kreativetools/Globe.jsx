import Image from "next/image";
import React from "react";

export const Globe = () => {
  return (
    <div className="md:max-w-[1300px] px-2 w-full mx-auto md:px-8 h-screen  ">
      <div className="w-full md:h-[350px] h-[200px] grid place-content-center  text-cente md:mt-20">
        <h1 className="md:text-[96px]  text-center text-[40px]">For every human</h1>
        <p className="md:text-[28px] text-[22px] text-center text-gray-400  ">
          Privacy-first. Owned by everyone
        </p>
        <div className="md:px-8 px-3 py-2 md:py-4 mt-5 md:mt-20 rounded-full w-fit text-[16px] md:text-[20px] text-gray-400 text-center mx-auto border-gray-400  border-[2px] relative ">
          2,382,254 unique humans on Worldcoin
          <div className="absolute h-[35px] md:h-[45px] top-[40px] md:top-[63px] right-[160px]  md:right-[210px] w-[1px] border border-gray-400"></div>
        </div>
      </div>

      <div className="md:grid relative mt-5 md:mt-0  grid-cols-3 place-content-center justify-center items-center w-full h-screen  ">
        <div className=" ">
          <div className="flex   md:mt-[-250px] items-center">
            <div className="w-[350px] h-[2px] border border-orange-600"></div>
            <div className="w-16 border -rotate-[-32deg] mt-[31px] md:mt-[34px] -ml-[5px] border-orange-600"></div>
          </div>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            Amount of WLD claimed by users* 35,502,561
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            35,502,561 Wallet transactions by World App users
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            116,553 Daily wallet transactions avg. last 7 days
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            34 Countries where Orb verifications happened
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            2,000 Orbs manufactured
          </p>
        </div>

        <div className="md:w-[500px] mt-3 md:mt-0 w-[270px] h-[270px] md:h-[500px] md:left-auto left-[50px] md:right-[40px]  relative ">
          <Image
            fill
            src="https://cdn-images-1.medium.com/max/1600/0*MLaCmA0eX58ht9K2.png"
            alt="globe-img"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className=" absolute right-0 ">
          <div className="flex  md:mt-[-250px] items-center">
            <div className="w-16 border -rotate-[32deg] mt-[34px] -mr-[5px] border-green-700"></div>
            <div className="w-[350px] h-[2px] border border-green-700"></div>
          </div>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            Amount of WLD claimed by users* 35,502,561
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            35,502,561 Wallet transactions by World App users
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            116,553 Daily wallet transactions avg. last 7 days
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            34 Countries where Orb verifications happened
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            2,000 Orbs manufactured
          </p>
        </div>
      </div>
    </div>
  );
};
