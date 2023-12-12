import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Osmos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgData = [
    {
      nameA: "S",
      nameB: "D",
      src: "https://img.freepik.com/free-photo/waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224.jpg?w=2000&t=st=1698144743~exp=1698145343~hmac=352113a05bd37be40ad319227cb2e62700d13fe55b17ae201e309d86b486522c",
    },
    {
      nameA: "A",
      nameB: "B",
      src: "https://www.shutterstock.com/image-photo/teenager-russian-student-girl-isolated-260nw-1725552007.jpg",
    },
    {
      nameA: "C",
      nameB: "E",
      src: "https://img.freepik.com/free-photo/cheerful-attractive-young-woman-with-backpack-notebooks-standing-smiling-park_231208-8088.jpg?w=2000&t=st=1698145050~exp=1698145650~hmac=fadfe85a01d39bc1e2084984d1a3fda8ef3d8ba229d5990684c379ec1d7d7463",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-[#0AB878] grid place-content-center  relative">
        <div
          style={{ transform: `translateY(${scrollPosition / 2}px)` }}
          className="overflow-hidden w-full h-full absolute inset-0"
        >
          <Image
            src="https://www.revolut.com/_next/image-asset/w:3840/q:90/https%3A%2F%2Fassets.revolut.com%2Fwebsite%2Fassets%2Fretail%2Fhome-V4%2FHero.jpg%3Fauthuser%3D0?width=1080&quality=75&format=webp"
            alt="img"
            className="w-full h-full object-cover"
            loading="lazy"
            fill
          />
        </div>

        <div className="w-[700px] h-[700px]  text-white text-center px-4  py-4 leading-[55px]">
          <div className="imgBox w-[150px] rounded-2xl h-[150px] bg-red-400 mx-auto relative">
            <h2 className="absolute top-1 left-2 text-[46px] font-semibold z-10">
              {imgData[currentImageIndex].nameA}
            </h2>
            <Image
              fill
              src={imgData[currentImageIndex].src}
              alt={`img ${currentImageIndex}`}
              className="w-full h-full rounded-2xl object-cover"
            />
            <h2 className="absolute bottom-1  right-2 text-[46px] font-semibold z-10 ">
              {imgData[currentImageIndex].nameB}
            </h2>
          </div>
          <h1 className="text-[58px] py-4 ">
            We believe that the right people can change your life
          </h1>
          <p className="text-[24px] leading-8 py-3 ">
            Let us connect you with them as soon <br /> as next week
          </p>
          <button className="mx-auto px-8 mt-4 bg-black text-yellow-300 text-[18px] cursor-pointer  rounded-2xl ">
            Apply to join
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-teal-400"></div>
      <div className="w-full h-screen bg-blue-400"></div>
      <div className="w-full h-screen bg-gray-400"></div>
    </>
  );
};
