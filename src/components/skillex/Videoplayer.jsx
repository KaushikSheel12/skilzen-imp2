import Image from "next/image";
import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiBowTieRibbon, GiOvermind } from "react-icons/gi";
import ReactPlayer from "react-player";

const Videoplayer = () => {
  return (
    <>
      <div className="w-full h-full  ">
        <div className="h-full  mx-auto px-4 md:px-8 py-2 md:w-[80%] w-full ">
          <div className="md:flex block mt-7 w-full h-40  justify-between">
            <div className="md:ml-[92px] ">
              <h1 className="font-medium  text-[25px] md:text-[47px] leading-8 md:leading-[55px]">
                Get the skills you <br />
                need for a job that <br />
                is in demand.
              </h1>

            </div>

            <div className=" md:w-[550px] w-full md:mr-24 md:mt-0 mt-4 h-full md:px-4">
              <p className="md:text-[22px] text-[17px] ">
                The modern labor market dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </p>
              

              <div className=" md:h-[100px] h-24   items-center px-6  justify-between md:w-full hidden md:flex z-10 bg-[#71d971] mt-5">
                <div className=" border-0 border-r-2  border-r-black pr-[1.75rem]  h-[47px]  w-fit justify-between items-center gap-5 px-3  flex">
                  <h1 className="text-[52px]">10</h1>
                  <p className="leading-0">
                    YEARS <br />
                    EXPERIENCES
                  </p>
                </div>

                <div className="   h-[47px]  w-fit justify-between items-center gap-5 px-6  flex">
                  <h1 className="text-[52px]">250</h1>
                  <p className="leading-0">
                    TYPES OF <br />
                    COURSES
                  </p>
                </div>
              </div>
            </div>
          </div>







          <div className="md:flex    justify-between items-center">
            <div className="flex mt-14  items-center">
              <div className="w-[60px] h-[270px] md:h-[350px] items-center md:ml-20 md:mt-10 mt-4 flex flex-col justify-around">
                <GiOvermind
                  size={50}
                  className="border rounded-full p-[11px]"
                />
                <div className="h-14  border-dashed  border-[1px] border-black"></div>

                <GiBowTieRibbon
                  size={50}
                  className="border rounded-full p-[11px]"
                />

                <div className="h-14  border-dashed  border-[1px] border-black"></div>
                <AiOutlineThunderbolt
                  size={50}
                  className="border rounded-full p-[8px]"
                />
              </div>

              <div className="  w-fit  h-[270px] md:h-[350px]   flex flex-col justify-between px-2   ml-[35px] mt-6 md:mt-10">
                <div>
                  <h3 className="font-semibold text-[16px]  md:text-lg ">
                    Leadership
                  </h3>
                  <p className="text-[14px] md:text-lg  py-1">
                    Fully committed to the <br /> success company
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px]  md:text-lg ">
                    Leadership
                  </h3>
                  <p className="text-[14px] md:text-lg  py-1">
                    Fully committed to the <br /> success company
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px]  md:text-lg ">
                    Leadership
                  </h3>
                  <p className="text-[14px] md:text-lg  py-1">
                    Fully committed to the <br /> success company
                  </p>
                </div>
                
              </div>
            </div>

            <div className=" md:w-[900px] w-full mt-4 h-[200px] relative -z-10   md:h-[430px]">
              {/* <ReactPlayer
                url="https://player.vimeo.com/external/464966168.sd.mp4?s=6c8f14ad81e4b2116c4909ad8ae869f8ead71007&profile_id=164&oauth2_token_id=57447761" // Replace with your video URL
                controls={false}
                width="full"
                height="full"
                playing
              /> */}


              <Image className="object-cover" alt="gif" fill src="https://images.squarespace-cdn.com/content/v1/5edc7907ae18c170a5f7cb2d/85c28577-2442-4e6f-831a-fe69ddf9cbf8/Taylor-Confetti-GIF.gif" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoplayer;
