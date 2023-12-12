import Image from "next/image";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/Ri";

const Addcollege = () => {
  const [showAddclg, setShowAddclg] = useState(false);

  const handleClick = () => {
    setShowAddclg(!showAddclg);
  };

  return (
    <div className="md:w-[230px] w-[300px] md:mb-0 mb-4 h-[200px] border px-2 py-2  mx-auto relative bg-gray-100">
      {showAddclg && (
        <RiCloseLine
          onClick={handleClick}
          size={25}
          className="absolute right-2 border rounded-full p-1 border-gray-300 cursor-pointer "
        />
      )}

      <div className="w-full h-full">
        {!showAddclg && (
          <div
            onClick={handleClick}
            className=" cursor-pointer  absolute bottom-6 md:right-14  right-24 "
          >
            <Image
              src="https://cdn-icons-gif.flaticon.com/12035/12035104.gif"
              className="rounded-full ml-6"
              alt="college-logo"
              width={40}
              height={40}
            />
            <span className="py-1 text-gray-400"> Add College</span>
          </div>
        )}

        {showAddclg && (
          <div className="ml-1  absolute bottom-4">
            <select className="w-[200px] border  h-8 mb-2 rounded-md">
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>
            <select className="w-[200px] border h-8 mb-2 rounded-md">
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>

            <select className="w-[200px] border h-8 mb-2  rounded-md">
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addcollege;
