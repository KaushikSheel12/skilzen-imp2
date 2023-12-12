import Image from "next/image";
import React from "react";

const CrouselImgBox = ({ ImgUrl }) => {
  return (
    <>
      <div className="md:w-[50px] w-[80%] md:h-[70px] h-[100px] mx-auto relative  border rounded-2xl">
        <Image
          src={ImgUrl}
          fill
          className="object-contain"
          loading="lazy"
          alt="Dream11 Winners"
        />
      </div>
    </>
  );
};

export default CrouselImgBox;
