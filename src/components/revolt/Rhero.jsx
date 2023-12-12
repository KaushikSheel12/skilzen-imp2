import React, { useState, useEffect } from "react";
import Image from "next/image";

const Rhero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleFactor = 1 + scrollY * 0.0002;
  const opacity = 1 - scrollY * 0.001;

  
  return (
    <>
      <div className="w-full h-[750px] hidden md:flex overflow-hidden">
        <div
          className="w-full h-full transform scale-100 transition-transform duration-300 ease-in-out"
          style={{
            transform: `scale(${scaleFactor})`,
            transformOrigin: "top",
            opacity: opacity,
          }}
        >
          <Image
            loading="lazy"
            src="https://www.revolut.com/_next/image-asset/w:3840/q:90/https%3A%2F%2Fassets.revolut.com%2Fwebsite%2Fassets%2Fretail%2Fhome-V4%2FHero.jpg%3Fauthuser%3D0"
            alt="heroimg"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full h-[300px] md:hidden flex relative">
        <Image
          src="https://www.revolut.com/_next/image-asset/w:1080/q:90/https%3A%2F%2Fassets.revolut.com%2Fwebsite%2Fassets%2Fretail%2Fhome-V4%2FHero_Mobile.png%3Fauthuser%3D0"
          loading="lazy"
          fill
          className="object-contain"
        />
      </div>

      <div className="md:w-[700px] w-full mt-[-15px] md:mt-[-540px] mx-auto text-center h-fit">
        <h1 className="md:text-[96px] text-[34px] font-semibold leading-[1.1] py-2 md:py-4 ">
          One app, all things money
        </h1>
        <p className="md:text-[20px] text-[16px] px-10 py-2 md:py-4">
          From easy money management, to travel perks and investments. Open your
          account in a flash
        </p>
        <div className="bg-black rounded-lg  mt-2 text-[16px] mx-auto text-white cursor-pointer px-4 py-1 w-fit h-fit">
          {" "}
          Get a free account{" "}
        </div>
      </div>
      <div className="h-[700px] w-full md:w-[400px] mx-auto mt-40"></div>
    </>
  );
};

export default Rhero;
