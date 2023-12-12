import Image from "next/image";
import React from "react";

const Clg = () => {
  return (
    <>
      <div className="max-w-[980px]   h-auto mx-auto py-2 justify-between  gap-4  mt-4 flex">
        <div className="">
          <div className=" h-[500px] py-2  ">
            <div className=" md:w-full min-w-[380px]  md:mt-0 mt-[-4px]  h-56 relative rounded-r-full  ">
              <Image
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F24e726335bbacb2fd08ed75782b1ecff.cdn.bubble.io%2Ff1643878160011x270108937798531300%2Ffood_two%25201.png?w=512&h=249&auto=compress&dpr=2&fit=max"
                fill
                alt="img1"
              />
            </div>
            <div className="w-full flex py-2 md:mt-16  mt-10  px-4 h-10 gap-6  items-center  ">
              <div className="bg-green-600 w-20 h-1"></div>
              <div className="text-green-600  font-semibold  text-[27px] whitespace-nowrap">
                Across the U.S.
              </div>
            </div>
            <p className="py-4 text-[17px] text-left px-4   text-gray-500">
              Every flavor welcome from your neighborhood sushi spot to the
              burger and fries you crave, choose from over 300,000 local and
              national favorites
            </p>
          </div>
        </div>

        <div className="w-[8%] writing-mode-vertical text-center md:block hidden   py-2 text-[40px]  h-[500px] ">
          <h1 className="text-[green]">M</h1>
          <h1 className="text-[#ff7b00]">Y</h1>
          <h1 className="text-[gray]">C</h1>
          <h1 className="text-[black]">H</h1>
          <h1 className="text-[red]">O</h1>
          <h1 className="text-[#0077ff]">I</h1>
          <h1 className="text-[red]">C</h1>
          <h1 className="text-[green]">E</h1>
        </div>
        {/* <div className="">

        <div className="w-[ h-[500px]  py-2   ">
          <div className="w-full flex py-2   px-2 h-10 gap-6  justify-end  mt-6  items-center  ">
            <div className="bg-green-600 w-20 h-1"></div>
            <div className="text-green-600  font-semibold  text-[27px] whitespace-nowrap ">
              Across the U.S.
            </div>
          </div>
          <p className="py-4 text-[17px] text-right   text-gray-500">
            Every flavor welcome from your neighborhood sushi spot to the burger
            and fries you crave, choose from over 300,000 local and national
            favorites
          </p>

          <div className=" w-full   h-56 relative rounded-l-full mt-16  ">
            <Image
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F24e726335bbacb2fd08ed75782b1ecff.cdn.bubble.io%2Ff1643878173886x562651702202836560%2Ffood_one%25201.png?w=512&h=256&auto=compress&dpr=2&fit=max"
              fill
              alt="img1"
            />
          </div>
        </div>
</div> */}

        <div className=" h-[500px] py-2   hidden md:block  ">

        <div className="w-full flex py-8 mt-   px-2 h-10 gap-6 justify-end  items-center   ">
            <div className="bg-green-600 w-20 h-1"></div>
            <div className="text-green-600  font-semibold   text-[27px] whitespace-nowrap">
              Across the U.S.
            </div>
          </div>
          <p className="py-4 text-[17px] text-right   text-gray-500">
            Every flavor welcome from your neighborhood sushi spot to the burger
            and fries you crave, choose from over 300,000 local and national
            favorites
          </p>

          <div className=" md:w-full min-w-[380px] mt-16  h-56 relative rounded-l-full  ">
            <Image
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F24e726335bbacb2fd08ed75782b1ecff.cdn.bubble.io%2Ff1643878173886x562651702202836560%2Ffood_one%25201.png?w=512&h=256&auto=compress&dpr=2&fit=max"
              fill
              alt="img1"
            />
          </div>
         
        </div>
      </div>

      {/* mobile-view */}
      <div className=" h-[500px] py-2  md:mt-0 mt-[-80px]    md:hidden block ">
        <div className=" md:w-full min-w-[370px]   h-56 relative rounded-l-full  ">
          <Image
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F24e726335bbacb2fd08ed75782b1ecff.cdn.bubble.io%2Ff1643878173886x562651702202836560%2Ffood_one%25201.png?w=512&h=256&auto=compress&dpr=2&fit=max"
            fill
            alt="img1"
          />
        </div>
        <div className="w-full flex py-2 mt-10 px-4  h-10  justify-end   items-center  ">
          <div className="bg-green-600 w-20 h-1"></div>
          <div className="text-green-600  font-semibold    text-[27px] whitespace-nowrap">
            Across the U.S.
          </div>
        </div>

        <p className="py-4 text-[17px] text-right px-4   text-gray-500">
          Every flavor welcome from your neighborhood sushi spot to the burger
          and fries you crave, choose from over 300,000 local and national
          favorites
        </p>
      </div>
      {/* mobile-view */}
    </>
  );
};

export default Clg;
