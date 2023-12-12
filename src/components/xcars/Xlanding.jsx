import React, { useState } from "react";
import MonoHero from "./MonoHero";
import Addcollege from "./Addcollege";
import Image from "next/image";
import { CollegeVscard } from "./CollegeVscard";
import { Compairbox } from "./Compairbox";
import { CollegecompairBox } from "./CollegecompairBox";

export const Xlanding = () => {
  return (
    <>
      <div className="md:w-[80%] w-full py-4  mx-auto h-full border">
        <MonoHero />

        <div className=" md:w-[80%]  w-full mx-auto">
          <h1 className="md:px-7 px-10 py-3 text-[18px] md:text-[20px] font-semibold ">
            Compare Cars of your choice
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-1">
            <Addcollege />
            <Addcollege />
            <Addcollege />
            <Addcollege />
          </div>

          <div className="w-fit h-fit border px-3 py-1 mt-4 mx-auto rounded-md bg-red-600 text-white hover:bg-black cursor-pointer ">
            Compare College
          </div>

          <div className="w-full md:h-60  h-full md:mt-20 mt-10 flex items-center ">
            <CollegeVscard
              para1="2 Lakh's  Onwords"
              para2="3 Lakh's Onwords"
              imgOne="https://cdn.britannica.com/03/130603-050-37F7F535/Alliman-Administration-Center-Hesston-College-Mennonite-college.jpg"
              imgTwo={
                "https://bhattercollege.ac.in/wp-content/uploads/2023/07/College-Building.jpeg"
              }
              clgoneTitle="College of Engineering"
              clgtwoTitle="Bhatter College, Dantan"
            />
          </div>

          <div className="w-full md:h-[600px] h-full bg-gray-100 md:mt-20 mt-10 border px-7 ">
            <h2 className="px-0 py-2 text-[18px] md:text-[20px] font-semibold ">
              Cars Comparison By Experts
            </h2>

            <Compairbox
              clgImg="https://s3-ap-south-1.amazonaws.com/cmrec/wp-media-folder-cmr-engineering-college-hyderabad-telangana-india-approved-by-aicte-new-delhi-and-affiliated-to-jnt-university-hyderabad/wp-content/uploads/2021/07/CMREC-Main.jpg"
              heading="2023 Tata Nexon Facelift vs Honda Elevate Spec Comparison: Which One You Should Buy?"
              para="Given that it competes in a market dominated by the likes of Hyundai, Maruti Suzuki, and Kia, the Elevate is a crucial product for Honda. Here's a detailed comparison between the Elevate and the Maruti Suzuki's Grand Vitara. Let's see how they fare against each other. ...."
            />
          </div>

          <div className="w-full h-full border md:flex  gap-2 py-2 md:mt-20  mt-10">
            <div className="md:w-[45%] w-full h-full border">
              <h2 className="md:text-[20px] text-[18px] px-2 py-4 ">
                Top Comparisons
              </h2>
              <CollegecompairBox
                img1="https://cache.careers360.mobi/media/presets/625X400/article_images/2023/7/7/Delhi-university-wikimedia-commons.jpg"
                title1="College of Engineering"
                img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fJRtuOyqXaY-jKqRZlmkYpAMVw7fkgJtnDBibV3JcIcgrBm-wwcRP9StrvD6Mh5c4lk&usqp=CAU"
                title2="Bhatter College, Dantan"
              />
              <CollegecompairBox
                img1="https://cache.careers360.mobi/media/presets/625X400/article_images/2023/7/7/Delhi-university-wikimedia-commons.jpg"
                title1="College of Engineering"
                img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fJRtuOyqXaY-jKqRZlmkYpAMVw7fkgJtnDBibV3JcIcgrBm-wwcRP9StrvD6Mh5c4lk&usqp=CAU"
                title2="Bhatter College, Dantan"
              />

              <CollegecompairBox
                img1="https://cache.careers360.mobi/media/presets/625X400/article_images/2023/7/7/Delhi-university-wikimedia-commons.jpg"
                title1="College of Engineering"
                img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fJRtuOyqXaY-jKqRZlmkYpAMVw7fkgJtnDBibV3JcIcgrBm-wwcRP9StrvD6Mh5c4lk&usqp=CAU"
                title2="Bhatter College, Dantan"
              />

              <CollegecompairBox
                img1="https://cache.careers360.mobi/media/presets/625X400/article_images/2023/7/7/Delhi-university-wikimedia-commons.jpg"
                title1="College of Engineering"
                img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fJRtuOyqXaY-jKqRZlmkYpAMVw7fkgJtnDBibV3JcIcgrBm-wwcRP9StrvD6Mh5c4lk&usqp=CAU"
                title2="Bhatter College, Dantan"
              />
            </div>
            <div className="md:w-[60%] w-full border">
              <h2 className="text-[19px] px-2 py-4 ">Recent Comparisons</h2>
              <CollegecompairBox
                img1="https://cache.careers360.mobi/media/presets/625X400/article_images/2023/7/7/Delhi-university-wikimedia-commons.jpg"
                title1="College of Engineering"
                img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fJRtuOyqXaY-jKqRZlmkYpAMVw7fkgJtnDBibV3JcIcgrBm-wwcRP9StrvD6Mh5c4lk&usqp=CAU"
                title2="Bhatter College, Dantan"
              />

              <CollegecompairBox
                img1="https://cache.careers360.mobi/media/presets/625X400/article_images/2023/7/7/Delhi-university-wikimedia-commons.jpg"
                title1="College of Engineering"
                img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fJRtuOyqXaY-jKqRZlmkYpAMVw7fkgJtnDBibV3JcIcgrBm-wwcRP9StrvD6Mh5c4lk&usqp=CAU"
                title2="Bhatter College, Dantan"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
