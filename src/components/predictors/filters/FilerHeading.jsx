import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const FilerHeading = ({ Heading, InputPlaceholder }) => {
  return (
    <>
      <div className="w-full px-2 text-sm bg-gray-300 text-black border mt-1 ">
        {Heading}
      </div>
      <div className="flex items-center w-full h-7 gap-2 px-2 mt-1 border rounded-md">
        <AiOutlineSearch />
        <input
          type="text"
          className="text-sm w-full h-full text-gray-300"
          placeholder={InputPlaceholder}
        />
      </div>
    </>
  );
};
