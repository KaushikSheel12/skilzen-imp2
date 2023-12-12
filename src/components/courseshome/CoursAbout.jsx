import Image from "next/image";
import React from "react";

import CaboutBox from "./CaboutBox";
import { AboutData } from "./data/data";
import WhatisNext from "./WhatisNext";

const CoursAbout = () => {
  return (
    <>
      <WhatisNext />
      <div className="md:w-[70%] w-full mx-auto mt-10 grid md:grid-cols-3 grid-cols-1  h-full  py-2">
        <div className="md:w-[400px] w-full h-[265px] mx-auto relative px-4 mb-2 text-center  z-[-10px]  py-4   ">
          <Image
           

 src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644faf4ba9dbd97ee2fb24a2_Crafted-Environments.jpg"
            fill
            className="object-contain"
          />
          <h2 className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 text-[20px]">
            CRAFTED ENVIRONMENTS
          </h2>
          <div className="w-[90%] h-10 border rounded-md absolute text-sm font-semibold inset-0 grid whitespace-nowrap  left-[20px] top-[150px] items-center text-white bg-black bg-opacity-30 text-[20px] ">
            Architecture is the intersection of art and science.
          </div>
        </div>
        {AboutData.map((el, index) => {
          return (
            <div key={index}>
              <CaboutBox imgUrl={el.url} title={el.title} para={el.para} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoursAbout;
