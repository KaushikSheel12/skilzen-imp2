import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/Ti";

const HomeCart = ({ title, paragraph1, paragraph2 }) => {
  return (
    <>
      <div className="md:w-[400px]  md:mb-0 mb-2 w-full px-2 md:px-4 py-2 h-fit md:h-[200px] text-black shadow-lg bg-white rounded-lg   ">
        <div className="flex px-1 text-left  w-full items-center gap-5">
          <div className="relative md:w-[90px] h-[60px] w-[60px] md:h-[90px]">
            <Image
              src="https://cache.careers360.mobi/images/frontend/desktop/predictor-img-01.png"
              alt="png"
              className="object-contain"
              fill
            />
          </div>

          <h4 className="md:text-[18px] text-[15px]  md:leading-6 ">{title}</h4>
        </div>
        <div className="flex py-1 text-left items-center gap-4">
          <TiTick color="green" size={40} />
          <p className="md:text-sm  text-[13px]  text-gray-600 leading-5">
            {paragraph1}
          </p>
        </div>
        <div className="flex text-left items-center gap-4">
          <TiTick color="green" size={25} />
          <p className="md:text-sm  text-[13px] text-gray-600 leading-5">
            {paragraph2}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeCart;
