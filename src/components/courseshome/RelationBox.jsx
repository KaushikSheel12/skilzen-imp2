import React, { useState } from "react";
import Image from "next/image";

const RelationBox = ({ imgUrl, text ,course}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [colorfull , setColorfull] = useState(false);





  const handleHover = () => {
    setIsHovered(true);
    setColorfull(true)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setColorfull(true)
  };

  const imageStyle = {
    filter: colorfull ? "none" : "grayscale(100%)",
    transition: "filter 0.1s ease-in-out",
  };

  return (
    <div
    
    onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave}
    
    className="md:w-[295px]  w-[85%] h-[270px] mx-auto relative  px-4 mb-10 md:mb-2 mt-10 py-4 border md:border-black">
      <div className="w-full h-16 border md:hidden absolute inset-0 top-[-55px] border-t-2 border-black border-l-2 border-r-2 text-center grid place-content-center font-semibold">
        {text}
      </div>

      <h2 className="text-[19px] font-semibold md:block hidden text-gray-700">
        {text}
      </h2>

      <div className="md:flex w-full  items-center left-0 mx-auto px-2 justify-between absolute bottom-[2px] ">
        <div>
        <p className="text-gray-500 md:block font-semibold hidden text-[17px] mt-[90px]">
         {course}
        </p>
        </div>
      

        <div
  
          className="relative w-[350px]  h-[250px] hidden md:block  md:w-[130px] md:h-[130px]"
        >
          <Image
            src={imgUrl}
            alt="img"
            fill
            className="myimg object-cover"
            style={imageStyle}
          />
        </div>
      </div>
      <Image
        src={imgUrl}
        alt="img"
        fill
        className="object-fill md:hidden block"
      />
      <div className="w-full h-16 border bg-black md:hidden absolute inset-0 top-[205px] flex justify-center text-white font-semibold items-center">
        VIEW PROJECT
      </div>

      {isHovered && (
        <div class="popup w-[120px] h-[120px] cursor-pointer rounded-full border bg-black hover:grid place-content-center text-center absolute inset-0 top-[100px] left-[90px] text-lg text-white font-semibold flex justify-center items-center">
          VIEW  <br /> COURSE
        </div>
      )}
    </div>
  );
};

export default RelationBox;
