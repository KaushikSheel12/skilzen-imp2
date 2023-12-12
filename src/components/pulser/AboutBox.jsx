import React from "react";

const AboutBox = ({ text, paragraph, icon }) => {
  return (
    <>
      <div id="about" className=" w-80 h-full py-4 px-2 text-center">
        <div>{icon}</div>
        <h2 className=" font-bold text-md text-[#205120] py-2">{text}</h2>
        <p className="text-gray-400 font-semibold  leading-5">{paragraph}</p>
        <p className="font-semibold text-[13px]   cursor-pointer hover:text-green-600 border-b-2 w-fit mx-auto border-green-300  mt-4">
          LEARN MORE
        </p>
      </div>
    </>
  );
};

export default AboutBox;
