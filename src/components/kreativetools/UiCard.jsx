import Image from "next/image";
import React from "react";
import { BsArrowUpRight, BsDisc } from "react-icons/Bs";

export const UiCard = () => {
  return (
    <div className="w-fit h-fit border border-gray-400 px-3 py-2 shadow-lg  relative rounded-lg ">
      <Image
        src="https://uploads-ssl.webflow.com/63dd728b7a35e255d81a6759/64f0bc9589b585a2fa3645e3_g0OlyO_rusDEne46o4EjzQmlBV85g688OUJvs1kf584.webp"
        width={60}
        height={60}
        alt="image"
        className="object-contain rounded-2xl"
      />
      <p className="text-[14px] px-1 font-semibold py-1">Hyperkit</p>
      <p className="text-[14px] px-1 text-gray-600">
        Your perfect starting point for any web app design project. Craft
        beautiful interfaces with ease.
      </p>
      <buttom className="px-2 bg-blue-500 text-white rounded-2xl top-2 right-2 absolute ">
        New
      </buttom>

      <div className="w-full h-fit flex items-center justify-between py-1">
        <div className="w-fit flex items-center gap-2  border border-gray-500 h-fit px-2 cursor-pointer py-[2px] rounded-md  shadow-lg ">
          <BsDisc />
          <p> UI Kits</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
            <p className="border  rounded-full grid place-content-center  h-5 w-5 ">
              !
            </p>
          </div>
          <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
            <p>Up</p>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};
