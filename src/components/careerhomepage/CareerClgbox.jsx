import Image from "next/image";
import React from "react";
import ClgNamebox from "./ClgNamebox";

const CareerClgbox = ({ ImgSrc }) => {
  return;
  <>
    <div className=" relative h-72 rounded-lg  ">
      <Image alt="img2" fill className="rounded-lg " src={ImgSrc} />
      <ClgNamebox pathname="Career Path" clgname="Skilzen Tecno.." />
    </div>
  </>;
};

export default CareerClgbox;
