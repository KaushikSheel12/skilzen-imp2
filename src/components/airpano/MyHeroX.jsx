import React from "react";
import { AirCarousel } from "./Crowel";
import CrouselImgBox from "../dream11/CrouselImgBox";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

export const MyHeroX = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>

      <div className="w-full md:h-[450px]  h-[200px] md:px-0 mt-[-25px]  relative ">
        
        <div className=" md:w-[600px] w-[80%]   md:h-[400px] h-[100px] absolute  z-10 grid place-content-center top-32  px-4  md:translate-x-[-50%] md:translate-y-[-50%] md:top-1/2  md:left-1/2 left-12">
          <div className="flex w-full md:h-[45px] h-[35px] items-center  absolute rounded-lg  md:bottom-2  bottom-0  ">
            <input
              type="text"
              className=" w-full   md:h-[40px]   h-[30px] border  px-2 rounded-l-lg "
              placeholder="search"
            />
            <div className=" w-[85px] md:h-[40px]   h-[30px]  bg-green-500 rounded-r-lg ">
              <AiOutlineSearch
                color="white"
                size={25}
                className="mx-auto mt-1 md:mt-2"
              />
            </div>
          </div>

          <div className="w-full  text-white  text-center h-full ">
            <h1 className="font-semibold text-[20px] md:text-[37px]">
              Find the right college for you
            </h1>
            <p className="md:text-[19px] text-[12px]">
              Distance should not limit your college options
            </p>
            <div className="md:w-[410px] w-full px-2 py-2 h-[53px]  mx-auto mt-4   items-center  flex justify-between "></div>
          </div>
        </div>

        <div className=" mx-auto  h-fit w-full mt-4   py-2">
          <AirCarousel settings={settings}>
            <div className="md:w-[500px] w-full md:h-[450px] h-[220px] relative ">
              <video
                src="https://player.vimeo.com/progressive_redirect/playback/809599230/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=13543d14ef6f2845ea5d464ee088db467ec542bde9497abedcd9763b07c8c869"
                className="w-full h-full object-fill "
                autoPlay
                loop
              />
            </div>

            <div className="md:w-[500px] w-full md:h-[450px] h-[220px]  relative ">
              <Image
                alt=""
                fill
                className="object-cover"
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/02/Photoshop.panorama.stitch.mishra.chicago.skyline-1024x290.jpg"
              />
            </div>

            <div className="md:w-[500px] w-full md:h-[450px] h-[220px]  relative ">
              <Image
                alt=""
                fill
                className="object-cover"
                src="https://images.unsplash.com/photo-1505252772853-08ed4d526ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80"
              />
            </div>
          </AirCarousel>
        </div>
      </div>
    </>
  );
};
