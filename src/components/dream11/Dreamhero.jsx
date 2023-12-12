import React from "react";
import { DreamCarousel, TTCarousel } from "./Dreamcrow";
import Image from "next/image";
import CrouselImgBox from "./CrouselImgBox";
import GameCard from "./GameCard";

const Dreamhero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="md:w-[70%] w-full mx-auto h-[500px] px-2 py-2">
        <h2 className="text-center text-[20px] font-semibold">
          Official <span className="text-red-500">Partner </span>{" "}
        </h2>

        <div className=" mx-auto  md:w-[50%] h-fit w-[340px] mt-4  px-4 py-2">
          <DreamCarousel settings={settings}>
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-icc-3.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-supersmashkfc-4.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-newzealandcricket-5.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-wbbl-6.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-herocplt20-7.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-hundred-8.webp" />
          </DreamCarousel>
        </div>

        <h2 className="text-center md:mt-10 mt-6 text-[20px] font-semibold">
          It's easy to start playing{" "}
          <span className="text-red-500">on Dream11</span>
        </h2>

        <p className="bg-gradient-to-r w-fit mx-auto px-8 md:mt-4 mt-4 from-white via-blue-200 to-white  text-blue-500 text-[14px] font-semibold text-center ">
          Play <span className="text-blue-700">Fantasy Cricket </span> on
          Dream11 and win big!
        </p>

        <p className="text-sm md:px-28 px-2 text-center mt-4 md:mt-6 text-gray-700">
          Enter into the thrilling world of Fantasy sports, a strategy-based
          online sports game wherein you can create a virtual team of real
          players playing in real life matches. Create your team to win points
          based on all the players' performance in a live game.
        </p>
        <div className="w-full py-2 px-2 h-full  mt-5 md:mt-20  grid md:grid-cols-3 grid-cols-1">
          <GameCard
            head="Select A Match"
            srcUrl="https://cdnflags.dream11.com/d11-static-pages/images/winning_step_1-22.webp"
            ptag="Choose an upcoming match that you want to play"
          />

          <GameCard
            head="Create Team"
            srcUrl="https://cdnflags.dream11.com/d11-static-pages/images/winning_step_new2.webp"
            ptag="Choose an upcoming match that you want to play"
          />

          <GameCard
            head="Join Contests"
            srcUrl="https://cdnflags.dream11.com/d11-static-pages/images/winning_step_new4.webp"
            ptag="Choose an upcoming match that you want to play"
          />
        </div>
      </div>
    </>
  );
};

export default Dreamhero;
