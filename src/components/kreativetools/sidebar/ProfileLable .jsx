import Link from "next/link";
import React from "react";

export const ProfileLable = ({ href, links, title, icon }) => {
  const handleSelect = (el) => {};

  return (
    <div className="mt-[-4px]">
      <Link
        href={href}
        className=" relative flex items-center gap-3 capitalize rounded-md py-4 font-medium text-black  cursor-pointer duration-300 ease-in-out  "
      >
        {icon}
        <p className="text-[14px] "> {title}</p>
      </Link>
      <div className="ml-4">
        {links.map((el, index) => (
          <Link href={`${href}#${el}`}>
            <p
              onClick={() => handleSelect(el)}
              className="text-[13px] text-gray-500 py-2 rounded-lg w-full md:w-[170px] cursor-pointer duration-300 ease-in-out   hover:bg-[#dbd9d9] px-1   mb-0 font-semibold"
              key={index}
            >
              {el}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
