import React, { useState, useEffect } from "react";
import Image from "next/image";

export const MyImage = () => {
  const [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageNumber((prevNumber) => prevNumber + 1);
      if (imageNumber === 200) {
        clearInterval(interval); // Stop the interval when the number reaches 200
      }
    }, 100); // Change the interval speed as per your requirement (in milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [imageNumber]);

  
  return (
    <>
      <div className="w-screen h-screen mx-auto relative">
        <Image
          src={`https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/${imageNumber
            .toString()
            .padStart(4, "0")}.jpg`}
          alt="apple"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
    </>
  );
};
