import Image from "next/image";
import React from "react";
import { GiRingmaster } from "react-icons/gi";
import CollegeNamePrice from "./CollegeNamePrice";

const CollegePrice = () => {
  return (
    <>
      <div className=" md:py-2 px-0 w-full h-[500px] mt-4 flex py-4  gap-2">
        <div className=" md:w-[40%] w-full">
          <div className="w-full flex py-0 gap-4  px-2  h-10  justify-center   items-center  ">
            <div className="bg-green-600 w-20 md:block hidden  h-1"></div>
            <div className="text-green-600  font-semibold   text-[27px] whitespace-nowrap">
              Our Delivery Price List
            </div>
          </div>

          <CollegeNamePrice
            clgName="Hyderabad College"
            detail="lLorem ipsum dolor sit ametd"
          />

          <CollegeNamePrice
            clgName="Dummy College Name"
            detail="lLorem ipsum dolor sit ametd"
          />
          <CollegeNamePrice
            clgName="Radius of the city"
            detail="lLorem ipsum dolor sit ametd"
          />
          <CollegeNamePrice
            clgName="Suburb of the city"
            detail="lLorem ipsum dolor sit ametd"
          />

          <CollegeNamePrice
            clgName="Skillzen technology"
            detail="Lorem ipsum dolor sit amet"
          />

          <button className="w-fit py-2  md:mt-6 mt-4  hover:bg-black  px-6  md:px-8 bg-[#1aaed7f4] text-white rounded-md grid mx-auto ">
            More details in our app
          </button>
        </div>

        <div className=" relative rounded-lg md:block hidden   w-[60%] h-full">
          <Image
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F24e726335bbacb2fd08ed75782b1ecff.cdn.bubble.io%2Ff1643893912174x598350536149054000%2F4cd9de9b-d578-4dd8-9996-fbd20283be43%25201.png?w=1024&h=632&auto=compress&dpr=2&fit=max"
            fill
            alt="clgimgprice"
            className="object-fill rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default CollegePrice;
