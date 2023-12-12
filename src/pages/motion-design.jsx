import { Apps } from "@/components/kreativetools/Apps";
import { FontCard } from "@/components/kreativetools/FontCard";
import { UiCard } from "@/components/kreativetools/UiCard";
import { SidebarHome } from "@/components/kreativetools/sidebar/SidebarHome";
import { Toptitle } from "@/components/kreativetools/sidebar/Toptitle";
import { fontBoxImg } from "@/data/frontBoxImg";
import React from "react";
import { BsArrowUpRight } from "react-icons/Bs";
import Image from "next/image";
import { ResourceNev } from "@/components/kreativetools/ResourceNav";
import useToggleStore from "@/zustand";

const MotionDesign = () => {
  const { isToggel } = useToggleStore();
  return (
    <div className="w-full h-screen relative flex items-center px-2 md:px-6 py-1 ] ">
      <ResourceNev />
      <div
        className={`md:w-[240px] w-full h-full  md:block  fixed z-10  md:left-6 md:top-6 ${
          isToggel ? "block self-center bg-blue-100" : "hidden"
        } `}
      >
        <SidebarHome />
      </div>
      <div className="md:w-[70%] w-full  h-full pl-2 md:ml-[230px] px-2 ">
        <Toptitle
          heading="Motion Design"
          paraGraph="Find your next favorite motion design tool here"
        />

        <div id="Apps" className="w-full h-fit mt-2 ">
          <h2 className="md:text-[26px] text-[24px] font-semibold">Apps</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-2">
            <Apps
              title="LLLustrator"
              img="https://framerusercontent.com/images/e4CdGqrGik2HInsyc5ADUMiasvo.png?scale-down-to=512"
            />
            <Apps
              title="Photohop"
              img="https://framerusercontent.com/images/oPasot6czxqps2QTUc8LeBuORc.png?scale-down-to=512"
            />
            <Apps
              title="Inesign"
              img="https://framerusercontent.com/images/Y2UEwNZFUYH0cOPjNPTbZwX6Li4.png?scale-down-to=512"
            />
            <Apps
              title="Affinity Designer"
              img="https://framerusercontent.com/images/TQWgmWwraX4fH0X9HlFOLRLkvQ0.png?scale-down-to=512"
            />
          </div>
        </div>

        <div id="Script-Plugin" className="w-full h-fit mt-2  ">
          <h2 className="md:text-[26px] text-[24px]  font-semibold">
            Script & Plugin
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
          </div>
        </div>

        <div id="Sound-Design" className="w-full h-fit mt-2  ">
          <h2 className="md:text-[26px] text-[24px]  font-semibold">
            Sound Design
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => (
              <FontCard key={index} img={el} />
            ))}
          </div>
        </div>

        <div className="w-full md:h-[250px] h-fit  px-2 py-4 border-gray-600 border    shadow-lg mt-5 rounded-md  md:flex    items-center ">
          <div className="md:w-[70%]  w-full h-full md:px-14  grid place-content-center">
            <h3 className="md:text-[28px] text-[20px] ">Join the newsletter</h3>
            <p className="md:text-[16px] leading-5 text-[14px] text-gray-500">
              Receive an email when tools are added! Discover the future nugget
              of design in advance! No spam, we promise
            </p>
            <div className="flex items-center w-[230px] md:w-[309px] border-gray-500 border rounded-lg px-3 md:gap-3  gap-12 h-fit mt-3 ">
              <input type="email" placeholder="Enter your email" />
              <div className="px-4 bg-gray-200 rounded-lg py-1">Subscribe</div>
            </div>
          </div>
          <div className="md:w-[35%] hidden md:block md:h-[250px] relative">
            <Image
              src="https://framerusercontent.com/images/vF1ErqZTpfGoJaHHEr6nGNcccYM.png"
              alt="img"
              fill
              className="object-cove rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionDesign;
