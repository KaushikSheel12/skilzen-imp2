import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <>
      <div className="w-screen md:h-screen h-full px-4 py-4 bg-[#101048] ">
        <div className="md:flex gap-2   h-full">
          <div className=" w-full  md:w-[35%] md:h-full  grid grid-cols-2  ">
            {[...new Array(6)].map((el, index) => (
              <div key={index}>
                <div className=" md:h-full w-full h-[200px] mb-8 md:mb-0 relative">
                  <Image
                    src="https://images.doclify.net/bayswater-web/d/6b885034-a55a-4246-aa14-20e307986c3b.png?enlarge=0&format=webp&w=500"
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>


          <div className=" w-full  md:w-[60%]  h-full">
            <div className=" w-full md:w-[700px] mx-auto md:mt-[220px] h-fit ">
              <h1 className="font-semibold text-[40px] md:text-[70px] py-2 leading-10 md:leading-[70px] text-white ">
                Collegementor's <br /> Journey
              </h1>
              <p className=" py-2 md:text-[17px] text-[14px]  text-white">
                Collegementor started over 70 years ago as a group of
                bright-eyed adventurers, passionate about the value of travel
                and with a clear mission to educate and inspire the next
                generation through life-changing educational experiences. More
                than seven decades later, we’re known for our global network of
                leading educational centres, dedicated to inspiring and
                enriching young people’s lives, whatever their background.
              </p>
              <div className="md:w-fit h-fit py-3 px-4  w-full grid place-content-center mb-2  mt-6 rounded-md bg-blue-700 cursor-pointer text-white">
                Learn more about our story
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
