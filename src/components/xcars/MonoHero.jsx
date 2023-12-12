import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const MonoHero = () => {
  const [showimg, setShowimg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowimg(true);
    }, 4000);
  }, []);

  return (
    <>
      <div className="md:w-[80%] w-full mx-auto py-2 px-2 md:h-[700px] h-full  flex flex-col-reverse  overflow-hidden md:flex-row">
        <div className="md:w-[50%]  w-full mt-6 md:mt-0 h-full px-2 py-2  grid place-content-center">
          <div>
            <h1 className="md:text-[87px] text-[36px] font-semibold leading-[1]   md:px-8">
              Reliably access bank accounts
            </h1>
            <p className="md:text-[22px] text-[16px] text-gray-600 md:px-8 py-4 md:py-8 leading-[1.3]">
              Mono helps businesses to access high-quality financial data and
              direct bank payments.
            </p>

            <div className="flex items-center gap-3 md:px-8 text-sm md:text-md ">
              <div className="md:w-[220px] w-[200px]  px-3 md:px-6 py-3 border bg-blue-800 text-white rounded-md flex items-center gap-2 cursor-pointer group/item ">
                <p>Get started for free</p>

                <div className="group/edit group-hover/item:ml-1 duration-300 transition-margin">
                  <AiOutlineArrowRight />
                </div>
              </div>

              <div className="md:w-[160px]  w-[140px] px-2 md:px-4 py-3 border shadow-lg rounded-md flex items-center gap-2 cursor-pointer group/item ">
                <p>Contact Sale</p>

                <div className="group/edit group-hover/item:ml-1  duration-300 transition-margin">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full md:w-[600px] relative h-full md:ml-20   md:px-0   mx-auto">
          <div className="space-x-[-40px] flex justify-center md:px-0 px-2 w-full h-full items-center mx-auto">
            {/* <div></div> */}
            <div
              className={`w-full  h-[250px] md:h-[420px]  py-2  slow-skew  ${
                showimg ? "bg-orange-400" : "bg-teal-400"
              } shadow-lg grid place-content-center z-20 mt-32 rounded-lg`}
            >
              <h1 className=" font-bold text-2xl animate-bounce">Skilzen</h1>
            </div>
            <div className="w-full h-[250px] md:h-[420px]  py-2 slow-skew bg-gray-300 backdrop-blur-sm bg-opacity-50 z-10 shadow-lg grid place-content-center  mt-12 rounded-lg">
              <h1 className=" font-bold md:text-2xl md:ml-28 text-sm  ">
                Skilzen
              </h1>
            </div>
            <div className="slideshow w-full h-[250px] md:h-[420px]  py-2 slow-skew mt-[-15px] shadow-lg rounded-lg border-0  ">
              <div className="imgslide h-full w-full ">
                {showimg && (
                  <Image
                    src="https://mono.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Fbank-icons-collage.4a6f14c023e28fb8fefaaea228220462.png&w=750&q=75"
                    fill
                    alt="img"
                    className=" object-cover duration-300 animate-slide-in invisible md:visible"
                  />
                )}
                {/* for mobile */}
                <Image
                  src="https://mono.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Fbank-icons-collage.4a6f14c023e28fb8fefaaea228220462.png&w=750&q=75"
                  fill
                  alt="img"
                  className=" object-cover duration-300 animate-slide-in md:invisible"
                />
              </div>
            </div>
          </div>

          <div className="md:visible invisible">
            {/* top-right-line */}
            <svg
              className="draw-animation absolute   z-10  right-[100px]  bottom-[373px]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
            >
              <line
                x1="10"
                y1="10"
                x2="60"
                y2="10"
                stroke="black"
                stroke-width="2"
              />
            </svg>

            {/* //bottom-line */}
            <svg
              className="draw-animation absolute   z-10  right-[195px]  bottom-[-130px]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
            >
              <line
                x1="10"
                y1="10"
                x2="100"
                y2="10"
                stroke="black"
                stroke-width="2"
              />
            </svg>

            {/* top-line */}
            <svg
              className="draw-animation absolute   z-10  right-[105px]  bottom-[370px]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
            >
              <line
                x1="10"
                y1="10"
                x2="10"
                y2="200"
                stroke="black"
                stroke-width="2"
              />
            </svg>

            {/* second-buttom-line */}
            <svg
              className="draw-animation absolute z-10  right-[105px] bottom-[60px]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
            >
              <line
                x1="10"
                y1="10"
                x2="10"
                y2="2000"
                stroke="black"
                stroke-width="2"
              />
            </svg>

            {/* seccond-top-line */}
            <svg
              className="draw-animation absolute  z-10 right-[105px] bottom-[250px]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
            >
              <line
                x1="10"
                y1="10"
                x2="10"
                y2="2000"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonoHero;
