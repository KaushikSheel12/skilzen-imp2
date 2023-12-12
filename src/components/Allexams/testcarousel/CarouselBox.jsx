import react from "react";
import { BsCartFill } from "react-icons/Bs";
import { AiFillCheckCircle } from "react-icons/ai";

function CarouselBox() {
  return (
    <div>
      <div className="bg-gray-gradient md:mx-auto mx-0 md:mt-5 mt-0  md:w-80 w-80 md:h-16 rounded-md border border-gray-400  ">
        <h1 className="px-2 py-1 font-semibold md:text-[25px]">JEE(A) 2025</h1>
      </div>

      <div className="w-80 md:mx-auto mx-0 md:h-80  h-64 border border-gray-400 rounded md:rounded-md mt-4 ">
        <div className="w-full md:h-28  rounded-t-md border  bg-gray-gradient p-2">
          <h2 className="md:text-[22px]">Test Series For JEE Main</h2>


          <h3 className="text-gray-700 font-normal md:text[10px] md:mt-10  mx:py-2">
            3 Year Course
          </h3>
        </div>


        <div className="w-full h-20  py-2">
          <div className="flex gap-2 items-center px-2 ">
            <AiFillCheckCircle size={15} color="green" />
            <p className="text-gray-700  md:text[6px]"> Part Tests </p>
          </div>
          <div className="flex gap-2 items-center px-2 ">
            <AiFillCheckCircle size={15} color="green" />
            <p className="text-gray-700  md:text[6px]"> Half Course Tests </p>
          </div>
          <div className="flex gap-2 items-center px-2 ">
            <AiFillCheckCircle size={15} color="green" />
            <p className="text-gray-700  md:text[6px]"> Full Tests </p>
          </div>
        </div>
        <h2 className="py-2 px-2 text-red-600 font-normal">
          Valid Till August 31 , 2025
        </h2>

        <h1 className="px-2 md:text-[22px] font-semibold">₹ 1,186</h1>

        <button className="px-2  md:mt-2 rounded-md md:w-28 md:h-8 grid place-content-center bg-yellow-400 mx-auto hover:bg-black hover:text-[white] ">
          Take Test
        </button>
      </div>
    </div>
  );
}

export default CarouselBox;
