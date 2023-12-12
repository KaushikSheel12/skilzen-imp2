import React from "react";

const ClgNamebox = ({ pathname, clgname }) => {
  return (
    <>
      <div className=" absolute py-2 px-2  w-72 rounded-xl bg-white  top-44 left-10  h-24  ">
        <p className="border-b-2 py-2 px-2 text-[18px]">{clgname}</p>

        <div className="flex justify-between items-center py-1 px-2    ">
          <p className="text-gray-500 text-sm ">{pathname}</p>
          <p className="text-blue-500 cursor-pointer  text-sm"> &gt; &gt; </p>
        </div>
      </div>
    </>
  );
};

export default ClgNamebox;
