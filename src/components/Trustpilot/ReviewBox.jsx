import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewBox = ({ Rating, comment }) => {
  return (
    <>
      <div className="md:w-[350px] w-full mt-4 shadow-lg px-4 py-3 h-fit  mx-auto  rounded-xl">
        <div className="flex items-center gap-5 w-fit h-fit">
          <div className="w-[50px] h-[50px] rounded-full relative ">
            <Image
          
   src="https://yt3.ggpht.com/IjJBZco3tUaneTduhIHRoBkkQbsKYsQ1ieFcKNqmKnBP4yyYXMrehfiVTSZbkWufLeGLFu17N10=s88-c-k-c0x00ffffff-no-rj"
              fill
              alt="propic"
              className="object-contain rounded-full"
            />
          </div>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((el, index) => {
              return (
                <AiFillStar
                  size={25}
                  className={` p-[2px] bg-gray-400 text-white ${
                    index + 1 <= Rating
                      ? Rating == 1
                        ? "bg-red-600"
                        : Rating == 2
                        ? "bg-red-400"
                        : Rating == 3
                        ? "bg-green-400"
                        : Rating == 4
                        ? "bg-blue-400"
                        : "bg-green-500"
                      : null
                  }`}
                />
              );
            })}
          </div>
        </div>
        <p className="text-[14px] py-2 px-2">
          Hamid PAK <span className="text-gray-600 text-sm">reviewed</span> VFS
          Global
        </p>

        <p className="text-[14px] text-gray-500 px-2">{comment}</p>
      </div>
    </>
  );
};

export default ReviewBox;
