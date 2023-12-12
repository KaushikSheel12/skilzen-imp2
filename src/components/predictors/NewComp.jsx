import Image from "next/image";
import React from "react";

export const NewPredictorBox = () => {
  return (
    <>
      <div className="w-fit h-[120px] mx-auto  border-2 border-[#93cbff] rounded-md px-3 py-1">
        <div className="flex items-center mt-1 justify-between ">
          <Image
            src="https://seeklogo.com/images/I/iit-madras-logo-0B28C23C92-seeklogo.com.png"
            alt="text"
            width={40}
            height={40}
          />
          <h1 className="text-[17px] font-semibold text-gray-700">
            JEE(Main) 2023
          </h1>
        </div>
        <div className="mt-3">
          <p className="text-[14px]  leading-4 text-center text-gray-500">
            {" "}
            predict chances in{" "}
            <span className="text-blue-400">
              Aditya College Of Nursing,
            </span>{" "}
            Hyderabad
          </p>
        </div>

        <div className="flex items-center mt-3 justify-between ">
          <div className="flex items-center gap-4   w-full text-gray-500 text-md">
            <p className="border-r-2  pr-2">12/9/2023</p>
            <p className="border-r-2  pr-2">Exam info</p>
            <p className=" mr-2">practice test</p>
          </div>

          <button className="text-sm py-[2px] w-fit px-3 rounded-md border bg-blue-500 text-white font-semibold ">
            Predict
          </button>
        </div>
      </div>
    </>
  );
};
