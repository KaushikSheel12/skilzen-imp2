import Image from "next/image";
import React from "react";
import PromBox from "./PromBox";

const Ourpromise = () => {
  return (
    <>
      <div className="w-full h-full px-8 md:py-4 py-4  md:flex">
        <div className="md:w-[50%] w-full h-fit md:h-[450px] md:px-8  px-3  md:mt-0 mt-[0px] grid place-content-center ">
          <h1 className="font-medium text-[25px] md:text-[45px] md:px-8 text-[#4e8bda]">
            Our Promise
          </h1>
          <p className="md:px-8 px-0 text-gray-600 text-md leading-6">
            We want to make a difference in education. That means focusing on
            the issues that matter most to you. We hope to be a guiding light in
            your journey, which only happens when we keep you at the center of
            everything we do.
          </p>
        </div>

        <div className="md:w-fit w-full h-full  md:mt-0 mt-[20px]  place-content-center md:grid-cols-3  grid col gap-5  px-4 py-2">
          {[...new Array(3)].map((el, index) => {
            return (
              <div key={index}>
                <PromBox
                  imgUrl="https://res.cloudinary.com/highereducation/images/w_310,h_440,c_fill,f_auto,fl_lossy,q_auto/v1667851180/BestColleges.com/brand-slider-2/brand-slider-2.jpg"
                  imgTxt="We Value Your  Perspective"
                  heading="We keep you Connected to Current Events"
                  para="We’re lifelong students constantly learning alongside you. We make sure to keep you up-to-date on the latest trends and news about school, job markets, accessibility, gender issues, and so much more."
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ourpromise;
