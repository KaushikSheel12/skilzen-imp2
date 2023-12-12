import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Profile = ({ icon, title ,href}) => {
  
  return (
    <>
      <Link
        href={href}
        className={`group relative flex items-center gap-3 capitalize rounded-md py-2 px-4 font-medium text-black  cursor-pointer duration-300 ease-in-out  dark:hover:bg-meta-4 
			 "bg-db-secondry dark:bg-meta-4 text-white" : "hover:bg-graydark"
				}`}
      >
        {icon}
        <p className="text-[14px] py-2"> {title}</p>
      </Link>
    </>
  );
};
