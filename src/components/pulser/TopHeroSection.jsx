import React from "react";
import ScrollingText from "./ScrollingText";
import Image from "next/image";
import Intro from "./Intro";
import { BsArrowDown } from "react-icons/Bs";
import { aboutBoxData } from "./data/data";
import AboutBox from "./AboutBox";
import OverviewBox from "./OverviewBox";
import BenefitBox from "./BenefitBox";

const TopHeroSection = () => {
  return (
    <>
      <div className="">
        <div className="  py-1  bg-[#edfbed] md:h-[570px] h-full  relative">
          {/* Your page content here */}
          <ScrollingText />
          <div className="     w-full  md:h-[550px] h-[200px]  px-2  md:px-4 mx-auto py-1  md:flex   grid md:grid-cols-2 grid-cols-1 justify-around  items-center">
            <div className="md:w-[35%] w-full   h-full py-2 md:px-2 px-0 ">
              <div className="w-fit h-fit px-2 md:mt-0 mt-4  uppercase   rounded-lg  border flex text-[13px]  md:text-sm font-semibold bg-[#68dd68] text-[#1e451e] leading-6  ">
                Business
              </div>

              <h1 className="md:text-[60px] text-5xl   py-4 md:py-0  text-[#275527]  font-bold md:leading-[80px] leading-11  ">
                Grow Your Business With Our Help
              </h1>

              <div className="relative  w-full  md:h-9 h-7  px-2 py-2 mt-2  ">
                <Image
                  src="https://assets.website-files.com/647650ba58f7bcb914cadd85/648a05c579c011cf465ae0d8_Underline.png"
                  alt="abc"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 md:text-[21px] font-semibold  text-[17px]  px-2 py-2">
                The ultimate Webflow template for professionals in the business
                industry
              </p>
            </div>

            <div className="md:w-[25%]  h-[500px]   mt-[0px] md:mt-[-118px]  w-[90%]   mx-auto md:mx-0  md:block  relative  md:h-full z-[2]">
              <Image
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d439191deb839cd5398_Guy-Tablet%20.png"
                alt="professional-men"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <div className="  w-full  md:mt-[-63px]    mt-[680px]    flex justify-between     md:h-28 h-full  bg-[#dbf2db] bottom-0 -z-1">
            <div className="md:w-[42%] w-full grid md:grid-cols-2  grid-cols-1   md:ml-[180px]">
              <div className="  w-full h-full ">
                <div className="flex w-full h-full px-2 ">
                  <div className="img relative w-[50%] h-[138px] top-[-26px] ">
                    <Image
                      fill
                      alt="smallimg"
                      src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d4255e7eda07b1aa83b_Hero-girl.png"
                      className="object-contain"
                    />
                  </div>
                  <div className="txt w-[50%] h-full">
                    <h3 className="font-bold text-md">Who We Are</h3>
                    <p className="font-semibold text-sm text-gray-600 ">
                      Learn how to become a sales machine
                    </p>
                    <p className="font-semibold text-[12px] cursor-pointer hover:text-blue-500 ">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>

              <div className=" w-full h-full md:mt-0 mt-4">
                <div className="flex w-full h-full ">
                  <div className="img relative w-[50%] h-[138px] top-[-26px]  ">
                    <Image
                      fill
                      alt="smallimg"
                      src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42449bbb066bd6d5c0_Hero-guy.png"
                      className="object-contain"
                    />
                  </div>

                  <div className="txt w-[50%]   h-full">
                    <h3 className="font-bold text-md">Small Business</h3>

                    <p className="font-semibold text-sm text-gray-600 ">
                      See how can we help your business
                    </p>
                    <p className="font-semibold text-[12px] cursor-pointer hover:text-blue-500 ">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a href="#about">
              <BsArrowDown
                size={45}
                className=" md:block hidden  h-20 mr-16 mt-20 bg-[#8ae48a] animate-bounce  rounded-full"
              />
            </a>
          </div>
        </div>

        <Intro
          toptext="INTRO"
          headtext="Let's build your next big idea with Skillzen a Non Code Template"
          paragraph="As easy as just double click and type to edit"
        />

        <div className="w-fit h-fit   mx-auto  py-2 px-2 flex flex-wrap  justify-between items-center  gap-3">
          {aboutBoxData.map((el, index) => {
            return (
              <div key={index} className=" md:block mx-auto">
                <AboutBox
                  text={el.text}
                  paragraph={el.paragraph}
                  icon={el.icon}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-[-30px]">
          <Intro
            toptext="OVERVIEW"
            headtext="Welcome to Skillzen"
            paragraph="An overview of Skillzen benefits"
          />

          <OverviewBox />

          <Intro
            toptext="BENEFITS"
            headtext="Our Rock and Roll"
            paragraph="We bring ideas to life by combining years of"
          />
        </div>

        <div className="  w-[1010px] h-[2px] mx-auto "></div>

        <BenefitBox />
      </div>

      <div className=" ">

      </div>
    </>
  );
};

export default TopHeroSection;